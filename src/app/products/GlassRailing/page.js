// import React from 'react'
// import GlassRailing from './GlassRailing'


// export const metadata = {
//   title: "Glass Railing System",

//   description:
//     "The Imperio Glass Railing System offers a perfect blend of elegance and durability, featuring frameless glass railings that enhance the aesthetic appeal of balconies, terraces, and staircases. Our innovative postless design ensures maximum visibility while providing robust safety and stability. With customizable options and high-quality materials, Imperio is the ideal choice for modern architectural solutions.",
//   name: "viewport",
//   content: "width=device-width, initial-scale=1",
//   property: "og:type",
//   content: "website",
//   property: "og:url",
//   content: "https://rajgurusteel.vercel.app/",
//   keywords: [
//     "imperio glass railing system",
//     "frameless glass railings",
//     "Durable Glass Railing Solutions",
//     "Customizable Glass Railings",
//     "Postless Glass Railing Design",
//     "Elegant Balcony Railings",
//     "Modern Staircase Railings",
//     "High-Quality Glass Railings",
//     "Aesthetic Glass Railing Systems",
//     "Safety Glass Railings",
//     "Aluminum Glass Railing Systems",
//     "Innovative Railing Solutions",
//     "Residential Glass Railings",
//     "Commercial Glass Railing Systems",
//     "Weather-Resistant Glass Railings",
//     "Tempered Glass Railings",
//     "glass railing system",
//     "spigot glass railing system",
//     "peak glass railing system",
//     "tempered glass railing system",
//     "glass railing system near me",
//     "exterior glass railing system",
//     "glass railing system residential",
//     "glass railing system interior",
//     "pure view glass railing system",
//     "glass railing",
//     "railing system",
//     "balcony railing",
//     "terrace railing",
//     "terrace glass railing",
//     "glass railing systems",
//     "glass railing",
//     "system ",
//     "Glass railing",
//     "durability",
//     "safety",
//     "maximum visibility",
//     "durable railing",
//   ],
// };

// export default function page() {
//   return (
//     <div>
//       <GlassRailing/>
//     </div>
//   )
// }


"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { FadeLeft, FadeRight } from "../../components/utility/animation.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaChevronDown } from "react-icons/fa";
import Link from "next/link";

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

// Assuming these imports are available in your project
// import bg from "../../assets/product/glassrailingSystems/bg.webp";
import A50 from "../../assets/product/glassrailingSystems/products/IMPERIO-A50-BLACK.webp";
import L50 from "../../assets/product/glassrailingSystems/products/blackPro.webp";
import semiSmart from "../../assets/product/glassrailingSystems/products/IMPERIO-D75-BLACK.webp";
import dot from "../../assets/product/glassrailingSystems/products/IMPERIO-Dot-Black.webp";
import Lux250 from "../../assets/product/glassrailingSystems/products/IMPERIO-T200-BLACK.webp";
import sleek17 from "../../assets/product/glassrailingSystems/products/handrail/BLACK-FINISH.webp";
import Led40 from "../../assets/product/glassrailingSystems/products/handrail/BLACK-FINISH-7.webp";
import oval60 from "../../assets/product/glassrailingSystems/products/handrail/BLACK-FINISH-4.webp";
import buildingImg from "../../assets/product/glassrailingSystems/gallery/building.webp";
import penthuseImg from "../../assets/product/glassrailingSystems/gallery/penthouse.webp";
import stairsImg from "../../assets/product/glassrailingSystems/gallery/stairs.webp";
// import balconyImg from "../../assets/product/glassrailingSystems/gallery/balcony.webp";

const products = [
  {
    id: 1,
    name: "Imperio",
    model: "ACE-50 Base",
    common: "Specifications",
    image: A50,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 2,
    name: "Imperio",
    model: "Pro-50 Base",
    common: "Specifications",
    image: L50,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 3,
    name: "Imperio",
    model: "Semi Smart-75 Base",
    common: "Specifications",
    image: semiSmart,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 4,
    name: "Imperio",
    model: "Dot-50 Base",
    common: "Specifications",
    image: dot,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 5,
    name: "Imperio",
    model: "LUX-250 Base",
    common: "Specifications",
    image: Lux250,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 6,
    name: "Imperio",
    model: "Sleek-17 Handrail",
    common: "Specifications",
    image: sleek17,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 7,
    name: "Imperio",
    model: " LED-40 Handrail",
    common: "Specifications",
    image: oval60,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 8,
    name: "Imperio",
    model: "Oval-60 Handrail",
    common: "Specifications",
    image: Led40,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
];

const faqData = [
  {
    question: "What materials are used for glass railings?",
    answer:
      "Glass railings are typically made from tempered glass and aluminum or stainless steel for the frames, ensuring durability and safety.",
  },
  {
    question: "Are glass railings safe for children?",
    answer:
      "Yes, glass railings are safe for children when installed properly. They provide a clear barrier that prevents falls while maintaining visibility.",
  },
  {
    question: "How do I clean glass railings?",
    answer:
      "Cleaning glass railings is easy. Use a soft cloth and a mild glass cleaner to remove smudges and dirt without scratching the surface.",
  },
  {
    question: "Can glass railings withstand harsh weather?",
    answer:
      "Yes, tempered glass is designed to withstand harsh weather conditions, making it suitable for both indoor and outdoor applications.",
  },
  {
    question: "Do glass railings require a lot of maintenance?",
    answer:
      "No, glass railings are low maintenance. Regular cleaning is all that's needed to keep them looking great.",
  },
];

const features = [
  {
    title: "Elegant Design",
    description:
      "Elevate your home with our elegant glass railing systems, expertly crafted to complement contemporary architecture. These sleek and stylish railings enhance safety and durability, offering peace of mind while improving your property's aesthetic appeal.",
  },
  {
    title: "Unobstructed Views",
    description:
      "Experience the beauty of unobstructed views with our premium glass railing systems, designed to seamlessly integrate with your home's architecture. Our sleek and stylish railings provide a perfect balance of safety and elegance, allowing natural light to flood your space while maintaining an open and airy feel.",
  },
  {
    title: "Easy Installation",
    description:
      "Transform your space effortlessly with our easy installation glass railing systems, designed for both DIY enthusiasts and professionals. Featuring straightforward instructions and all necessary hardware, these railings allow for a quick and hassle-free setup.",
  },
  {
    title: "Weather Resistance",
    description:
      "Protect your outdoor spaces with our weather-resistant glass railing systems, expertly designed to maintain beauty and safety year-round. Crafted from high-quality materials, these railings withstand rain, snow, and intense sunlight, resisting corrosion, fading, and damage from harsh weather conditions.",
  },
  {
    title: "Customizable Options",
    description:
      "Discover the beauty of our customizable glass railing systems, designed to fit your unique style and needs. With a variety of options, including frameless glass railings, semi-frameless designs, and color finishes, you can create the perfect look for your space.",
  },
];

const heroSlides = [
  {
    image: penthuseImg,
    title: "Elegant Glass Railings Systems",
    description:
      "Elevate your decor with our modern glass railings, combining style and safety for a sleek, decorative touch in any design.",
  },
  {
    image: buildingImg,
    title: "Durable Glass Railing Systems",
    description:
      "Explore our durable glass railing systems, designed to elevate your outdoor spaces while providing unobstructed views and maximum safety.",
  },
  {
    image: stairsImg,
    title: "Customizable Glass Railings Systems",
    description:
      "Create your perfect look with our customizable glass railings, featuring modern designs that enhance any space while ensuring safety and style.",
  },
];

export default function page() {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
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

  const toggleProductSpecs = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const [expandedFaq, setExpandedFaq] = useState(0);
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
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

  return (
    <div className=" min-h-screen">
      {/* Hero Section with Carousel */}
      {/* <section className="relative  bg-gray-800 h-[40rem] overflow-hidden">
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
              className="container mx-auto px-4 h-full flex items-center"
            >
              <motion.div
                variants={FadeRight(0.3)}
                initial="hidden"
                animate="visible"
                className="w-1/2 pr-14"
              >
                <h1 className="text-5xl din-semibold text-white mb-4">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl din-regular text-gray-200">
                  {heroSlides[currentSlide].description}
                </p>
              </motion.div>
              <motion.div
                variants={FadeLeft(0.3)}
                initial="hidden"
                animate="visible"
                className="w-1/2"
              >
                <div className="relative w-full h-[32rem] flex mt-14 ml-24">
                  <Image
                    src={heroSlides[nextSlide].image}
                    alt={heroSlides[nextSlide].title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section> */}
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

      <main className=" container overflow-hidden mx-auto">
        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className=" text-3xl md:text-5xl din-semibold text-primary mb-8 text-center">
              Glass Railing Systems
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-100 rounded-lg p-6 shadow-md flex justify-between flex-col flex-grow"
                >
                  <Image
                    src={product.image}
                    layout="responsive"
                    objectFit="cover"
                    alt={product.name}
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-xl din-medium text-primary">
                      {product.name}
                    </h3>
                    <p className="text-secondary text-sm">{product.model}</p>
                  </div>
                  <div className="mt-4">
                    <div className="flex  justify-between items-center">
                      <span className=" din-medium text-primary">
                        {product.common}
                      </span>
                      <button
                        onClick={() => toggleProductSpecs(product.id)}
                        className="text-primary focus:outline-none"
                      >
                        {expandedProduct === product.id ? (
                          <FaMinus />
                        ) : (
                          <FaPlus />
                        )}
                      </button>
                    </div>
                    <AnimatePresence>
                      {expandedProduct === product.id && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5 }}
                          className="mt-2 space-y-2"
                        >
                          {product.specs.map((spec, index) => (
                            <li key={index} className="text-sm">
                              <strong className=" din-semibold text-primary">
                                {spec.title}:
                              </strong>{" "}
                              <span
                                dangerouslySetInnerHTML={{ __html: spec.value }}
                              />
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex justify-center ">
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

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl din-semibold text-primary mb-8 text-center">
              Glass Railing Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md relative overflow-hidden group"
                >
                  <h3 className="text-xl din-semibold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-secondary">{feature.description}</p>
                  <div className="absolute left-0 bottom-0 w-full h-1 bg-[#335c98] shadow-xl transform -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-0"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="py-16 px-4 "
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl din-semibold mb-8 text-center text-primary">
              Frequently Asked Questions
            </h2>
            <motion.div className="space-y-4 ">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <motion.button
                    className="w-full text-left p-4 focus:outline-none"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? index : index)
                    }
                  >
                    <div className="flex justify-between items-center">
                      <span className="din-semibold text-primary">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown />
                      </motion.span>
                    </div>
                  </motion.button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFaq === index ? "auto" : 0,
                      opacity: expandedFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 bg-gray-50 din-regular text-sm text-secondary">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        {/* FAQ close */}
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
                        objectFit="cover"
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
