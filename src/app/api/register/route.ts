import PocketBase from 'pocketbase';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

// Load .env from the project root directory
dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

const pb = new PocketBase('http://127.0.0.1:8090');

// Function to search for a user by email
async function search_user(email: string) {
  const records = await pb.collection('CMPDI_users').getFullList({
    filter: `(user_email='${email}')`
  });
  return records;
}

// Function to send OTP via email
async function sendOTP(email: string, otp: number) {
  // Create the SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // Use STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Define the email options
  const mailOptions = {
    from: `"CMPDI System" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Your OTP for CMPDI Registration',
    text: `Hello, your OTP for completing the registration is ${otp}. This OTP is valid for 5 minutes.`,
    html: `<p>Hello,</p><p>Your OTP for completing the registration is <b>${otp}</b>.</p><p>This OTP is valid for 5 minutes.</p>`,
  };

  // Send the email
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
 * 
 * @param req - first_name, last_name, email, phone
 * @returns message, id
 */
export async function POST(req: Request) {
  const { first_name, last_name, email, phone } = await req.json();
  const search_result = await search_user(email);

  if (search_result.length > 1) {
    return new Response(JSON.stringify({ 'message': "This Email has been Used" }), { status: 403 });
  } else if (search_result.length === 1) {
    const userEmail = search_result[0].user_email;
    const data={
      OTP: generateNumericOTP(6),
    }
    const user = await pb.collection('CMPDI_users').update(search_result[0].id,data);
    const otp = user.OTP; // Assuming this is already generated and stored

    if (!userEmail || !otp) {
      return new Response(JSON.stringify({ 'message': "Missing email or OTP in the database" }), { status: 500 });
    }

    // Attempt to send the OTP email
    try {
      await sendOTP(userEmail, otp);
      return new Response(JSON.stringify({
        'message': "OTP resent to existing user",
        'id': search_result[0].id,
      }));
    } catch (error) {
      return new Response(JSON.stringify({ 'message': "Failed to resend OTP", 'error': error.message }), { status: 500 });
    }
  } else {
    // If user doesn't exist, create a new user and send OTP
    const currentDate = new Date();
    const OTP_expDate = new Date(currentDate);
    OTP_expDate.setMinutes(currentDate.getMinutes() + 5);

    // Generate a new 6-digit random OTP (numeric only)
    const otp = generateNumericOTP(6);

    const data = {
      "user_email": email,
      "user_type": "PI",
      "Auth_exp": currentDate.toISOString(),
      "OTP_exp": OTP_expDate.toISOString(),
      "verify_status": "OTP pending",
      "first_name": first_name,
      "last_name": last_name,
      "OTP": otp, // Store OTP for verification
    };
    const user = await pb.collection('CMPDI_users').create(data);

    const docs = {
      'CMPDI_id': user.id,
      'phone_no': phone,
      'name': `${first_name} ${last_name}`,
    };
    await pb.collection('PI_records').create(docs);

    try {
      await sendOTP(email, otp);
      return new Response(JSON.stringify({
        'message': "User Created and OTP Sent",
        'id': user.id,
      }));
    } catch (error) {
      return new Response(JSON.stringify({ 'message': "Failed to send OTP", 'error': error.message }), { status: 500 });
    }
  }
}
