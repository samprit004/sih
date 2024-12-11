'use client'
import Footer from '@/components/id/Footer';
import Form from '@/components/id/Form';
import Head from '@/components/id/Head';
import Logo from '@/components/logo';
import { getSession } from '@/app/lib';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'

export default async function ID() {
  useEffect(()=>{
    const session = sessionStorage.getItem('margsathi_session');
    if(!session){
      redirect('/');
    }
  }, [redirect])
    return (
      <>
      <Logo/>
      <Head/>
      <Form/>
      <Footer/>
      
      </>
    );
  }
