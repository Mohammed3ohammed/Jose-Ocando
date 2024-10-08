import Link from "next/link";

const Navbar = () => {
return (
    <>
    <nav className="main-container grid grid-cols-1  mt-6">
        <div className="flex justify-center items-center">
        <ul className="flex justify-around items-center w-9/12 bg-neutral-400 p-2 rounded-full  max-md:hidden ">
        <li>
        <Link  href="#">
        <svg 
        xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" 
         strokeWidth={1.5} stroke="currentColor"
    className="h-6 w-6">
  <path strokeLinecap="round"
   strokeLinejoin="round"
    d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179
     2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
</svg>
        </Link>
        </li>
        <li><Link  href="#">Worg</Link></li>
        <li><Link href="#">About</Link></li>
        <li><Link href="#">Blog</Link></li>
        <li><Link  href="#">Contact</Link></li>
    </ul>
    </div>
</nav>
</>
)
}

export default Navbar;
