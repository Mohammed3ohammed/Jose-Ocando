import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import log from "../../public/logo.png";

const Footer = () => {
  return (
    <footer className='grid items-center mt-20 mb-10 lg:m-0' style={{height: '300px'}}>
      <ul className="flex flex-col md:flex-row justify-around items-center h-full gap-8 ">
        <li className='bg-white w-60 rounded-2xl mb-4  md:mb-0'>
          <Link href="#" className='flex items-center p-3'>
            <Image
              src={log} alt="logo"
              className='w-12 h-12 rounded-2xl mr-2' 
            />
            <p className='w-auto text-black'>BRANDO DESIGNER WEBFLOW DEVELOPER</p>
          </Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link href="#">WORK</Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link href="#">ABOUT</Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link href="#">BLOG</Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link href="#">CONTACT</Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
          </Link> 
        </li>
        <li>
          <Link href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21" />
            </svg>
          </Link>
        </li>
      </ul>
    </footer>
  )
};

export default Footer;

