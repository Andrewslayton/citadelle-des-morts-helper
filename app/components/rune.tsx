"use client"
import { useState } from "react";

export default function Rune() {
  const runeImages = Array.from(
    { length: 20 },
    (_, i) => `/runes/r${i + 1}.png`
  );
  const [selectedRunes, setSelectedRunes] = useState<string[]>([]);

  const handleClick = (image: string) => {
    if (selectedRunes.length < 6 && !selectedRunes.includes(image)) {
      setSelectedRunes([...selectedRunes, image]);
    }
  };

  const clearRunes = () => {
    setSelectedRunes([]);
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {selectedRunes.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Selected Rune ${index + 1}`}
            className="w-16 h-16 border border-gray-400 rounded"
          />
        ))}
      </div>
      <button
        className="px-4 py-2 mb-4 text-white bg-red-500 rounded hover:bg-red-600"
        onClick={clearRunes}
      >
        Clear
      </button>
      <div className="grid grid-cols-4 gap-4">
        {runeImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Rune ${index + 1}`}
            className="w-16 h-16 cursor-pointer border border-gray-300 rounded hover:shadow-lg"
            onClick={() => handleClick(img)}
          />
        ))}
      </div>
    </div>
  );
}
