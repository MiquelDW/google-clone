// indicate that this file or module should be treated as a Client Component
"use client";

import { useRouter } from "next/navigation";
import { FormEvent, MouseEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  // state variable that keeps track of the current user input
  const [input, setInput] = useState("");
  // state var that keeps track of the current load state of the fetch request
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  // instantiate 'router' object with the 'useRouter' hook
  const router = useRouter();

  // callback function to handle onSubmit and onClick events (form & button)
  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    // exit function if user didn't type anything
    if (!input.trim()) return;
    // programmatically redirect user to given route with 'router' object
    router.push(`/search/web?searchTerm=${input}`);
  };

  // callback async function to handle onClick event
  const randomSearch = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      // fetching will begin (set to 'true')
      setRandomSearchLoading(true);

      // create a GET HTTP request to the speficified URL using the Fetch API
      const res = await fetch("https://random-word-api.herokuapp.com/word");

      // handles HTTP errors that the Fetch API itself does not treat as errors
      if (!res.ok) {
        // throw new error to catch block with a message indicating the HTTP status
        throw new Error(`HTTP error! Status: ${res.status} ${res.statusText}`);
      }

      // parse the response body from the fetch request as JSON
      const data = await res.json();
      // programmatically redirect user to given route with 'router' object
      router.push(`/search/web?searchTerm=${data[0]}`);

      // fetching has ended (set to 'false')
      setRandomSearchLoading(false);
    } catch (err) {
      // fetching has ended (set to 'false')
      setRandomSearchLoading(false);

      // handle both network errors and HTTP errors
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("An unknown error occured");
      }
    }
  };

  return (
    <>
      {/* Google Search Section */}
      <form
        onSubmit={handleSubmit}
        className="mt-5 flex w-full max-w-[90%] rounded-full border border-gray-200 px-5 py-3 transition-shadow focus-within:shadow-md hover:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="mr-3 text-xl text-gray-500" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          // this <input> element is now controlled by state var 'input'
          value={input}
          // update state variable 'input'
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>

      {/* Search Buttons Section */}
      <div className="mt-8 flex flex-col justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
        <button
          className="h-10 w-36 rounded-md bg-[#f8f9fa] text-sm text-gray-800 ring-1 ring-transparent transition-shadow hover:shadow-md hover:ring-gray-200 focus:outline-none active:ring-gray-300"
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
          // disable button when state var 'randomSearchLoading' is true
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="h-10 w-36 rounded-md bg-[#f8f9fa] text-sm text-gray-800 ring-1 ring-transparent transition-shadow hover:shadow-md hover:ring-gray-200 focus:outline-none active:ring-gray-300 disabled:opacity-80 disabled:shadow-sm"
        >
          {randomSearchLoading ? "Loading..." : "I am feeling lucky"}
        </button>
      </div>
    </>
  );
}
