import { SignJWT, jwtVerify } from "jose";

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 days from now")
    .sign(key);
}

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
async function search_user(id: string|null, token: string|null){
  // you can also fetch all records at once via getFullList
  if(id==null) id="";
  if(token==null) token="";
  try{
    const records = await pb.collection('CMPDI_users').getOne(id, {
      expand: `Auth_token,Auth_exp`,
    });
    if(records.Auth_token !== token){
      return null;
    }
    const jsbody = {
      id: id,
      Auth_token: records.Auth_token,
      Auth_exp: records.Auth_exp,
    }
      return jsbody;
  }catch{
    return null;
  }
}
export function getCookie(name: string) {
  let cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
      let [key, value] = cookie.split("=");
      if (key === name) return value;
  }
  return null;
}

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);


export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData: any) {
  // Verify credentials && get the user

  try{
    const user =search_user(formData.id, formData.Auth_token);
    if(user == null) return false;

    // Create the session
    let curDate = new Date();
    const expires = new Date(curDate);
    expires.setDate(curDate.getDate() + 10);
    const session = await encrypt({ user, expires });
  
    // Save the session in a cookie
    (await
      // Save the session in a cookie
      cookies()).set("session", session, { expires, httpOnly: true });
    return true;
  }catch{
    return false;
  }
  
}

export async function logout() {
  // Destroy the session
  (await
    // Destroy the session
    cookies()).set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
