// src/app/books/[id]/loading.jsx

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const Loading = () => {
  return (
    <div className="">
      {/* Breadcrumb skeleton */}
      <Breadcrumb>
        <BreadcrumbList className={"text-xl font-semibold my-5"}>
          <BreadcrumbItem>
            <div className="w-24 h-6 bg-gray-200 animate-pulse"></div>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <div className="w-32 h-6 bg-gray-200 animate-pulse"></div>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <div className="w-40 h-6 bg-gray-200 animate-pulse"></div>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-row">
        {/* Book Cover skeleton */}
        <div className="relative w-1/3 h-[75vh] flex-shrink-0 overflow-hidden bg-gray-200 animate-pulse">
          {/* Placeholder for book cover */}
        </div>

        {/* Novel Information skeleton */}
        <div className="flex-1 p-8 space-y-2 bg-gray-50 animate-pulse">
          {/* Title skeleton */}
          <div className="h-12 w-3/4 bg-gray-200 rounded"></div>

          {/* Author skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-16 h-6 bg-gray-200 rounded"></div>
            <div className="w-32 h-6 bg-gray-200 rounded"></div>
          </div>

          {/* Views skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-6 bg-gray-200 rounded"></div>
            <div className="w-24 h-6 bg-gray-200 rounded"></div>
          </div>

          {/* Chapters skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-6 bg-gray-200 rounded"></div>
            <div className="w-32 h-6 bg-gray-200 rounded"></div>
          </div>

          {/* Rating skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-6 bg-gray-200 rounded"></div>
            <div className="w-28 h-6 bg-gray-200 rounded"></div>
          </div>

          {/* Buttons skeleton */}
          <div className="flex gap-5">
            <div className="bg-blue-100 w-48 h-10 rounded-full"></div>
            <div className="bg-blue-100 w-32 h-10 rounded-full"></div>
          </div>

          <hr className="border-gray-300 my-4" />

          {/* Synopsis skeleton */}
          <div className="space-y-3">
            <div className="h-6 w-24 bg-gray-200 rounded"></div>
            <div className="h-6 w-full bg-gray-200 rounded"></div>
            <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
