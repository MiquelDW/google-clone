// indicate that this file or module should be treated as a Client Component
// error components must be a client component. Indicate that this file or module should be treated as a Client Component
"use client";

import { useEffect } from "react";

// predefine object structure for the given 'props' object
type ErrorBoundaryProps = {
  // Function Component receives the "error" object as a prop to display more information about the error
  error: Error;
  // it also receives the 'reset' object as a prop that recovers from non-serious errors by retrying the rendering of the nearest Function Component that threw the error from a 'page.tsx' file
  reset: () => void;
};

// Error Component that wraps around all files inside the folder 'search'
// it allows you to render and display a customized error page to users if a specific page / route inside the wrapper throws an error
export default function Error({ error, reset }: ErrorBoundaryProps) {
  // anytime an error happens, run this useEffect
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <h1 className="mb-4 text-3xl">
        Oops! Something went wrong. Please try again later.
      </h1>
      <button onClick={reset} className="text-blue-500">
        Try again
      </button>
    </div>
  );
}
