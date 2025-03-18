"use client";

import React from "react";

export default function SubTitle({
  title = "Power Ranking",
  bgColor = "bg-blue-500",
  accentColor = "bg-orange-300",
}) {
  return (
    <div className="inline-flex relative">
      {/* Main background */}
      <div className={`${bgColor} text-white px-4 py-2 font-bold text-xl`}>
        {title}
      </div>

      {/* Accent shape */}
      <div
        className={`absolute top-0 right-0 h-full w-6 ${accentColor} transform translate-x-3 skew-x-12`}
      ></div>
    </div>
  );
}
