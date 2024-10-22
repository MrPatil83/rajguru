// import React from "react";
// import AboutUs from "./AboutUs";
// export const metadata = {
//   title: "About Us",
//   description:
//     "At Rajguru Steel Industries, based in Mumbai, Maharashtra, we are committed to delivering high-quality stainless steel architectural products, including stainless steel railings, glass railings, and innovative slot tubes and pipes. Since our inception in 2004, we have built a reputation as a trusted stainless steel manufacturer, providing durable stainless steel accessories and custom solutions tailored to our clients' needs. Our focus on quality assurance and client-centric service has made us the preferred choice for architectural design solutions in the industry.",
//   keywords: ["Stainless Steel Architectural Products", "Rajguru Steel Industry", "stainless steel products", "Stainless Steel Railings", "Slot Tube and Slot Pipe", "High-Quality Stainless Steel", "Custom Stainless Steel Solutions", "Stainless Steel Balustrades", "Stainless Steel Door Handles", "Quality Assurance in Manufacturing"],
//   url: "https://rajgurusteel.vercel.app/about",
// };
// const page = () => {
//   return <AboutUs />;
// };
// export default page;


"use client";
import section2Img from "./Partnership.webp";
import { useState, useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import OurStory from "./ourstory.webp";
import Link from "next/link";
import AboutBanner from "./aboutbanner.webp";
import { FaStar } from "react-icons/fa";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

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

const features = [
  {
    title: "Wide Assortment of Products",
    description:
      "Explore our extensive range of stainless steel products tailored for diverse industrial applications.",
  },
  {
    title: "Quality Assurance",
    description:
      "Experience unmatched quality assurance with our stainless steel products, ensuring durability and performance.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Rely on our commitment to on-time delivery, ensuring your stainless steel products arrive exactly when needed.",
  },
  {
    title: "Sound Infrastructure",
    description:
      "Our advanced infrastructure enables efficient production and distribution of high-quality stainless steel products.",
  },
  {
    title: "Highly Experienced Workforce",
    description:
      "Leverage the expertise of our highly experienced workforce for exceptional support in your stainless steel projects.",
  },
  {
    title: "Customizable Products",
    description:
      "Enjoy the flexibility of customizable stainless steel products designed to meet your specific project requirements.",
  },
];

const tabs = [
  {
    title: "Our Vision",
    content:
      "To be the leading provider of stainless steel architectural products, recognized for our commitment to quality, innovation, and sustainability. We aim to exceed customer expectations by delivering exceptional products that enhance their projects while fostering a culture of continuous improvement and growth. Our vision is to create a sustainable future by integrating eco-friendly practices into our operations and contributing positively to the communities we serve.",
  },
  {
    title: "Our Mission",
    content:
      "Our mission is to manufacture and supply a diverse range of stainless steel architectural products that meet the highest standards of quality and innovation. We are dedicated to ensuring customer satisfaction by understanding their needs and delivering tailored solutions. We strive for sustainable growth by investing in our people, embracing new technologies, and maintaining a strong commitment to environmental responsibility. Through collaboration and excellence, we aim to build lasting relationships with our customers and stakeholders.",
  },
];

const reviews = [
  {
    name: "Praveen Thota",
    location: "Nirmal, Telangana",
    product: "Jindal Stainless Steel Pipes",
    rating: 5,
  },
  {
    name: "Lokesh Narpathma Lodha",
    location: "Nagpur, Maharashtra",
    product: "ERW Steel Pipes",
    rating: 5,
  },
  {
    name: "Prashant Sutar",
    location: "Kolhapur, Maharashtra",
    product: "Railing Fittings",
    rating: 5,
  },
  {
    name: "Sumit Sherawat",
    location: "Jaipur, Rajasthan",
    product: "Air Pistol",
    rating: 5,
    date: "22-May-23",
  },
  {
    name: "A Akbar Basha",
    location: "Tirupattur, Tamil Nadu",
    rating: 5,
    date: "13-December-21",
  },
  {
    name: "Ashok Choudhary",
    location: "Hyderabad, Telangana",
    product: "Metal Chain",
    rating: 5,
    date: "04-December-20",
  },
  {
    name: "Uday",
    location: "Faizabad, Uttar Pradesh",
    product: "Stainless Steel Spider Fitting",
    rating: 5,
    date: "28-November-20",
  },
  {
    name: "K KARTIK PAUL",
    location: "Gobardanga, West Bengal",
    product: "Stainless Steel Railings",
    rating: 5,
    date: "02-October-20",
  },
  {
    name: "Amol Diwanale",
    location: "Telhara, Maharashtra",
    product: "Tempered Glass Railing",
    rating: 5,
    date: "17-August-20",
  },
];

export default function page() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const { scrollYProgress } = useScroll();
  const [activeTab, setActiveTab] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [allVisible, setAllVisible] = useState(false);

  const loadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, reviews.length));
    if (visibleCount + 3 >= reviews.length) {
      setAllVisible(true);
    }
  };

  const closeReviews = () => {
    setVisibleCount(3);
    setAllVisible(false);
  };

  return (
    <section className="w-screen ">
      <div
        id="aboutus-hero-banner"
        className="flex flex-col items-center justify-center lg::gap-10"
      >
        <motion.div
          variants={fadeInUp}
          className="relative w-full overflow-hidden"
        >
          <Image
            src={AboutBanner}
            alt="About us Banner Img"
            height="auto"
            width="auto"
            className="relative object-fill md:object-cover w-full h-[45vh] md:h-auto"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="relative lg:absolute lg:z-40 flex flex-col justify-center w-full lg:max-w-3xl mx-auto lg:bottom-14 items-center bg-gray-200 lg:shadow-xl lg:shadow-[#335c98] lg:rounded-2xl px-6 lg:px-20 py-8"
        >
          <motion.h1
            className="text-4xl my-2 text-center din-bold text-[#335c98]"
            variants={fadeInUp}
          >
            About Us
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-center text-secondary nunito text-xs md:text-sm"
          >
            Rajguru Steel Industries, established in 2004, offers premium
            stainless steel architectural products, including slot tubes and
            pipes, with a focus on quality and competitive pricing. Led by Mr.
            Kishore Jain, our expert team ensures timely delivery and continuous
            growth in the stainless steel industry.
          </motion.p>

          <motion.h3
            className="text-4xl my-4 text-center din-bold text-[#335c98]"
            variants={fadeInUp}
          >
            Why Rajguru?
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="text-center text-secondary nunito text-xs md:text-sm"
          >
            Choose Rajguru Stainless Steel for unmatched quality in stainless
            steel architectural products, backed by years of industry
            experience. Our commitment to competitive pricing and timely
            delivery ensures you receive the best value for your projects.
          </motion.p>

          <div className=" flex justify-center mt-4">
            <Link href="/ContactUs">
              <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 text-white border border-[#335c98] rounded-md uppercase transition-all duration-700 cursor-pointer group z-10">
                <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>
                <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                  <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                  <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                </span>
                <span className="relative z-10 group-hover:text-primary transition duration-700 ease-in-out din-semibold">
                  GET A QUOTE
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      <main className="relative bg-gray-100 overflow-hidden flex flex-col items-center w-screen xl:pt-10">
        <div className="container mx-auto px-4 flex flex-col md:my-10">
          <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="py-8"
          >
            <div className="flex flex-col-reverse md:flex-row justify-around gap-4 md:gap-0">
              <motion.div className="md:w-1/2" variants={fadeInUp}>
                <div className="flex mb-4 ">
                  {tabs.map((tab, index) => (
                    <motion.button
                      key={index}
                      className={`px-4 py-2 nunito ${
                        index === 0 ? "rounded-l-md" : ""
                      } ${
                        index === 1 ? "rounded-r-md" : ""
                      } border whitespace-nowrap ${
                        activeTab === index
                          ? "bg-[#335c98] text-white"
                          : "bg-gray-100 text-[#335c98] "
                      } `}
                      onClick={() => setActiveTab(index)}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tab.title}
                    </motion.button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg md:w-[95%]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="nunito text-justify text-slate-500 text-xs md:text-base">
                      {tabs[activeTab].content}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Image
                  src={OurStory}
                  alt="Rajguru Steel Industries Factory"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
          >
            <motion.div
              className="flex flex-col lg:flex-row items-start justify-evenly h-full gap-4 md:gap-0"
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.div
                className="w-full md:h-full lg:w-[40%]"
                variants={scaleIn}
              >
                <Image
                  src={section2Img}
                  alt="Partnership and Dealership"
                  className="rounded-xl shadow-lg md:w-full md:h-full"
                />
              </motion.div>
              <div className="w-full lg:w-[45%] flex flex-col  md:gap-3">
                <motion.h2
                  className="text-2xl din-semibold text-center lg:text-left text-[#335c98] pl-2"
                  variants={fadeInUp}
                >
                  What Rajguru Steel Offers?
                </motion.h2>
                <motion.div
                  className="grid grid-cols-2 md:gap-[1.75rem] "
                  variants={staggerChildren}
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="hover:shadow-xl rounded-lg md:p-4 p-3 transition duration-500 flex flex-col gap-2"
                      variants={fadeInUp}
                    >
                      <h3 className="text-lg din-bold text-[#335c98] ">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 text-sm nunito md:text-justify">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="py-8"
          >
            <div className="w-[95%] mx-auto px-8">
              <motion.h2
                className="text-3xl din-bold mb-8 text-center text-[#335c98]"
                variants={fadeInUp}
              >
                Customer Testimonials
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-10">
                {reviews.slice(0, visibleCount).map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className=" p-6 rounded-lg border-2"
                    whileHover={{
                      y: -6,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    }}
                  >
                    <h3 className="text-lg din-semibold mb-2 text-[#335c98]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-slate-500 mb-2 nunito">
                      {testimonial.location}
                    </p>
                    <p className="mb-2 text-slate-500 nunito">
                      {testimonial.product}
                    </p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <FaStar className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              {visibleCount < reviews.length && !allVisible && (
                <div className=" flex mt-6" onClick={loadMore}>
                  <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 text-white border border-[#335c98] rounded-md uppercase transition-all duration-700 cursor-pointer group z-10">
                    <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>
                    <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                      <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                      <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                    </span>

                    {/* Button text */}
                    <span className="relative z-10 group-hover:text-primary transition duration-700 ease-in-out din-semibold">
                      View More
                    </span>
                  </button>
                </div>
              )}
              {allVisible && (
                <button
                  onClick={closeReviews}
                  className="mt-6 py-2 px-4 bg-red-600 text-slate-200 rounded hover:bg-red-700 transition duration-500"
                >
                  Close
                </button>
              )}
            </div>
          </motion.section>
        </div>

        <motion.div
          className="fixed bottom-0 left-0 right-0 h-2 bg-[#335c98] z-50"
          style={{
            scaleX: scrollYProgress,
            transition: { type: "spring", damping: 10 },
          }}
        />
      </main>
    </section>
  );
}
