import PocketBase from 'pocketbase';
import pdfParse from 'pdf-parse';

const pb = new PocketBase('http://127.0.0.1:8090');

async function processPDF(recordId: string): Promise<void> {
    try {
        // Retrieve the PDF file buffer from PocketBase
        const record = await pb.collection('PI_proposals').getOne(recordId);
        console.log(record)
        // const fileUrl = pb.getFileUrl(record, record.file);
        // const response = await fetch(fileUrl);
        // const pdfBuffer = Buffer.from(await response.arrayBuffer());

        // // Extract text from the PDF buffer
        // const extractedText = await extractTextFromPDFBuffer(pdfBuffer);

        // console.log('Extracted Text:', extractedText);
    } catch (error) {
        console.error('Error processing PDF:', error.message);
    }
}

async function extractTextFromPDFBuffer(pdfBuffer: Buffer): Promise<string> {
    try {
        const data = await pdfParse(pdfBuffer); // Use pdf-parse to extract text
        return data.text;
    } catch (error) {
        throw new Error(`Error extracting text from PDF: ${error.message}`);
    }
}