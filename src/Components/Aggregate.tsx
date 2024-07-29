import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import img0 from '../../Image/img13.webp'

const Aggregate = () => {
return (

    <div className='grid grid-cols-2 bg-gray-900 mt-10' style={{height: '700px'}}>
    <div className='flex flex-col justify-around items-center'>
    <h1 className='mt-5 text-white text-xl'>Aggregate Singularity</h1>
    <p className='text-xl w-96  text-white'>I created a 3d visual language that emphasizes what the ASI software does on behalf of utility accounting and tax teams.</p>

    <Link href="#">
    <button className='flex justify-center items-center border-solid border-slate-950 border-2 text-white rounded-full w-48 h-9 hover:bg-white'>Read Case Study 
    <svg  xmlns="http://www.w3.org/2000/svg"
       fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor" 
        className="w-6 h-6 ml-3 ">
  <path strokeLinecap="round" strokeLinejoin="round"  
  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />

</svg>
    </button>
    </Link>
    <Link href="#">
    <button className="border-2 border-solid border-slate-950 rounded-full text-white w-48 h-9">
    View Figma File
    </button>
    </Link>
    </div>

    <div className='flex justify-center items-center'>  
    <Image src={img0}
     alt='Description of the image'
        width={820}
        height={820}
        className='rounded-3xl '
        />
        </div>
    </div>
)
}

export default Aggregate;
