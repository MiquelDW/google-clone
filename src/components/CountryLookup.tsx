// indicate that this file or module should be treated as a Client Component
// in Next.js, you should use client components for interactivity and dynamic content on a website because they enable browser-side rendering and event handling, providing a responsive and interactive user experience
"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  // state variable that holds the current country value of the user
  const [country, setCountry] = useState("United States");

  // fetch data after the component has been hydrated on the Client
  useEffect(() => {
    // GET request handler function
    // with Client Components, you don't get request memorization, caching and revalidation features out of the box
    const getCountry = async () => {
      try {
        // create a GET HTTP request to the speficified URL using the Fetch API
        const res = await fetch(
          `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`,
        );

        // handles HTTP errors that the Fetch API itself does not treat as errors
        if (!res.ok) {
          // throw new error to catch block with a message indicating the HTTP status
          throw new Error(
            `HTTP error! Status: ${res.status} ${res.statusText}`,
          );
        }

        // parse the response body from the fetch request as JSON
        const data = await res.json();
        // update state variable 'country' with the fetched data
        setCountry(data.country);
      } catch (err) {
        // handle both network errors and HTTP errors
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("An unknown error occured");
        }
      }
    };

    // fetch data from the specified URL / API
    getCountry();
  }, []);

  return <div>{country}</div>;
}
