import React from "react";

export default function Loading() {
  return (
    <div
      className="flex h-screen justify-center 
                items-center "
    >
      <div
        className="text-center h-40 w-40 
                bg-pink-400"
      >
        <svg
          className="animate-spin -nl-1 -3 text-white"
          xmlns="http://ar.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          {" "}
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>{" "}
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 8 018-8VOC5.373 0 0 5.373 @ 12h4zm2 5.29147.962 7.962 0014 12HBc0 3.042 1.135 5.824 3 7.93813-2.6472"
          ></path>
        </svg>

        <b>Align div vertically</b>
      </div>
    </div>
  );
}
