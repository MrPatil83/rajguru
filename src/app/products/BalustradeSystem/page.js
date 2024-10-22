// import React from "react";
// import BalustradeSystem from "./BalustradeSystem"
// // SEO metadata
// export const metadata = {
//   title: "Stainless Steel Balustrade System",

//   description:
//     "Enhance your balcony with our premium stainless steel balustrade railings, designed for both safety and style. Our glass railing systems offer a modern touch, providing unobstructed views while ensuring durability and strength. Explore our customizable options for glass and stainless steel balustrades, perfect for any architectural design.",
//   name: "viewport",
//   content: "width=device-width, initial-scale=1",
//   property: "og:type",
//   content: "website",
//   property: "og:url",
//   content: "https://rajgurusteel.vercel.app/",
//   keywords: [
//     "stainless steel balustrade",
//     "stainless steel balustrade cleaner",
//     "stainless steel balustrade suppliers",
//     "stainless steel balustrade posts",
//     "stainless steel balustrade diy kits",
//     "stainless steel balustrade channel",
//     "stainless steel balustrade parts",
//     "glass and stainless steel balustrade",
//     "stainless steel balustrade fittings",
//     "stainless steel balustrade near me",
//     "Modern Stainless Steel Balustrades",
//     "Custom Stainless Steel Balustrades",
//     "Stainless Steel Glass Balustrades",
//     "Stainless Steel Wire Balustrades",
//     "Durable Balustrade Solutions",
//     "Stainless Steel Balcony Railings",
//     "Outdoor Stainless Steel Balustrades",
//     "High-Quality Balustrade Systems",
//     "Affordable Stainless Steel Balustrades",
//     "Stylish Stainless Steel Railings",
//   ],
// };
// export default function page() {
//   return  <BalustradeSystem/>;
// }


"use client";
import React, { useState, useEffect } from "react";
import bg from "../../assets/product/balustrade/bg.webp";
import stairImg from "../../assets/product/balustrade/Images/stairsGlass.webp";
import floorImg from "../../assets/product/balustrade/Images/floorGlass.webp";
import houseImg from "../../assets/product/balustrade/Images/building.webp";
import office from "../../assets/product/balustrade/Images/office balcony.webp";
import Balustrade from "../../assets/product/balustrade/main.webp";
import {
  FadeRight,
  FadeLeft,
  FadeUp,
} from "../../components/utility/animation.jsx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import main2 from "../../assets/product/balustrade/main2.webp";
import Image from 'next/image';
import UProfile from "../../assets/RelatedProducts/UProfile.webp";
import LProfile from "../../assets/RelatedProducts/LProfile.webp";
import fluted from "../../assets/RelatedProducts/fluted.webp";
import TProfile from "../../assets/product/profile/T_profile/wall.webp";
import customized from "../../assets/RelatedProducts/customized.webp";
// import SSbalustrade from "../../assets/RelatedProducts/SSbalustrade.webp";
import invisibleGril from "../../assets/RelatedProducts/invisibleGril.webp";
import queuemanager from "../../assets/RelatedProducts/queuemanager.webp";
import DecorativeSheet from "../../assets/RelatedProducts/decorativesheet.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import buildingImg from "../../assets/product/balustrade/hero/balconyImg.webp";
import stairsImg from "../../assets/product/balustrade/hero/floor.webp";

// const ImageBox = ({ imageSrc, title }) => (
//   <div className="flex flex-col items-center transition-transform transform hover:scale-105">
//     <figure className="rounded-lg overflow-hidden shadow-lg">
//       <Image
//         decoding="async"
//         src={imageSrc}
//         width={60}
//         height={60}
//         className="object-cover"
//         alt={title}
//       />
//     </figure>
//     <h3 className="text-center mt-2 text-sm font-medium">{title}</h3>
//   </div>
// );

const heroSlides = [
  {
    image: bg,
    title: "Elegant Stainless Steel Balustrade Railing",
    description:
      "Elevate your space with our elegant stainless steel balustrade railings, combining modern aesthetics with unmatched durability.",
  },
  {
    image: buildingImg,
    title: "Customizable Glass Balustrade Railing Solutions",
    description:
      "Create a unique look with our customizable glass balustrade railings, tailored to fit your style and enhance any architectural design.",
  },
  {
    image: stairsImg,
    title: "Durable Outdoor Balustrade Railing Systems",
    description:
      "Invest in our durable outdoor balustrade railing systems, designed to withstand the elements while providing safety and style for your outdoor spaces.",
  },
];

export default function Page() {
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
    // {
    //   title: "SS Balustrade",
    //   image: SSbalustrade,
    //   link: "/products/BalustradeSystem",
    // },
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
    }, 2000);

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
      <main className="flex justify-center flex-col items-center container mx-auto">
        {/* <p className="text-slate-500 text-xs lg:text-sm text-justify w-[80%] p-4">
        With a focus on innovation and craftsmanship, our railings enhance your space while meeting high safety standards. Enjoy reliable quality and all-India delivery with Rajguru Steel’s trusted solutions.
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {[
            {
              img: stairImg,
              alt: "Stairs Image",
              label: "Stairs Railing",
              description:
                "Enhance safety and style with our beautifully designed stairs railings.",
            },
            {
              img: floorImg,
              alt: "Floor Image",
              label: "Floor Railing",
              description:
                "Our floor railings provide both functionality and aesthetics for any space.",
            },
            {
              img: houseImg,
              alt: "House Balcony Image",
              label: "Home Balcony Railing",
              description:
                "Transform your balcony into a stunning outdoor space with our railings.",
            },
            {
              img: office,
              alt: "Office Balcony Image",
              label: "Corporate Balcony Railing",
              description:
                "Elevate your office aesthetics with our modern balcony railings.",
            },
          ].map(({ img, alt, label, description }) => (
            <motion.div
              variants={FadeUp(0.001)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={alt}
              className="relative overflow-hidden group rounded-3xl"
            >
              <Image
                src={img}
                alt={alt}
                className="object-cover h-[17rem] w-[17rem] mx-auto md:w-[17rem] md:h-[20rem] transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl whitespace-nowrap md:whitespace-normal din-semibold">
                  {label}
                </h3>
                <p className="text-sm raleway text-gray-300">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add button to interact */}

        <section className="wavo-column-gap-default elementor-section elementor-top-section mt-8 overflow-hidden mx-auto container xl:-ml-44">
          <div className="elementor-container flex flex-col md:flex-row">
            <div className="elementor-column md:flex-1"></div>
            <section className="bg-gray-50 py-10 ">
              <div className="container mx-auto px-6">
                <h2 className=" text-3xl din-semibold text-center text-[#335c98] mb-8">
                  Balustrade Railing Specifications
                </h2>
                <motion.div
                  variants={FadeUp(0.001)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-4 lg:gap-14 md:flex-row justify-center mb-6"
                >
                  <Image
                    src={Balustrade}
                    alt="Balustrade Railing"
                    className="rounded-lg shadow-lg h-[20rem] w-[20rem] lg:w-[400px] lg:h-[300px] transition-transform duration-300 transform group-hover:scale-110 "
                  />
                  <Image
                    src={main2}
                    alt="Balustrade Railing"
                    className="rounded-lg shadow-lg  h-[20rem] w-[20rem] lg:w-[400px] lg:h-[300px]"
                  />
                </motion.div>

                <div className="flex justify-center">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Material
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Frame:{" "}
                        </b>{" "}
                        Stainless Steel (Grade 304 or 316)
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Infill:{" "}
                        </b>{" "}
                        Tempered Glass (10mm or 12mm thick)
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Finish:{" "}
                        </b>{" "}
                        Polished, brushed, or powder-coated
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Dimensions
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Height:{" "}
                        </b>{" "}
                        36 inches (914 mm) standard; custom heights available
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Top Rail Width:{" "}
                        </b>{" "}
                        1.5 inches (38 mm) minimum
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Post Size:
                        </b>{" "}
                        2 inches x 2 inches (50 mm x 50 mm)
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Glass Panel Size:{" "}
                        </b>{" "}
                        Typically 3 to 5 feet in width
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Safety Standards
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Load Capacity:{" "}
                        </b>{" "}
                        Must withstand a horizontal load of 200 lbs
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Height Requirements:{" "}
                        </b>{" "}
                        Minimum of 36 inches above walking surface
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Glass Safety:{" "}
                        </b>{" "}
                        Meets safety glazing standards (ASTM C1048)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Design Options
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Post Design:{" "}
                        </b>{" "}
                        Square or round with decorative caps
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Infill Options:{" "}
                        </b>{" "}
                        Glass, horizontal cables, or vertical bars
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Color Options:{" "}
                        </b>{" "}
                        Custom finishes available
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Installation Details
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Mounting:{" "}
                        </b>{" "}
                        Top-mounted or side-mounted options
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Surface Types:{" "}
                        </b>{" "}
                        Suitable for concrete, wood, and metal
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Hardware:{" "}
                        </b>{" "}
                        Stainless steel fasteners and brackets
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Maintenance
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Cleaning:{" "}
                        </b>{" "}
                        Regular cleaning with mild soap and water
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Inspection:{" "}
                        </b>{" "}
                        Periodic integrity checks
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Applications
                    </h3>
                    <ul className="list-none list-inside  text-gray-700">
                      <li className=" text-gray-500 din-regular">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Residential:{" "}
                        </b>{" "}
                        Balconies, staircases
                      </li>
                      <li className=" text-gray-500 din-regular">
                        <b className="text-[#335c98] din-medium text-[1.125rem]">
                          Commercial:{" "}
                        </b>{" "}
                        Office buildings, restaurants
                      </li>
                      <li className=" text-gray-500 din-regular">
                        {" "}
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Public Spaces:{" "}
                        </b>{" "}
                        Parks, community centers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* swiper */}
          <div className="w-full py-20 fade-in container mx-auto xl:ml-44">
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
        </section>
      </main>
    </section>
  );
}
