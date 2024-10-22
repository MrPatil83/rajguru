// import React from "react";
// import Aluminium from "./Aluminium";
// // SEO metadata
// export const metadata = {
//   title: "Aluminum Windows",

//   description:
//     "Discover our premium aluminum windows, designed with customizable frame colors to perfectly match your architectural style. Our energy-efficient aluminum windows offer durability and low maintenance, making them an ideal choice for any home or commercial space. Experience the perfect blend of aesthetics and functionality with our tailored aluminum window solutions.",
//   name: "viewport",
//   content: "width=device-width, initial-scale=1",
//   property: "og:type",
//   content: "website",
//   property: "og:url",
//   content: "https://rajgurusteel.vercel.app/",
//   keywords: [
//     "Aluminum Windows",
//     "Stainless Steel Windows",
//     "Custom Aluminum Window Frames",
//     "Energy-Efficient Aluminum Windows",
//     "Aluminum Window Installation",
//     "Stainless Steel Glass Frames",
//     "Modern Aluminum Windows",
//     "mumbai stainless steel industries",
//     "stainless steel industries",
//     "Durable Aluminum Windows",
//     "aluminum",
//     "Aluminum Window Designs",
//     "steel industry",
//     "mumbai",
//     "maharashtra",
//     "Stainless Steel Window Frames",
//     "Glass Window Systems",
//     "Aluminum vs Stainless Steel Windows",
//     "High-Quality Glass Windows",
//     "Low Maintenance Aluminum Windows",
//   ],
// };
// export default function page() {
//   return <Aluminium />;
// }


"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { FadeRight, FadeLeft } from "../../components/utility/animation.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import {
  FaWindowMaximize,
  FaShieldAlt,
  FaPaintBrush,
  FaRuler,
  FaLeaf,
  FaSun,
  FaSnowflake,
  FaWrench,
} from "react-icons/fa";
import Link from "next/link";
import LivingImg from "../../assets/product/aluminiumWindows/slider/img1.webp";
import HallImg from "../../assets/product/aluminiumWindows/slider/img2.webp";
import bedroom from "../../assets/product/aluminiumWindows/slider/img3.webp";

// sliding Image
import slider3Img from "../../assets/product/aluminiumWindows/slidingWindows/Img1.webp";
import slider4Img from "../../assets/product/aluminiumWindows/slidingWindows/Img2.webp";
import slider2Img from "../../assets/product/aluminiumWindows/slidingWindows/Img3.webp";
import slider5Img from "../../assets/product/aluminiumWindows/slidingWindows/Img4.webp";
import slider6Img from "../../assets/product/aluminiumWindows/slidingWindows/Img5.webp";

// Awing Image
import awing1 from "../../assets/product/aluminiumWindows/aluminiumAwingWindow/Img1.webp";
import awing2 from "../../assets/product/aluminiumWindows/aluminiumAwingWindow/Img2.webp";
import awing3 from "../../assets/product/aluminiumWindows/aluminiumAwingWindow/Img3.webp";

import Sec3Img1 from "../../assets/product/aluminiumWindows/section3/Img1.webp";
import Sec3Img2 from "../../assets/product/aluminiumWindows/section3/Img2.webp";
import Sec3Img3 from "../../assets/product/aluminiumWindows/section3/Img3.webp";
import Sec3Img4 from "../../assets/product/aluminiumWindows/section3/Img4.webp";
import Sec3Img5 from "../../assets/product/aluminiumWindows/section3/Img5.webp";
import Sec3Img6 from "../../assets/product/aluminiumWindows/section3/Img6.webp";

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

// products DATA
const windowTypes = [
  {
    id: "83",
    name: "Aluminium Sliding Windows",
    products: [
      {
        id: "1",
        name: "Sliding window (3 panels on 3 tracks)",
        image: slider3Img,
        series: ["We Plus"],
        design: "Aluminium Sliding Windows",
        specifications: [
          { key: "Material", value: "Aluminum" },
          { key: "Glass Thickness", value: "5, 6, 8, 13.52 mm" },
          { key: "Frame Depth", value: "104 mm - for 3 Track Slider" },
          { key: "Max Height", value: "1600 mm" },
          { key: "Max Width", value: "3000 mm" },
          {
            key: "Visit Website",
            value: "selectivesystems.in",
          },
        ],
      },
      {
        id: "2",
        name: "Sliding window (2 panels on 2 tracks)",
        image: slider2Img,
        series: ["We Plus"],
        design: "Aluminium Sliding Windows",
        specifications: [
          { key: "Material", value: "Aluminum" },
          { key: "Glass Thickness", value: "5, 6, 8, 13.52 mm" },
          { key: "Frame Depth", value: "104 mm - for 2 Track Slider" },
          { key: "Max Height", value: "1600 mm" },
          { key: "Max Width", value: "2500 mm" },
          {
            key: "Visit Website",
            value: "selectivesystems.in",
          },
        ],
      },
      {
        id: "3",
        name: "Sliding window (4 panels on 4 tracks)",
        image: slider4Img,
        series: ["We Plus"],
        design: "Aluminium Sliding Windows",
        specifications: [
          { key: "Material", value: "Aluminum" },
          { key: "Glass Thickness", value: "5, 6, 8, 13.52 mm" },
          { key: "Frame Depth", value: "104 mm - for 4 Track Slider" },
          { key: "Max Height", value: "1600 mm" },
          { key: "Max Width", value: "4000 mm" },
          {
            key: "Visit Website",
            value: "selectivesystems.in",
          },
        ],
      },
      {
        id: "4",
        name: "Sliding window (lift & slide)",
        image: slider5Img,
        series: ["We Plus"],
        design: "Aluminium Sliding Windows",
        specifications: [
          { key: "Material", value: "Aluminum" },
          { key: "Glass Thickness", value: "5, 6, 8, 13.52 mm" },
          { key: "Frame Depth", value: "104 mm" },
          { key: "Max Height", value: "2400 mm" },
          { key: "Max Width", value: "6000 mm" },
          {
            key: "Visit Website",
            value: "selectivesystems.in",
          },
        ],
      },
      {
        id: "5",
        name: "Sliding window (corner)",
        image: slider6Img,
        series: ["We Plus"],
        design: "Aluminium Sliding Windows",
        specifications: [
          { key: "Material", value: "Aluminum" },
          { key: "Glass Thickness", value: "5, 6, 8, 13.52 mm" },
          { key: "Frame Depth", value: "104 mm" },
          { key: "Max Height", value: "2400 mm" },
          { key: "Max Width", value: "3000 mm" },
          {
            key: "Visit Website",
            value: "selectivesystems.in",
          },
        ],
      },
    ],
  },
  {
    id: "90",
    name: "Aluminium Awning Windows",
    products: [
      {
        id: "6",
        name: "Awning Window WE-70",
        image: awing1,
        series: ["We 70"],
        design: "Aluminium Awning Windows",
        specifications: [
          { key: "Material", value: "Aluminum" },
          { key: "Glass Thickness", value: "5, 6, 8 mm" },
          { key: "Frame Depth", value: "72 mm" },
          { key: "Max Opening Angle", value: "45°" },
          { key: "Max Height of Window", value: "1800 mm" },
          {
            key: "Visit Website",
            value: "selectivesystems.in",
          },
        ],
      },
      {
        id: "7",
        name: "Awning Window WE-50",
        image: awing2,
        series: ["We 50"],
        design: "Aluminium Awning Windows",
        specifications: [
          { key: "Material", value: "Aluminum" },
          { key: "Glass Thickness", value: "5, 6 mm" },
          { key: "Frame Depth", value: "50 mm" },
          { key: "Max Opening Angle", value: "45°" },
          { key: "Max Height of Window", value: "1200 mm" },
          {
            key: "Visit Website",
            value: "selectivesystems.in",
          },
        ],
      },
      {
        id: "8",
        name: "Awning Window WE-100",
        image: awing3,
        series: ["We 100"],
        design: "Aluminium Awning Windows",
        specifications: [
          { key: "Material", value: "Aluminum" },
          { key: "Glass Thickness", value: "6, 8 mm" },
          { key: "Frame Depth", value: "100 mm" },
          { key: "Max Opening Angle", value: "45°" },
          { key: "Max Height of Window", value: "2400 mm" },
          {
            key: "Visit Website",
            value: "selectivesystems.in",
          },
        ],
      },
    ],
  },
];

export default function page() {
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

  // product handeler
  const [activeTab, setActiveTab] = useState(windowTypes[0].id);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const [selectedImage, setSelectedImage] = useState(0);

  const images = [Sec3Img1, Sec3Img2, Sec3Img3, Sec3Img4, Sec3Img5, Sec3Img6];

  const features = [
    {
      icon: <FaWindowMaximize />,
      title: "Durable",
      description:
        "Long-lasting aluminum frames resistant to warping, rotting, and cracking",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure",
      description:
        "Enhanced security features with multi-point locking systems for peace of mind",
    },
    {
      icon: <FaPaintBrush />,
      title: "Customizable",
      description:
        "Wide range of colors and finishes to match your home's aesthetic",
    },
    {
      icon: <FaRuler />,
      title: "Energy Efficient",
      description:
        "Excellent insulation properties to reduce energy costs year-round",
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly",
      description:
        "Recyclable materials and sustainable manufacturing processes",
    },
    {
      icon: <FaSun />,
      title: "UV Protection",
      description:
        "Special coatings to block harmful UV rays and protect your interiors",
    },
    {
      icon: <FaSnowflake />,
      title: "Weather Resistant",
      description:
        "Withstands extreme temperatures and harsh weather conditions",
    },
    {
      icon: <FaWrench />,
      title: "Low Maintenance",
      description: "Easy to clean and maintain, saving you time and effort",
    },
  ];

  const customizationOptions = [
    {
      title: "Frame Color",
      description:
        "Choose from a wide palette of colors to match your home's exterior",
    },
    {
      title: "Glass Type",
      description:
        "Select from various glass options including tempered, laminated, or low-E glass",
    },
    {
      title: "Hardware Finish",
      description: "Customize handles and locks with different metal finishes",
    },
    {
      title: "Screen Options",
      description:
        "Pick from standard mesh, pet-resistant, or retractable screens",
    },
    {
      title: "Window Style",
      description:
        "Select from casement, sliding, double-hung, or picture window styles",
    },
    {
      title: "Glazing Options",
      description:
        "Choose single, double, or triple glazing for optimal insulation",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.8 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  };

  return (
    <div>
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
              // layout="fill"
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
                 layout="responsive"
               objectFit="cover"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <main className="max-w-[80rem] mx-auto">
        <section className="py-10 ">
          <div className="px-4">
            <h2 className="text-3xl din-semibold text-primary text-center mb-8">
              Available Designs For Aluminium Windows
            </h2>

            <div className="mb-8">
              <ul className="flex flex-wrap justify-center gap-4">
                {windowTypes.map((type) => (
                  <li key={type.id}>
                    <button
                      onClick={() => setActiveTab(type.id)}
                      className={`px-4 py-2 rounded-full nunito transition-colors ${
                        activeTab === type.id
                          ? "bg-[#335c98] text-white"
                          : "bg-white text-secondary hover:bg-gray-200"
                      }`}
                    >
                      {type.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {windowTypes
                    .find((type) => type.id === activeTab)
                    .products.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
                        onClick={() => openModal(product)}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-full h-[18rem] p-4 object-cover"
                        />
                        <div className="p-4 flex flex-col gap-2 w-full">
                          <h3 className="din-semibold text-primary text-lg">
                            {product.name.split(" (")[0]} <br />
                            <span className="din-semibold text-primary text-lg">
                              {`(${product.name.split(" (")[1]}`}
                            </span>
                          </h3>
                          <p className="text-sm din-regular text-gray-600">
                            {product.design}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              {selectedProduct && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 "
                  onClick={closeModal}
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    className="bg-white rounded-lg p-6 max-w-[50rem] w-full h-auto overflow-y-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl text-primary din-semibold">
                        {selectedProduct.name}
                      </h3>
                      <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="Close modal"
                      >
                        <FaTimes size={24} />
                      </button>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                      <Image
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="md:w-[50%] md:h-[60%] p-4 object-cover rounded-lg shadow-lg mb-4"
                      />
                      <div className="flex flex-col">
                        <h4 className="din-semibold text-primary mb-2">
                          Specifications:
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {selectedProduct.specifications.map((spec) => (
                            <li key={spec.key} className="flex gap-2">
                              <span className="text-secondary capitalize whitespace-nowrap">
                                {spec.key}:
                              </span>
                              {spec.key === "Visit Website" ? (
                                <Link
                                  href={`https://${spec.value}/products/aluminium-windows`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:text-blue-700 din-medium whitespace-nowrap"
                                >
                                  {spec.value}
                                </Link>
                              ) : (
                                <span className="text-secondary din-medium whitespace-nowrap">
                                  {spec.value}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {selectedProduct.specifications.Visit_Web && (
                      <Link
                        href={selectedProduct.specifications.Visit_Web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center px-4 py-2 border  text-sm font-medium rounded-md shadow-sm text-black bg-white hover:bg-[#335c98] hover:text-white duration-700 din-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit Website <FaExternalLinkAlt className="ml-2" />
                      </Link>
                      // <Link href={selectedProduct.specifications.Visit_Web}>
                      //     <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 mb-6 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
                      //       {/* Colored background */}
                      //       <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>

                      //       {/* Top-left to bottom-right diagonal animation */}
                      //       <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                      //         <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                      //         <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                      //       </span>

                      //       {/* Button text */}
                      //       <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold">
                      //         GET A QUOTE
                      //       </span>
                      //     </button>
                      //   </Link>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
        <section className="py-8 px-4 lg:h-screen relative flex flex-col items-center justify-center bg-gray-100">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl din-semibold text-center mb-4 text-primary"
          >
            Premium Aluminum Windows for Modern Homes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" text-secondary text-justify max-w-2xl mx-auto mb-4 din-regular text-xs md:text-sm"
          >
            Upgrade your home with premium aluminum windows that combine
            durability and style, perfect for modern aesthetics. Our stainless
            steel window sliders offer seamless operation and enhanced security,
            ensuring your living space is both functional and elegant.
            Experience the perfect blend of energy efficiency and contemporary
            design with our innovative airwing technology.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-2/3 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
                  }}
                  className="w-full h-full"
                >
                  <Image
                    src={images[selectedImage]}
                    alt={`Aluminum Window ${selectedImage + 1}`}
                    className="rounded-lg shadow-lg object-cover xl:h-[65vh] xl:w-[40vw]"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
            <div className=" grid grid-cols-2 gap-6 h-auto">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer w-auto h-auto"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={150}
                    height={100}
                    className={`rounded-md ${
                      selectedImage === index
                        ? "shadow-xl shadow-[#335c98]"
                        : ""
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-4 md:px-8 relative">
          <div className="container mx-auto flex flex-col gap-10">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl din-semibold text-center text-primary"
            >
              Why Choose Our Aluminum Windows?
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl din-semibold mb-2 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-secondary din regular text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Customization Options Section */}
        <section className="py-16 px-4 md:px-8 bg-gray-100">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl din-semibold text-center mb-8 text-primary"
            >
              Customization Options
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=" text-gray-600 mb-8 max-w-2xl mx-auto din-regular text-justify"
            >
              Explore our extensive customization options for windows, including
              frame color, glass type, and window style to perfectly match your
              home’s aesthetic. Choose from a variety of hardware finishes and
              advanced locking systems to enhance both the beauty and security
              of your living space.
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {customizationOptions.map((option, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col gap-4"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-xl din-semibold text-primary">
                    {option.title}
                  </h3>
                  <p className="text-secondary nunito">{option.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl din-semibold mb-8 text-primary"
            >
              Ready to Upgrade Your Windows?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=" text-sm text-justify md:text-lg mb-8 max-w-2xl mx-auto din-regular text-secondary"
            >
              Are you ready to upgrade your windows for improved energy
              efficiency and style? Discover our range of high-performance
              windows, including double-glazed, vinyl, and aluminum options,
              designed to enhance your home's comfort and aesthetics. Join
              countless satisfied homeowners who have transformed their spaces
              with our affordable window replacement solutions and enjoy lower
              energy bills today!
            </motion.p>
            <Link href="/ContactUs">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 mb-6 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10"
              >
                <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>
                <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                  <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                  <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                </span>
                <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold">
                  GET A QUOTE
                </span>
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
