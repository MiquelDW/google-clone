import Image from "next/image";
// navigate users to the specified routes without a full page reload
import Link from "next/link";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchBox from "./SearchBox";
import SearchHeaderOptions from "./SearchHeaderOptions";
import { Suspense } from "react";

export default function SearchHeader() {
  console.log("SearchHeader rendered");

  return (
    // Header Section for Web and Image search pages
    <header
      // even if you scroll down, you still see the <header> at the top (sticky)
      className="sticky top-0 bg-white"
      aria-label="Secondary site header"
    >
      {/* Top Header Section */}
      <div className="flex w-full items-center justify-between p-6">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt="Google Logo"
            width={120}
            height={40}
            // image starts loading as soon as possible, improving the initial rendering speed (for essential images)
            priority
            // maintain aspect ratio with the given 'width' and 'height' props
            className="w-auto"
          />
        </Link>

        {/* Google Search Section */}
        <div className="flex-1">
          {/* this is a Client Side component */}
          {/* Server components will often need to wait for the query parameters to resolve and then fetch the relevant data. Wrapping the client components in Suspense ensures that they do not attempt to render until the necessary data (query parameters in this case) is available */}
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBox />
          </Suspense>
        </div>

        {/* Settings and Menu Section */}
        <div className="hidden space-x-2 sm:inline-flex">
          <RiSettings3Line className="cursor-pointer rounded-full bg-transparent p-2 text-4xl hover:bg-gray-200" />
          <TbGridDots className="cursor-pointer rounded-full bg-transparent p-2 text-4xl hover:bg-gray-200" />
        </div>

        {/* Sign in Button */}
        <button className="ml-2 rounded-md bg-blue-500 px-6 py-2 font-medium text-white transition-all hover:shadow-md hover:brightness-105">
          Sign in
        </button>
      </div>

      {/* Bottom Header Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <SearchHeaderOptions />
      </Suspense>
    </header>
  );
}
