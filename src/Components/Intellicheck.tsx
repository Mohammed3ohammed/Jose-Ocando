import Image from "next/image";
import img from "../../Image/img15.webp";
import Link from "next/link";


const Intellicheck = () => {
  return (
    <div className="grid grid-cols-2 mt-72 bg-gray-900" style={{height: '700px'}}>
     <div className="flex flex-col justify-around items-center h-full text-white">
     <h1 className="text-3xl z-50">Intellicheck</h1>
      <p className="w-72 text-xl">“The invisible layer—depicted as a layer of frosted glass—became one of the central visual themes of the website.”</p>
      <button className="flex  justify-center items-center border-solid border-stone-950 border-2 w-48 h-9 rounded-full hover:bg-white hover:text-slate-950">Read Case Study
         <svg  xmlns="http://www.w3.org/2000/svg"
       fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor" 
        className="w-6 h-6 ml-3 ">
  <path strokeLinecap="round" strokeLinejoin="round"  
  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
      </button>
      <button className="flex  justify-center items-center border-solid border-stone-950 border-2 w-48 h-9 rounded-full ">
        <Link href="#" >View Figma File</Link>
        </button>
     </div>

      <div className="flex justify-center items-center ">
      <Image src={img}  alt="Description of the image alt"
      width={820}
      height={820}
      className="mr-5 rounded-lg"

      />
      </div>
    </div>
  )
}

export default Intellicheck;
