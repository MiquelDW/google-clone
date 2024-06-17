import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
// Next.js recommends using the '<Image />' component instead of the regular '<img>' HTML element to automatically optimize images, potentially improving LCP (Largest Contentful Paint) and overall page performance
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
