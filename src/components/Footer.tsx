import Link from "next/link";
// use 'lookup' API to "look up" where the current user is from
import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    // Footer Section for the whole website
    <footer className="absolute bottom-0 w-full bg-[#f2f2f2] text-sm text-gray-500">
      {/* Country Section */}
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>

      {/* Links Section */}
      <div className="flex flex-col items-center justify-between space-y-7 px-8 py-3 sm:flex-row sm:space-y-0">
        {/* First Links */}
        <ul className="flex items-center space-x-6">
          <li className="cursor-pointer hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/advertising">Advertising</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/business">Business</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/howSearchWorks">How Search works</Link>
          </li>
        </ul>

        {/* Second Links */}
        <ul className="flex items-center space-x-6">
          <li className="cursor-pointer hover:underline">
            <Link href="/privacy">Privacy</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/terms">Terms</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
