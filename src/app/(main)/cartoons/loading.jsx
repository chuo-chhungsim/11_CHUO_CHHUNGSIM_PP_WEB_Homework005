// src/app/books/loading.jsx

const Loading = () => {
  return (
    <div>
      {/* Header with title and select skeleton */}
      <div className="flex justify-between items-center mb-5">
        {/* Title skeleton */}
        <div className="flex flex-col gap-1">
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Select skeleton */}
        <div className="w-[250px] bg-gray-200 rounded-lg p-2 animate-pulse">
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-2 space-y-2">
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Books grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-4 animate-pulse">
            <div className="h-48 bg-gray-200 rounded mb-3"></div>
            <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
