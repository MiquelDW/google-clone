import ImageSearchResults from "@/components/ImageSearchResults";
import { SearchPageProps } from "../web/page";

export default async function ImageSearchPage({
  searchParams,
}: SearchPageProps) {
  //
  const startIndex = "1";
  // retrieve current value of the dynamic query parameter "searchTerm"
  const val = searchParams.searchTerm;

  // GET request handler function
  // with Server Components you get request memorization, caching and revalidation features out of the box
  const fetchResults = async () => {
    try {
      // create a GET HTTP request to the speficified URL using the Fetch API
      const res = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}&start=${startIndex}`,
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
    }
  };

  // fetch the Google search results based on the value of the dynamic query parameter "searchTerm"
  const imageSearchResults = await fetchResults();

  return (
    <div>
      {imageSearchResults && (
        <ImageSearchResults imageSearchResults={imageSearchResults} />
      )}
    </div>
  );
}
