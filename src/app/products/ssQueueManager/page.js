// import React from 'react'
// import SSQueueManager from './SSQueueManager'

// //SEO
// export const metadata={
//   title:"stainless steel queue manager",
//   description:"Our stainless steel queue managers are designed for effective crowd control, featuring a sleek and modern design that enhances any environment. With retractable belts available in various colors, these durable queue stands provide a reliable solution for managing lines in retail, events, and public spaces. Choose our high-quality stainless steel queue managers for a stylish and functional addition to your venue.",
//   name: "viewport",
//   content: "width=device-width, initial-scale=1",
//   property: "og:type",
//   content: "website",
//   property: "og:url",
//   content: "https://rajgurusteel.vercel.app/products/SSQueueManager",
//   keywords:[
//     "stainless steel queue manager",
//     "queue management system",
//     "retractable belt queue stand",
//     "crowd control barriers",
//     "stainless steel crowd control",
//     "queue manager with rope",
//     "event queue management",
//     "stainless steel barrier",
//     "queue management solutions",
//     "queue control systems",
//     "stainless steel stanchions",
//     "queue management products",
//     "custom queue manager",
//     "durable queue manager",
//     "commercial queue management",
//     "queue manager",
//     "queue manager stand",
//     "queue manager price",
//     "queue manager system",
//     "queue manager rope",
//     "queue manager stand near me",
//     "queue manager software",
//     "queue manager manufacturers",
//     "stainless steel queue manager",
// ],
// }

// export default function page() {
//   return (
//     <div>
//       <SSQueueManager/>
//     </div>
//   )
// }


"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FaTruck, FaCheck, FaInfoCircle } from "react-icons/fa";
import React from "react";
import bg from "../../assets/product/queueManager/bg.webp";
import main from "../../assets/product/queueManager/productImg/main.webp";
import Link from "next/link";
import {
  FadeDown,
  FadeUp,
  FadeLeft,
  FadeRight,
} from "../../components/utility/animation.jsx";
// import { motion } from "framer-motion";
import ropeImg from "../../assets/product/queueManager/productImg/rope.webp";
import wallMount from "../../assets/product/queueManager/productImg/wallmount.webp";
import signFrame from "../../assets/product/queueManager/productImg/signframe.webp";
import UProfile from "../../assets/RelatedProducts/UProfile.webp";
import LProfile from "../../assets/RelatedProducts/LProfile.webp";
import fluted from "../../assets/RelatedProducts/fluted.webp";
import TProfile from "../../assets/product/profile/T_profile/wall.webp";
import customized from "../../assets/RelatedProducts/customized.webp";
import SSbalustrade from "../../assets/RelatedProducts/SSbalustrade.webp";
import invisibleGril from "../../assets/RelatedProducts/invisibleGril.webp";
// import queuemanager from "../../assets/RelatedProducts/queuemanager.webp";
import DecorativeSheet from "../../assets/RelatedProducts/decorativesheet.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaRuler, FaWeight, FaPalette, FaBox } from "react-icons/fa";
import LivingImg from "../../assets/product/queueManager/slider/Img1.webp";
import HallImg from "../../assets/product/queueManager/slider/Img2.webp";
import bedroom from "../../assets/product/queueManager/slider/Img3.webp";

const Card = ({ children }) => (
  <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
    {children}
  </div>
);

const heroSlides = [
  {
    image: LivingImg,
    title: "Elegant Stainless Steel Queue Manager",
    description:
      "Transform your space with stainless steel queue managers that not only improve crowd control but also add a touch of elegance to any environment.",
  },
  {
    image: HallImg,
    title: "Sleek Barriers for Crowd Control",
    description:
      "Achieve seamless organization with our stylish stainless steel queue barriers, designed for durability and a contemporary look in retail, events, and public spaces.",
  },
  {
    image: bedroom,
    title: "Durable and Reliable Stainless Steel Queue Manager",
    description:
      "Opt for robust stainless steel queue management systems that ensure effective line control while enhancing the overall aesthetic of your venue.",
  },
];

export default function page() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Animation variants
  const pageAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
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
    {
      title: "Decorative Sheet",
      image: DecorativeSheet,
      link: "/products/ssDecorativeSheet",
    },
    // {
    //   title: "Queue Manager",
    //   image: queuemanager,
    //   link: "/products/SSQueueManager",
    // },
    {
      title: "Custom Profile",
      image: customized,
      link: "/products/profile/SSCustomProfile",
    },
  ];

  const specs = [
    {
      icon: <FaBox className="w-6 h-6" />,
      title: "Material",
      value: "Stainless Steel",
    },
    {
      icon: <FaRuler className="w-6 h-6" />,
      title: "Post Height",
      value: "36 inches (91.5 cm)",
    },
    {
      icon: <FaRuler className="w-6 h-6" />,
      title: "Base Diameter",
      value: "13 inches (33 cm)",
    },
    {
      icon: <FaRuler className="w-6 h-6" />,
      title: "Belt Length",
      value: "6.5 feet (2 meters)",
    },
    {
      icon: <FaPalette className="w-6 h-6" />,
      title: "Belt Color",
      value: "Black / Red / Blue",
    },
    {
      icon: <FaWeight className="w-6 h-6" />,
      title: "Weight",
      value: "24 lbs (10.9 kg)",
    },
    {
      icon: <FaPalette className="w-6 h-6" />,
      title: "Finishes Colors",
      value: "Silver / Champagne",
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
    <motion.div
      className="flex flex-col min-h-screen"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageAnimation}
    >
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

      <main className="flex flex-col overflow-hidden mx-auto container ">
        <div className=" flex flex-col justify-center text-justify text-sm md:text-sm text-slate-500 gap-4 din-regular p-8">
          {/* <p>
            Rajguru Steel Industries offers a remarkable range of stainless
            steel U profiles that combine aesthetic appeal with exceptional
            durability. Stainless steel U profiles are suitable for a variety of
            uses, including structural reinforcements, decorative accents, and
            architectural elements. Their versatility makes them ideal for both
            residential and commercial projects.
          </p> */}
        </div>

        {/* Hero Section */}
        <section className="mb-12 p-8 xl:px-14 ">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <Image
                src={main}
                alt="Stainless Steel Queue Manager"
                width={600}
                height={500}
                className="rounded-3xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 mt-4 md:mt-0 md:ml-8"
            >
              <h2 className="text-2xl  md:text-4xl din-bold mb-4 text-[#335c98]">
                Premium Crowd Control Solution
              </h2>
              <p className="text-gray-500 mb-4 din-regular flex text-justify">
                Our Stainless Steel Queue Manager is the perfect solution for
                efficient crowd control in various settings. Ideal for airports,
                banks, retail stores, and events, this durable and stylish queue
                manager ensures smooth traffic flow and enhances customer
                experience.
              </p>
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
            </motion.div>
          </div>
        </section>

        {/* Specifications Section */}
        <motion.section
          variants={FadeUp(0.001)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 p-8 px-4 md:px-14"
        >
          <h2 className="text-3xl flex justify-center md:justify-normal  font-semibold text-[#335c98] mb-6">
            Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specs.map((spec, index) => (
              <Card key={index}>
                <div className="flex items-center space-x-4">
                  <div className="text-[#335c98]">{spec.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-[#335c98]">
                      {spec.title}
                    </h3>
                    <p className="text-gray-600">{spec.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Applications Section */}
        <section className="mb-12 p-8 px-14">
          <h2 className="text-3xl din-semibold text-[#335c98] mb-6">
            Ideal Applications
          </h2>
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <ul className="list-disc pl-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 din-regular text-gray-500">
              <li className="mb-2">Airports and transportation hubs</li>
              <li className="mb-2">Banks and financial institutions</li>
              <li className="mb-2">Retail stores and supermarkets</li>
              <li className="mb-2">Museums and art galleries</li>
              <li className="mb-2">Theaters and concert venues</li>
              <li className="mb-2">Trade shows and exhibitions</li>
              <li>Government offices and public services</li>
            </ul>
          </motion.div>
        </section>

        {/* Accessories Section */}
        <section className="mb-12 p-8 xl:px-14">
          <h2 className="text-3xl din-semibold text-[#335c98] mb-6">
            Accessories
          </h2>
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex mb-4">
              {["Rope", "wallMount", "Sign Stand"].map((tab, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`mr-4 whitespace-nowrap h-8 w-[10rem] px-2 md:h-12 md:w-32 md:py-2 text-xs md:text-base md:whitespace-normal md:px-4 rounded-lg din-semibold text-gray-500 ${
                    activeTab === index
                      ? "bg-[#335c98] text-white"
                      : "bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.charAt(0).toUpperCase() +
                    tab
                      .slice(1)
                      .replace(/([A-Z])/g, " $1")
                      .trim()}
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                {activeTab === 0 && (
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4 md:mt-14">
                      <Image
                        src={ropeImg}
                        alt="rope image"
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-3xl din-semibold text-[#335c98] mb-2">
                        Queue Manager Rope
                      </h3>
                      <p className="mb-4 text-gray-600 din-regular text-sm flex text-justify lg:text-base">
                        Rajgure Steel Industry provides high-quality queue
                        managers that are designed to enhance crowd control
                        while maintaining a professional appearance. Their queue
                        managers feature durable red and black valet ropes made
                        from premium nylon fabric, making them an excellent
                        choice for events and retail spaces.
                      </p>
                      <table className="w-full text-sm md:text-base">
                        <tbody>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Material:
                            </td>
                            <td className=" din-regular text-gray-500">
                              {" "}
                              Nylon / Velvet{" "}
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Hook Material
                            </td>
                            <td className=" din-regular text-gray-500">
                              {" "}
                              Stainless Steel{" "}
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Rope Length:
                            </td>
                            <td className=" din-regular text-gray-500">
                              1.5 Meters
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Compatibility:
                            </td>
                            <td className=" din-regular text-gray-500">
                              Fits all standard queue posts
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Rope color:
                            </td>
                            <td className=" din-regular text-gray-500">
                              Red / Black{" "}
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Hook color:
                            </td>
                            <td className=" din-regular text-gray-500">
                              Gold / Silver{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4 md:mt-14">
                      <Image
                        src={wallMount}
                        alt="Wall Mount"
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-3xl din-semibold text-[#335c98] mb-2">
                        Wall Mount
                      </h3>
                      <p className="mb-4 text-gray-600 din-regular">
                        Optimize your space with Rajgure Steel Industry's
                        wall-mounted queue managers, featuring vibrant red,
                        black, and blue belts that seamlessly blend
                        functionality with style. Perfect for restaurants,
                        airports, and retail environments, these queue managers
                        not only provide effective crowd control but also
                        enhance the aesthetic appeal of your venue.
                      </p>
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Material:
                            </td>
                            <td className=" din-regular text-gray-600">
                              Stainless Steel
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Belt length:
                            </td>
                            <td className=" din-regular text-gray-600">
                              2.0 Meters
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Base Diameter:
                            </td>
                            <td className=" din-regular text-gray-600">
                              320 mm
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Height:
                            </td>
                            <td className=" din-regular text-gray-600">
                              990 mm
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Rope Color:
                            </td>
                            <td className=" din-regular text-gray-600">
                              Blue / Black / Red
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Retractable Belts:
                            </td>
                            <td className=" din-regular text-gray-600">Yes</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
                      <Image
                        src={signFrame}
                        alt="Belt Cartridge"
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-3xl din-semibold text-[#335c98] mb-2">
                        Queue Manager Sign Stand
                      </h3>
                      <p className="mb-4 text-gray-600 din-regular">
                        Rajgure Steel Industry's directional sign stand is
                        expertly crafted to guide customers with clear messaging
                        and arrows, ensuring easy navigation. Ideal for events,
                        retail spaces, and exhibitions, this stylish sign stand
                        enhances the overall decor of your venue while providing
                        essential directional assistance.
                      </p>
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Material:
                            </td>
                            <td className=" din-regular text-gray-600">
                              Stainless Steel
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Sigh Board Paper Size:
                            </td>
                            <td className=" din-regular text-gray-600">A4</td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Frame size:
                            </td>
                            <td className=" din-regular text-gray-600">
                              L 242 x W 24 x H 330 mm
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Height:
                            </td>
                            <td className=" din-regular text-gray-600">
                              315 mm
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Diameter:
                            </td>
                            <td className=" din-regular text-gray-600">
                              32 mm
                            </td>
                          </tr>
                          <tr>
                            <td className="din-regular text-[#335c98] text-base pr-4 py-2">
                              Type:
                            </td>
                            <td className=" din-regular text-gray-600">
                              Double Sided Sign Frame with Plexiglass Cover
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </section>
        {/* Features Section */}
        <section className="mb-12 p-8 xl:px-14">
          <h2 className="text-3xl din-semibold text-[#335c98] mb-6">
            Key Features
          </h2>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: FaCheck,
                title: "Durable Stainless Steel",
                description: "Corrosion-resistant and long-lasting",
              },
              {
                icon: FaTruck,
                title: "Easy Assembly",
                description: "Quick setup with no tools required",
              },
              {
                icon: FaInfoCircle,
                title: "Versatile Use",
                description: "Suitable for indoor and outdoor settings",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <feature.icon className="text-3xl text-[#335c98] mb-4" />
                <h3 className="text-xl din-medium text-[#335c98] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 din-regular">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Maintenance Guide Section */}
        <section className="mb-12 p-8 xl:px-14">
          <h2 className="text-3xl din-bold text-[#335c98] mb-6">
            Maintenance Guide
          </h2>
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl din-medium text-[#335c98] mb-4">
              Keeping Your Queue Manager in Top Condition
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-2 din-regular">
                <span className="din-regular text-lg text-[#335c98]">
                  Regular Cleaning:
                </span>{" "}
                Wipe down the stainless steel parts with a soft, damp cloth. For
                tougher stains, use a mild soap solution.
              </li>
              <li className="mb-2 din-regular">
                <span className="din-regular text-lg text-[#335c98]">
                  Belt Maintenance:
                </span>{" "}
                Periodically check the belt for wear and tear. Clean with a damp
                cloth and mild detergent if necessary.
              </li>
              <li className="mb-2 din-regular">
                <span className="din-regular text-lg text-[#335c98]">
                  Lubrication:
                </span>{" "}
                Apply a small amount of silicone-based lubricant to the belt
                mechanism every 6 months for smooth operation.
              </li>
              <li className="mb-2 din-regular">
                <span className="din-regular text-lg text-[#335c98]">
                  Tightening:
                </span>{" "}
                Check and tighten any loose screws or fittings as part of your
                regular maintenance routine.
              </li>
              <li className="din-regular">
                <span className="din-regular text-lg text-[#335c98]">
                  Storage:
                </span>{" "}
                When not in use for extended periods, store in a dry area to
                prevent moisture accumulation.
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Customer Testimonials Section */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Customer Testimonials</h2>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { name: "John D.", role: "Event Manager", comment: "These queue managers have been a game-changer for our events. Easy to set up and very durable!" },
              { name: "Sarah L.", role: "Bank Branch Manager", comment: "The sleek design fits perfectly with our modern branch aesthetic. Customers love the organized queuing system." },
              { name: "Mike R.", role: "Airport Operations", comment: "We've been using these for years. They withstand heavy use and still look great. Highly recommended!" },
              { name: "Emily T.", role: "Retail Store Owner", comment: "The versatility of these queue managers is impressive. We use them differently during sales and regular days." }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <FaComments className="text-3xl text-blue-600 mb-4" />
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </section> */}
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
    </motion.div>
  );
}
