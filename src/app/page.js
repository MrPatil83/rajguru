"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

import Img1 from "../app/assets/home-swiper/heroSliderFirst.webp";
import Img2 from "../app/assets/home-swiper/heroSliderSecond.webp";
import Img3 from "../app/assets/home-swiper/heroSliderThird.webp";
import Img4 from "../app/assets/product/decorativeSheet/hero/bedroom.webp";
import Img5 from "../app/assets/product/profile/T_profile/slider/Img1.webp";
import section2 from "./assets/home-swiper/section2.webp";
import preview from "./assets/home-swiper/previewss.webp";

import CarouselImg1 from "./assets/product/balustrade/Images/building.webp";
import CarouselImg2 from "./assets/product/invisiblegrill/tallImg/img1.jpg";
import CarouselImg3 from "./assets/product/wireRope/slider/heroCityBalcony.webp";
import CarouselImg4 from "./assets/product/profile/T_profile/finishes/black/hairlineBlack.png";
import CarouselImg5 from "./assets/product/profile/U_profile/finishes/black/stainBlack.png";
import CarouselImg6 from "./assets/product/profile/L_profile/finishes/black/stainBlack.png";
import CarouselImg7 from "./assets/product/profile/flutedPanel/flutedImg.webp";
import CarouselImg8 from "./assets/product/glassrailingSystems/gallery/balcony.webp";
import CarouselImg9 from "./assets/product/steelGlassRailing/extra/closeUpBalcony.webp";
import CarouselImg10 from "./assets/product/decorativeSheet/middle.webp";
import sectionImg4 from "./assets/home-swiper/section4.webp";

import {
  FaShieldAlt,
  FaHammer,
  FaGem,
  FaFire,
  FaTools,
  FaExchangeAlt,
  FaChevronDown,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { LuLightbulb, LuCog } from "react-icons/lu";
import { GoZap } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";
import { PiCircleDashedLight } from "react-icons/pi";
import { TfiHome } from "react-icons/tfi";
import { TbBulb } from "react-icons/tb";
import { HiArrowUpRight } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import { HomeFadeLeft, HomeFadeRight } from "./components/utility/animation";

const images = [Img3, Img1, Img2, Img4, Img5];

function Section1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setMobileView] = useState(false);

  const [visible, setVisible] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const messages = [
    {
      title: "Crafted for Trust \n Built for Strength",
      description:
        "Delivering premium craftsmanship and durability, \n ensuring quality you can trust and strength that lasts.",
    },
    {
      title: "Innovative Solutions \n Unmatched Quality",
      description:
        "Transforming industries with state-of-the-art technologies, \n our products stand the test of time.",
    },
    {
      title: "Your Reliable Partner \n In Every Venture",
      description:
        "Empowering your business with robust materials, \n built to endure and exceed expectations.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setVisible(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 770);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]);

  return (
    <section className=" flex h-screen w-screen relative snap-start">
      <div className="relative w-full h-full overflow-hidden">
        {images.map(
          (image, index) =>
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 5,
                }}
                className="absolute w-full h-full"
              >
                <Image
                  priority
                  src={image}
                  className="object-cover h-full w-full"
                  alt={`Slide ${index}`}
                  height="auto"
                  width="auto"
                />
              </motion.div>
            )
        )}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 9,
          }}
          className="relative right-0 bg-gray-950 opacity-60 flex items-center justify-center text-white p-16 flex-col gap-4 h-full w-full lg:items-center text-center"
        >
          {visible && (
            <>
              <motion.h1
                variants={HomeFadeLeft(0.6)}
                initial="hidden"
                animate="visible"
                className="text-[2rem] sm:text-[3rem] md:text-[3.3rem] lg:text-[3.5rem] xl:text-[3.8rem] text-center whitespace-nowrap din-bold"
              >
                {messages[textIndex].title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </motion.h1>
              <motion.p
                variants={HomeFadeRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-xs md:text-2xl whitespace-nowrap nunito text-center"
              >
                {messages[textIndex].description
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </motion.p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Section4() {
  const [isMobileView, setMobileView] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth >= 1025);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-gray-50 w-auto h-auto flex flex-col my-8 xl:flex-row xl:h-[100vh] xl:w-[100vw] xl:py-24 xl:my-0 snap-start z-0"
    >
      <div className="flex flex-col items-center relative w-auto h-auto xl:w-full xl:h:full xl:flex-row xl:justify-between">
        <Image
          priority
          src={section2}
          alt="Section2Img"
          className="h-[50vh] w-full xl:w-[60%] xl:h-[100%] xl:absolute"
        />
        {isMobileView === false ? (
          <div className="bg-gray-100 w-full h-auto relative py-2">
            <div className="relative flex flex-col items-start justify-center p-5 gap-4 text-lg text-start h-auto w-auto">
              <h1 className="din-bold text-xl text-[#335c98]">
                Shaping the Future of Stainless Steel
              </h1>
              <p className="nunito text-xs text-justify">
                "We are a premier multi-division conglomerate in the stainless
                steel industry, dedicated to ensuring customer satisfaction and
                delivering high-quality products. Our commitment to eco-friendly
                stainless steel and advanced machinery fosters positive change
                and innovation across various sectors. With the support of our
                dedicated team and partners, we empower success through
                cutting-edge solutions.
              </p>
              <p className="nunito text-xl text-justify">Get in Touch</p>
              <p className="nunito text-xs text-justify">
                "Ready to elevate your projects with our innovative stainless
                steel solutions? Contact us today to discuss your needs and
                discover how we can assist you in achieving your goals. We look
                forward to partnering with you!"
              </p>
              <Link href="/ContactUs">
                <button
                  type="submit"
                  className="flex justify-center gap-1 items-center shadow-lg text-sm text-[#335c98] bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#335c98] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative xl:z-10 px-2 py-1 overflow-hidden border-2 rounded-full group"
                >
                  Contact Us
                  <HiArrowUpRight className="w-6 h-6 justify-end group-hover:rotate-45 group-hover:bg-gray-50 text-black ease-linear duration-500 rounded-full border border-gray-700 group-hover:border-none p-1" />
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <motion.div
            className="bg-gray-300 opacity-90 w-[50%] h-[80%]"
            initial={{ x: "200%" }}
            animate={inView ? { x: "100%" } : {}}
            exit={{ x: "200%" }}
            transition={{
              duration: 1.1,
              delay: 0.6,
            }}
          >
            <div className="h-full flex flex-col items-start justify-center px-14 gap-[1rem] text-[#335c98]">
              <h2 className="din-bold text-3xl text-start">
                Shaping the Future of Stainless Steel
              </h2>
              <p className="nunito text-[14px] text-justify">
                "We are a premier multi-division conglomerate in the stainless
                steel industry, dedicated to ensuring customer satisfaction and
                delivering high-quality products. Our commitment to eco-friendly
                stainless steel and advanced machinery fosters positive change
                and innovation across various sectors. With the support of our
                dedicated team and partners, we empower success through
                cutting-edge solutions.
              </p>
              <p className="din-semibold text-xl text-justify">Get in Touch</p>
              <p className="nunito text-[14px] text-justify">
                "Ready to elevate your projects with our innovative stainless
                steel solutions? Contact us today to discuss your needs and
                discover how we can assist you in achieving your goals. We look
                forward to partnering with you!"
              </p>
              <Link href="/ContactUs">
                <button
                  type="submit"
                  className="flex justify-center gap-1 items-center shadow-lg text-sm text-[#335c98] bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#335c98] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative xl:z-10 px-2 py-1 overflow-hidden border-2 rounded-full group"
                >
                  Contact Us
                  <HiArrowUpRight className="w-6 h-6 justify-end group-hover:rotate-45 group-hover:bg-gray-50 text-black ease-linear duration-500 rounded-full border border-gray-700 group-hover:border-none p-1" />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function Section3() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative w-full h-auto gap-2 p-2 xl:px-[18rem] xl:h-screen xl:flex-row snap-start z-0"
    >
      <div className="relative h-auto w-auto flex flex-col justify-around items-center gap-4 xl:h-full xl:w-full xl:px-8 xl:gap-28 xl:flex-row lg:mt-6">
        <div className="h-auto w-auto flex justify-center xl:justify-start xl:items-start xl:h-[90%] xl:w-[35%]">
          <Image
            priority
            src={preview}
            alt="Modern room with large windows"
            className="rounded-lg relative h-[100%] w-full xl:absolute xl:w-[45%] xl:h-[75%]"
          />
        </div>

        <div className="flex flex-col justify-between items-end h-[85%] w-full xl:w-[50%]">
          <motion.div
            variants={itemVariants}
            className="space-y-2 flex flex-col px-4 xl:ml-16"
          >
            <div className="bg-gray-300 text-[#335c98] px-4 py-2 rounded w-36 text-center din-bold whitespace-nowrap">
              Product Quality
            </div>
            <h2 className="text-4xl text-[#335c98] din-bold">
              Explore Premium Stainless Steel Products
            </h2>
            <p className="text-gray-800 text-justify">
              Uncover the sophistication of our premium stainless steel
              products, combining strength and beauty for lasting appeal.
              Perfect for any setting, they offer both resilience and a sleek,
              contemporary look.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 bg-white rounded-lg z-0 w-full md:shadow-xl xl:h-[45%] xl:grid-cols-3 xl:w-[110%] p-2"
          >
            {[
              { name: "Inoxydable", icon: <FaShieldAlt className="w-8 h-8" /> },
              { name: "Robustness", icon: <FaHammer className="w-8 h-8" /> },
              { name: "Elegance", icon: <FaGem className="w-8 h-8" /> },
              { name: "Thermal", icon: <FaFire className="w-8 h-8" /> },
              { name: "Convenience", icon: <FaTools className="w-8 h-8" /> },
              {
                name: "Adaptability",
                icon: <FaExchangeAlt className="w-8 h-8" />,
              },
            ].map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col justify-center p-2 ${
                  index === 0 ? "lg:border-r-[1px] lg:border-b-[1px]" : ""
                } ${index === 1 ? "lg:border-b-[1px]" : ""} ${
                  index === 2 ? "lg:border-l-[1px] lg:border-b-[1px]" : ""
                } ${index === 3 ? " lg:border-r-[1px]" : ""} ${
                  index === 5 ? " lg:border-l-[1px]" : ""
                }`}
              >
                <div className="group flex flex-col items-center text-lg cursor-pointer transition duration-700 hover:scale-110 gap-4">
                  <p className="group-hover:transform group-hover:scale-x-[-1] transition duration-700 text-slate-500">
                    {type.icon}
                  </p>
                  <p className="text-[#335c98] din-medium">{type.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function Section2() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <LuLightbulb size={25} />,
      title: "Innovative Designs",
      description:
        "We push the boundaries of stainless steel applications in modern architecture. Our team of expert designers and engineers work tirelessly to create cutting-edge solutions that blend form and function seamlessly. From sleek building facades to intricate interior elements, our innovative designs set new standards in the industry.",
    },
    {
      icon: <GoZap size={25} />,
      title: "Advanced Processing",
      description:
        "Utilizing state-of-the-art technology for precision manufacturing, we ensure every product meets the highest quality standards. Our advanced processing techniques include laser cutting, robotic welding, and computer-controlled finishing, allowing us to achieve unparalleled accuracy and consistency in our stainless steel products.",
    },
    {
      icon: <LuCog size={25} />,
      title: "Custom Solutions",
      description:
        "We pride ourselves on tailoring our products to meet specific client needs and industry standards. Our team works closely with architects, contractors, and end-users to develop bespoke stainless steel solutions. Whether it's a unique architectural feature or a specialized industrial component, we have the expertise to bring your vision to life.",
    },
  ];

  const toggleFeature = (index) => {
    setActiveFeature(activeFeature === index ? index : index);
  };

  return (
    <section
      ref={ref}
      className="relative md:w-screen md:h-[100vh] snap-start bg-gray-50 z-0"
    >
      <div className="container mx-auto px-4 md:px-10 flex flex-col justify-center items-center h-auto md:h-full py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl text-[#335c98] mb-4 din-bold">
            Innovation & Technology
          </h2>
          <p className="text-xs md:text-lg text-gray-700 max-w-3xl mx-auto nunito">
            We leverage cutting-edge technology and innovative processes to
            produce high-quality stainless steel products that meet the evolving
            needs of our customers.
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-stretch gap-10 h-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full lg:w-1/2 flex-grow"
          >
            <div className="h-80 md:h-full relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={sectionImg4}
                alt="Innovation in stainless steel applications"
                className="transform hover:scale-105 transition-transform duration-300 h-full"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl mb-2 din-bold">
                  Cutting-Edge Solutions
                </h3>
                <p className="text-sm md:text-base nunito md:w-2/3 text-justify">
                  Explore how our innovative stainless steel products are
                  shaping the future of architecture and design.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full lg:w-1/2 flex-grow"
          >
            <div className="rounded-xl md:shadow-lg p-6 h-auto">
              <h3 className="text-2xl text-[#335c98] mb-4 din-bold">
                Our Technological Edge
              </h3>
              {features.map((feature, index) => (
                <div key={index} className="mb-2">
                  <button
                    className={`flex items-center justify-between w-full p-4 rounded-lg text-left transition-colors duration-300 ${
                      activeFeature === index
                        ? "bg-blue-100"
                        : "bg-blue-50 hover:bg-blue-100"
                    }`}
                    onClick={() => toggleFeature(index)}
                    aria-expanded={activeFeature === index}
                    aria-controls={`feature-content-${index}`}
                  >
                    <div className="flex items-center">
                      <span className="w-6 h-6 text-slate-500 mr-3">
                        {feature.icon}
                      </span>
                      <h4 className="din-semibold text-slate-500">
                        {feature.title}
                      </h4>
                    </div>
                    <FaChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeFeature === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeFeature === index && (
                      <motion.div
                        id={`feature-content-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="p-4 text-slate-500 nunito text-justify">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Carousel = () => {
  const Carouselimages = [
    {
      src: CarouselImg1,
      name: "Stainless Steel Balustrade System",
      description: "A sturdy railing system for various applications.",
      link: "/products/BalustradeSystem",
    },
    {
      src: CarouselImg2,
      name: "Invisible Grill",
      description: "A seamless grill solution for safety and style.",
      link: "/products/SSInvisibleGrill",
    },
    {
      src: CarouselImg3,
      name: "Stainless Steel Wire Rope",
      description: "Durable wire rope designed for strength and versatility..",
      link: "/products/SSWireRope",
    },
    {
      src: CarouselImg4,
      name: "T Profile",
      description: "A versatile profile for modern designs.",
      link: "/products/profile/tProfile",
    },
    {
      src: CarouselImg5,
      name: "U Profile",
      description: "Perfect for structural support and aesthetics.",
      link: "/products/profile/uProfile",
    },
    {
      src: CarouselImg6,
      name: "L Profile",
      description: "Ideal for corner fittings and enhancements.",
      link: "/products/profile/lProfile",
    },
    {
      src: CarouselImg7,
      name: "Fluted Panel",
      description: "Elegant paneling for enhanced visual appeal.",
      link: "/products/profile/SSFlutedPanelProfile",
    },
    {
      src: CarouselImg8,
      name: "Glass Railing Systems",
      description: "Sleek glass railings that elevate any space.",
      link: "/products/profile/GlassRailing",
    },
    {
      src: CarouselImg9,
      name: "Stainless Steel Glass Railing System",
      description: "A modern blend of strength and transparency.",
      link: "/products/profile/SSGlassRailingSystem",
    },
    {
      src: CarouselImg10,
      name: "Stainless Steel Decorative Sheets",
      description: "Stylish sheets that add a touch of elegance.",
      link: "/products/profile/ssDecorativeSheet",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 0 },
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: { x: "0", opacity: 1, transition: { duration: 1 } },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === Carouselimages.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Carouselimages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        handleNext();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg border-gray-300">
      <motion.div
        key={currentIndex}
        initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
        animate="visible"
        variants={slideVariants}
        className="flex flex-col"
      >
        <motion.img
          src={Carouselimages[currentIndex].src.src}
          alt={Carouselimages[currentIndex].name}
          className="h-72 w-full object-cover rounded-t-xl -z-10"
        />
      </motion.div>
      <div className="p-4 flex flex-col rounded-b-xl rounded-t-xl bg-white z-0">
        <h5 className="mb-2 text-xl din-semibold text-gray-900">
          {Carouselimages[currentIndex].name}
        </h5>
        <p className="text-base din-regular text-gray-600">
          {Carouselimages[currentIndex].description}
        </p>
      </div>

      <div className="absolute inset-y-0 flex items-center justify-between px-4 w-full">
        <motion.div
          className="bg-[#335c98] text-white p-2 rounded-full cursor-pointer"
          onClick={handlePrevious}
        >
          <FaChevronLeft />
        </motion.div>
        <motion.div
          className="bg-[#335c98] text-white p-2 rounded-full cursor-pointer"
          onClick={handleNext}
        >
          <FaChevronRight />
        </motion.div>
      </div>
      <Link href={Carouselimages[currentIndex].link}>
        <button className="relative inline-flex items-center justify-center overflow-hidden ml-4 mb-6 px-6 py-3 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
          <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>
          <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
            <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
            <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
          </span>
          <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold flex gap-2">
            Know More
          </span>
        </button>
      </Link>
    </div>
  );
};

function Section5() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative md:h-screen md:w-screen snap-start flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto lg:w-[80%]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className=" h-full flex flex-col md:flex-row justify-evenly items-center gap-6 "
        >
          {/* Left Column: Carousel and Header Text */}
          <div className="flex flex-col w-full md:w-[40%] gap-6">
            <div className="flex flex-col gap-4">
              <motion.h2
                variants={itemVariants}
                className="text-4xl lg:text-5xl text-[#335c98] din-bold text-center whitespace-nowrap"
              >
                A strong partner <br />
                at your side
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-center text-slate-500 text-sm nunito"
              >
                As railing experts, we are at your side with first-class support
                for the successful realization of every project.
              </motion.p>
            </div>
            <Carousel />
          </div>

          {/* Right Column: Innovation & Technology List */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col w-full md:w-[30%]"
          >
            {[
              {
                number: "01",
                title: "For every project",
                description:
                  "Solutions from private homes to stadiums, from individual components to complete solutions.",
              },
              {
                number: "02",
                title: "Personalised advice",
                description:
                  "Specialised consultants for every project clarify your questions from A-Z.",
              },
              {
                number: "03",
                title: "Wide availability",
                description:
                  "Thousands of items available for immediate delivery - even to the construction site.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col justify-between items-center text-center hover:shadow-lg transition duration-500 gap-4 ${
                  index !== 2 ? "border-b-2" : ""
                } border-gray-200 p-4 h-full`}
              >
                <p className="text-6xl font-bold text-slate-200 text-opacity-45">
                  {item.number}
                </p>
                <h3 className="text-2xl text-[#335c98] din-semibold">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-center nunito text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const solutions = [
  {
    icon: <TbBulb className="w-12 h-12" />,
    title: "Customised solutions",
    description:
      "We take care of the preliminary work for you: from powder coating in the colour of your choice to prefabricated railing modules.",
  },
  {
    icon: <TfiHome className="w-12 h-12" />,
    title: "Maximum flexibility",
    description:
      "Thanks to the modular design of our systems, you can combine the components with each other in almost any way you like.",
  },
  {
    icon: <PiCircleDashedLight className="w-12 h-12" />,
    title: "Maximum efficiency",
    description:
      "Revolutionary products offer up to 80% time savings on the construction site, with high availability at the same time.",
  },
  {
    icon: <FiCheckCircle className="w-12 h-12" />,
    title: "100% safety",
    description:
      "Our systems and products are tested to the highest standards and certified in accordance with EN 1090-1.",
  },
];

function Section6() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full py-16 snap-start bg-gray-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col items-center w-full max-w-7xl px-4 gap-8"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl text-center mb-4 din-bold text-[#335c98]"
        >
          Stainless Steel Solutions for Every Project
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-slate-500 max-w-2xl nunito"
        >
          With expertise, we specialize in providing innovative, customized, and
          safe stainless steel solutions tailored to meet the unique needs of
          every project.
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center w-full -mx-4"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full sm:w-1/2 lg:w-1/4 p-4 "
            >
              <motion.div
                className="flex flex-col items-center justify-start bg-gray-100 rounded-lg h-full w-full p-6 transition-all duration-300 hover:shadow-2xl hover:bg-gray-200 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  variants={iconVariants}
                  className="text-primary-600"
                >
                  {solution.icon}
                </motion.div>
                <motion.h3
                  className="text-xl din-semibold text-[#335c98] mt-4 mb-2 text-center"
                  variants={itemVariants}
                >
                  {solution.title}
                </motion.h3>
                <motion.p
                  className="text-xs text-slate-500 text-center nunito"
                  variants={itemVariants}
                >
                  {solution.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
          <Link href="/ContactUs">
            <button className="relative mt-4 inline-flex items-center justify-center overflow-hidden px-4 py-3 mb-6 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
              <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>
              <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
              </span>
              <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold flex gap-2">
                GET A QUOTE <BsArrowRight className="h-4 w-4 mt-[0.10rem]" />
              </span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Home() {
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (!container) return;

  //   const handleWheel = (e) => {
  //     e.preventDefault();
  //     const delta = Math.sign(e.deltaY);
  //     container.scrollBy({
  //       top: delta * window.innerHeight,
  //       behavior: "smooth",
  //     });
  //   };

  //   container.addEventListener("wheel", handleWheel, { passive: false });

  //   return () => {
  //     container.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);

  return (
    <div
    // ref={containerRef}
    // className="h-screen no-scrollbar snap-y snap-mandatory overflow-x-hidden"
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}
export default Home;
