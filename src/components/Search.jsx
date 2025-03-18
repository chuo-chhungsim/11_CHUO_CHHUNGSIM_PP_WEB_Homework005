"use client";
import { Search } from "lucide-react";
import Form from "next/form";
import { usePathname } from "next/navigation";

const SearchBar = () => {
  const isHomepage = usePathname("/homes");
  return (
    <div className="flex justify-between items-center w-full md:w-2/3 lg:w-1/2">
      <Form
        action={isHomepage ? isHomepage : `/cartoons`}
        className="relative w-full"
      >
        <input
          type="text"
          name="query"
          placeholder="Search books by title..."
          className="w-full bg-white py-3 pl-14 pr-5 rounded-xl h-12 border-none focus:border-none focus:ring-0 focus:outline-custom-sky-blue"
        />
        <button
          type="submit"
          className="absolute inset-y-0 left-0 flex items-center pl-4"
        >
          <Search className="w-6 h-6 text-primary-text" />
        </button>
      </Form>
    </div>
  );
};
export default SearchBar;
