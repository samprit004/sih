import PocketBase from 'pocketbase';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

// Load .env from the project root directory
dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

const pb = new PocketBase('http://127.0.0.1:8090');

async function search_user(email: string) {
  const records = await pb.collection('CMPDI_users').getFullList({
    filter: `(user_email='${email}')`
  });
  return records;
}

async function sendOTP(email: string, otp: number) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"CMPDI System" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Your OTP for CMPDI Registration',
    text: `Hello, your OTP for completing the registration is ${otp}. This OTP is valid for 5 minutes.`,
    html: `<p>Hello,</p><p>Your OTP for completing the registration is <b>${otp}</b>.</p><p>This OTP is valid for 5 minutes.</p>`,
  };

  await transporter.sendMail(mailOptions);
}

async function create_user(first_name: string, last_name: string, email: string, phone: string) {
  const currentDate = new Date();
  const Auth_expDate = new Date(currentDate);
  Auth_expDate.setDate(currentDate.getDate() + 7);

  const OTP_expDate = new Date(currentDate);
  OTP_expDate.setMinutes(currentDate.getMinutes() + 5);

  // Generate a 6-digit random OTP
  const otp = Math.floor(100000 + Math.random() * 900000);

  const data = {
    "user_email": email,
    "user_type": "PI",
    "Auth_exp": Auth_expDate.toISOString(),
    "OTP_exp": OTP_expDate.toISOString(),
    "verify_status": "OTP pending",
    "first_name": first_name,
    "last_name": last_name,
    "otp": otp, // Store OTP for verification
  };
  const user = await pb.collection('CMPDI_users').create(data);

  const docs = {
    'CMPDI_id': user.id,
    'phone_no': phone,
    'username': `${first_name} ${last_name}`,
  };
  await pb.collection('PI_records').create(docs);

  // Send the OTP via email
  await sendOTP(email, otp);

  return user;
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
  } else if (search_result.length == 1) {
    return new Response(JSON.stringify({
      'message': "User already there",
      'id': search_result[0].id,
    }));
  } else {
    const user = await create_user(first_name, last_name, email, phone);
    return new Response(JSON.stringify({
      'message': "User Created",
      'id': user.id,
    }));
  }
}
