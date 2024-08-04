
const Blog = () => {
  return (
    <div className="main-container grid grid-cols-1 mt-10 lg:grid-cols-2 lg:h-screen lg:justify-center">
      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-around">
        <div className="flex flex-col items-center lg:items-start lg:mb-0">
          <div className="flex items-center justify-center  ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-10 lg:mb-0 lg:w-3/6">Blog</h1>
            {/* ///// */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-9 h-7 text-xl border-2 border-solid rounded-md border-gray-400 ml-2 p-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg> */}
          </div>
        </div>

        <div className="text-xs text-center lg:text-left mb-5 lg:mb-0">
          <div className="mb-4">
            <h6 className="mb-1 uppercase text-xs md:text-sm">In my drafts</h6>
            <hr className="border-solid border-neutral-400 w-32 md:w-48 lg:w-64 mx-auto lg:mx-0" />
          </div>

          <div className="flex items-center mb-4 lg:mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            <span className="ml-2 text-sm md:text-base">How to present website designs</span>
          </div>

          <div className="flex items-center mb-4 lg:mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            <span className="ml-4">My favorite type foundries</span>
          </div>

          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            <span className="ml-4">The “Twice Baked Potato” theory</span>
          </div>
          <hr className="mt-4 border-solid border-neutral-400 w-64 mx-auto lg:mx-0" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10  lg:mt-0 lg:items-start lg:justify-center">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl text-center lg:text-left">24 things that make a great marketing website</h2>
        <div className="text-xl lg:text-2xl mb-10  text-center lg:text-left ">
          <p className="mb-10 lg:mb-6 w-4/6 lg:w-full mx-auto mt-4 lg:mx-0">
            I started making websites in 2013. I have learned a lot. Most of those learnings came from doing the wrong thing. It’s the curse of any creative that as soon as a project is done, you realize all the ways you could have done things better.
          </p>
          <p className="w-4/6 lg:w-full mx-auto lg:mx-0">
            I have (mostly) learned to be ok with that, to come to expect it, and to carry those learnings with me into the next project. Let me share some of those learnings with you.
          </p>
        </div>
        <div className="flex justify-center  lg:justify-start ">
          <button className="flex justify-center items-center  w-48 h-10 border-2 border-white rounded-full bg-white hover:bg-gray-400">
            KEEP READING
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

