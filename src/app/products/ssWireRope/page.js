// import React from 'react'
// import SSWireRope from './SSWireRope'

// //SEO
// export const metadata={
//   title:"stainless steel wire rope",
//   description:"Discover our premium stainless steel wire rope, designed for durability and strength in various applications, including construction, marine, and industrial uses. Our stainless steel wire ropes are resistant to corrosion and wear, ensuring long-lasting performance in challenging environments. Available in multiple diameters and configurations, our wire ropes can be customized to meet your specific needs.",
//   name: "viewport",
//   content: "width=device-width, initial-scale=1",
//   property: "og:type",
//   content: "website",
//   property: "og:url",
//   content: "https://rajgurusteel.vercel.app/products/SSWireRope",
//   keywords:[
//     "stainless steel wire rope",
//     "wire rope accessories",
//     "stainless steel cable",
//     "wire rope fittings",
//     "marine wire rope",
//     "industrial wire rope",
//     "stainless steel lifting cable",
//     "wire rope slings",
//     "corrosion resistant wire rope",
//     "high strength wire rope",
//     "custom wire rope solutions",
//     "wire rope for construction",
//     "stainless steel wire rope specifications",
//     "wire rope safety standards",
//     "stainless steel wire rope suppliers",
//     "wire rope sling",
//     "wire rope",
//     "clamp for wire rope",
//     "steel wire rope",
//     "ss wire rope",
//     "wire rope cable",
//     "wire rope crossword clue",
//     "ss wire rope manufacturers in india",
//     "3mm ss wire rope",
//     "4mm ss wire rope",
//     "8mm ss wire rope",
//     "fishing",
//     "marine",
//     "Stainless ",
//     " Wire Rope 2MM",
//     "Thickness",
//     "Cable Railing",
//     "glass balcony wire railing",

// ],
// }

// export default function page() {
//   return (
//     <div>
//       <SSWireRope/>
//     </div>
//   )
// }


"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { FaCheck } from "react-icons/fa6";
// import bg from "../../assets/product/SSWireRope/bg.webp";
import outdoorImg from "../../assets/product/WireRope/product/outdoorRopeBalcony.webp";
import StairImg from "../../assets/product/WireRope/product/stairs.webp";
import BalconyImg from "../../assets/product/WireRope/product/blackRailing.jpg";
import Link from "next/link";
import hangingHook from "../../assets/product/WireRope/accessoris/hangingHook.webp";
import cableWire from "../../assets/product/WireRope/accessoris/WireRope.webp";
import thimble from "../../assets/product/WireRope/accessoris/thimble.webp";
import {
  FadeDown,
  FadeLeft,
  FadeRight,
} from "../../components/utility/animation.jsx";
import { motion, AnimatePresence } from "framer-motion";

import UProfile from "../../assets/RelatedProducts/UProfile.webp";
import LProfile from "../../assets/RelatedProducts/LProfile.webp";
import fluted from "../../assets/RelatedProducts/fluted.webp";
import TProfile from "../../assets/product/profile/T_profile/wall.webp";
import customized from "../../assets/RelatedProducts/customized.webp";
import SSbalustrade from "../../assets/RelatedProducts/SSbalustrade.webp";
import invisibleGril from "../../assets/RelatedProducts/invisibleGril.webp";
import queuemanager from "../../assets/RelatedProducts/queuemanager.webp";
import DecorativeSheet from "../../assets/RelatedProducts/decorativesheet.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LivingImg from "../../assets/product/WireRope/slider/heroBlueView.webp";
import HallImg from "../../assets/product/WireRope/slider/heroCityBalcony.webp";
import bedroom from "../../assets/product/WireRope/slider/heroTerrace.webp";
import BalconyImage1 from "../../assets/product/WireRope/images/balcony.webp";
import BalconyImage2 from "../../assets/product/WireRope/images/gardenBalcony.webp";
import terace from "../../assets/product/WireRope/images/tearace.webp";

const heroSlides = [
  {
    image: LivingImg,
    title: "The Perfect Choice for Balcony Safety",
    description:
      "Enhance your balcony safety with durable stainless steel wire rope, offering strong support and stylish protection without obstructing views.",
  },
  {
    image: HallImg,
    title: "Upgrade Your Balcony with High-Quality Stainless Steel Wire Rope",
    description:
      "Transform your balcony with premium stainless steel wire rope, ensuring robust safety and a sleek, modern look for your outdoor space.",
  },
  {
    image: bedroom,
    title: "Durable Stainless Steel Wire Rope for Stylish Balcony Railings",
    description:
      "Choose durable stainless steel wire rope for your balcony railings, providing reliable safety and a contemporary design that complements any home.",
  },
];

export default function page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [outdoorImg, StairImg, BalconyImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
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
    {
      title: "Invisible Grill",
      image: invisibleGril,
      link: "/products/SSInvisibleGrill",
    },
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
    <div className="relative  ">
      {/* Hero Section */}
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
              layout="responsive"
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
      <main className=" mx-auto container">
        {/* Product Overview with Image Slider */}
        <section className=" bg-white container mx-auto pt-8 md:p-28">
          <div className=" px-6">
            {/* <h2 className="text-4xl pt-10 din-semibold text-[#335c98] mb-12 md:mb-16 md:pt-0 text-center">
              Wire Rope
            </h2> */}
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-28">
              <motion.div
                variants={FadeRight(0.01)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full lg:w-[39%] relative"
              >
                <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={images[currentImageIndex]}
                    alt={`Product Image ${currentImageIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-500"
                  />
                </div>
              </motion.div>
              <motion.div
                variants={FadeLeft(0.01)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-4xl din-semibold text-[#335c98] mb-4">
                  Premium Stainless Steel Wire Rope
                </h3>
                <p className="text-secondary mb-8 text-sm leading-relaxed din-regular text-justify">
                  Experience unparalleled strength and durability with our
                  premium stainless steel wire rope. Expertly crafted for
                  outdoor use in compounds and various rigging applications, our
                  wire rope sets the industry standard for quality and
                  reliability.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-[1.15rem] din-regular text-[#335c98]">
                    <FaCheck className="w-6 h-5 mr-3 text-green-500 strok" />
                    Superior corrosion resistance
                  </li>
                  <li className="flex items-center text-[1.15rem] din-regular text-[#335c98]">
                    <FaCheck className="w-6 h-5 mr-3 text-green-500" />
                    Effortless installation and maintenance
                  </li>
                  <li className="flex items-center text-[1.15rem] din-regular text-[#335c98]">
                    <FaCheck className="w-6 h-5 mr-3 text-green-500 " />
                    Versatile sizing and configurations
                  </li>
                </ul>
                <div className=" flex justify-start mt-4">
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Applications & Use Cases Section */}
        <section className=" bg-gray-100 p-20 container mx-auto">
          <div className=" max-w-[85rem] mx-auto ">
            <h2 className=" text-3xl md:text-5xl din-semibold text-[#335c98] mb-10 md:mb-16 text-center">
              Applications & Use Cases
            </h2>
            <div className=" mx-auto flex flex-col items-center lg:flex-row justify-center gap-6">
              {[
                {
                  title: "Outdoor Structures",
                  image: BalconyImage1,
                  description:
                    "Enhance the strength and aesthetics of outdoor installations.",
                },
                {
                  title: "Terrace ",
                  image: BalconyImage2,
                  description:
                    "Create secure and stylish railings for terrace.",
                },
                {
                  title: "Balcony Railings",
                  image: terace,
                  description:
                    "Ensure safety with elegant balcony railing solutions.",
                },
                // {
                //   title: "Balcony Railings",
                //   image: BalconyImg,
                //   description:
                //     "Ensure safety with elegant balcony railing solutions.",
                // },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl h-[18rem] w-[20rem] md:h-[24rem] md:w-[30rem] lg:h-[24rem] lg:w-[25rem] shadow-lg overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-4"
                >
                  <div className="relative h-44 md:h-60 ">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl din-regular text-[#335c98] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 din-regular text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="py-24 bg-white mx-auto container overflow-hidden">
          <div className=" mx-auto">
            <h2 className="text-5xl din-semibold text-[#335c98] mb-16 text-center">
              Accessories
            </h2>
            <div className=" grid grid-rows-1 md:grid-cols-2 md:m-2 md:gap-14 gap-4 lg:grid-cols-2 lg:m-14 xl:grid-cols-3 justify-center xl:gap-14 xl:px-14">
              {[
                {
                  title: "Turnbuckles",
                  image: hangingHook,
                  description:
                    "Turnbuckles & rigging screws are used in lifting, tensioning and staying systems to make adjustment to the length of the systems.",
                  specs: [
                    "Material: Stainless Steel",
                    "Size: Various",
                    "Load Capacity: Up to 2000 lbs",
                    "GrillDesign:	Modern",
                    "WireDiameter:	3 mm",
                    "SurfaceFinish:	Polished",
                    "WireSpacing:	2,3,4",
                    "Color:	Silver",
                    "Feature:	Rust Proof",
                    "Turnbuckle hook",
                  ],
                },
                {
                  title: "Wire Rope",
                  image: cableWire,
                  description:
                    "This Wire Rope Cable is made of stainless steel, more corrosion resistance, oxidation resistance and durable. It can be used for both outdoor and indoor. The plastic covered stainless steel string is great for hoisting, lifting, binding, chain, grinder, agriculture, and industrial applications etc.",
                  specs: [
                    "Material: Stainless Steel",
                    "Length: 10M / 32.8ft",
                    "Cable Diameter: 5mm / 0.2",
                  ],
                },
                {
                  title: "Thimbles",
                  image: thimble,
                  description:
                    "Enhance the safety and durability of your rigging with our high-quality stainless steel thimble, designed to prevent rope wear and ensure secure connections. Perfect for marine, outdoor, and industrial applications, this corrosion-resistant thimble guarantees long-lasting performance.",
                  specs: [
                    "Material: Stainless Steel",
                    "Shape: Heart-shaped",
                    "Compatibility: Various rope sizes",
                    "Diameter: 5-10 mm",
                  ],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl h-auto w-auto md:h-[40rem] md:w-[24rem] shadow-md  transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-[10rem] md:h-[10rem] w-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl din-regular text-[#335c98] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 din-regular text-xs md:text-base mb-4">
                      {item.description}
                    </p>
                    <h4 className=" din-medium text-[#335c98] mb-2">
                      Specifications:
                    </h4>
                    <ul className="list-decimal list-inside text-sm text-secondary grid grid-cols-1 gap-2 ">
                      {item.specs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                    {/* <button className="mt-6 text-blue-600 hover:text-blue-800 font-medium transition duration-300">
                      Learn More
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Tips Section */}
        <section className="py-24 bg-gray-100 container mx-auto xl:px-14">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl din-semibold text-primary mb-16 text-center">
              Maintenance Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
              {[
                {
                  title: "Regular Inspections",
                  description:
                    "Regular inspections of your stainless steel wire rope are vital for maintaining its integrity and safety, allowing you to detect wear, fraying, and corrosion early. This proactive approach is crucial for mission-critical applications, ensuring reliable performance under pressure. Investing in routine evaluations maximizes the lifespan of your wire rope and upholds the highest safety standards.",
                },
                {
                  title: "Proper Lubrication",
                  description:
                    "Regularly apply a high-quality, corrosion-resistant lubricant to reduce friction, prevent wear, and protect the rope from environmental elements. Choose a lubricant specifically designed for stainless steel, ensuring even application along the full length of the rope to coat all strands effectively.",
                },
                {
                  title: "Cleaning and Storage",
                  description:
                    "Keep your stainless steel wire ropes clean by removing dirt, debris, and contaminants with a soft-bristled brush or mild detergent solution. When not in use, store the ropes in a dry, well-ventilated area, away from direct sunlight, to prevent accelerated wear and tear from environmental factors.",
                },
                {
                  title: "Upgrade When Necessary",
                  description:
                    "If your current ropes show signs of excessive wear or damage, consider investing in higher-quality stainless steel wire ropes. Upgrading to more durable, corrosion-resistant options can reduce the need for frequent replacements and enhance the safety and reliability of your operations.",
                },
              ].map((tip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-2xl din-medium text-primary mb-4">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-secondary din-regular leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="pt-8  text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="  text-xl md:text-5xl din-semibold text-primary mb-8">
              Ready to Elevate Your Project?
            </h2>
            <p className="text-base text-justify text-secondary din-regular mb-12 max-w-3xl mx-auto">
              Discover the unmatched strength and versatility of Rajguru
              Stainless Steel Wire Rope. Let us help you bring your vision to
              life.
            </p>
            <div className=" flex justify-center">
              <Link href="/ContactUs">
                <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 mb-6 text-white border border-[#1d1d1d] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
                  {/* Colored background */}
                  <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>

                  {/* Top-left to bottom-right diagonal animation */}
                  <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                    <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                    <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                  </span>

                  {/* Button text */}
                  <span className="relative z-10 group-hover:text-black transition-colors duration-700 ease-in-out raleway">
                    GET A QUOTE
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* call action close */}
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
      </main>
    </div>
  );
}
