import { SearchResult, SearchResultItem } from "@/app/search/web/page";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

// predefine object structure for given 'props' object
type SearchResultsProps = {
  imageSearchResults: SearchResult;
};

export default function ImageSearchResults({
  imageSearchResults,
}: SearchResultsProps) {
  return (
    // wrapper for Google Search Results
    <div className="mt-4 pb-40 sm:pb-24">
      {/* wrapper for every Google search result */}
      <div className="grid grid-cols-1 space-x-4 px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* display each Google search results in its own <div> element */}
        {imageSearchResults.items.map((imageSearchResult: SearchResultItem) => (
          <div className="mb-8" key={imageSearchResult.link}>
            {/* display image, title and website link of search result */}
            <div className="group">
              <Link href="/">
                <img
                  src={imageSearchResult.link}
                  alt={imageSearchResult.title}
                  className="h-60 w-full object-contain transition-shadow duration-300 group-hover:shadow-xl"
                />
              </Link>
              <Link href="/">
                <h2 className="truncate text-xl group-hover:underline">
                  {imageSearchResult.title}
                </h2>
              </Link>
              <Link href="/">
                <p className="truncate text-gray-600 group-hover:underline">
                  {imageSearchResult.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/*  */}
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
