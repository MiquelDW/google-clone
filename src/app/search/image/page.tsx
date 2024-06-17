// predefine object structure for given 'props' object
type ImageSearchPageProps = {
  // 'searchParams' prop contains dynamic query parameters from the current URL
  searchParams: { searchTerm: string };
};

export default function ImageSearchPage({
  searchParams,
}: ImageSearchPageProps) {
  return <div className="">ImageSearchPage</div>;
}
