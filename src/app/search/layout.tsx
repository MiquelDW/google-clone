import SearchHeader from "@/components/SearchHeader";
// importing globals.css inside another layout component will break the application's styling when you refresh homepage, it's not necessary
// import "./../globals.css";

// Layout Component that wraps around all files inside folder 'search'
// it ensures a consistent layout for all pages and routes within the folder 'search'
// this Layout component will be given to the Root Layout component as a child
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
