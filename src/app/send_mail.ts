import PocketBase from 'pocketbase';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

// Function to send OTP via email
async function sendOTP(name: string, username: string,email: string, otp: number) {
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
    text: `Subject: Registration Approved and Login Credentials

Dear ${name},

We are pleased to inform you that your registration has been successfully approved by the admin. You are now authorized to proceed with your project submission process. Below are your login credentials to access the system:
Username: ${username}
OTP:${otp}

The OTP is valid for 30 days from the date of this email. After the OTP expires, you will be required to register again.
Log in to your account and upload all the essential documents required for the project proposal as soon as possible.
Ensure you complete all necessary steps promptly to avoid any delays. If you have any questions or need assistance, feel free to contact us at marg_sathi@gmail.com 

Thank you for your cooperation, and we look forward to your successful project submission!

Best regards,
Akash Mehta
Admin Team
MARG (Mine Allrounder Research Guide)`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Approved</title>
</head>
<body>
    <h2>Subject: Registration Approved and Login Credentials</h2>
    <p>Dear <strong>${name}</strong>,</p>
    <p>
        We are pleased to inform you that your registration has been successfully approved by the admin. 
        You are now authorized to proceed with your project submission process.
    </p>
    <p>Below are your login credentials to access the system:</p>
    <ul>
        <li><strong>Username:</strong> ${username}</li>
        <li><strong>OTP:</strong> ${otp}</li>
    </ul>
    <p>
        The OTP is valid for 30 days from the date of this email. After the OTP expires, you will be required to register again.
    </p>
    <p>
        Log in to your account and upload all the essential documents required for the project proposal as soon as possible.
        Ensure you complete all necessary steps promptly to avoid any delays. 
    </p>
    <p>
        If you have any questions or need assistance, feel free to contact us at 
        <a href="mailto:marg_sathi@gmail.com">marg_sathi@gmail.com</a>.
    </p>
    <p>
        Thank you for your cooperation, and we look forward to your successful project submission!
    </p>
    <p>
        Best regards,<br>
        <strong>Akash Mehta</strong><br>
        Admin Team<br>
        <strong>MARG (Mine Allrounder Research Guide)</strong>
    </p>
</body>
</html>
`,
  };

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
const pb = new PocketBase('http://127.0.0.1:8090');
/**
 * POST /verify_user
 * Verifies a user based on `id`, `PI_id`, `aadhar`, and `email`.
 */
export async function verify_user(id: string, PI_id: string, aadhar: number, email: string) {
  // Check if a record exists in gov_list
  const records = await pb.collection('gov_list').getFullList({
    filter: `(PI_id = '${PI_id}' && aadhar = '${aadhar}')`
  });
  
  if (records.length === 0) {
    return;
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
  const PI = await pb.collection('PI_records').getOne(id,{
    fields: "username,expand.CMPDI_id.user_email",
  });
  // Send OTP to the provided email
  try {
    await sendOTP(record.name ,PI.username ,email, otp);
  } catch (error) {
    console.error("Error sending OTP email:", error);
    return;
  }
}