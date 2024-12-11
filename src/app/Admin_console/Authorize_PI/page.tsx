'use client'
import Side_nav from "@/components/admin_console/authorize_PI/side_nav";
import Nav from "@/components/admin_console/authorize_PI/nav";
import Table from "@/components/admin_console/authorize_PI/table";
import PocketBase from 'pocketbase';
import { getSession } from "@/app/lib";
import { redirect } from "next/navigation";
import { useEffect } from "react";
const pb = new PocketBase('http://127.0.0.1:8090');

interface piData{ id: string,piId: string; piName: string;
  contactNumber: number; email: string;
  adharNumber: number; };
export default async function Upcoming(){
  useEffect(()=>{
    const session = sessionStorage.getItem('margsathi_session');
    if(!session){
      redirect('/');
    }
  }, [redirect])
  const records = await pb.collection('PI_records').getFullList({
    expand: 'CMPDI_id',
    filter: '(CMPDI_id.verify_status="Verification pending")',
  });
  let rec_list: piData[]= [];
  records.forEach(e => {
    rec_list.push({
      id: e.id,
      piId: e.PI_id,
      piName: e.name,
      contactNumber: e.phone_no,
      email: e.expand?.CMPDI_id.user_email,
      adharNumber: e.aadhar_no,
    }) 
  });
    return (
      <>
       <Nav />
      <div className="flex mt-[84px]"> {/* Offset for Nav bar */}
        <Side_nav />
        <div>
          {rec_list.map(((e, idx)=>(
            <Table key={idx} piData={e}/>
          )))}
        </div>
      </div>
    </>
  );
}
   
