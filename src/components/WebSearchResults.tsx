import { SearchResult, WebSearchResultItem } from "@/app/search/web/page";
import Link from "next/link";
import Parser from "html-react-parser";
import { ImageSearchResultItem } from "@/app/search/image/page";
import PaginationButtons from "./PaginationButtons";
import { Suspense } from "react";
import Loading from "@/app/search/web/loading";

// predefine object structure for given 'props' object
type SearchResultsProps = {
  webSearchResults: SearchResult;
};

export default function WebSearchResults({
  webSearchResults,
}: SearchResultsProps) {
  // type narrowing so TS knows what type 'webSearchResults' is
  // Type guard function to differentiate between 'WebSearchResultItem' and 'ImageSearchResultItem'
  // the return type 'resultItem is ImageSearchResultItem' is a type predicate indicating that if the function returns true, TypeScript can infer that the given 'resultItem' is of type 'WebSearchResultItem' (vice versa if false)
  function isWebSearchResultItem(
    resultItem: WebSearchResultItem | ImageSearchResultItem,
  ): resultItem is WebSearchResultItem {
    // if given 'resultItem' contains the prop 'image', the function returns true
    // the function will refine the type of the given 'resultItem' to 'WebSearchResultItem' if it returns true
    return "pagemap" in resultItem;
  }

  return (
    // wrapper for Google Search Results
    <div className="mx-auto w-full px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      {/* display information about the Google Search */}
      <p className="mb-5 mt-3 text-sm text-gray-600">
        About {webSearchResults.searchInformation.formattedTotalResults} results
        ({webSearchResults.searchInformation.formattedSearchTime} seconds)
      </p>

      {/* display each Google search results in its own <div> element */}
      {webSearchResults.items.map((webSearchResult) => {
        if (isWebSearchResultItem(webSearchResult)) {
          return (
            <div
              className="mb-10 max-w-xl overflow-hidden"
              key={webSearchResult.link}
            >
              {/* links that navigate user to the specified route (other website) */}
              <div className="group flex flex-col">
                <Link href={webSearchResult.link}>
                  {webSearchResult.formattedUrl}
                </Link>
                <Link
                  href={webSearchResult.link}
                  // child element will change its style when the parent <div> is being hovered over because of the 'group' utility class
                  className="truncate text-xl font-medium text-blue-800 decoration-blue-800 group-hover:underline"
                >
                  {webSearchResult.title}
                </Link>
              </div>

              {/* parse the given HTML snippet into HTML format */}
              <p className="text-gray-600">
                {Parser(webSearchResult.htmlSnippet)}
              </p>
            </div>
          );
        }
      })}

      {/* pagination buttons (this is a Client Component) */}
      <Suspense fallback={<div>Loading...</div>}>
        <PaginationButtons />
      </Suspense>
    </div>
  );
}
