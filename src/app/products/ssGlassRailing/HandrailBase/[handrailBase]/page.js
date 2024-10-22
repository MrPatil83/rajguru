"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { handrails } from "../../data/handrails"; // Ensure correct path

export default function HandrailDetailPage() {
  const { handrailBase } = useParams(); // Get the handrail ID from the URL
  console.log("Handrail from URL:", handrailBase); // Debugging

  // Find the handrail by matching URL param with the correct ID in the data
  const selectedHandrailBase = handrails.find((h) => h.id === handrailBase);
  console.log("Selected Handrail:", selectedHandrailBase); // Debugging

  const [activeColor, setActiveColor] = useState(
    selectedHandrailBase ? selectedHandrailBase.colors[0] : null
  );

  useEffect(() => {
    if (selectedHandrailBase) {
      setActiveColor(selectedHandrailBase.colors[0]); // Set the first color as active by default
    }
  }, [selectedHandrailBase]);

  if (!selectedHandrailBase) {
    return <p>Handrail not found</p>;
  }

  return (
    <section className="relative">
      <h1 className="text-5xl text-[#335c98] din-regular p-4">
        {selectedHandrailBase.name}
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
        {selectedHandrailBase.colors.map((color) => (
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
