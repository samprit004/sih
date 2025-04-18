import PocketBase from 'pocketbase';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

const pb = new PocketBase('http://127.0.0.1:8090');

// Function to send OTP via email
async function sendOTP(email: string, otp: number) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // Use STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"CMPDI System" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Your OTP for CMPDI Verification',
    text: `Subject: Registration Approved and Login Credentials\n\nDear Tonima,\n\nWe are pleased to inform you that your registration has been successfully approved by the admin. You are now authorized to proceed with your project submission process. Below are your login credentials to access the system:\nUsername: PI_Tonima001\nOTP:${otp}\n\nThe OTP is valid for 30 days from the date of this email. After the OTP expires, you will be required to register again.\nLog in to your account and upload all the essential documents required for the project proposal as soon as possible.
Ensure you complete all necessary steps promptly to avoid any delays. If you have any questions or need assistance, feel free to contact us at marg_sathi@gmail.com\n\nThank you for your cooperation, and we look forward to your successful project submission!\n\nBest regards,\nAkash Mehta\nAdmin Team\nMARG (Mine Allrounder Research Guide)`,
    html: `<p>Hello,</p><p>Your OTP for verification is <b>${otp}</b>.</p><p>This OTP is valid for 30 days.</p>`,
  };
  console.log(mailOptions);

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP sent successfully to ${email}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send OTP email.');
  }
}

// Function to generate a numeric OTP
function generateNumericOTP(length: number = 6): number {
  const min = Math.pow(10, length - 1); // Minimum value with the given length
  const max = Math.pow(10, length) - 1; // Maximum value with the given length
  return Math.floor(Math.random() * (max - min + 1)) + min; // Random number in the range
}

/**
 * POST /verify_user
 * Verifies a user based on `id`, `PI_id`, `aadhar`, and `email`.
 */
export async function POST(req: Request) {
  try {
    const { id, PI_id, aadhar, email } = await req.json();

    // Check if a record exists in gov_list
    const records = await pb.collection('gov_list').getFullList({
        filter: `(PI_id = '${PI_id}' && aadhar = '${aadhar}')`
      });
      
      

    if (records.length === 0) {
      return new Response(JSON.stringify({ success: false }), { status: 200 });
    }

    // Record exists: Generate OTP and update record
    const otp = generateNumericOTP(6);
    const OTP_expDate = new Date();
    OTP_expDate.setDate(OTP_expDate.getDate() + 30); // Valid for 30 days

    const record = records[0]; // Assuming only one record matches
    await pb.collection('gov_list').update(record.id, {
      OTP: otp,
      OTP_exp: OTP_expDate.toISOString(),
    });
    pb.collection('CMPDI_users').update(id, {OTP: otp});

    // Send OTP to the provided email
    try {
      await sendOTP(email, otp);
    } catch (error) {
      console.error("Error sending OTP email:", error);
      return new Response(JSON.stringify({
        success: false,
        message: "Failed to send OTP email",
        error: error.message,
      }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error in verify_user endpoint:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "An error occurred",
      error: error.message,
    }), { status: 500 });
  }
}
