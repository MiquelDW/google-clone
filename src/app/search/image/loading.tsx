// Loading Component that wraps around all files inside the folder 'image'
// it allows you to create loading states that are rendered and displayed to users while the content inside the route 'search/image' is loading
export default function Loading() {
  return (
    // three sections of placeholders for search results
    // the elements will repeatedly pulse from fully opaque to semi-transparent (0.5 opacity at 50%) and back
    <div className="mx-2 flex max-w-6xl flex-col pb-40 pl-4 pt-10 sm:flex-row sm:space-x-4 lg:pl-52">
      <div className="animate-pulse">
        <div className="mb-4 h-48 w-48 rounded-md bg-gray-200"></div>
        <div className="mb-4 h-2 w-48 rounded-md bg-gray-200"></div>
        <div className="mb-4 h-2 w-48 rounded-md bg-gray-200"></div>
      </div>
      <div className="animate-pulse">
        <div className="mb-4 h-48 w-48 rounded-md bg-gray-200"></div>
        <div className="mb-4 h-2 w-48 rounded-md bg-gray-200"></div>
        <div className="mb-4 h-2 w-48 rounded-md bg-gray-200"></div>
      </div>
      {/* hide 1 result placeholder section at mobile screensize */}
      <div className="hidden sm:block sm:space-x-4">
        <div className="animate-pulse">
          <div className="mb-4 h-48 w-48 rounded-md bg-gray-200"></div>
          <div className="mb-4 h-2 w-48 rounded-md bg-gray-200"></div>
          <div className="mb-4 h-2 w-48 rounded-md bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
