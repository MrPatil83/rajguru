"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Correct import for the new app directory
import Image from "next/image";
import { bases } from "./data/base"; // Import base data
import { handrails } from "./data/handrails"; // Import handrail data
import bg from "../../assets/product/glassrailing/bg.png";

export default function SsGlassRailingPage() {
  const router = useRouter(); // Use the correct router hook for the app directory

  const handleBaseClick = (base) => {
    // Navigate to dynamic route for the selected base
    router.push(`/products/ssGlassRailing/FloorBase/${base.id}`);
  };

  const handleHandrailClick = (handrail) => {
    // Navigate to dynamic route for the selected handrail
    router.push(`/products/ssGlassRailing/HandrailBase/${handrail.id}`);
  };

  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative">
        <Image
          className="h-[22rem] md:h-[30rem] w-full object-cover"
          src={bg}
          alt="decorative sheet"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <h1 className="absolute inset-0 flex items-center justify-center mx-32 pt-14 md:mx-0 md:pt-0 text-[#19355e] text-5xl md:text-[5rem] din-regular">
          Decorative Sheets
        </h1>
      </div>

      {/* Base Panel */}
      <div className="flex flex-col overflow-hidden w-full h-full xl:px-[20rem]">
        <h1 className="text-5xl text-[#335c98] din-regular p-4">Base</h1>
        <div className="mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 md:mx-16 lg:mx-14 lg:gap-14 mb-6">
          {bases.map((base) => (
            <div
              key={base.id}
              tabIndex="0"
              role="button"
              aria-label={`View details for base ${base.name}`}
              className="flex flex-col items-center rounded-xl overflow-hidden group shadow-md h-[17rem] w-[16rem] cursor-pointer transition-700 outline-none"
              onClick={() => handleBaseClick(base)}
            >
              <div className="relative h-full w-full">
                <Image
                  src={base.colors[0].image} // Display the first color image
                  alt={base.name}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#335c98] font-normal py-2 text-sm din-regular">
                {base.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Handrail Panel */}
      <div className="flex flex-col overflow-hidden w-full h-full xl:px-[20rem]">
        <h1 className="text-5xl text-[#335c98] din-regular p-4">Handrail</h1>
        <div className="mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 md:mx-16 lg:mx-14 lg:gap-14 mb-6">
          {handrails.map((handrail) => (
            <div
              key={handrail.id}
              tabIndex="0"
              role="button"
              aria-label={`View details for handrail ${handrail.name}`}
              className="flex flex-col items-center rounded-xl overflow-hidden group shadow-md h-[17rem] w-[16rem] cursor-pointer transition-700 outline-none"
              onClick={() => handleHandrailClick(handrail)}
            >
              <div className="relative h-full w-full">
                <Image
                  src={handrail.colors[0].image} // Display the first color image
                  alt={handrail.name}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#335c98] font-normal py-2 text-sm din-regular">
                {handrail.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
