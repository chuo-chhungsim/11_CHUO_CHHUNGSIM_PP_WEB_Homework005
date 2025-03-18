import { getBookById } from "@/services/book/bookServices";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Book, Eye, Plus, Star } from "lucide-react";
import Synposis from "./_components/BookDetails";

const page = async ({ params }) => {
  const { id } = params;
  const book = await getBookById(id);
  console.log("Book by id", book);

  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList className={"text-xl font-semibold my-5"}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/books">Book Categories</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{book.book_title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-row ">
        {/* Book Cover */}
        <div className="relative w-1/3 h-[75vh] flex-shrink-0 overflow-hidden">
          <img
            src={book.image}
            alt={book.book_title}
            className="w-full h-full object-fill"
          />
        </div>

        {/* Novel Information */}
        <div className="flex-1 p-8 space-y-2">
          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-800">
            {book.book_title}
          </h2>

          {/* Author */}
          <div className="text-gray-600">
            Author:
            <a href="#" className="text-blue-500 hover:underline">
              {book.book_author}
            </a>
          </div>
          <div className="text-gray-600 flex gap-1">
            <Eye /> :
            <span className="text-gray-800 ">
              {book.book_views || " no views"}
            </span>
          </div>
          <div className="text-gray-600 flex gap-1">
            <Book /> :
            <span className="text-gray-800 ">
              {book.book_views || " no chapters available"}
            </span>
          </div>
          <div className="text-gray-600 flex gap-1">
            <Star fill="gold" stroke="0" /> :
            <span className="text-gray-800 ">
              {book.book_views || " (No rating)"}
            </span>
          </div>

          <div className="flex gap-5">
            <button
              disabled
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2"
            >
              <Plus />
              <span>ADD TO LIBRARY</span>
            </button>
            <button
              disabled
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2"
            >
              <span>READ</span>
            </button>
          </div>

          <hr />
          <div className="text-gray-800 text-base ">
            <Synposis description={book.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
