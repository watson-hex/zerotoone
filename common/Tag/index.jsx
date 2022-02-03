import React, { useState, useEffect } from "react";

export default function Tag(props) {
  return (
    <button
      className="border-2 rounded-full"
      style={{ borderColor: "#D3E9FB" }}
    >
      <div className="flex ">
        <div className=" animate-ping my-auto ml-2 mr-2">
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="7.29451"
              cy="6.5"
              rx="6.49641"
              ry="6.5"
              fill="#41FF3E"
            />
          </svg>
        </div>

        <div className=" m-1 mr-4">{props.text}</div>
      </div>
    </button>
  );
}
