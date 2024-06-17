import WebSearchResults from "@/components/WebSearchResults";

// predefine object structure for given 'props' object
export type SearchPageProps = {
  // 'searchParams' prop contains dynamic query parameters from the current URL
  searchParams: { searchTerm: string; start: string };
};

// predefine object structure for each Search Result object
export type SearchResultItem = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail: [];
    metatags: [];
    cse_image: [];
  };
};

// predefine object structure for the Search Result object
export type SearchResult = {
  queries: { request: []; nextPage: [] };
  context: { title: string };
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  items: SearchResultItem[];
};

export default async function WebSearchPage({ searchParams }: SearchPageProps) {
  //
  const startIndex = "1";
  // retrieve current value of the dynamic query parameter "searchTerm"
  const val = searchParams.searchTerm;
  console.log(val);

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
  const webSearchResults = await fetchResults();
  console.log(webSearchResults);

  return (
    <div>
      {webSearchResults && (
        <WebSearchResults webSearchResults={webSearchResults} />
      )}
    </div>
  );
}
