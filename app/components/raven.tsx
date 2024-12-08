"use client";

import React from "react";

const ravenData = [
  { label: "HORN", image: "/raven/hornimage.png" },
  { label: "FISH", image: "/raven/fishimage.png" },
  { label: "JAW", image: "/raven/jawimage.png" },
  { label: "2SKULLS", image: "/raven/2skullimage.png" },
  { label: "SCORPION", image: "/raven/scorpionimage.png" },
];

export default function Raven() {
  return (
    <div className="p-6 border border-gray-300 rounded shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">Raven Combinations</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {ravenData.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <p className="mb-2 font-bold">{item.label}</p>
            <img
              src={item.image}
              alt={`${item.label} image`}
              className="w-20 h-20 border border-gray-400 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
