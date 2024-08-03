import Image from "next/image";
import img from "../../Image/img15.webp";
import Link from "next/link";


const Intellicheck = () => {
  return (
    <div className=" grid grid-cols-1 mt-72 lg:grid-cols-2  bg-gray-900" style={{height: '700px'}}>
     <div className="flex flex-col justify-around items-center h-full text-white p-4 lg:items-start lg:p-8 lg:space-y-6">
     <h1 className="text-2xl lg:text-3xl mb-3">Intellicheck</h1>
      <p className="w-72 mb-2 text-lg lg:w-4/6 lg:text-3/4">“The invisible layer—depicted as a layer of frosted glass—became one of the central visual themes of the website.”</p>
      <button className="flex  justify-center items-center border-solid border-stone-950 border-2 w-48 h-9 rounded-full hover:bg-white hover:text-slate-950 lg:w-84 mb-2">Read Case Study
         <svg  xmlns="http://www.w3.org/2000/svg"
       fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor" 
        className="w-6 h-6 ml-3 ">
  <path strokeLinecap="round" strokeLinejoin="round"  
  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
      </button>
      <button className="flex justify-center items-center border-solid border-stone-950 border-2 w-48 h-9 rounded-full lg:w-48  ">
        <Link href="#" >View Figma File</Link>
        </button>
     </div>

      <div className="flex justify-center items-center p-4 lg:p-8">
      <Image src={img}  alt="Description of the image alt"
    
      className="mr-5 rounded-lg w-9/12"

      />
      </div>
    </div>
  )
}

export default Intellicheck;
