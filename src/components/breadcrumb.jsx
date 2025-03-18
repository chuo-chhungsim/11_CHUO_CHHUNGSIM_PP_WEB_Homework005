"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean); // Remove empty segments

  // If on home page, only show "Home"
  if (pathSegments.length === 0) {
    return (
      <nav
        aria-label="breadcrumb"
        className="text-sm font-medium text-gray-600"
      >
        Home
      </nav>
    );
  }

  return (
    <nav
      aria-label="breadcrumb"
      className="flex items-center text-sm text-gray-600"
    >
      {/* Home Link */}
      <Link href="/" className="hover:text-gray-900">
        Home
      </Link>

      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`; // Generate full path
        const isLast = index === pathSegments.length - 1; // Check if last item
        const label = segment.charAt(0).toUpperCase() + segment.slice(1); // Capitalize first letter

        return (
          <span key={path} className="flex items-center">
            <ChevronRight className="mx-2 h-4 w-4 text-gray-500" />
            {isLast ? (
              <span>{label}</span> // No link for the last item
            ) : (
              <Link href={path} className="hover:text-gray-900">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
