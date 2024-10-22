// import React from "react";
// import SSGlassRailingSystem from "./SSGlassRailingSystem";

// // SEO
// export const metadata = {
//   title: "Stainless Steel Glass Railing System",

//   description:
//     "Enhance your space with our premium stainless steel glass railing system, designed for both safety and elegance. Our customizable glass railings feature durable stainless steel frames and a variety of finishes, perfect for residential and commercial applications. Experience modern design and superior quality with our innovative glass railing solutions.",
//   name: "viewport",
//   content: "width=device-width, initial-scale=1",
//   property: "og:type",
//   content: "website",
//   property: "og:url",
//   content: "https://rajgurusteel.vercel.app/",
//   keywords: [
//     "Stainless Steel Glass Railing System",
//     "Custom Glass Railings",
//     "Durable Stainless Steel Railings",
//     "Modern Glass Railing Designs",
//     "Stainless Steel Railing with Glass Panels",
//     "High-Quality Glass Railing Solutions",
//     "Glass Balustrades with Stainless Steel",
//     "Customizable Railing Systems",
//     "Stainless Steel and Glass Railing Combinations",
//     "Outdoor Glass Railing Systems",
//     "Indoor Stainless Steel Glass Railings",
//     "Low-Maintenance Glass Railings",
//     "Safety Glass Railing Systems",
//     "Elegant Stainless Steel Railing Designs",
//     "Stainless Steel Railing",
//     "stainless steel railing",
//     "Stainless Steel railing",
//     "Steel railing",
//   ],
// };
// export default function page() {
//   return (
//     <div>
//       <SSGlassRailingSystem/>
//     </div>
//   );
// }

'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

import {
  FaShieldAlt,
  FaBolt,
  FaPaintBrush,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";
// import clampsImg from "../../assets/product/SSGlassRailingSystem/clamps.webp";
import handrail from "../../assets/product/steelGlassRailing/handrailSteel.webp";
import baseplate from "../../assets/product/steelGlassRailing/baseplate.webp";
import glasscap from "../../assets/product/steelGlassRailing/glassCap.webp";
import spigot from "../../assets/product/steelGlassRailing/spigot.webp";
import mountingbracket from "../../assets/product/steelGlassRailing/mountingBracket.webp";
import cornerconnector from "../../assets/product/steelGlassRailing/cornerConnector.webp";
import customImg1 from "../../assets/product/steelGlassRailing/extra/balcony.webp";
import customImg2 from "../../assets/product/steelGlassRailing/extra/balconyOutside.webp";
import customImg3 from "../../assets/product/steelGlassRailing/extra/closeUpBalcony.webp";
import customImg4 from "../../assets/product/steelGlassRailing/extra/cornerBalcony.webp";
import GlassRailing from "../../assets/product/steelGlassRailing/extra/glassBalcony.webp";
import Link from "next/link";
import HeroImg1 from "../../assets/product/steelGlassRailing/hero/heroBalcony.webp";
import HeroImg2 from "../../assets/product/steelGlassRailing/hero/heroClassicBalcony.webp";
import HeroImg3 from "../../assets/product/steelGlassRailing/hero/heroCornerBalcony.webp";
import HeroImg4 from "../../assets/product/steelGlassRailing/hero/heroGreenBalcony.webp";
import HeroImg5 from "../../assets/product/steelGlassRailing/hero/heroOutsideBalcony.webp";
import { FadeLeft, FadeRight } from "../../components/utility/animation.jsx";

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

export default function page() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

  // Section 1
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  // Section 2
  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);

  // Section 3
  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls3, inView3]);

  // Section 4
  const controls4 = useAnimation();
  const [ref4, inView4] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    }
  }, [controls4, inView4]);

  // Section 5
  const controls5 = useAnimation();
  const [ref5, inView5] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView5) {
      controls5.start("visible");
    }
  }, [controls5, inView5]);

  // Accessories Data
  const accessories = [
    {
      name: "Spigots",
      image: spigot,
      description: "Modern spigots for a sleek and minimalistic look.",
      specs: [
        { name: "Material", value: "316 Stainless Steel" },
        { name: "Installation", value: "Floor mounted or side mounted" },
        { name: "Glass Thickness", value: "10mm to 12mm" },
      ],
      dimensions: { height: "h-[30rem]", width: "w-full" },
    },

    {
      name: "Corner Connectors",
      image: cornerconnector,
      description: "Connectors for creating smooth corner transitions.",
      specs: [
        { name: "Material", value: "316 Stainless Steel" },
        { name: "Finish", value: "Brushed" },
        { name: "Usage", value: "For 90-degree corners" },
      ],
      dimensions: { height: "h-72", width: "w-full" },
    },
    {
      name: "Base Plates",
      image: baseplate,
      description: "Robust base plates for secure mounting of glass panels.",
      specs: [
        { name: "Material", value: "316 Stainless Steel" },
        { name: "Dimensions", value: "100mm x 100mm x 10mm" },
        { name: "Finish", value: "Brushed" },
        { name: "Mounting", value: "4 anchor bolts (included)" },
      ],
      dimensions: { height: "h-72", width: "w-full" },
    },
    {
      name: "Handrails",
      image: handrail,
      description: "Elegant and sturdy handrails for added safety and style.",
      specs: [
        { name: "Material", value: "304 or 316 Stainless Steel" },
        { name: "Diameter", value: "42.4mm or 48.3mm" },
        { name: "Finish", value: "Brushed or Mirror Polished" },
        { name: "Length", value: "Custom cut to size" },
      ],
      dimensions: { height: "h-[30rem]", width: "w-full" },
    },
    {
      name: "Post Caps",
      image: glasscap,
      description:
        "Stylish caps for the top of posts to enhance appearance and safety.",
      specs: [
        { name: "Material", value: "316 Stainless Steel" },
        { name: "Finish", value: "Brushed or Polished" },
        { name: "Compatibility", value: "Fits standard post sizes" },
      ],
      dimensions: { height: "h-[30rem]", width: "w-full" },
    },
    {
      name: "Handrail Brackets",
      image: mountingbracket,
      description: "Sturdy brackets for supporting handrails.",
      specs: [
        { name: "Material", value: "304 Stainless Steel" },
        { name: "Finish", value: "Polished" },
        { name: "Compatibility", value: "For 42.4mm handrails" },
      ],
      dimensions: { height: "h-72", width: "w-full" },
    },
  ];

  const [hoveredAccessory, setHoveredAccessory] = useState(null);
  const heroSlides = [
    {
      image: HeroImg1,
      title: "Modern Stainless Steel Glass Railing Systems",
      description:
        "Transform your space with our sleek stainless steel railing systems, offering a modern aesthetic and robust durability for both indoor and outdoor applications.",
    },
    {
      image: HeroImg2,
      title: "Durable Stainless Steel Glass Railing Systems",
      description:
        "Discover our weather-resistant stainless steel railings, engineered to withstand the elements while providing a stylish and secure barrier for your property.",
    },
    {
      image: HeroImg3,
      title: "Customizable Stainless Steel Glass Railing Systems",
      description:
        "Design your ideal space with our custom stainless steel glass railings, combining elegance and strength to enhance your home or business with a contemporary flair.",
    },
    {
      image: HeroImg4,
      title: "Minimalist Stainless Steel Glass Railing Systems",
      description:
        "Embrace simplicity with our minimalist stainless steel railing solutions, perfect for modern designs that prioritize clean lines and unobtrusive safety.",
    },
    {
      image: HeroImg5,
      title: "Premium Stainless Steel Glass Railing Systems",
      description:
        "Upgrade your property with our premium stainless steel glass railings, featuring high-quality materials and craftsmanship for lasting beauty and security at an affordable price.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
      setNextSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
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
      <main className="max-w-[80rem] mx-auto">
        {/* Section 1 */}
        <motion.section
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={fadeInUp}
          className="py-10 px-4 lg:px-0"
        >
          <h2 className="text-4xl din-extrabold mb-8 text-center text-primary">
            Elevate Your Space with Stainless Steel Glass Railing Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <Image
                src={GlassRailing}
                layout="responsive"
                objectFit="cover"
                alt="Stainless Steel Glass Railing System"
                className="rounded-lg shadow-lg lg:h-[33rem]"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl din-semibold mb-4 text-primary">
                Unparalleled Elegance and Safety
              </h3>
              <p className="text-secondary mb-6 nunito">
                Our stainless steel glass railing systems combine modern
                aesthetics with robust engineering to provide a seamless blend
                of style and security. Perfect for both indoor and outdoor
                applications, these systems offer:
              </p>
              <ul className="list-disc list-inside  text-secondary mb-6 nunito">
                <li>Unobstructed views and enhanced spatial perception</li>
                <li>
                  Durability and corrosion resistance for long-lasting beauty
                </li>
                <li>Customizable designs to suit any architectural style</li>
                <li>Easy maintenance and cleaning for lasting brilliance</li>
                <li>Compliance with international safety standards</li>
              </ul>
              <Link href="/ContactUs">
                <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 mb-6 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
                  <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>
                  <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                    <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                    <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                  </span>
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold">
                    GET A QUOTE
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={fadeInUp}
          className="py-10 bg-gray-100 rounded-xl"
        >
          <div className="px-4 lg:px-20">
            <h2 className="text-4xl din-bold mb-6 text-center text-primary">
              Premium Accessories
            </h2>
            <p className="text-xl text-secondary text-center mb-6 din-medium">
              Explore our range of high-quality accessories designed to
              complement your glass railing system.
            </p>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {accessories.map((accessory, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden bg-white rounded-lg shadow-lg mb-4"
                  onMouseEnter={() => setHoveredAccessory(index)}
                  onMouseLeave={() => setHoveredAccessory(null)}
                >
                  <Image
                    src={accessory.image}
                    alt={accessory.name}
                    layout="responsive"
                    className={`rounded-lg ${accessory.dimensions.height} ${accessory.dimensions.width}`}
                  />
                  <motion.div
                    className={`absolute inset-0 opacity-70 bg-gradient-to-r from-gray-900 to-gray-400 p-4 transition-transform duration-1000 ease-in-out flex flex-col gap-2 ${
                      hoveredAccessory === index
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
                  >
                    <h3 className="text-white text-3xl din-semibold">
                      {accessory.name}
                    </h3>
                    <p className="text-white din-medium">
                      {accessory.description}
                    </p>
                    <h4 className="text-xl din-semibold text-white mt-2">
                      Specifications:
                    </h4>
                    <ul className="text-white din-medium">
                      {accessory.specs.map((spec, specIndex) => (
                        <li key={specIndex}>{`${spec.name}: ${spec.value}`}</li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 4 */}
        <motion.section
          ref={ref4}
          initial="hidden"
          animate={controls4}
          variants={fadeInUp}
          className="py-10"
        >
          <div className="px-4">
            <h2 className="text-4xl din-extrabold mb-8 text-center text-primary">
              Installation Process
            </h2>
            <motion.div
              className="grid md:grid-cols-3 grid-cols-2 gap-3 mb-6"
              variants={staggerChildren}
            >
              {[
                {
                  title: "Site Measurement",
                  description:
                    "Precise measurements are taken to ensure a perfect fit.",
                },
                {
                  title: "Custom Fabrication",
                  description:
                    "Components are custom-made to your specifications.",
                },
                {
                  title: "Base Plate Installation",
                  description:
                    "Secure mounting of base plates to the floor or structure.",
                },
                {
                  title: "Post Attachment",
                  description: "Installation of posts or spigots.",
                },
                {
                  title: "Glass Panel Mounting",
                  description:
                    "Careful placement and securing of glass panels.",
                },
                {
                  title: "Handrail Installation",
                  description:
                    "Attachment of handrails for added support and aesthetics.",
                },
                {
                  title: "Final Adjustments",
                  description:
                    "Ensuring all components are properly aligned and secure.",
                },
                {
                  title: "Quality Inspection",
                  description:
                    "Thorough check to ensure safety and quality standards are met.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start hover:shadow-lg rounded-lg p-1 md:p-4 transition duration-300"
                  variants={fadeInUp}
                >
                  <FaCheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl din-semibold mb-2 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-xs text-secondary nunito">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center mt-2">
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
                    Schedule Your Installation
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={ref2}
          initial="hidden"
          animate={controls2}
          variants={fadeInUp}
          className="py-10"
        >
          <div className="px-4">
            <h2 className="text-4xl din-extrabold mb-12 text-center text-primary">
              Key Features
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildren}
            >
              {[
                {
                  icon: FaShieldAlt,
                  title: "Enhanced Safety",
                  description:
                    "Tempered glass and high-grade stainless steel ensure maximum protection without compromising visibility.",
                },
                {
                  icon: FaBolt,
                  title: "Quick Installation",
                  description:
                    "Our innovative design allows for faster and easier installation, reducing project timelines.",
                },
                {
                  icon: FaPaintBrush,
                  title: "Customizable Finishes",
                  description:
                    "Choose from a variety of finishes to match your specific aesthetic needs and architectural style.",
                },
                {
                  icon: FaTools,
                  title: "Low Maintenance",
                  description:
                    "Resistant to corrosion and easy to clean, our systems maintain their beauty with minimal upkeep.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-200 p-6 rounded-lg hover:shadow-2xl text-center"
                  variants={fadeInUp}
                >
                  <feature.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl din-semibold mb-2 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-secondary nunito">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        {/* Section 5 */}
        <motion.section
          ref={ref5}
          initial="hidden"
          animate={controls5}
          variants={fadeInUp}
          className="py-10"
        >
          <div className="px-4 text-center">
            <h2 className="text-4xl din-bold mb-8 text-primary">
              Customization Options
            </h2>
            <p className="text-xl text-secondary mb-8 din-semibold">
              Tailor your glass railing system to perfectly match your vision
              and architectural requirements.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildren}
            >
              {[
                {
                  name: "Glass Types",
                  image: customImg1,
                  description:
                    "Choose from clear, frosted, or tinted glass options.",
                },
                {
                  name: "Railing Styles",
                  image: customImg2,
                  description:
                    "Select from various post designs and top rail profiles.",
                },
                {
                  name: "Finishes",
                  image: customImg3,
                  description:
                    "Available in brushed, polished, or powder-coated finishes.",
                },
                {
                  name: "Mounting Options",
                  image: customImg4,
                  description:
                    "Side mount, top mount, or embedded installation methods.",
                },
              ].map((option, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-xl text-center flex flex-col justify-between"
                  variants={fadeInUp}
                >
                  <Image
                    src={option.image}
                    alt={option.name}
                    layout="responsive"
                    width={300}
                    height={300}
                    className="mx-auto mb-4 rounded-2xl"
                  />
                  <h3 className="text-xl din-semibold text-primary mb-2">
                    {option.name}
                  </h3>
                  <p className="text-secondary nunito">{option.description}</p>
                </motion.div>
              ))}
            </motion.div>
            <Link href="/ContactUs">
              <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 mt-8 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
                <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>
                <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                  <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                  <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                </span>
                <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold">
                  GET A QUOTE
                </span>
              </button>
            </Link>
          </div>
        </motion.section>
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
    </div>
  );
}
