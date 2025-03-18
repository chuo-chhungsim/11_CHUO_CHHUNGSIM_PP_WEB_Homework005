import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Book, Eye, Plus, Star } from "lucide-react";
import BookDetails from "./_components/BookDetails";
import { getCartoonById } from "@/services/cartoons/cartoonService";

const Page = async ({ params }) => {
  const { id } = await params;
  const cartoon = await getCartoonById(id);
  console.log("cartoon by id", cartoon);

  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList className={"text-xl font-semibold my-5"}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/cartoons">Cartoon Categories</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{cartoon.ct_title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-row">
        {/* Book Cover */}
        <div className="relative w-1/3 h-[75vh] flex-shrink-0 overflow-hidden">
          <img
            key={cartoon.id}
            src={cartoon.image}
            alt={cartoon.ct_title}
            className="w-full h-full object-fill"
          />
        </div>

        {/* Cartoon Information */}
        <div className="flex-1 p-8 space-y-2">
          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-800">
            {cartoon.ct_title}
          </h2>

          {/* Author */}
          <div className="text-gray-600">
            Author:
            <a href="#" className="text-blue-500 hover:underline">
              {cartoon.ct_creator}
            </a>
          </div>

          {/* Views */}
          <div className="text-gray-600 flex gap-1">
            <Eye /> :
            <span className="text-gray-800">
              {cartoon.view_count || "No views"} views
            </span>
          </div>

          {/* No Chapters Available */}
          <div className="text-gray-600 flex gap-1">
            <Book /> :
            <span className="text-gray-800">No chapters available</span>
          </div>

          {/* Rating */}
          <div className="text-gray-600 flex gap-1">
            <Star fill="gold" stroke="0" /> :
            <span className="text-gray-800">(No rating)</span>
          </div>

          {/* Buttons */}
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
          {/* Book Details Component */}
          <div className="text-gray-800 text-base">
            <BookDetails description={cartoon.ct_description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
