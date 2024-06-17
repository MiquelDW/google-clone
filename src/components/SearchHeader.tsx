import Image from "next/image";
import Link from "next/link";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

export default function SearchHeader() {
  return (
    // Header Section for Web and Image search pages
    <header
      className="sticky top-0 bg-white"
      aria-label="Secondary site header"
    >
      {/*  */}
      <div className="flex w-full items-center justify-between p-6">
        <Link href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt="Google Logo"
            width={120}
            height={40}
            // image starts loading as soon as possible, improving the initial rendering speed
            // use priority for images that are essential to the initial user experience to make your pages feel faster
            priority
            // setting 'width' (or 'height') to "auto" using CSS also prevents Next.js warnings (maintains aspect ratio with your given 'width' and 'height' props)
            className="w-auto"
          />
        </Link>
        <div className="">SearchBox</div>
        <div className="">
          <RiSettings3Line className="" />
          <TbGridDots className="" />
        </div>
        <button>Sign in</button>
      </div>
      {/*  */}
      <div>SearchHeaderOptions</div>
    </header>
  );
}
