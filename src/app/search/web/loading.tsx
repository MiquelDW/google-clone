// Loading Component that wraps around all files inside the folder 'web'
// it allows you to create loading states that are rendered and displayed to users while the content inside the route 'search/web' is loading
export default function Loading() {
  return (
    // the elements will repeatedly pulse from fully opaque to semi-transparent (0.5 opacity at 50%) and back
    <>
      {/* three sections of placeholders for search results */}
      <div className="mx-2 max-w-6xl animate-pulse pt-10 lg:pl-52">
        <div className="mb-2.5 h-2.5 w-48 rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-3.5 w-[360px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2.5 w-[560px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2.5 w-[530px] rounded-full bg-gray-200"></div>
      </div>
      <div className="mx-2 max-w-6xl animate-pulse pt-10 lg:pl-52">
        <div className="mb-2.5 h-2.5 w-48 rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-3.5 w-[360px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2.5 w-[560px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2.5 w-[530px] rounded-full bg-gray-200"></div>
      </div>
      <div className="mx-2 max-w-6xl animate-pulse pt-10 lg:pl-52">
        <div className="mb-2.5 h-2.5 w-48 rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-3.5 w-[360px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2.5 w-[560px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2.5 w-[530px] rounded-full bg-gray-200"></div>
      </div>
    </>
  );
}
