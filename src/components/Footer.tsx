import Link from 'next/link'
const Footer = () => {
  return (
    <div>
      <div className='bg-black h-40 mt-24 flex justify-center  items-center flex-col'>
        <section  className='flex gap-5'>
        <Link href="/" className='text-white text text-xl'> Home </Link>
        <div className='border-white border h-auto'></div>
        <Link href="/" className='text-white text text-xl'> About Us </Link>
        <div className='border-white border h-auto'></div>
        <Link href="/" className='text-white text text-xl'> Guidelines </Link>
        <div className='border-white border h-auto'></div>
        <Link href="/" className='text-white text text-xl'> Work Progess </Link>
        <div className='border-white border h-auto'></div>
        <Link href="/" className='text-white text text-xl'> FAQ </Link>
        <div className='border-white border h-auto'></div>
        <Link href="/" className='text-white text text-xl'> Login/Register </Link>
        </section>

        <div className='border-white border w-2/6 mt-4'></div>

        <section className='flex gap-5 text-white text-xl mt-2'>
            <span>Mobile No. :  +122 358 48484</span>
            <div className='border-white border h-auto'></div>
            <span>E-mail : mineflow@gmail.com</span>
        </section>
      </div>
      <div className='h-8 text-center text-xl'><p>© 2004-2024, <a className='font-semibold'>Techacee.com</a>, Inc. or its affiliates</p></div>
    </div>
  )
}

export default Footer
