'use server'
import Side_nav from "@/components/admin_console/authorize_PI/side_nav";
import Nav from "@/components/admin_console/authorize_PI/nav";
import Table from "@/components/admin_console/authorize_PI/table";
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

interface piData{ piId: string; piName: string;
  contactNumber: number; email: string;
  adharNumber: number; password: string; };
export default async function Upcoming(){
  const records = await pb.collection('PI_records').getFullList({
    expand: 'CMPDI_id',
    filter: '(CMPDI_id.verify_status="Verification pending")',
  });
  let rec_list: piData[]= [];
  records.forEach(e => {
    rec_list.push({
      piId: e.PI_id,
      piName: e.username,
      contactNumber: e.phone_no,
      email: e.expand?.CMPDI_id.user_email,
      adharNumber: e.aadhar_no,
      password: e.expand?.CMPDI_id.password,
    }) 
  });
  console.log(rec_list)
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
   
