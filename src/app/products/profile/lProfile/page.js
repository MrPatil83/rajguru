// import React from 'react'
// import SSLprofile from './SSLprofile'

// //SEO
// export const metadata = {
//   title: "stainless steel L profile",
//   description:
//     "Explore our high-quality stainless steel L profiles, designed for structural integrity and aesthetic appeal in various applications. These versatile profiles are perfect for construction, fabrication, and decorative projects, offering exceptional durability and corrosion resistance. Available in multiple sizes and finishes, our stainless steel L profiles are the ideal choice for architects, builders, and DIY enthusiasts.",
//   name: "viewport",
//   content: "width=device-width, initial-scale=1",
//   property: "og:type",
//   content: "website",
//   property: "og:url",
//   content: "https://rajgurusteel.vercel.app/products/profile/LProfile",
//   keywords: [
//     "stainless steel l profile",
//     "l shape stainless steel",
//     "stainless steel angle bar",
//     "custom stainless steel l profile",
//     "durable l profiles",
//     "stainless steel l section",
//     "l profile for construction",
//     "stainless steel l profile sizes",
//     "corrosion resistant l profiles",
//     "stainless steel l profile applications",
//     "high strength l profiles",
//     "decorative stainless steel l profile",
//     "stainless steel l profile suppliers",
//     "l profile metal fabrication",
//     "stainless steel l profile specifications",
//     "l profile",
//     "l profile handle",
//     "l profile patti",
//     "stainless steel l profile",
//     "aluminum l profile",
//     "l profile handle kitchen",
//     "rose gold l profile",
//     "gold l profile",
//     "SS L Profile",
//     "Stainless Steel L Profile Manufacturers",
//     "l profile Suppliers",
//     "l profile mumbai",
//     "profile",
//     "strip",
// ]
// };
// export default function page() {
//   return (
//     <div>
//       <SSLprofile/>
//     </div>
//   )
// }


// THIS CODE IS ALL FINISHES STRUCTURE

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import wallImg from "../../../assets/product/profile/T_profile/wall.webp";
// import upofile from "../../../assets/product/profile/U_profile/Uprofile.webp";
import Tprofile from "../../../assets/product/profile/T_profile/Tprofile.webp";
import UProfile from "../../../assets/RelatedProducts/UProfile.webp";
import TProfile from "../../../assets/product/profile/T_profile/wall.webp";
import fluted from "../../../assets/RelatedProducts/fluted.webp";
import DecorativeSheet from "../../../assets/RelatedProducts/decorativesheet.webp";
import customized from "../../../assets/RelatedProducts/customized.webp";
import SSbalustrade from "../../../assets/RelatedProducts/SSbalustrade.webp";
import invisibleGril from "../../../assets/RelatedProducts/invisibleGril.webp";
import queuemanager from "../../../assets/RelatedProducts/queuemanager.webp";
import bg from "../../../assets/product/profile/T_profile/bg.webp";
import messurement from "../../../assets/product/profile/L_profile/messurement.png";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import {
  FadeRight,
  FadeLeft,
  FadeUp,
} from "../../../components/utility/animation.jsx";
import { motion, AnimatePresence } from "framer-motion";
import LivingImg from "../../../assets/product/profile/L_profile/slider/img1.webp";
import HallImg from "../../../assets/product/profile/L_profile/slider/img2.webp";
import bedroom from "../../../assets/product/profile/L_profile/slider/img3.webp";

// Black finishes
import MirrorImg from "../../../assets/product/profile/L_profile/finishes/black/mirrorBlack.png";
import HairlineImg from "../../../assets/product/profile/L_profile/finishes/black/hairlineBlack.png";
import StainImg from "../../../assets/product/profile/L_profile/finishes/black/stainBlack.png";
import StraightlineImg from "../../../assets/product/profile/L_profile/finishes/black/straightlineBlack.png";
import MeshImg from "../../../assets/product/profile/L_profile/finishes/black/meshBlack.png";

//Silver finishes
import MirrorImgS from "../../../assets/product/profile/L_profile/finishes/silver/mirrorSilver.png";
import HairlineImgS from "../../../assets/product/profile/L_profile/finishes/silver/hairlineSilver.png";
import StainImgS from "../../../assets/product/profile/L_profile/finishes/silver/stainSilver.png";
import StraightlineImgS from "../../../assets/product/profile/L_profile/finishes/silver/straightlineSilver.png";
import MeshImgS from "../../../assets/product/profile/L_profile/finishes/silver/meshSilver.png";

//Gold finishes
import MirrorImgG from "../../../assets/product/profile/L_profile/finishes/gold/mirrorGold.png";
import HairlineImgG from "../../../assets/product/profile/L_profile/finishes/gold/hairlineGold.png";
import StainImgG from "../../../assets/product/profile/L_profile/finishes/gold/stainGold.png";
import StraightlineImgG from "../../../assets/product/profile/L_profile/finishes/gold/straightlineGold.png";
import MeshImgG from "../../../assets/product/profile/L_profile/finishes/gold/meshGold.png";

//RoseGold finishes
import MirrorImgR from "../../../assets/product/profile/L_profile/finishes/rosegold/mirrorroseGold.png";
import HairlineImgR from "../../../assets/product/profile/L_profile/finishes/rosegold/hairlineroseGold.png";
import StainImgR from "../../../assets/product/profile/L_profile/finishes/rosegold/stainroseGold.png";
import StraightlineImgR from "../../../assets/product/profile/L_profile/finishes/rosegold/straightlineroseGold.png";
import MeshImgR from "../../../assets/product/profile/L_profile/finishes/rosegold/meshroseGold.png";

//champgane finishes
import MirrorImgC from "../../../assets/product/profile/L_profile/finishes/champagne/mirrorChampagne.png";
import HairlineImgC from "../../../assets/product/profile/L_profile/finishes/champagne/hairlineChampagne.png";
import StainImgC from "../../../assets/product/profile/L_profile/finishes/champagne/stainChampagne.png";
import StraightlineImgC from "../../../assets/product/profile/L_profile/finishes/champagne/straightlineChampagne.png";
import MeshImgC from "../../../assets/product/profile/L_profile/finishes/champagne/meshChampagne.png";

const heroSlides = [
  {
    image: LivingImg,
    title: "Sleek Corner Protectors",
    description:
      "These L profiles offer a stylish and functional way to protect your wall corners from damage while enhancing your interior design.",
  },
  {
    image: HallImg,
    title: "Versatile Wall Accents",
    description:
      " L profiles can be used to create a variety of decorative effects, from geometric patterns to floating shelves, adding a unique touch to your space.",
  },
  {
    image: bedroom,
    title: "Modern Edge Enhancers",
    description:
      "L profiles are a modern and contemporary way to define and enhance the edges of your walls, creating a clean and polished look.",
  },
];

const page = () => {
  const finishes = [
    { name: "Mirror" },
    { name: "Hairline" },
    { name: "Stain" },
    { name: "Straightline" },
    { name: "Mesh" },
  ];

  // Array of colors and hex values
  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "Silver", hex: "#D5D5D7" },
    { name: "Gold", hex: "#E5B80B" },
    { name: "RoseGold", hex: "#DEA193" },
    { name: "Champagne", hex: "#837033" },
    // Add more colors if needed
  ];

  // Default selected color
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  // Object containing image paths for each color's finishes
  const finishImages = {
    Black: {
      Mirror: MirrorImg,
      Hairline: HairlineImg,
      Stain: StainImg,
      Straightline: StraightlineImg,
      Mesh: MeshImg,
    },
    Silver: {
      Mirror: MirrorImgS,
      Hairline: HairlineImgS,
      Stain: StainImgS,
      Straightline: StraightlineImgS,
      Mesh: MeshImgS,
    },
    Gold: {
      Mirror: MirrorImgG,
      Hairline: HairlineImgG,
      Stain: StainImgG,
      Straightline: StraightlineImgG,
      Mesh: MeshImgG,
    },
    RoseGold: {
      Mirror: MirrorImgR,
      Hairline: HairlineImgR,
      Stain: StainImgR,
      Straightline: StraightlineImgR,
      Mesh: MeshImgR,
    },
    Champagne: {
      Mirror: MirrorImgC,
      Hairline: HairlineImgC,
      Stain: StainImgC,
      Straightline: StraightlineImgC,
      Mesh: MeshImgC,
    },
    // Add more colors with their respective finish images
  };

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
      title: "Fluted Panel",
      image: fluted,
      link: "/products/profile/SSFlutedPanelProfile",
    },
    {
      title: "SS Balustrade",
      image: SSbalustrade,
      link: "/products/BalustradeSystem",
    },
    {
      title: "Decorative Sheet",
      image: DecorativeSheet,
      link: "/products/ssDecorativeSheet",
    },
    {
      title: "Invisible Grill",
      image: invisibleGril,
      link: "/products/SSInvisibleGrill",
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

  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true, // Animates only once
    threshold: 0.1, // 10% of the card needs to be visible to trigger the animation
  });

  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section className=" relative ">
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

      <div className=" flex flex-col overflow-hidden mx-auto container mt-14">
        <div className=" flex justify-center ">
          {/* <p className="text- text-xs lg:text-sm text-justify w-[80%] p-4">
            Rajgure Steel Industries offers a versatile range of stainless steel
            L profiles that are not only functional but also enhance the
            aesthetic appeal of spaces. Corner Protection Profiles made from
            premium stainless steel which will raise your spaces effortlessly.
            Crafted for durability and style, these profiles and trims provide
            seamless defense against daily wear. Uncover the elegance of our L
            Corner Protection Profiles, where functionality meets aesthetics
            perfectly. Redefine your corners with our premium solutions,
            ensuring long-lasting protection while adding a touch of
            sophistication to your surroundings. Choose quality, choose style –
            opt for your corner protection solutions to transform your space
            effortlessly.
          </p> */}
        </div>

        {/* new model open */}
        <section className="min-h-screen bg-gray-50 py-10">
          <div className="container mx-auto px-6 lg:px-20">
            {/* <h1 className="text-center text-5xl font-bold text-[#335c98] mb-10">T Profile</h1> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-8 px-14">
              {/* Finishes Section */}
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-3xl din-semibold text-[#335c98] mb-6">
                  Available Finishes
                </h2>

                <motion.div
                  variants={FadeUp(0.01)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 lg:grid-cols-2 gap-12 xl:gap-6 "
                >
                  {finishes.map((finish) => (
                    <div key={finish.name} className="relative">
                      <Image
                        className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105"
                        src={finishImages[selectedColor.name][finish.name]} // Dynamic image for each finish based on the selected color
                        alt={`${finish.name} - ${selectedColor.name}`}
                        width={200} // Increased width for better visibility
                        height={200} // Increased height for better visibility
                      />
                      {/* Finish Name below the image */}
                      <div className="text-center mt-2">
                        <h3 className="text-gray-700 font-semibold">
                          {finish.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Color Preview Section */}
              <div className="flex flex-col items-center lg:items-center lg:mt-52 space-y-14">
                {/* Title with Gradient */}
                <h2 className="text-2xl lg:text-4xl din-semibold text-primary">
                  Select a Color
                </h2>

                {/* Color Selection with Glow Effect */}
                <div className="flex flex-wrap justify-center gap-8 mb-12 max-w-3xl">
                  {colors.map((color) => (
                    <div
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`cursor-pointer w-12 h-12 rounded-full border-4 transition-all duration-300 transform ${
                        selectedColor.name === color.name
                          ? "border-[#335c98] scale-125 ring-4 ring-[#8ba4d5] shadow-xl"
                          : "border-gray-300"
                      } hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-[#8ba4d5]`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>

                {/* Color Details with Glassmorphism Effect */}
                <div className="w-full max-w-md rounded-2xl backdrop-blur-lg bg-white/30 p-6 shadow-lg transition-transform duration-500 hover:scale-105">
                  <div className="bg-gradient-to-r from-[#335c98] to-[#4b6fa6] text-white text-center py-4 rounded-t-2xl">
                    <h3 className="text-xl  tracking-wider din-regular">
                      Specifications
                    </h3>
                  </div>
                  <div className="p-6 space-y-4 bg-white/80 rounded-b-2xl shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="text-[#335c98] din-regular">
                        Selected Color
                      </span>
                      <span className="text-gray-700 din-regular">
                        {selectedColor.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#335c98] din-regular">
                        Thickness
                      </span>
                      <span className="text-gray-700 din-regular">
                        0.6 ~ 2.0 mm
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#335c98] din-regular">Size</span>
                      <span className="text-gray-700 din-regular">
                        T6 to T50 & more
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button with Neomorphism Style */}
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

            {/* Finishes and Sizes Section */}
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 px-14">
              <div className="text-left space-y-6">
                <h3 className="text-xl din-semibold text-[#335c98]">
                  Finishes
                </h3>
                <p className="text-lg text-gray-600 din-regular">
                  Mirror | Hairline | Mesh | Straightline | Stain
                </p>

                <h3 className="text-xl din-semibold text-[#335c98]">
                  Sizes <sub className="text-sm">mm</sub>{" "}
                  <span className="text-base">- W x H</span>
                </h3>
                <p className="text-lg text-gray-600 din-regular">
                  10 x 10 | 12 x 12 | 15 x 15 | 20 x 20 | 25 x 25 | 30 x 30
                </p>
              </div>

              {/* Dimensional Chart */}
              <div className="relative">
                <Image
                  className="rounded-lg shadow-lg md:ml-40 lg:ml-0 xl:ml-40 bg-gray-700"
                  src={messurement}
                  alt="dimensional chart"
                  width={350}
                  height={250}
                />
              </div>
            </div>
          </div>
        </section>
        {/* new model colse */}

        <div className="flex flex-col items-center w-full bg-gray-100">
          {/* Hero Section */}

          {/* What is Section */}
          <div className="w-full py-4 md:py-20 fade-in">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20 text-justify">
              <div className="lg:w-1/2 p-6">
                <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-4 din-semibold">
                  What is Stainless Steel L Profile?
                </h2>
                <p className="text-gray-600 text-sm md:text-[1.10rem] leading-relaxed din-regular">
                  A stainless steel L profile is a structural component with an
                  L-shaped cross-section, widely used in construction and
                  manufacturing. Known for their corrosion resistance and
                  durability, these profiles are ideal for wall decoration and
                  commercial wall design. Their strength makes them suitable for
                  load-bearing applications, while their sleek appearance
                  enhances modern aesthetics. Easy to fabricate and install,
                  stainless steel L profiles are a versatile choice for various
                  architectural projects.
                </p>
              </div>
              <div className=" w-[21rem] md:w-[38rem] lg:w-[50%] md:pl-14">
                <Image
                  className="rounded-lg  transition-transform duration-300 hover:scale-105"
                  src={Tprofile}
                  alt="Stainless Steel T Profile"
                />
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div className="w-full bg-[#f7f7f7] py-20 h-auto fade-in">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-6 din-semibold">
                Properties of Stainless Steel L Profiles
              </h2>
              <p className="text-gray-600 text-sm  md:text-[1.10rem] leading-relaxed text-justify px-10 din-regular">
                Stainless steel L profiles from Rajgure Steel Industry in Mumbai
                are an excellent choice for enhancing wall decoration and
                commercial wall design. Known for their corrosion resistance,
                these profiles ensure durability and longevity, making them
                perfect for corner wall installations. Their strength and
                stability provide reliable support for various structural
                applications, while their sleek appearance adds a modern touch
                to any space. Easy to fabricate and install, these profiles
                allow for efficient project execution and customization. With
                outstanding load-bearing capabilities, they serve both
                decorative and functional purposes. Rajgure Steel Industry's
                stainless steel L profiles combine aesthetic appeal with robust
                performance, making them a valuable asset in contemporary
                architectural projects.
              </p>
            </div>
          </div>
        </div>
        {/* example */}
        <div className="container mx-auto my-14 hidden xl:block p-4">
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="border-b-2 border-[#335c98] whitespace-nowrap">
                  <th className="py-6 px-4 text-xl md:text-[29px] text-[#335c98] din-semibold">
                    Benefits of Stainless Steel L Profiles
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    1. Durability and Strength
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    Stainless steel L profiles are known for their exceptional
                    durability and strength, capable of withstanding heavy loads
                    without compromising structural integrity. Their resistance
                    to corrosion ensures longevity, making them ideal for both
                    indoor and outdoor applications.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    2. Versatile Applications
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    The versatility of stainless steel L profiles allows them to
                    be utilized in a wide range of applications, from
                    architectural designs to automotive reinforcement. This
                    adaptability makes them suitable for various industries,
                    enhancing their functionality and appeal across multiple
                    sectors.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    3. Aesthetic Appeal
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    Featuring a sleek and polished finish, stainless steel L
                    profiles contribute a modern and sophisticated look to any
                    design. Their aesthetic appeal makes them a favored choice
                    for contemporary architecture and interior design projects,
                    elevating the overall visual impact.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    4. Easy Installation
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    Stainless steel L profiles are easy to fabricate and
                    install, streamlining the construction process. This ease of
                    use not only reduces labor costs and time but also allows
                    for quick project completion, making them a practical choice
                    for builders and designers alike.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* example */}
        {/* example phone */}
        <div className="container mx-auto my-14 xl:hidden">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#335c98] mb-4">
              Benefits of Stainless Steel T Profiles
            </h2>
            <ul className="space-y-6 text-justify ">
              <li className="text-base text-gray-600 din-regular">
                <strong className=" text-[#335c98]">
                  1. Durability and Strength:
                </strong>{" "}
                Stainless steel L profiles are renowned for their exceptional
                durability and strength. They can withstand heavy loads and
                resist corrosion, making them ideal for both indoor and outdoor
                applications.
              </li>
              <li className="text-base text-gray-600 din-regular">
                <strong className=" text-[#335c98]">
                  2. Versatile Applications:
                </strong>{" "}
                The versatility of stainless steel L profiles allows them to be
                used in a wide range of applications, from architectural designs
                to automotive reinforcement. Their adaptability makes them
                suitable for various industries, enhancing their utility.
              </li>
              <li className="text-base text-gray-600  din-regular">
                <strong className=" text-[#335c98]">
                  3. Aesthetic Appeal:
                </strong>{" "}
                With a sleek and polished finish, stainless steel L profiles add
                a modern touch to any design. Their aesthetic appeal makes them
                a popular choice for contemporary architecture and interior
                design projects.
              </li>
              <li className="text-base text-gray-600  din-regular">
                <strong className=" text-[#335c98]">
                  4. Easy Installation:
                </strong>{" "}
                Stainless steel L profiles are easy to fabricate and install,
                allowing for quick and efficient project completion. This ease
                of use reduces labor costs and time, making them a practical
                choice for builders and designers.
              </li>
            </ul>
          </div>
        </div>

        {/* example phone colse  */}

        <main className="flex flex-col justify-center text-justify gap-20 m-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              ref={card1Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card1InView ? "animate-wave delay-100" : "opacity-0"}`}
            >
              <h2 className="text-xl  text-[#335c98] din-semibold mb-4 text-center">
                Architectural and Construction Applications.
              </h2>
              <p className="text-gray-600 text-xs md:text-base din-regular">
                L profiles are integral components in architectural and
                construction applications, known for their strength,
                versatility, and aesthetic appeal. Their unique L-shaped
                cross-section provides a robust framework that is essential for
                various structural and decorative purposes, making them a
                preferred choice among architects and builders.
              </p>
            </div>

            {/* Card 2 */}
            <div
              ref={card2Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card2InView ? "animate-wave delay-200" : "opacity-0"}`}
            >
              <h2 className="text-xl font-semibold text-[#335c98] din-semibold mb-4 text-center">
                Furniture and Shelving.
              </h2>
              <p className="text-gray-600 text-xs md:text-base din-regular">
                L profiles are characterized by their distinct L shape, which
                allows for seamless integration into a wide range of furniture
                designs. This profile can be used to create clean lines and
                modern silhouettes, making it ideal for contemporary interiors.
                The sleek design of L profiles complements various materials,
                including wood, glass, and metal, enabling designers to achieve
                a cohesive look that enhances the overall decor of a space.
              </p>
            </div>

            {/* Card 3 */}
            <div
              ref={card3Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card3InView ? "animate-wave delay-300" : "opacity-0"}`}
            >
              <h2 className="text-xl font-semibold text-center text-[#335c98] din-semibold mb-4">
                Automotive and Marine Industry.
              </h2>
              <p className="text-gray-600 text-xs md:text-base din-regular">
                Stainless steel L profiles are integral components in both the
                automotive and marine industries, offering a unique combination
                of strength, durability, and aesthetic appeal. In automotive
                applications, these profiles are commonly utilized in car
                frames, providing essential reinforcement while significantly
                minimizing overall weight. This lightweight characteristic is
                crucial for enhancing fuel efficiency and performance in modern
                vehicles.
              </p>
            </div>
          </div>
        </main>
        <div className="w-full py-20 fade-in mt-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-[35px]  text-[#335c98] mb-16 din-semibold">
              Other Products
            </h2>
            <Swiper
              modules={[Pagination, Scrollbar, A11y, Autoplay]} // Include the required Swiper modules
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
      </div>
    </section>
  );
};

export default page;
