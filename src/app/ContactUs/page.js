"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import { FiYoutube } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const router = useRouter();

  const [expandedFaq, setExpandedFaq] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        router.push("/ThankYou");
      } else {
        const errorData = await response.json();
        console.error("Error submitting form:", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -150 }, // Increased translation
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 150 }, // Increased translation
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
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

  const faqData = [
    {
      question: "What are your business hours?",
      answer: "We are open Monday to Saturday, 10 AM to 7 PM.",
    },
    {
      question: "Do you offer remote consultations?",
      answer: "Yes, we offer both in-person and remote consultations.",
    },
    {
      question: "What is your response time?",
      answer: "We aim to respond to all inquiries within 24 hours.",
    },
    {
      question: "Do you have a refund policy?",
      answer:
        "Yes, we offer a 30-day money-back guarantee on all our services.",
    },
  ];
  const [Cols, setCols] = useState([]);

  useEffect(() => {
    const gridCols = Array.from({ length: 16 }, (_, rowIndex) => rowIndex);
    setCols(gridCols);
  }, []);

  return (
    <div className="min-h-screen ">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute top-[45%] z-10 text-center w-full">
          <h1 className="text-2xl md:text-5xl din-bold text-primary">
            CONTACT US
          </h1>
          <p className="text-sm md:text-xl nunito text-secondary">
            We'd love to hear from you!
          </p>
        </div>
        <div className="grid grid-cols-[repeat(16,1fr)] border-gray-300">
          {Cols.map((_, ColIndex) => (
            <motion.div
              key={ColIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: ColIndex * 0.2 }}
            >
              {Array.from({ length: 6 }).map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="border border-gray-300 hover:shadow-2xl hover:shadow-[#335c98] h-10 md:h-[4.5rem] w-auto"
                ></div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Contact Information and Form Section */}
      <section className="md:py-10 max-w-7xl mx-auto flex flex-col h-full md:flex-row gap-6">
        {/* Contact Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInFromLeft}
          className="bg-gray-100 w-full p-8 rounded-xl flex flex-col h-full" // Use h-full
        >
          <h2 className="text-3xl din-semibold text-center text-primary">
            Get a Quote
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 flex-grow"
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "phone", label: "Phone", type: "number" },
              { name: "email", label: "Email", type: "email" },
              { name: "message", label: "Message", type: "textarea" },
            ].map((field) => (
              <motion.div key={field.name} variants={fadeInUp}>
                <label
                  htmlFor={field.name}
                  className="block mb-2 font-medium text-primary din-regular"
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    placeholder="Write your requirements here "
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                )}
              </motion.div>
            ))}
            <motion.div type="submit" className=" flex mt-4">
              <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 text-white border border-[#335c98] rounded-md transition-all duration-700 cursor-pointer group z-10">
                <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>
                <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                  <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                  <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                </span>
                <span className="relative z-10 group-hover:text-primary transition duration-700 ease-in-out din-semibold">
                  Submit
                </span>
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInFromRight}
          className="bg-gray-100 w-full rounded-xl p-8 h-full flex flex-col justify-between gap-10"
        >
          {[
            {
              title: "Address",
              content:
                "Rajguru Steel Industries 92/94, Kika Street, Gulalwadi, Girgaon, Mumbai - 400004, Maharashtra, India",
            },
            { title: "Phone", content: "+91 80489 64852" },
            { title: "Email", content: "info@rajgurusteel.co.in" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-xl hover:shadow-lg hover:shadow-[#335c98] transition duration-500 flex flex-col gap-2 bg-gray-50"
            >
              <h3 className="din-semibold text-primary text-lg">
                {item.title}
              </h3>
              <p className="nunito text-secondary text-sm">{item.content}</p>
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <p className="din-semibold text-xl text-primary">Follow Us</p>
            <ul className="flex gap-2">
              <li className="relative p-2 bg-white rounded-full text-[#335c98] hover:text-white transition duration-300 group overflow-hidden hover:shadow-lg hover:shadow-[#335c98] cursor-pointer">
                <FaInstagram size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-pink-600 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></span>
              </li>
              <li className="relative p-2 bg-white rounded-full text-[#335c98] hover:text-white transition duration-300 group overflow-hidden hover:shadow-lg hover:shadow-[#335c98] cursor-pointer">
                <FaFacebook size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-blue-700 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></span>
              </li>
              <li className="relative p-2 bg-white rounded-full text-[#335c98] hover:text-white transition duration-300 group overflow-hidden hover:shadow-lg hover:shadow-[#335c98] cursor-pointer">
                <FaTwitter size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></span>
              </li>
              <li className="relative p-2 bg-white rounded-full text-[#335c98] hover:text-white transition duration-300 group overflow-hidden hover:shadow-lg hover:shadow-[#335c98] cursor-pointer">
                <FiYoutube size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-red-600 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="py-16 px-4 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl din-semibold mb-8 text-center text-primary">
            Frequently Asked Questions
          </h2>
          <motion.div className="space-y-4">
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
                    <span className="din-semibold">{faq.question}</span>
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
                  <p className="p-4 bg-gray-50 nunito text-sm">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
