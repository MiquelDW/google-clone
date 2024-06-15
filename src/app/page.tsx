// indicate that this file or module should be treated as a Client Component
// in Next.js, you should use client components for interactivity and dynamic content on a website because they enable browser-side rendering and event handling, providing a responsive and interactive user experience
"use client";

import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Home Header Section */}
      <HomeHeader />

      {/* Google Logo + Search Section */}
      <div className="mt-24 flex flex-col items-center">
        {/* Logo */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          alt="Google Logo"
          width={300}
          height={100}
          // image starts loading as soon as possible, improving the initial rendering speed
          // use priority for images that are essential to the initial user experience to make your pages feel faster
          priority
          // setting 'width' (or 'height') to "auto" using CSS also prevents Next.js warnings (maintains aspect ratio with your given 'width' and 'height' props)
          className="w-auto"
        />

        {/* Search Section */}
        <HomeSearch />
      </div>
    </>
  );
}