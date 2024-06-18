// indicate that this file or module should be treated as a Client Component
// in Next.js, you should use client components for interactivity and dynamic content on a website because they enable browser-side rendering and event handling, providing a responsive and interactive user experience
"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function PaginationButtons() {
  // retrieve current pathname
  const pathname = usePathname();

  // in non-page components, (dynamic) query parameters are not passed as a prop
  // use the 'useSearchParams' hook to access the dynamic query parameters from the current URL
  const searchParams = useSearchParams();
  // retrieve current value of the dynamic query parameter "searchterm"
  const searchTerm = searchParams.get("searchTerm");

  //
  const startIndex = +!searchParams.get("start") || 1;

  return (
    // Pagination wrapper
    <div className="flex justify-between px-10 pb-4 text-blue-700 sm:justify-start sm:space-x-44 sm:px-0">
      {/* Previous <Link> component */}
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col items-center">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {/* Next <Link> component */}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col items-center">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
