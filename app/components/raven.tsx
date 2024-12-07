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
    <div className="p-4">
      <div className="grid grid-cols-5 gap-4 mb-4 text-center font-bold text-lg">
        {ravenData.map((item, index) => (
          <div key={index}>{item.label}</div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-4">
        {ravenData.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={`${item.label} image`}
            className="w-20 h-20 border border-gray-400 rounded"
          />
        ))}
      </div>
    </div>
  );
}
