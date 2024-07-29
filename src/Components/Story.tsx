import Image from "next/image";
import img1 from"../../Image/img16.webp";
 

const Story = () => {
  return (
    <div className="grid grid-cols-2 mt-10  bg-gray-900">
      <Image src={img1} alt="Image"
      width={800}
      height={800}
      className="mt-10 ml-5 rounded-lg"
      />
      <div className="flex justify-between items-center flex-col">
        <h1 className="mt-14 text-3xl text-white">New Story</h1>
        <p className="text-xl w-9/12 text-white">I developed a visual language that combines community stories with the abstract nature of market forces to help visualize the incredible potential of New Story work.</p>
        <button className="flex justify-center items-center text-white bor rounded-full border-solid border-slate-950 border-2 w-48 h-10 hover:bg-white hover:text-slate-950">Red Case Study
        <svg  xmlns="http://www.w3.org/2000/svg"
       fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor" 
        className="w-6 h-6 ml-3 ">
  <path strokeLinecap="round" strokeLinejoin="round"  
  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
        </button>

        <button className="flex justify-center items-center text-white bor rounded-full border-solid border-slate-950 border-2 w-48 h-10 mb-5">Viem Figma File</button>
      </div>
      </div>
  )
}

export default Story;
