import Link from "next/link";
import PaginationButtons from "./PaginationButtons";
import { SearchResult, WebSearchResultItem } from "@/app/search/web/page";
import { ImageSearchResultItem } from "@/app/search/image/page";

// predefine object structure for given 'props' object
type SearchResultsProps = {
  imageSearchResults: SearchResult;
};

export default function ImageSearchResults({
  imageSearchResults,
}: SearchResultsProps) {
  // type narrowing so TS knows what type 'webSearchResults' is
  // Type guard function to differentiate between 'WebSearchResultItem' and 'ImageSearchResultItem'
  // the return type 'resultItem is ImageSearchResultItem' is a type predicate indicating that if the function returns true, TypeScript can infer that the given 'resultItem' is of type 'ImageSearchResultItem' (vice versa if false)
  function isImageSearchResultItem(
    resultItem: WebSearchResultItem | ImageSearchResultItem,
  ): resultItem is ImageSearchResultItem {
    // if given 'resultItem' contains the prop 'image', the function returns true
    // the function will refine the type of the given 'resultItem' to 'ImageSearchResultItem' if it returns true
    return "image" in resultItem;
  }

  return (
    // wrapper for Google Search Results
    <div className="mt-4 pb-40 sm:pb-24">
      {/* wrapper for every Google search result */}
      <div className="grid grid-cols-1 space-x-4 px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* display each Google search results in its own <div> element */}
        {imageSearchResults.items.map((imageSearchResult) => {
          if (isImageSearchResultItem(imageSearchResult)) {
            return (
              <div className="mb-8" key={imageSearchResult.link}>
                {/* display image, title and website link of search result */}
                <div className="group">
                  <Link href={imageSearchResult.image.contextLink}>
                    {/* use regular <img/> since you're dealing with a lot of external URLs */}
                    <img
                      src={imageSearchResult.link}
                      alt={imageSearchResult.title}
                      className="h-60 w-full object-contain transition-shadow duration-300 group-hover:shadow-xl"
                    />
                  </Link>
                  <Link href={imageSearchResult.image.contextLink}>
                    <h2 className="truncate text-xl group-hover:underline">
                      {imageSearchResult.title}
                    </h2>
                  </Link>
                  <Link href={imageSearchResult.image.contextLink}>
                    <p className="truncate text-gray-600 group-hover:underline">
                      {imageSearchResult.displayLink}
                    </p>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* pagination buttons (this is a Client Component) */}
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
