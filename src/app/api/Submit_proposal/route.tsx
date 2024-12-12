import { NextApiRequest, NextApiResponse } from "next/types";
import fs from "fs";
import PocketBase from 'pocketbase';
import path from "path";
import jsPDF from "jspdf";
import { PdfReader } from "pdfreader";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API client with your API key
const apiKey = process.env.GEMINI_API_KEY; // Ensure you set this in your environment variables
// Check if the API key is defined
if (!apiKey) {
    throw new Error('The "GEMINI_API_KEY" environment variable is required');
}
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function sendPrompt(prompt: string) {
    console.log(apiKey)
    try{
        console.log(prompt)
        const result = await model.generateContent(prompt)
    
        return result.response.text()
    }catch(e){
        console.log(`error: ${e}`)
        return ''
    }
    
  }
const pb = new PocketBase('http://127.0.0.1:8090');
/**
 * Reads a text file from the given path and returns its content.
 * @param filePath - The path to the text file.
 * @returns A promise that resolves to the content of the text file.
 */
async function readTextFile(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const absolutePath = path.resolve(filePath);

        fs.readFile(absolutePath, 'utf8', (err, data) => {
            if (err) {
                reject(`Error reading file: ${err.message}`);
            } else {
                resolve(data);
            }
        });
    });
}
async function processPDF(fileData: string, agency: string): Promise<string> {
    console.log(fileData);
    console.log('->')
    let text: string= '';
    if(agency === 'S&T'){
        text= await readTextFile('s&t.txt')
    }else{
        text= await readTextFile('r&d.txt')
    }
    return sendPrompt(`read the guidelines provided by admin: ${text}\n------End of Admin Guildlines------\nCompare this to the proposal given by the user:${fileData}.\n------End of User Proposal------\nAnd score the guideline provided by the user with reference to admin's guideline and score it out of 100 and explain why you gave this marks after comparison in short.`)
}
function generateNumeric(length: number = 6): number {
    const min = Math.pow(10, length - 1); // Minimum value with the given length
    const max = Math.pow(10, length) - 1; // Maximum value with the given length
    return Math.floor(Math.random() * (max - min + 1)) + min; // Random number in the range
  }
/**
 * 
 * @param req - id, Auth_token
 * @returns message, 
 */
export async function POST(req: Response) {
    const { id, fileName, fileData } = await req.json();
    let PI_id: string;
    console.log(id, fileName)
    const doc = new jsPDF();
    doc.text(fileData, 10, 10);
    try{
        const user = await pb.collection("PI_records").getFullList({
            filter: `CMPDI_id='${id}'`,
        })
        console.log(user)
        PI_id= user[0].id;
    }catch(e){
        return new Response(JSON.stringify({ 'message': e }), { status: 405 });
    }

    // Step 2: Write the file temporarily to disk
    const tempFilePath = path.join(process.cwd(), "temp", fileName);
    const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
    fs.writeFileSync(tempFilePath, pdfBuffer);

    // Step 3: Upload the file to PocketBase
    const fileStream = fs.readFile(tempFilePath, (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log(`File content (${fileName}):`, data);
    });
    const AIres = await processPDF(fileData, "S&T");
    const scr_prompt = `Given: \n${AIres}\nGive respose as example: 85/100 (Accepted by Agent)\nAccept only when Score > 75%`
    const Aiscr = sendPrompt(scr_prompt)
    const record = await pb.collection("PI_proposals").create({
        PI_id: PI_id,
        Project_id: generateNumeric(4),
        proposal_pdf: fileStream, // File stream
        name: fileName, // additional metadata
        agency: "S&T",
        response: AIres,
        meetingTimeSlot: Date.now(),
        Agent_Score: Aiscr,
    });
    

    return new Response(JSON.stringify({ 'message': "File uploaded successfully!" }));
}