import Logo from "../assets/logo/blueLogo.webp";
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { FiMail, FiYoutube } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 w-screen bg-gray-300 h-full">
      <main className="max-w-[85rem] mx-auto flex flex-col md:flex-row justify-center h-full">
        <section className="flex flex-col border-r-2 border-l-2 flex-grow md:w-1/3">
          <div className="flex items-center px-8 pt-12 py-6 gap-2">
            <Image
              priority
              src={Logo}
              alt="Logo"
              className="h-[3.5rem] w-[3.4rem] cursor-pointer"
            />
          </div>

          <div className="text-[#335c98] text-lg flex flex-col justify-between gap-4 w-full border-t-2 px-8 py-6">
            <div className="flex gap-3">
              <MdLocationPin className="h-10 w-10" />
              <div className="flex flex-col gap-2">
                <h6 className="din-semibold text-base">Headquarters</h6>
                <p className="nunito text-xs">
                  Rajguru Steel Industries 92/94, Kika Street, Gulalwadi,
                  Girgaon, Mumbai - 400004, Maharashtra, India
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <BsTelephone className="h-5 w-5 mt-1" />
              <div className="flex flex-col gap-2">
                <h6 className="din-semibold text-base">Telephone</h6>
                <p className="nunito text-xs whitespace-nowrap">
                  +91 80489 64852
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <FiMail className="h-5 w-5 mt-1" />
              <div className="flex flex-col gap-2">
                <h6 className="din-semibold text-base">Email</h6>
                <p className="nunito text-xs whitespace-nowrap">
                  info@rajgurusteel.co.in
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-between border-t-2 md:border-t-0 md:border-r-2 flex-grow md:w-1/3">
          <div className="flex flex-col w-full h-full gap-4 px-8 pt-4 md:pt-12 pb-6">
            <h2 className="text-3xl din-bold text-primary">Find US</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3773.395944531599!2d72.8223483752024!3d18.95811328222244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU3JzI5LjIiTiA3MsKwNDknMjkuNyJF!5e0!3m2!1sen!2sin!4v1727513266722!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full md:w-auto md:h-48"
              title="Find Us With the help of Google Maps"
            ></iframe>
          </div>
          <div className="hidden md:flex text-center text-sm text-primary nunito border-t-2 px-8 py-6 w-full whitespace-normal xl:whitespace-nowrap">
            © Rajguru Steel Industries. All Rights Reserved.
          </div>
        </section>

        <section className="flex flex-col justify-between flex-grow md:w-1/3 border-t-2 md:border-t-0 md:border-r-2">
          <div className="flex flex-col gap-6 px-8 pt-4 md:pt-12 pb-6">
            <h3 className="text-lg din-semibold text-primary">
              Would like to talk about your future project?
            </h3>
            <Link href="/ContactUs" className="w-36">
              <button className="relative inline-flex items-center justify-center overflow-hidden px-4 py-3 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
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
          </div>

          <div className="flex flex-col gap-2 px-8 pt-4 md:py-6 border-t-2">
            <h3 className="text-xl din-semibold text-primary">Follow Us</h3>
            <div id="icons" className="flex gap-4 text-primary text-3xl h-9">
              {[
                {
                  icon: <FaInstagram className="h-6 w-6" />,
                  label: "Instagram",
                  hoverColor: "hover:text-pink-600",
                },
                {
                  icon: <FaFacebook className="h-6 w-6" />,
                  label: "Facebook",
                  hoverColor: "hover:text-blue-700",
                },
                {
                  icon: <FaTwitter className="h-6 w-6" />,
                  label: "Twitter",
                  hoverColor: "hover:text-black",
                },
                {
                  icon: <FiYoutube className="h-6 w-6" />,
                  label: "YouTube",
                  hoverColor: "hover:text-red-600",
                },
              ].map(({ icon, label, hoverColor }, index) => (
                <div className="relative group" key={index}>
                  <div
                    className={`${hoverColor} transition duration-300 cursor-pointer`}
                  >
                    {icon}
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-7 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden flex text-center text-sm text-primary nunito px-8 py-6 w-full whitespace-nowrap">
            © Rajguru Steel Industries. All Rights Reserved.
          </div>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
