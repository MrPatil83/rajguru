// import React from "react";
// import SSDecorativeSheet from "./SSDecorativeSheet";
// export const metadata = {
//   title: "Stainless Steel Decorative",

//   description:
//     "Transform your spaces with our premium stainless steel decorative sheets, perfect for enhancing interior walls in both residential and commercial settings. Ideal for wall cladding, lift passages, and decorative wall designs, these sheets offer a modern touch while ensuring durability and elegance. Elevate your home interiors and commercial designs with our versatile stainless steel solutions that blend style and functionality seamlessly.",
//   name: "viewport",
//   content: "width=device-width, initial-scale=1",
//   property: "og:type",
//   content: "website",
//   property: "og:url",
//   content: "https://rajgurusteel.vercel.app/products/SSDecorativeSheet",
//   keywords: [
//     "decorative sheet metal",
//     "aluminum decorative sheet metal",
//     "stainless steel decorative sheet",
//     "stainless steel decorative sheet metal",
//     "decorative sheet metal ideas",
//     "brass decorative sheet metal",
//     "copper decorative sheet metal",
//     "decorative sheet metal for radiator covers",
//     "Decorative Stainless Steel Wall Panels",
//     "Stainless Steel Decorative Sheets",
//     "Interior Wall Design Stainless Steel",
//     "Custom Stainless Steel Sheets",
//     "Stainless Steel Sheets for Commercial Use",
//     "Residential Stainless Steel Wall Decor",
//     "Textured Stainless Steel Sheets",
//     "Colored Stainless Steel Decorative Sheets",
//     "Stainless Steel Lift Passage Design",
//     "Durable Decorative Wall Panels",
//     "Modern Interior Design Stainless Steel",
//     "Stainless Steel Sheet for Home Interiors",
//     "Elegant Stainless Steel Wall Solutions",
//   ],
// };
// export default function page() {
//   return (
//     <div>
//      <SSDecorativeSheet/>
//     </div>
//   );
// }

// THIS CODE IS ALL FINISHES STRUCTURE

'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
// import wallImg from "../../assets/product/profile/T_profile/wall.webp";
import allFinishes from "../../assets/product/decorativesheet/middle.webp";
import UProfile from "../../assets/RelatedProducts/UProfile.webp";
import TProfile from "../../assets/product/profile/T_profile/wall.webp";
import SSbalustrade from "../../assets/RelatedProducts/SSbalustrade.webp";
import LProfile from "../../assets/RelatedProducts/LProfile.webp";
import fluted from "../../assets/RelatedProducts/fluted.webp";
import customized from "../../assets/RelatedProducts/customized.webp";
import invisibleGril from "../../assets/RelatedProducts/invisibleGril.webp";
import queuemanager from "../../assets/RelatedProducts/queuemanager.webp";
// import bg from "../../assets/product/ssdecorativesheet/bg.webp";
import Umessurement from "../../assets/product/decorativesheet/middle.webp";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { FadeRight, FadeLeft } from "../../components/utility/animation.jsx";
import { motion, AnimatePresence } from "framer-motion";
import LivingImg from "../../assets/product/decorativesheet/hero/hall.webp";
import HallImg from "../../assets/product/decorativesheet/hero/livingHall.webp";
import bedroom from "../../assets/product/decorativesheet/hero/bedroom.webp";

// Black finishes
import MirrorImg from "../../assets/product/decorativesheet/finishes/black/mirrorBlack.webp";
import HairlineImg from "../../assets/product/decorativesheet/finishes/black/hairlineBlack.webp";
import StainImg from "../../assets/product/decorativesheet/finishes/black/stainBlack.webp";
import StraightlineImg from "../../assets/product/decorativesheet/finishes/black/straightlineBlack.webp";
import MeshImg from "../../assets/product/decorativesheet/finishes/black/meshBlack.webp";

//Silver finishes
import MirrorImgS from "../../assets/product/decorativesheet/finishes/silver/mirrorSilver.webp";
import HairlineImgS from "../../assets/product/decorativesheet/finishes/silver/hairlineSilver.webp";
import StainImgS from "../../assets/product/decorativesheet/finishes/silver/stainSilver.webp";
import StraightlineImgS from "../../assets/product/decorativesheet/finishes/silver/straightlineSilver.webp";
import MeshImgS from "../../assets/product/decorativesheet/finishes/silver/meshSilver.webp";

//Gold finishes
import MirrorImgG from "../../assets/product/decorativesheet/finishes/gold/mirrorGold.webp";
import HairlineImgG from "../../assets/product/decorativesheet/finishes/gold/hairlineGold.webp";
import StainImgG from "../../assets/product/decorativesheet/finishes/gold/stainGold.webp";
import StraightlineImgG from "../../assets/product/decorativesheet/finishes/gold/straightlineGold.webp";
import MeshImgG from "../../assets/product/decorativesheet/finishes/gold/meshGold.webp";

//RoseGold finishes
import MirrorImgR from "../../assets/product/decorativesheet/finishes/rosegold/mirrorroseGold.webp";
import HairlineImgR from "../../assets/product/decorativesheet/finishes/rosegold/hairlineroseGold.webp";
import StainImgR from "../../assets/product/decorativesheet/finishes/rosegold/stainroseGold.webp";
import StraightlineImgR from "../../assets/product/decorativesheet/finishes/rosegold/straightlineroseGold.webp";
import MeshImgR from "../../assets/product/decorativesheet/finishes/rosegold/meshroseGold.webp";

//ChampagnU finishes
import MirrorImgC from "../../assets/product/decorativesheet/finishes/champagne/mirrorChampagne.webp";
import HairlineImgC from "../../assets/product/decorativesheet/finishes/champagne/hairlineChampagne.webp";
import StainImgC from "../../assets/product/decorativesheet/finishes/champagne/stainChampagne.webp";
import StraightlineImgC from "../../assets/product/decorativesheet/finishes/champagne/straightlineChampagne.webp";
import MeshImgC from "../../assets/product/decorativesheet/finishes/champagne/meshChampagne.webp";

const heroSlides = [
  {
    image: LivingImg,
    title: "Elevate Your Space with Fluted Design",
    description:
      "Transform your interiors with stainless steel decorative sheets featuring elegant fluted designs. Perfect for modern wall decor, they add sophistication and style to any setting.",
  },
  {
    image: HallImg,
    title: " Durable Decorative Solutions for Any Room",
    description:
      "Discover the beauty and durability of fluted stainless steel panels. Ideal for both residential and commercial spaces, these decorative sheets enhance visual interest and create lasting impressions.",
  },
  {
    image: bedroom,
    title: "Stylish Stainless Steel Decorative Sheets with Fluted Texture",
    description:
      "Achieve a contemporary aesthetic with stylish stainless steel decorative sheets that showcase a unique fluted texture. Perfect for adding depth and elegance to your modern wall decor.",
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
      title: "Invisible Grill",
      image: invisibleGril,
      link: "/products/SSInvisibleGrill",
    },
    // {
    //   title: "Decorative Sheet",
    //   image: DecorativeSheet,
    //   link: "/products/ssDecorativeSheet",
    // },
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
    <section className="relative">
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
        {/* new model open */}
        <section className=" bg-gray-50 py-10">
          <div className=" mx-auto px-6 lg:px-20">
            {/* <h1 className="text-center text-5xl font-bold text-[#335c98] mb-10">T Profile</h1> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-8 xl:px-14">
              {/* Finishes Section */}
              <div className="flex flex-col items-center lg:items-start">
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
                <h2 className="text-2xl din-semibold lg:text-4xl text-primary">
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
                    <h3 className="text-xl  tracking-wider din-medium">
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
                <p className="text-lg text-gray-600  din-regular">
                  Mirror | Hairline | Mesh | Straightline | Stain
                </p>

                <h3 className="text-xl din-semibold text-[#335c98]">
                  Sizes <sub className="text-sm">mm</sub>{" "}
                  <span className="text-base">- W x H</span>
                </h3>
                <p className="text-lg text-gray-600 din-regular">
                  10 x 3 x 10 | 10 x 5 x 10 | 10 x 8 x 10
                </p>
              </div>

              {/* Dimensional Chart */}
              <div className="relative">
                <Image
                  className="rounded-lg shadow-lg md:ml-40 lg:ml-0 xl:ml-[6rem] bg-gray-700"
                  src={Umessurement}
                  alt="dimensional chart"
                  width={450}
                  height={250}
                />
              </div>
            </div>
          </div>
        </section>
        {/* new model colse */}

        <div className="flex flex-col items-center w-full  bg-gray-100">
          {/* Hero Section */}

          {/* What is Section */}
          <div className="w-full py-4 md:py-20 fade-in">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center text-justify">
              <div className="lg:w-1/2 p-6">
                <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-4 din-semibold">
                  What is Stainless Steel Decorative Sheets?
                </h2>
                <p className="text-gray-600 text-xs md:text-[1rem] leading-relaxed din-regular">
                  Stainless steel decorative sheets are perfect for both
                  residential and commercial applications. They offer a modern
                  and sophisticated look that can elevate any interior design.
                  Stainless steel decorative sheets are an excellent choice for
                  anyone looking to enhance their space with a combination of
                  style, durability, and ease of maintenance. Whether for a
                  modern kitchen, a stylish office, or custom furniture, these
                  sheets provide a sleek and contemporary solution that meets
                  both aesthetic and practical needs.
                </p>
              </div>
              <div className=" w-[21rem] md:w-[38rem] lg:w-[50%] md:pl-14">
                <Image
                  className="rounded-lg  transition-transform duration-300 md:hover:scale-105"
                  src={allFinishes}
                  alt="Stainless Steel decorative sheet Profile"
                />
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div className="w-full bg-[#f7f7f7] py-20 h-auto fade-in">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-6 din-semibold">
                Properties of Stainless Steel Decorative Sheets
              </h2>
              <p className="text-gray-600 text-xs  md:text-[1rem] leading-relaxed text-justify px-10 din-regular">
                Stainless steel decorative sheets are premium panels that serve
                both aesthetic and functional purposes in home and commercial
                environments. Stainless steel decorative sheets are an excellent
                choice for enhancing interiors with a combination of elegance
                and functionality. Their durability, variety of finishes, and
                ease of maintenance make them ideal for both residential and
                commercial applications. Whether you're looking to create a
                stunning accent wall, a stylish kitchen backsplash, or custom
                furniture, these decorative panels offer endless design
                possibilities.
              </p>
            </div>
          </div>
        </div>
        {/* example */}
        <div className="container mx-auto my-14 hidden xl:block xl:px-14">
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="border-b-2 border-[#335c98] whitespace-nowrap">
                  <th className="py-6 px-4 text-xl md:text-[29px] text-[#335c98] din-semibold">
                    Benefits of Stainless Steel Decorative Sheets
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    1. Corrosion Resistance
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    Stainless steel decorative sheets are highly resistant to
                    corrosion, ensuring long-lasting beauty in kitchens,
                    bathrooms, and other moisture-prone areas.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    2. Durability
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    Designed to withstand wear and tear, these decorative panels
                    are perfect for both residential and commercial spaces,
                    providing a robust solution for high-traffic environments..
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    3. Aesthetic Appeal
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    Available in stunning finishes like brushed and mirrored,
                    stainless steel sheets enhance the visual impact of any
                    wall, making them a chic choice for modern interiors..
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    4. Versatility
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    Ideal for a range of applications, from accent walls to
                    kitchen backsplashes, stainless steel decorative sheets
                    offer endless design possibilities for any home or business.
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
              <li className="text-base text-gray-500 din-regular">
                <strong className=" text-[#335c98]">
                  1. Corrosion Resistance:
                </strong>{" "}
                Stainless steel is highly resistant to rust and corrosion,
                making these sheets ideal for environments exposed to moisture,
                such as kitchens and bathrooms.
              </li>
              <li className="text-base text-gray-500 din-regular">
                <strong className=" text-[#335c98]">2. Durability:</strong> They
                can withstand wear and tear, making them suitable for
                high-traffic areas without showing signs of damage.
              </li>
              <li className="text-base text-gray-500  din-regular">
                <strong className=" text-[#335c98]">
                  3. Aesthetic Appeal:
                </strong>{" "}
                Available in brushed, mirrored, and patterned finishes, these
                sheets can complement various design styles, from modern to
                industrial. They can be cut and shaped to fit specific design
                needs, allowing for unique applications in any space.
              </li>
              <li className="text-base text-gray-500  din-regular">
                <strong className=" text-[#335c98]">4. Enhanced Safety:</strong>{" "}
                Stainless steel is non-combustible, providing an added layer of
                safety in case of fire. Unlike some other materials, stainless
                steel does not release harmful chemicals, making it a safe
                choice for indoor environments.
              </li>
            </ul>
          </div>
        </div>

        {/* example phone colse  */}

        <main
          ref={card1Ref}
          className={`flex flex-col justify-center text-justify gap-20 m-4 xl:px-14 `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              // ref={card1Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
               ${card1InView ? "animate-wave delay-100" : "opacity-0"} `}
            >
              <h2 className="text-xl text-[#335c98] din-semibold mb-4 text-center">
                Architectural and Construction Applications.
              </h2>
              <p className="text-gray-600 text-xs md:text-base din-regular">
                Stainless steel decorative sheets are widely used in
                architectural and construction projects due to their unique
                combination of aesthetic appeal, durability, and versatility.
                Stainless steel decorative sheets play a vital role in various
                architectural and construction applications, offering a blend of
                beauty, functionality, and sustainability. Their versatility
                allows for creative design solutions in both interior and
                exterior settings, making them a preferred choice for modern
                architecture.
              </p>
            </div>

            {/* Card 2 */}
            <div
              // ref={card2Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
               ${card1InView ? "animate-wave delay-500" : "opacity-0"}`}
            >
              <h2 className="text-xl text-[#335c98] din-semibold mb-4 text-center">
                Furniture and Shelving.
              </h2>
              <p className="text-gray-600 text-xs md:text-base din-regular">
                Stainless steel decorative sheets are increasingly popular in
                furniture and shelving design due to their unique properties and
                aesthetic appeal. Stainless steel decorative sheets are an
                excellent choice for furniture and shelving design, offering a
                blend of modern aesthetics, durability, and low maintenance.
                Their versatility allows for a wide range of applications,
                making them suitable for both residential and commercial
                environments. By incorporating stainless steel into furniture
                designs, you can achieve a stylish and functional look that
                stands the test of time.
              </p>
            </div>

            {/* Card 3 */}
            <div
              // ref={card3Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
               ${card1InView ? "animate-wave delay-700" : "opacity-0"} `}
            >
              <h2 className="text-xl text-center text-[#335c98] din-semibold mb-4">
                Automotive and Marine Industry.
              </h2>
              <p className="text-gray-600 text-xs md:text-base din-regular">
                Stainless steel decorative sheets are widely utilized in the
                automotive and marine industries due to their unique properties
                and advantages. Stainless steel decorative sheets offer numerous
                benefits in the automotive and marine industries, including
                corrosion resistance, durability, and aesthetic appeal. Proper
                maintenance is essential to ensure longevity, and adherence to
                regulations is crucial for safety and environmental compliance.
                By leveraging the advantages of stainless steel, manufacturers
                can create high-quality, attractive products that meet the
                demands of these challenging environments.
              </p>
            </div>
          </div>
        </main>

        <div className="flex justify-center flex-col m-4 lg:px-36">
          <h3 className=" text-2xl pl-2 md:pl-0 mx-auto md:text-4xl text-primary din-semibold">
            Why Choose Stainless Steel Decorative Sheets?
          </h3>
          <p className="text-sm lg:text-base din-regular text-secondary text-justify w-[100%] p-4">
            Rajguru Steel Industries offers high-quality stainless steel
            decorative sheets that elevate your interiors with elegance and
            durability. Our corrosion-resistant panels are ideal for various
            applications, including wall coverings, stylish backsplashes, and
            custom furniture designs. With finishes like brushed and mirrored,
            our sheets not only provide a sleek, modern look but also ensure
            easy maintenance. Perfect for both residential and commercial
            spaces, our stainless steel decorative solutions combine style and
            functionality, making them the ideal choice for transforming any
            environment.
          </p>
        </div>
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
        {/* swiper close */}
      </div>
    </section>
  );
};

export default page;

