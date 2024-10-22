"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiHeart } from "react-icons/hi2";
import Link from "next/link";

export default function ThankYou() {
  const [displayedText, setDisplayedText] = useState("");
  const [confetti, setConfetti] = useState([]);
  const fullText = "Thhank you for your response!";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const generateConfetti = () => {
      const newConfetti = [...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -10,
            opacity: 1,
          }}
          animate={{
            y: window.innerHeight + 10,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatDelay: Math.random() * 3,
          }}
        />
      ));
      setConfetti(newConfetti);
    };

    generateConfetti();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-gray-500 flex flex-col items-center justify-center relative overflow-hidden">
      {confetti}

      <motion.div
        className="absolute top-[20%] left-[20%]"
        animate={{
          x: ["0%", "100%"],
          y: ["0%", "50%", "0%"],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 50L90 10L50 90L40 60L10 50Z" fill="white" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg text-center z-10"
      >
        <h1 className="text-4xl din-black mb-4 text-primary">
          {displayedText}
        </h1>
        <p className="text-secondary din-medium mb-6">
          We will be in Touch ASAP!
        </p>
        <Link href="/" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 text-white border border-[#335c98] rounded-md transition-all duration-700 cursor-pointer group z-10"
          >
            <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>
            <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
              <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
              <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
            </span>
            <span className="relative z-10 group-hover:text-primary transition duration-700 ease-in-out din-semibold">
              Return To Home
            </span>
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
