"use client";
import { useState } from "react";

const BookDetails = ({ description }) => {
  const [activeTab, setActiveTab] = useState("synopsis");

  return (
    <div className="p-6">
      {/* Tab Navigation */}
      <div className="flex space-x-4 pb-2">
        <button
          onClick={() => setActiveTab("synopsis")}
          className={`px-4 py-2 ${
            activeTab === "synopsis"
              ? "border-b-4 border-blue-500 font-bold"
              : "text-gray-500"
          }`}
        >
          Synopsis
        </button>
        <button
          onClick={() => setActiveTab("table")}
          className={`px-4 py-2 ${
            activeTab === "table"
              ? "border-b-4 border-blue-500 font-bold"
              : "text-gray-500"
          }`}
        >
          Table of Contents
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4 overflow-y-auto max-h-[35vh] w-full">
        {activeTab === "synopsis" && <p>{description}</p>}
        {activeTab === "table" && (
          <ul className="">
            <p className="flex ">*No chapter available</p>
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
