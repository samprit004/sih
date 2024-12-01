import Footer from '@/components/id/Footer';
import Form from '@/components/id/Form';
import Head from '@/components/id/Head';
import Logo from '@/components/logo';
import { getSession } from '@/app/lib';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function ID() {
  "use server";
  const session = getSession();
  if(!session){
    redirect('/');
  }
    return (
      <>
      <Logo/>
      <Head/>
      <Form/>
      <Footer/>
      
      </>
    );
  }
