import ImageSearchResults from "@/components/ImageSearchResults";
import { SearchPageProps } from "../web/page";
import Link from "next/link";

export type ImageSearchResultItem = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  mime: string;
  fileFormat: string;
  image: {
    contextLink: string;
  };
};

export default async function ImageSearchPage({
  searchParams,
}: SearchPageProps) {
  // add delay of 5 seconds
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  // retrieve current value of the dynamic query parameter "start"
  const startIndex = searchParams.start || "1";
  // retrieve current value of the dynamic query parameter "searchTerm"
  const searchTerm = searchParams.searchTerm;

  // GET request handler function
  // with Server Components you get request memorization, caching and revalidation features out of the box
  const fetchResults = async () => {
    try {
      // create a GET HTTP request to the speficified URL using the Fetch API
      const res = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}'}&searchType=image&start=${startIndex}`,
      );

      // handles HTTP errors that the Fetch API itself does not treat as errors
      if (!res.ok) {
        // throw new error to catch block with a message indicating the HTTP status
        throw new Error(`HTTP error! Status: ${res.status} ${res.statusText}`);
      }

      // parse the response body from the fetch request as JSON
      const data = await res.json();
      return data;
    } catch (err) {
      // handle both network errors and HTTP errors
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("An unknown error occured");
      }

      // re-throw error to trigger higher-level error handling mechanism 'error.tsx'
      throw err;
    }
  };

  // fetch the Google search results based on the value of the dynamic query parameter "searchTerm"
  const imageSearchResults = await fetchResults();
  // console.log(imageSearchResults);

  // display this if no data has been fetched
  if (!imageSearchResults.items) {
    return (
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="mb-4 text-3xl">
          No results found for &quot;{searchTerm}&quot;
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      {imageSearchResults && (
        <ImageSearchResults imageSearchResults={imageSearchResults} />
      )}
    </div>
  );
}
