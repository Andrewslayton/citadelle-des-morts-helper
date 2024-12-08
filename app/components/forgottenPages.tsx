"use client";

import { useState } from "react";

export default function Pages() {
  const pageImages = Array.from(
    { length: 4 },
    (_, i) => `/pages/page${i + 1}.png`
  );
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  const handleClick = (image: string) => {
    if (selectedPages.length < 4 && !selectedPages.includes(image)) {
      setSelectedPages([...selectedPages, image]);
    }
  };

  const clearPages = () => {
    setSelectedPages([]);
  };

  return (
    <div className="p-6 border border-gray-300 rounded shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">
        Forgotten Pages Step
      </h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {selectedPages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Selected Page ${index + 1}`}
            className="w-16 h-16 border border-gray-400 rounded"
          />
        ))}
      </div>
      <button
        className="px-4 py-2 mb-4 text-white bg-red-500 rounded hover:bg-red-600"
        onClick={clearPages}
      >
        Clear
      </button>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {pageImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Page ${index + 1}`}
            className="w-20 h-20 cursor-pointer border border-gray-300 rounded hover:shadow-lg"
            onClick={() => handleClick(img)}
          />
        ))}
      </div>
    </div>
  );
}
