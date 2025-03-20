// src/app/loading.jsx

import Link from "next/link";

const Loading = () => {
  return (
    <div>
      {/* Title Section Skeleton */}
      <div className="flex justify-between items-center mb-5">
        {/* Title skeleton */}
        <div className="flex flex-col gap-1">
          <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Cards Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
        {[...Array(2)].map((_, index) => (
          <Link key={index} href={"/books"}>
            <div className="bg-gray-200 rounded-lg p-4 hover:opacity-80 transition-opacity">
              {/* Image skeleton */}
              <div className="h-48 bg-gray-200 rounded mb-4 animate-pulse"></div>

              {/* Title skeleton */}
              <div className="h-5 w-24 bg-gray-200 rounded mb-2 animate-pulse"></div>

              {/* Description skeleton */}
              <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Loading;
