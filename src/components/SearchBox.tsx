// indicate that this file or module should be treated as a Client Component
// in Next.js, you should use client components for interactivity and dynamic content on a website because they enable browser-side rendering and event handling, providing a responsive and interactive user experience
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, MouseEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

export default function SearchBox() {
  console.log("SearchBox Re-rendered");

  // instantiate 'router' object with the 'useRouter' hook
  const router = useRouter();

  // in non-page components, (dynamic) query parameters are not passed as a prop
  // use the 'useSearchParams' hook to access the dynamic query parameters from the current URL
  const searchParams = useSearchParams();
  // retrieve value of the dynamic query parameter "searchterm"
  const searchTerm = searchParams.get("searchTerm");

  // state variable that keeps track of the current value of the query parameter "searchterm"
  const [term, setTerm] = useState(searchTerm || "");

  // callback function to handle onSubmit and onClick events (form & icon)
  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | MouseEvent<SVGElement>,
  ) => {
    e.preventDefault();
    // exit function if user didn't type anything
    if (!term.trim()) return;
    // programmatically redirect user to given route with 'router' object
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    // Google Search Section
    <form
      onSubmit={handleSubmit}
      className="ml-10 mr-5 flex max-w-3xl flex-grow items-center rounded-full border border-gray-200 px-6 py-3 shadow-lg"
    >
      <input
        type="text"
        // this <input> element is now controlled by state var 'term'
        value={term}
        // update state variable 'term' with onChange event listener
        onChange={(e) => setTerm(e.target.value)}
        className="w-full focus:outline-none"
      />
      <RxCross2
        className="cursor-pointer text-2xl text-gray-500 sm:mr-2"
        onClick={() => setTerm("")}
      />
      <BsFillMicFill className="mr-3 hidden cursor-pointer border-l-2 border-gray-300 pl-4 text-4xl text-blue-500 sm:inline-flex" />
      <AiOutlineSearch
        className="hidden cursor-pointer text-2xl text-blue-500 sm:inline-flex"
        onClick={handleSubmit}
      />
    </form>
  );
}
