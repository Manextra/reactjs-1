import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <>
    <div className='h-16 ml-0 text-white bg-black flex items-center justify-between px-5'>
      <h2>LOGO</h2>
      <div className='flex gap-8 mr-2 '>
      <Link href="/About">About</Link>
      <Link href="/Product">Product</Link>
      <Link href="/Courses">Courses</Link>
      </div>
    </div>
    </>
  )
}

export default Header