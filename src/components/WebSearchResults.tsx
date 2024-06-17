import { SearchResult, SearchResultItem } from "@/app/search/web/page";
import Link from "next/link";
import Parser from "html-react-parser";

// predefine object structure for given 'props' object
type SearchResultsProps = {
  webSearchResults: SearchResult;
};

export default function WebSearchResults({
  webSearchResults,
}: SearchResultsProps) {
  return (
    // wrapper for Google Search Results
    <div className="mx-auto w-full px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      {/* display information about the Google Search */}
      <p className="mb-5 mt-3 text-sm text-gray-600">
        About {webSearchResults.searchInformation.formattedTotalResults} results
        ({webSearchResults.searchInformation.formattedSearchTime} seconds)
      </p>

      {/* display each Google search results in its own <div> element */}
      {webSearchResults.items.map((webSearchResult: SearchResultItem) => (
        <div className="mb-8 max-w-xl" key={webSearchResult.link}>
          {/* links that navigate user to the specified route (other website) */}
          <div className="group flex flex-col">
            <Link href={webSearchResult.link}>
              {webSearchResult.formattedUrl}
            </Link>
            <Link
              href={webSearchResult.link}
              className="truncate text-xl font-medium text-blue-800 decoration-blue-800 group-hover:underline"
            >
              {webSearchResult.title}
            </Link>
          </div>

          {/* parse the given HTML snipped into HTML format */}
          <p className="text-gray-600">{Parser(webSearchResult.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
}
