import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import img0 from '../../Image/img13.webp'

const Aggregate = () => {
return (

    <div className='grid grid-cols-1 lg:grid-cols-2 bg-gray-900 mt-10' style={{height: '700px'}}>
    <div className='flex flex-col justify-around items-center h-full text-white p-4  lg:p-8 lg:space-y-6'>
    <h1 className='mt-5 text-white text-2xl lg:text-3xl'>Aggregate Singularity</h1>
    <p className='w-72 mb-2 text-lg lg:w-4/6 lg:text-3/4'>I created a 3d visual language that emphasizes what the ASI software does on behalf of utility accounting and tax teams.</p>

    <Link href="#">
    <button className='flex justify-center items-center border-solid border-slate-950 border-2 text-white rounded-full w-48 h-9 hover:bg-white hover:text-slate-950'>Read Case Study 
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
    <button className="border-2 border-solid border-slate-950 rounded-full text-white w-48 h-9 ">
    View Figma File
    </button>
    </Link>
    </div>

    <div className='flex justify-center items-center'>  
    <Image src={img0}
     alt='Description of the image'
        width={820}
        height={820}
        className='flex justify-center items-center p-4 lg:p-8 rounded-lg'
        />
        </div>
    </div>
)
}

export default Aggregate;
