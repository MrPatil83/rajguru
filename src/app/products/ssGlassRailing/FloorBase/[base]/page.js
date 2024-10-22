"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { bases } from "../../data/base"; // Import base data

export default function BaseDetailPage() {
  const { base } = useParams(); // Get the base ID from the URL
  console.log("Base from URL:", base); // Debugging to check if the correct base ID is captured

  // Find the base by matching URL param with the correct ID in the data
  const selectedBase = bases.find((b) => b.id === base);
  console.log("Selected Base:", selectedBase); // Debugging to check if the correct base is selected

  const [activeColor, setActiveColor] = useState(
    selectedBase ? selectedBase.colors[0] : null
  );

  useEffect(() => {
    if (selectedBase) {
      setActiveColor(selectedBase.colors[0]); // Set the first color as active by default
    }
  }, [selectedBase]);

  if (!selectedBase) {
    return <p>Base not found</p>;
  }

  return (
    <section className="relative">
      <h1 className="text-5xl text-[#335c98] din-regular p-4">
        {selectedBase.name}
      </h1>

      {/* Active Color Display */}
      <div className="relative w-full h-96">
        {activeColor && (
          <Image
            src={activeColor.image}
            alt={activeColor.name}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Color Options */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        {selectedBase.colors.map((color) => (
          <div
            key={color.name}
            className={`p-4 cursor-pointer ${
              color.name === activeColor.name ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveColor(color)}
          >
            <Image
              src={color.image}
              alt={color.name}
              width={100}
              height={100}
              className="object-cover"
            />
            <p className="text-center mt-2">{color.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
