import PocketBase from 'pocketbase';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

async function cancelmail(name: string, email: string) {
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
    text: `Subject: Proposal Registration Declined  

Dear Tonima,  

Thank you for your submission. After a thorough review by the admin team, we regret to inform you that your registration has not been approved at this time.  

The decision was based on the following reasons:  
1. Incomplete Documentation: Essential documents such as Aadhaar card or project concept note were missing or only partially submitted
2. Eligibility Non-Compliance: The project proposal did not meet the eligibility criteria outlined in the S&T or R&D guidelines.

You are welcome to review the submission requirements and reapply after addressing the issues mentioned above. Should you have any questions or require further clarification, feel free to contact us at marg_sathi@gmail.com 

We appreciate your interest and effort, and we look forward to receiving an updated submission.  

Best regards,  
Saugata Kundu
Admin Team  
MARG (Mine Allrounder Research Guide)`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proposal Registration Declined</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px;">
    <h2>Subject: Proposal Registration Declined</h2>
    <p>Dear <strong>Tonima</strong>,</p>
    <p>
        Thank you for your submission. After a thorough review by the admin team, we regret to inform you that your registration has not been approved at this time.
    </p>
    <p>The decision was based on the following reasons:</p>
    <ol>
        <li><strong>Incomplete Documentation:</strong> Essential documents such as Aadhaar card or project concept note were missing or only partially submitted.</li>
        <li><strong>Eligibility Non-Compliance:</strong> The project proposal did not meet the eligibility criteria outlined in the S&T or R&D guidelines.</li>
    </ol>
    <p>
        You are welcome to review the submission requirements and reapply after addressing the issues mentioned above. Should you have any questions or require further clarification, feel free to contact us at 
        <a href="mailto:marg_sathi@gmail.com">marg_sathi@gmail.com</a>.
    </p>
    <p>
        We appreciate your interest and effort, and we look forward to receiving an updated submission.
    </p>
    <p>
        Best regards,<br>
        <strong>Saugata Kundu</strong><br>
        Admin Team<br>
        <strong>MARG (Mine Allrounder Research Guide)</strong>
    </p>
</body>
</html>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP sent successfully to ${email}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send OTP email.');
  }
}
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
Saugata Kundu
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
        <strong>Saugata Kundu</strong><br>
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
  const PI = await pb.collection('PI_records').getOne(id);
  
  if (records.length === 0) {
    //cancel mail
    await cancelmail(PI.name, email);
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
  
  // Send OTP to the provided email
  try {
    await sendOTP(PI.name ,PI.username ,email, otp);
    await pb.collection('CMPDI_users').update(PI.CMPDI_id, {
      verify_status: "Verified",
    });
  } catch (error) {
    console.error("Error sending OTP email:", error);
    return;
  }
}