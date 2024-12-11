'use server'
import pdfParse from 'pdf-parse';

export async function processPDF(fileData: string): Promise<void> {
    console.log(fileData);
}

async function extractTextFromPDFBuffer(pdfBuffer: Buffer): Promise<string> {
    try {
        const data = await pdfParse(pdfBuffer); // Use pdf-parse to extract text
        return data.text;
    } catch (error) {
        throw new Error(`Error extracting text from PDF: ${error.message}`);
    }
}