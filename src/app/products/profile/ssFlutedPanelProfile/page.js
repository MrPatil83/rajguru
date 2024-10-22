// import React from 'react'
// import SSFlutedPanelProfile from './SSFlutedPanelProfile'


// //SEO
// export const metadata = {
//   title: "stainless steel fluted panel",
//   description:
//     "Transform your living space with our stunning stainless steel fluted panels, available in a variety of colors to suit any design aesthetic. These elegant panels add texture and depth to your walls, making them perfect for modern and traditional decor alike. Ideal for accent walls, room dividers, and more, our fluted panels are the ultimate choice for stylish home interiors.",
//   name: "viewport",
//   content: "width=device-width, initial-scale=1",
//   property: "og:type",
//   content: "website",
//   property: "og:url",
//   content: "https://rajgurusteel.vercel.app/products/profile/SSFlutedPanelProfile",
//   keywords:[
//     "stainless steel fluted panel",
//     "fluted wall panels",
//     "home decor fluted panels",
//     "decorative wall panels",
//     "custom fluted panels",
//     "colorful fluted panels",
//     "modern wall decor",
//     "textured wall panels",
//     "fluted panel design",
//     "interior design fluted panels",
//     "stainless steel wall cladding",
//     "fluted panel applications",
//     "elegant wall accents",
//     "fluted panel colors",
//     "stylish home interiors",
//     "Stainless Steel fluted panel",
//     "stainless steel decorative profiles",
//     "stainless steel fluted panels",
//     "fluted wall panels for home decor",
//     "decorative stainless steel panels",
//     "interior design fluted panels",
//     "modern wall design with fluted panels",
//     "stainless steel wall cladding",
//     "fluted panel wall accents",
//     "elegant wall design ideas",
//     "textured wall panels for interiors",
//     "custom stainless steel fluted panels",
//     "fluted panel applications in homes",
//     "luxury home decor panels",
//     "stainless steel panel finishes",
//     "fluted wall panel installation",
//     "contemporary interior wall design"
// ]
// };
// export default function page() {
//   return (
//     <div>
//       <SSFlutedPanelProfile/>
//     </div>
//   )
// }


// THIS CODE IS ALL FINISHES STRUCTURE

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import wallImg from "../../../assets/product/profile/T_profile/wall.webp";
// import upofile from "../../../assets/product/profile/U_profile/Uprofile.webp";
import flutedImg from "../../../assets/product/profile/flutedPanel/flutedImg.webp";
import UProfile from "../../../assets/RelatedProducts/UProfile.webp";
import TProfile from "../../../assets/product/profile/T_profile/wall.webp";
import LProfile from "../../../assets/RelatedProducts/LProfile.webp";
import customized from "../../../assets/RelatedProducts/customized.webp";
import SSbalustrade from "../../../assets/RelatedProducts/SSbalustrade.webp";
import invisibleGril from "../../../assets/RelatedProducts/invisibleGril.webp";
import DecorativeSheet from "../../../assets/RelatedProducts/decorativesheet.webp";
import queuemanager from "../../../assets/RelatedProducts/queuemanager.webp";
import bg from "../../../assets/product/profile/flutedPanel/bg.webp";
import messurement from "../../../assets/product/profile/L_profile/messurement.png";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { FadeRight, FadeLeft } from "../../../components/utility/animation.jsx";
import { motion, AnimatePresence } from "framer-motion";
import LivingImg from "../../../assets/product/profile/flutedPanel/slider/Tvwall.webp";
import HallImg from "../../../assets/product/profile/flutedPanel/slider/Tvunit.webp";
import bedroom from "../../../assets/product/profile/flutedPanel/slider/wall.webp";

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
    title: "Fluted Stainless Steel Panels for Modern Wall Decor",
    description:
      "Transform your interiors with stunning fluted stainless steel panels that add depth and sophistication to your modern wall decor.",
  },
  {
    image: HallImg,
    title: "Sleek Fluted Stainless Steel Panels for Contemporary Spaces",
    description:
      "Achieve a sleek, contemporary look effortlessly with fluted stainless steel panels, perfect for enhancing visual interest in modern wall decor.",
  },
  {
    image: bedroom,
    title: "Fluted Wall Panels for Lasting Impact",
    description:
      "Combine beauty and durability with fluted wall panels, ideal for both residential and commercial settings, creating a lasting impression with durable wall panels.",
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
      title: "L Profile",
      image: LProfile,
      link: "/products/profile/lProfile",
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
        <div className=" flex justify-center">
          {/* <p className=" text-slate-500 text-xs lg:text-sm text-justify w-[80%] p-4">
            Let Rajguru Steel Industry provide you with elegant decor of fluted
            stainless steel panels for your home. This can enhance your decor
            ideas for the wall in a modern way by the mix of strength and
            elegance. With assorted finishes and colors to choose from, easily
            create stunning interiors with great options for any space.
          </p> */}
        </div>

        {/* new model open */}
        <section className="min-h-screen bg-gray-50 py-10">
          <div className="container mx-auto px-6 lg:px-20">
            {/* <h1 className="text-center text-5xl font-bold text-[#335c98] mb-10">T Profile</h1> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-8">
              {/* Finishes Section */}
              <div className="flex flex-col items-center lg:items-start xl:px-14">
                <h2 className="text-3xl din-semibold text-[#335c98] mb-6">
                  Available Finishes
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 xl:gap-6">
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
                </div>
              </div>

              {/* Color Preview Section */}
              <div className="flex flex-col items-center lg:items-center lg:mt-52 space-y-14">
                {/* Title with Gradient */}
                <h2 className="text-2xl lg:text-4xl din-regular text-primary din-semibold">
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
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:px-14">
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
                  What is Stainless Steel Fluted Panel Profile?
                </h2>
                <p className="text-gray-600 text-xs md:text-[1rem] leading-relaxed din-regular">
                  It is a modern feature wall panels function to enhance walls
                  in both residential and commercial spaces. With their vertical
                  grooves adding texture and depth to the look, these panels
                  stand self-characterized with prowess in contemporary touches.
                  Discover our range of styles for elevating interiors,
                  possessing both hardiness and elegance.
                </p>
              </div>
              <div className="w-[21rem] md:w-[38rem] lg:w-[50%] md:pl-14">
                <Image
                  className="rounded-lg  transition-transform duration-300 hover:scale-105"
                  src={flutedImg}
                  alt="Stainless Steel T Profile"
                />
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div className="w-full bg-[#f7f7f7] py-20 h-auto fade-in">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className=" text-lg md:text-xl md:whitespace-normal md:text-[27px]  text-[#335c98] mb-6 din-semibold">
                Properties of Stainless Steel Fluted Panel Profiles
              </h2>
              <p className="text-gray-600 text-xs  md:text-[1rem] leading-relaxed text-justify px-10 din-regular">
                A stainless steel fluted panel is extremely strong and resistant
                to corrosion while requiring little maintenance; thus, it is the
                ideal material for residential or commercial use. Its unique
                shape offers texture and visual interest to any decor wall, and
                acts like a beautiful focal point to showcase modern interior
                designs. Available in a wide variety of finishes and colors,
                these chic panels would provide an astonishing look that
                elevates your space while providing beauty for a long time.
                Consider stainless steel fluted panels for a touch of timeless
                elegance in a contemporary way! Give your interiors a stylish
                makeover effortlessly with this décor solution!
              </p>
            </div>
          </div>
        </div>
        {/* example */}
        <div className="container mx-auto my-14 hidden xl:block p-14 px-14 ">
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="border-b-2 border-[#335c98] whitespace-nowrap">
                  <th className="py-6 px-4 text-xl md:text-[29px] text-[#335c98] din-semibold">
                    Benefits of Stainless Steel Fluted Panel Profiles
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    1. Corrosion Resistance
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    Stainless steel fluted panel profiles offer great
                    versatility with maximum corrosion resistance ensuring their
                    usage for many years in a wide variety of environments, from
                    kitchens to outdoors. Their strong build gives them
                    durability and a modern look, which make them ideal for
                    functional and aesthetic purposes alike.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    2. Durability
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    These panels are designed to stand up to heavy wear, making
                    for a robust and reliable solution for both residential and
                    commercial applications. Their strength allows them to look
                    good and remain structurally intact, making them
                    particularly effective in high-traffic areas or more rugged
                    applications.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    3. Aesthetic Appeal
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    heir unique fluted shape helps create a stunning feature on
                    any interior or exterior wall, bringing a contemporary look
                    and feel to any project. The way these panels catch and
                    reflect light has a truly impressive impact, making the
                    patterns and colours all the more interesting. It's a
                    high-end surface with a unique twist which is perfect for
                    use behind furniture or artwork.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    4. Versatility
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    stainless steel fluted panels supply unlimited uses for
                    equally business and household settings, perfect for a
                    design-forward wall creation. Whether utilized for
                    commercial landscapes like dining places and places of
                    business or for in-home makes use of, these panels
                    conveniently incorporate inside of almost any style,
                    simultaneously offering improved usability and Visual
                    attraction.
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
            <h2 className="text-2xl text-[#335c98] din-semibold mb-4">
              Benefits of Stainless Steel Fluted Panel Profiles
            </h2>
            <ul className="space-y-6 text-justify ">
              <li className="text-base text-gray-500 din-regular">
                <strong className=" text-[#335c98]">
                  1. Corrosion Resistance:
                </strong>{" "}
                Stainless steel fluted panels offer universal corrosion
                resistance to ensure longer lasting effects in any type of
                ambient, be it a kitchen or outdoor construction. They provide
                greater modern usage and with slick aesthetics lending to almost
                any functional and decorative assignment
              </li>
              <li className="text-base text-gray-500 din-regular">
                <strong className=" text-[#335c98]">2. Durability:</strong>{" "}
                These panels provide a durable solution against the rigors of a
                residential and commercial environment; strong enough to remain
                looking good and stable for use within the high-traffic and
                raucous environments, they honor the mettle of their use.
              </li>
              <li className="text-base text-gray-500  din-regular">
                <strong className=" text-[#335c98]">
                  3. Aesthetic Appeal:
                </strong>{" "}
                Their novel fluted design creates a dazzling feature on any wall
                and is intriguingly modern for both straightforward interiors
                and exteriors. These panels pick up and reflect the light in
                just the right way to enhance patterns and colors-perfect for
                high-end surfaces behind pieces of furniture or works of art.
              </li>
              <li className="text-base text-gray-500  din-regular">
                <strong className=" text-[#335c98]">4. Versatility:</strong>{" "}
                Stainless steel rippled panels provide virtually endless
                applications in the commercial and residential spatial
                functions, making them particularly well-suited for
                design-leading wall creations. In restaurants, offices, and
                homes, panels shine by fitting perfectly within styles, while
                augmenting the usability and aesthetic performance.
              </li>
            </ul>
          </div>
        </div>

        {/* example phone colse  */}

        <main
          ref={card1Ref}
          className="flex flex-col justify-center text-justify gap-20 m-4 xl:px-14 "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              //   ref={card1Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card1InView ? "animate-wave delay-100" : "opacity-0"}`}
            >
              <h2 className="text-xl din-semibold text-[#335c98] din-regular mb-4 text-center">
                Architectural and Construction Applications.
              </h2>
              <p className="text-gray-600 text-xs md:text-base din-regular">
                Stainless steel fluted panels are ideal for architectural and
                construction applications, providing a sleek and modern solution
                for interior wall design. These panels enhance aesthetic appeal
                while offering durability and corrosion resistance, making them
                perfect for both residential and commercial spaces. Elevate your
                project with stylish stainless steel fluted panels that
                transform ordinary walls into stunning decorative features.
              </p>
            </div>

            {/* Card 2 */}
            <div
              //   ref={card2Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card1InView ? "animate-wave delay-200" : "opacity-0"}`}
            >
              <h2 className="text-xl text-[#335c98] din-semibold mb-4 text-center">
                Furniture and Shelving.
              </h2>
              <p className="text-gray-600 text-xs md:text-base din-regular">
                Stainless steel fluted panels are an excellent choice for
                furniture and shelving, adding a contemporary touch to interior
                wall design. Their unique texture and sleek finish enhance the
                aesthetic appeal of cabinets, bookshelves, and display units.
                Use these stylish steel panels to create eye-catching decorative
                features that elevate your space while ensuring durability and
                functionality.
              </p>
            </div>

            {/* Card 3 */}
            <div
              //   ref={card3Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card1InView ? "animate-wave delay-300" : "opacity-0"}`}
            >
              <h2 className="text-xl  text-center text-[#335c98] din-semibold mb-4">
                Automotive and Marine Industry.
              </h2>
              <p className="text-gray-600 text-xs md:text-base din-regular">
                Stainless steel fluted panels are increasingly utilized in the
                automotive and marine industry, offering a stylish and durable
                solution for interior wall design. Their corrosion-resistant
                properties make them ideal for high-moisture environments,
                enhancing both functionality and aesthetics. Upgrade your
                vehicle or boat with these sleek steel panels to create a
                modern, decorative finish that stands the test of time.
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
                      <h3 className="mt-4 text-xl  text-[#335c98] din-regular">
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
