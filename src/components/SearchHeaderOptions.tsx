// indicate that this file or module should be treated as a Client Component
// in Next.js, you should use client components for interactivity and dynamic content on a website because they enable browser-side rendering and event handling, providing a responsive and interactive user experience
"use client"; 

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

export default function SearchHeaderOptions() {
  console.log("SearchHeaderOptions Re-rendered");
  // instantiate 'router' object with the 'useRouter' hook
  const router = useRouter();

  // in non-page components, (dynamic) query parameters are not passed as a prop
  // use the 'useSearchParams' hook to access the dynamic query parameters from the current URL
  const searchParams = useSearchParams();
  // retrieve current value of the dynamic query parameter "searchterm"
  const searchTerm = searchParams.get("searchTerm");

  // retrieve current pathname
  const pathname = usePathname();

  // callback function to handle onClick event
  const selectTab = (tab: string) => {
    // programmatically redirect user to given route with 'router' object
    // also append dynamic query parameter 'searchTerm' with its current value to the URL
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`,
    );
  };

  return (
    // Bottom Header Section container
    <div className="flex w-full select-none justify-center space-x-2 border-b text-sm text-gray-700 lg:justify-start lg:pl-52">
      {/* Go to 'Web' search page (/search/web?searchTerm=${...}) */}
      <div
        className={`flex cursor-pointer items-center space-x-1 border-b-4 border-transparent px-2 pb-3 active:text-blue-500 ${pathname === "/search/web" && "!border-blue-600 !text-blue-600"}`}
        onClick={() => selectTab("All")}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>

      {/* Go to 'Image' search page (/search/web?searchTerm=${...}) */}
      <div
        className={`flex cursor-pointer items-center space-x-1 border-b-4 border-transparent px-2 pb-3 active:text-blue-500 ${pathname === "/search/image" && "!border-blue-600 !text-blue-600"}`}
        onClick={() => selectTab("Images")}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
