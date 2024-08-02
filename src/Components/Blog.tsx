const Blog = () => {
  return (
    <div className="grid grid-cols-2 mt-10"   style={{height: "900px"}}>
      <div className="flex justify-around flex-col">
<div className="flex justify-center ">
<h1 className="text-5xl mt-5 text-zinc-800">Blog</h1>
  <svg  xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className=" w-9 h-7 text-xl border-2 border-solid rounded-md border-gray-400 ml-2  p-1 ">
  <path strokeLinecap="round" strokeLinejoin="round"
   d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
</div>

<div className="flex items-center flex-col">
<div className="mb-4">
<h6 className="mb-1 uppercase text-xs mr-auto">In my drafts</h6>
<hr className=" border-solid border-neutral-400 w-64" />
</div>

<div className="flex mb-5">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" 
 d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
<span className="ml-4"> How to present website designs</span>
</div>
<div className="flex mb-5 mr-10">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" 
 d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
<span className="ml-4"> My favorite type foundries</span>
</div>

<div className="flex">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
 stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" 
  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
<span className="ml-4">The “Twice Baked Potato” theory</span>
</div>
<hr className="mt-4 border-solid  border-neutral-400 w-64" />
</div>
</div>


      <div className="flex justify-around flex-col mt-10">
        <h2 className="text-2xl">24 things that make a great marketing website</h2>
      <div className="text-xl">
      <p className="mb-10 w-4/6">
          I started making websites in 2013. I’ve learned a lot. Most of those learnings came from doing the wrong thing.
           It’s the curse of any creative that as soon as a project is done, 
           you realize all the ways you could have done things better.
           </p>
           <p className="w-4/6">
           I’ve (mostly) learned to be ok with that, to come to expect it,
            and to carry those learnings with me into the next project.
             Let me share some of those learnings with you.
           </p>
           
      </div>
     <div>

     <button className="flex justify-center items-center w-48 h-10 border-2 border-white rounded-full bg-white hover:bg-gray-400">KEEP READING
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</button>
     </div>
     </div>
        </div>
  )
};

export default Blog;
