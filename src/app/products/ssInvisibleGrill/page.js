// import React from "react";
// import SSInvisibleGrill from "./SSInvisibleGrill";

// //SEO
// export const metadata = {
//   title: "Stainless Steel Invisible Gril",
//   discription:
//     "Enhance your balcony's safety and aesthetics with our stainless steel invisible grills, designed to provide unobstructed views while ensuring maximum security. Perfect for any space, these durable grills blend seamlessly with your decor, making them an ideal choice for homes and commercial properties alike. Experience peace of mind without compromising style with our customizable invisible grill solutions.",
//   name: "viewport",
//   content: "width=device-width, initial-scale=1",
//   property: "og:type",
//   content: "website",
//   property: "og:url",
//   content: "https://rajgurusteel.vercel.app/products/SSInvisibleGrill",
//   keywords: [
//     "stainless steel invisible grill",
//     "durable invisible grill solutions",
//     "invisible grill for balcony",
//     "aluminum invisible grill",
//     "invisible grill accessories",
//     "safety invisible grill",
//     "custom invisible grill designs",
//     "invisible grill installation",
//     "high-quality invisible grill",
//     "invisible grill for home security",
//     "modern invisible grill systems",
//     "invisible grill with custom colors",
//     "invisible grill for high-rise buildings",
//     "affordable invisible grill options",
//     "invisible grill maintenance tips"
//   ],
// };
// export default function page() {
//   return (
//     <div>
//       <SSInvisibleGrill />
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import bgImg from "../../assets/product/invisiblegrill/bg.webp";
import img1 from "../../assets/product/invisiblegrill/tallImg/img1.jpg";
import img2 from "../../assets/product/invisiblegrill/tallImg/img2.jpg";
import img3 from "../../assets/product/invisiblegrill/tallImg/img3.jpg";
import BulletHook from "../../assets/product/invisiblegrill/Accessories/BulletHook.webp";
import Hooks from "../../assets/product/invisiblegrill/Accessories/Hooks.webp";
import Hooks2 from "../../assets/product/invisiblegrill/Accessories/Hooks2.webp";
import invisiblematerial from "../../assets/product/invisiblegrill/Accessories/invisiblematerial.webp";
import Invisiblerope from "../../assets/product/invisiblegrill/Accessories/InvisibleWire.webp";
import turnbuckle from "../../assets/product/invisiblegrill/Accessories/turnbuckle.webp";
import UProfile from "../../assets/RelatedProducts/UProfile.webp";
import LProfile from "../../assets/RelatedProducts/LProfile.webp";
import fluted from "../../assets/RelatedProducts/fluted.webp";
import TProfile from "../../assets/product/profile/T_profile/wall.webp";
import customized from "../../assets/RelatedProducts/customized.webp";
import SSbalustrade from "../../assets/RelatedProducts/SSbalustrade.webp";
// import invisibleGril from "../../assets/RelatedProducts/invisibleGril.webp";
import queuemanager from "../../assets/RelatedProducts/queuemanager.webp";
import DecorativeSheet from "../../assets/RelatedProducts/decorativesheet.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { FadeRight, FadeLeft } from "../../components/utility/animation.jsx";
import { motion, AnimatePresence } from "framer-motion";
// import LivingImg from "../../assets/product/decorativeSheet/hero/livingHall.webp";
import HallImg from "../../assets/product/invisiblegrill/slider/invisiblegrill.webp";
import bedroom from "../../assets/product/invisiblegrill/slider/Grill1.webp";

const heroSlides = [
  {
    image: bgImg,
    title: "The Ultimate Safety Solution for Modern Homes",
    description:
      "Discover the ultimate safety solution for modern homes with invisible grills—durable barriers that protect balconies and windows while enhancing aesthetics and maintaining unobstructed views.",
  },
  {
    image: HallImg,
    title: "Enhance Your Views with Stylish Invisible Grills",
    description:
      "Enhance your views and safety with stylish invisible grills, offering unobstructed sightlines, robust balcony protection, and modern aesthetics for homes while ensuring child safety and security.",
  },
  {
    image: bedroom,
    title: "Combining Safety and Aesthetic Appeal",
    description:
      "Combine safety and aesthetic appeal with invisible grills, providing secure balcony protection and unobstructed views while enhancing your home's modern design and ensuring child safety.",
  },
];

export default function page() {
  const items = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlides = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  // hweo section
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
      setNextSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  // hero section slider

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlides, 3000); // Change slides every 3 seconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const relatedProducts = [
    {
      title: "U Profile",
      image: UProfile,
      link: "/products/profile/uProfile",
    },
    {
      title: "T Profile",
      image: TProfile,
      link: "/products/profile/tProfile",
    },
    {
      title: "L Profile",
      image: LProfile,
      link: "/products/profile/lProfile",
    },
    {
      title: "Fluted Panel",
      image: fluted,
      link: "/products/profile/SSFlutedPanelProfile",
    },
    {
      title: "SS Balustrade",
      image: SSbalustrade,
      link: "/products/BalustradeSystem",
    },
    // {
    //   title: "Invisible Grill",
    //   image: invisibleGril,
    //   link: "/products/SSInvisibleGrill",
    // },
    {
      title: "Decorative Sheet",
      image: DecorativeSheet,
      link: "/products/ssDecorativeSheet",
    },
    {
      title: "Queue Manager",
      image: queuemanager,
      link: "/products/SSQueueManager",
    },
    {
      title: "Custom Profile",
      image: customized,
      link: "/products/profile/SSCustomProfile",
    },
  ];

  const accessoriesData = [
    {
      id: 1,
      name: "Bullet Fitting",
      image: BulletHook,
      specifications: {
        GradeField: "304/316",
        Technique: "Customized",
        Material: "Stainless Steel",
        ProductType: "Bullet Hook",
        UsageApplication: "For balcony and staircase",
        GrillDesign: "Modern",
        WireDiameter: "3 mm",
        SurfaceFinish: "Polished",
        Colors: "Silver",
        Feature: "Rust Proof, Weather Proof, Durable",
        MovableBulletFit: "Yes",
      },
    },
    {
      id: 2,
      name: "Snap Hooks",
      image: Hooks,
      specifications: {
        GradeField: "	304/316",
        Technique: "customized",
        Material: "Stainless Steel",
        ProductType: "Snap Hook",
        UsageApplication: "	Construction Industry",
        GrillDesign: "Modern",
        WireDiameter: "3 mm",
        SurfaceFinish: "Polished",
        WireSpacing: "	2,3,4",
        Colors: "Silver",
        Feature: "Rust Proof, Weather Proof, Durable",
      },
    },
    {
      id: 3,
      name: "D-Shackle",
      image: Hooks2,
      specifications: {
        GradeField: "304/316",
        Technique: "Standard",
        Material: "Stainless Steel",
        ProductType: "D-Shackle",
        UsageApplication: "For balcony and staircase",
        GrillDesign: "Modern",
        WireDiameter: "3 mm",
        WireSpacing: "	2,3,4",
        SurfaceFinish: "Polished",
        Colors: "Silver",
        Feature: "Rust Proof, Weather Proof, Durable",
      },
    },
    {
      id: 4,
      name: "Invisible material",
      image: invisiblematerial,
      specifications: {
        GradeField: "	304/316",
        Technique: "customized",
        Material: "Stainless Steel",
        ProductType: "Balcony Grill",
        UsageApplication: "Home",
        GrillDesign: "Modern",
        WireDiameter: "2.5 mm",
        SurfaceFinish: "Powder Coated",
        Colors: "Silver",
        Feature: "Rust Proof, Weather Proof, Durable",
      },
    },
    {
      id: 5,
      name: "Turnbuckle hook",
      image: turnbuckle,
      specifications: {
        GradeField: "	304/316",
        Technique: "Standard",
        Material: "Stainless Steel",
        ProductType: "	Invisible Grill Wire Roll Hook",
        UsageApplication: "For balcony and staircase",
        GrillDesign: "Modern",
        WireDiameter: "3 mm",
        WireSpacing: "2,3,4",
        SurfaceFinish: "Polished",
        Colors: "Silver",
        Feature: "Rust Proof, Weather Proof, Durable",
      },
    },
    {
      id: 5,
      name: "Wire Rope",
      image: Invisiblerope,
      specifications: {
        GradeField: "	304/316",
        Technique: "Standard",
        Material: "Stainless Steel",
        ProductType: "	Invisible Grill Wire Roll",
        UsageApplication: "Used To Safeguard Homes",
        GrillDesign: "Modern",
        WireDiameter: "2.5 mm",
        WireSpacing: "2,3,4",
        SurfaceFinish: "Powder Coated",
        Colors: "Black, White, Brown",
        Feature: "Rust Proof, Weather Proof, Durable",
      },
    },
  ];

  const [selectedAccessory, setSelectedAccessory] = useState(null);

  const toggleAccessory = (accessory) => {
    setSelectedAccessory(selectedAccessory === accessory ? null : accessory);
  };

  return (
    <main className=" h-full w-full relative">
      <section className="relative bg-gray-800 h-[40rem] overflow-hidden">
        <AnimatePresence initial={true}>
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full">
          <AnimatePresence initial={true}>
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-[92rem] mx-auto px-4 h-full flex flex-col md:flex-row justify-center items-center mt-4 gap-10"
            >
              {/* Left Side Text */}
              <motion.div
                variants={FadeRight(0.3)}
                initial="hidden"
                animate="visible"
                className="flex flex-col justify-center items-start max-w-sm lg:max-w-full xl:max-w-2xl"
              >
                <h1 className=" text-3xl md:text-5xl din-semibold text-white mb-2 md:mb-4  ">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className=" text-[1rem]  text-justify md:text-xl din-regular text-gray-200">
                  {heroSlides[currentSlide].description}
                </p>
              </motion.div>

              {/* Right Side Image */}
              <motion.div
                variants={FadeLeft(0.3)}
                initial="hidden"
                animate="visible"
                className="relative h-[17rem] w-full  lg:w-[60%]  md:h-[28rem] flex"
              >
                <Image
                  src={heroSlides[nextSlide].image}
                  alt={heroSlides[nextSlide].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <div className=" flex flex-col overflow-hidden mx-auto container">
        <section className="flex flex-col md:flex-row items-center justify-center gap-20 xl:gap-36 h-scrren md:h-[90vh]  w-full bg-gray-50">
          <div className="relative flex flex-col items-center justify-center lg:pt-0">
            <h1 className="text-3xl din-semibold text-[#335c98] p-4">
              Invisible Grill
            </h1>
            <div className="overflow-hidden rounded-3xl h-[25rem] w-[20rem] md:h-[36rem] md:w-[22rem] lg:h-[45rem] lg:w-[28rem] xl:h-[35rem] xl:w-[24rem] xl:mb-8 border border-gray-300 relative">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`absolute transition-transform duration-500 ease-in-out w-full h-full flex items-center justify-center transform ${
                    index === currentIndex
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                >
                  <Image
                    src={item}
                    alt={`Slide ${index + 1}`}
                    layout="fill" // Ensures the image fills the parent container
                    className="object-cover rounded-3xl"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-3xl din-semibold text-[#335c98] flex justify-center">
              Accessories
            </h2>
            <div className="grid grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 justify-center items-center list-none -mx-4 transition-transform duration-300">
              {accessoriesData.map((accessory) => (
                <div key={accessory.id} className="flex flex-col items-center">
                  <li
                    className="h-[7rem] w-[7rem] md:h-[8rem] md:w-[8rem] lg:h-[12rem] lg:w-[12rem] xl:h-[10rem] xl:w-[10rem] hover:scale-110 transition-transform duration-300 cursor-pointer"
                    onClick={() => toggleAccessory(accessory)}
                  >
                    <Image src={accessory.image} alt={accessory.name} />
                  </li>
                  <p className="text-center text-gray-600 din-regular">
                    {accessory.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {selectedAccessory && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
              <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 transition-transform duration-500">
                <h3 className="text-xl din-bold text-[#335c98] mb-4">
                  {selectedAccessory.name} Specifications
                </h3>
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left din-semibold text-[#335c98]">
                        Specification
                      </th>
                      <th className="border border-gray-300 p-2 text-left din-semibold text-[#335c98]">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(selectedAccessory.specifications).map(
                      ([key, value], index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          <td className="border border-gray-300 p-2 din-regular text-[#335c98]">
                            {key.replace(/([A-Z])/g, " $1")}
                          </td>
                          <td className="border border-gray-300 p-2 din-regular text-[#335c98]">
                            {value}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
                {/* <button
                  className="mt-8 px-6 py-3 din-regular bg-[#335c98] text-white rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-[#6a8bb1] focus:ring-opacity-50"
                  onClick={() => setSelectedAccessory(null)}
                >
                  Close
                </button> */}

                <button
                  onClick={() => setSelectedAccessory(null)}
                  className="relative inline-flex items-center justify-center overflow-hidden mt-4 px-6 py-3 mb-6 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10"
                >
                  {/* Colored background */}
                  <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>

                  {/* Top-left to bottom-right diagonal animation */}
                  <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                    <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                    <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                  </span>

                  {/* Button text */}
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold">
                    Close
                  </span>
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
      <main className="flex flex-col overflow-hidden w-full h-full xl:px-[1rem] p-4 md:p-6 lg:p-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className=" text-2xl md:text-3xl din-semibold text-[#335c98] py-8 text-center">
            Benefits of Invisible Grills
            <p className=" text-sm md:text-lg md:mx-24 py-2 text-gray-600 din-regular text-justify">
              Invisible grills are becoming increasingly popular in modern
              architecture due to their unique advantages. Here are some of the
              key benefits:
            </p>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Invisible Wire */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className=" text-2xl din-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Enhanced Safety and Security
              </h3>
              <p className="text-gray-600 din-regular text-[16px]">
                Invisible grills provide a robust barrier without obstructing
                views, ensuring your home remains safe from intruders while
                maintaining aesthetic appeal. Their strong stainless steel
                construction deters potential break-ins effectively. Invisible
                grills enhance safety by preventing children and pets from
                falling off balconies or windows. They provide a secure barrier
                while maintaining an open feel.
              </p>
            </div>

            {/* Card 2 - Turnbuckle */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-2xl din-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Unobstructed Views
              </h3>
              <p className="text-gray-600 din-regular text-[16px]">
                One of the most significant advantages of invisible grills is
                that they do not obstruct views. This feature is particularly
                beneficial for high-rise buildings and balconies, allowing
                residents to enjoy their surroundings without visual barriers.
              </p>
            </div>

            {/* Card 3 - Bullet Hooks */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-2xl din-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Durability and Longevity
              </h3>
              <p className="text-gray-600 din-regular text-[16px]">
                Made from high-quality stainless steel, invisible grills are
                rust-proof and designed to withstand various weather conditions.
                This durability ensures that they require minimal maintenance
                over the years, providing long-term value.
              </p>
            </div>

            {/* Card 4 - Mounting Brackets */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-2xl din-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Customizable Design
              </h3>
              <p className="text-gray-600 din-regular text-[16px]">
                Invisible grills can be tailored to fit any architectural style
                and can be powder-coated in various colors. This customization
                allows homeowners to choose a design that complements their
                home’s exterior while ensuring safety. Invisible grills can be
                customized to fit various architectural styles and preferences.
                This flexibility allows homeowners to choose designs that best
                suit their needs.
              </p>
            </div>

            {/* Card 5 - End Cap & Anchors */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-2xl din-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Easy Installation
              </h3>
              <p className="text-gray-600 din-regular text-[16px]">
                The installation process for invisible grills is straightforward
                and non-invasive, minimizing disruption to your home.
                Professional installers can quickly set them up, making it a
                hassle-free addition to your property.
              </p>
            </div>
            {/* Card 6 - End Cap & Anchors */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-2xl din-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Low Maintenance
              </h3>
              <p className="text-gray-600 din-regular text-[16px]">
                These grills require minimal maintenance compared to traditional
                metal grills, which can rust or corrode. Invisible grills can be
                easily cleaned with a cloth, making them a practical choice for
                busy households.
              </p>
            </div>
          </div>

          {/* Add button to interact */}
          <div className="flex justify-center mt-8">
            <Link href="/ContactUs">
              <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 mb-6 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
                {/* Colored background */}
                <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>

                {/* Top-left to bottom-right diagonal animation */}
                <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                  <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                  <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                </span>

                {/* Button text */}
                <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold">
                  GET A QUOTE
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-8 md:px-36">
          <h3 className=" text-3xl mx-auto md:text-4xl text-primary din-semibold">
            Why Choose Invisible Grill ?
          </h3>
          <p className=" din-regular text-xs lg:text-base text-justify w-auto p-2 text-gray-600  ">
            Rajguru Steel Industry specializes in premium invisible grill
            solutions that enhance safety while maintaining unobstructed views,
            making them ideal for high-rise buildings and balconies. The
            invisible grills are designed to provide a contemporary look,
            seamlessly integrating into the architecture of modern buildings
            without obstructing views. Made from high-quality materials, these
            grills are built to withstand the elements, ensuring long-lasting
            protection and safety. The primary purpose of these invisible grills
            is to enhance safety, particularly in high-rise settings where
            traditional grills may not be suitable. Rajguru Steel Industry's
            invisible grill solutions offer a perfect blend of safety,
            aesthetics, and durability, making them an excellent choice for
            modern architectural needs. With a range of accessories and a focus
            on quality, they provide comprehensive solutions for enhancing
            safety in high-rise buildings and balconies.
          </p>
        </div>
      </main>

      {/* swiper */}
      <div className="w-full py-20 fade-in ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[35px] text-[#335c98] mb-16 din-semibold">
            Other Products
          </h2>
          <Swiper
            modules={[Autoplay, Pagination, Scrollbar, A11y]} // Include the required Swiper modules
            spaceBetween={15}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: { slidesPerView: -1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {relatedProducts.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center cursor-pointer">
                  <Link href={product.link} passHref>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={150}
                      height={150}
                      className="rounded-lg object-cover hover:scale-110 hover:shadow-lg"
                    />
                    <h3 className="mt-4 text-xl text-[#335c98] din-regular">
                      {product.title}
                    </h3>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}
