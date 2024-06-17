// predefine object structure for given 'props' object
type WebSearchPageProps = {
  // 'searchParams' prop contains dynamic query parameters from the current URL
  searchParams: { searchTerm: string };
};

export default function WebSearchPage({ searchParams }: WebSearchPageProps) {
  const val = searchParams.searchTerm;
  return <div>{val}</div>;
}
