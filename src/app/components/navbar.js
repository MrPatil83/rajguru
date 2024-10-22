"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowForwardIos } from "react-icons/md";
import {
  dropdownAnimationOpen,
  sidebarAnimationClose,
  sidebarAnimationOpen,
} from "./utility/animation.jsx";
import Image from "next/image";
import Logo from "../assets/logo/whiteLogo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [rotateProductsIcon, setRotateProductsIcon] = useState(false);
  const [rotateProfileIcon, setRotateProfileIcon] = useState(false);
  const [isMobileView, setMobileView] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");
  const [hoveredSubItem, setHoveredSubItem] = useState("");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/AboutUs" },
    {
      name: "Products",
      href: "#",
      subItems: [
        {
          name: "Glass Railing System",
          href: "/products/GlassRailing",
        },
        {
          name: "Aluminium Windows",
          href: "/products/AluminiumWindows",
        },
        {
          name: "Stainless Steel Balustrade System",
          href: "/products/BalustradeSystem",
        },
        {
          name: "Stainless Steel Glass Railing System",
          href: "/products/ssGlassRailingSystem",
        },
        {
          name: "Stainless Steel Decorative Sheet",
          href: "/products/ssDecorativeSheet",
        },
        {
          name: "Stainless Steel Profile",
          href: "#",
          subItems: [
            {
              name: "Stainless Steel T-Profile ",
              href: "/products/profile/tProfile",
            },
            {
              name: "Stainless Steel U-Profile",
              href: "/products/profile/uProfile",
            },
            {
              name: "Stainless Steel L-Profile",
              href: "/products/profile/lProfile",
            },
            {
              name: "Stainless Steel Fluted Panels",
              href: "/products/profile/ssFlutedPanelProfile",
            },
            {
              name: "Stainless Steel Customize Profile",
              href: "/products/profile/ssCustomProfile",
            },
          ],
        },
        { name: "Stainless Steel Wire Rope", href: "/products/ssWireRope" },
        { name: "Invisible Grill", href: "/products/ssInvisibleGrill" },
        { name: "Queue Manager", href: "/products/ssQueueManager" },
      ],
    },
    // { name: "Blog", href: "/" },
    { name: "Contact Us", href: "/ContactUs" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => {
      if (prev) {
        setIsProductsDropdownOpen(false);
        setIsProfileDropdownOpen(false);
        setRotateProductsIcon(false);
        setRotateProfileIcon(false);
      }
      return !prev;
    });
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen((prev) => !prev);
    setRotateProductsIcon((prev) => !prev);
    if (isProfileDropdownOpen) {
      setIsProfileDropdownOpen(false);
      setRotateProfileIcon(false);
    }
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
    setRotateProfileIcon((prev) => !prev);
  };

  const handleProfileDropdownHover = (isHovering) => {
    setIsProfileDropdownOpen(isHovering);
    setRotateProfileIcon(isHovering);
  };

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => {
    setHoveredItem(null);
    setHoveredSubItem(null);
  };

  const handleSubItemMouseEnter = (item) => setHoveredSubItem(item);
  const handleSubItemMouseLeave = () => setHoveredSubItem(null);

  return (
    <nav
      className={`absolute xl:fixed ${
        isMobileView
          ? "bg-gray-950  bg-opacity-85"
          : " bg-gray-950 bg-opacity-60"
      } text-white w-[100vw] z-50`}
    >
      {isMobileView ? (
        <>
          <div className="flex justify-between items-center md:px-28 w-full bg-gray-950 opacity-85 z-50">
            <Link href="/" className="px-2 py-1">
              <Image
                priority
                src={Logo}
                alt="Logo"
                className="h-[3.2rem] w-[3.8rem] cursor-pointer hover:scale-105"
              />
            </Link>
            <button
              onClick={toggleSidebar}
              className="p-4 rounded-full text-white text-2xl"
            >
              {isOpen ? (
                <IoClose className="h-9 w-9" />
              ) : (
                <GiHamburgerMenu className="h-9 w-9" />
              )}
            </button>
          </div>

          {isOpen ? (
            <motion.div
              {...sidebarAnimationOpen()}
              className="relative top-18 left-0 h-auto w-full bg-gray-950 opacity-85 text-white lg:h-full z-50"
            >
              <div className="px-4 flex flex-col">
                <div className="flex flex-col ">
                  <ul className="flex justify-center flex-col gap-2 lg:gap-12 cursor-pointer">
                    <Link
                      onClick={toggleSidebar}
                      href="/"
                      className="p-3 text-xl flex items-center justify-center"
                    >
                      Home
                    </Link>
                    <Link
                      onClick={toggleSidebar}
                      href="/AboutUs"
                      className="p-3 text-xl flex items-center justify-center "
                    >
                      About Us
                    </Link>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault(), toggleProductsDropdown();
                      }}
                      className="flex gap-2 cursor-pointer p-3 text-xl items-center justify-center"
                    >
                      Products
                      <MdArrowForwardIos
                        className={`mt-1 transition-transform duration-300 ${
                          rotateProductsIcon ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </Link>
                  </ul>

                  {isProductsDropdownOpen && (
                    <motion.div
                      {...dropdownAnimationOpen()}
                      className="relative bg-gray-950 opacity-85 flex flex-col items-center h-auto gap-4 px-5 w-full cursor-pointer"
                    >
                      <ul className="flex flex-col justify-around h-auto w-full">
                        <Link
                          onClick={toggleSidebar}
                          href="/products/GlassRailing"
                          className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                        >
                          Glass Railing System
                        </Link>
                        <Link
                          onClick={toggleSidebar}
                          href="/products/AluminiumWindows"
                          className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                        >
                          Aluminium Windows
                        </Link>
                        <Link
                          onClick={toggleSidebar}
                          href="/products/BalustradeSystem"
                          className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                        >
                          Stainless Steel Balustrade System
                        </Link>
                        <Link
                          onClick={toggleSidebar}
                          href="/products/ssGlassRailingSystem"
                          className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                        >
                          Stainless Steel Glass Railing System
                        </Link>
                        <Link
                          href="#"
                          onMouseEnter={() => handleProfileDropdownHover(true)}
                          onMouseLeave={() => handleProfileDropdownHover(false)}
                          onClick={toggleProfileDropdown}
                          className="flex gap-1 cursor-pointer p-2 text-[1.25rem] items-center justify-center"
                        >
                          Stainless Steel Profile
                          <MdArrowForwardIos
                            className={`mt-1 transition-transform duration-300 ${
                              rotateProfileIcon ? "rotate-90" : "rotate-0"
                            }`}
                          />
                        </Link>

                        {isProfileDropdownOpen && (
                          <motion.ul
                            {...dropdownAnimationOpen()}
                            className="flex flex-col gap-2 items-center justify-start w-full px-3 cursor-pointer pb-3 h-auto"
                            onMouseEnter={() =>
                              handleProfileDropdownHover(true)
                            }
                            onMouseLeave={() =>
                              handleProfileDropdownHover(false)
                            }
                          >
                            <Link
                              onClick={toggleSidebar}
                              className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1"
                              href="/products/profile/tProfile"
                            >
                              Stainless Steel T-Profile
                            </Link>
                            <Link
                              onClick={toggleSidebar}
                              className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1"
                              href="/products/profile/uProfile"
                            >
                              Stainless Steel U-Profile
                            </Link>
                            <Link
                              onClick={toggleSidebar}
                              href="/products/profile/lProfile"
                              className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1"
                            >
                              Stainless Steel L-Profile
                            </Link>
                            <Link
                              onClick={toggleSidebar}
                              href="/products/profile/ssFlutedPanelProfile"
                              className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1"
                            >
                              Stainless Steel Fluted Panels
                            </Link>
                            <Link
                              onClick={toggleSidebar}
                              href="/products/profile/ssCustomProfile"
                              className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1"
                            >
                              Stainless Steel Customize Profile
                            </Link>
                          </motion.ul>
                        )}

                        <Link
                          onClick={toggleSidebar}
                          href="/products/ssDecorativeSheet"
                          className="p-2 text-[1.25rem] flex items-center justify-center"
                        >
                          Stainless Steel Decorative Sheet
                        </Link>
                        <Link
                          onClick={toggleSidebar}
                          href="/products/ssWireRope"
                          className="p-2 text-[1.25rem] flex items-center justify-center"
                        >
                          Stainless Steel Wire Rope
                        </Link>
                        <Link
                          onClick={toggleSidebar}
                          href="/products/ssInvisibleGrill"
                          className="p-2 text-[1.25rem] flex items-center justify-center"
                        >
                          Invisible Grill
                        </Link>
                        <Link
                          onClick={toggleSidebar}
                          href="/products/ssQueueManager"
                          className="p-2 text-[1.25rem] flex items-center justify-center"
                        >
                          Queue Manager
                        </Link>
                      </ul>
                    </motion.div>
                  )}

                  {/* <Link
                    onClick={toggleSidebar}
                    href="/blog"
                    className="p-3 text-xl flex items-center justify-center"
                  >
                    Blog
                  </Link> */}
                  <Link
                    onClick={toggleSidebar}
                    href="/ContactUs"
                    className="p-3 text-xl flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              {...sidebarAnimationClose()}
              className="fixed top-0 left-0 w-full h-full bg-black text-white"
            ></motion.div>
          )}
        </>
      ) : (
        <div className="sm:px-6 lg:px-28 w-full h-full hidden md:flex">
          <Link href="/" className="py-2">
            <Image
              priority
              src={Logo}
              alt="Logo"
              className="h-[3rem] w-[3.5rem] cursor-pointer transform transition-transform hover:scale-[1.15] duration-700"
            />
          </Link>
          <div className="flex justify-evenly items-center w-full h-auto">
            <div className="flex justify-around w-[50vw] h-full items-center space-x-4">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-md text-base hover:text-white flex items-center din-regular"
                  >
                    {item.name}
                    {item.name === "Products" && (
                      <MdArrowForwardIos className="mt-1" />
                    )}
                  </Link>
                  {item.subItems && hoveredItem === item.name && (
                    <div className="absolute top-[64px] left-0 w-72 rounded-md shadow-lg bg-white text-gray-700 z-10">
                      <div className="py-1 din-medium" role="menu">
                        {item.subItems.map((subItem) => (
                          <div
                            key={subItem.name}
                            className="relative group"
                            onMouseEnter={() =>
                              handleSubItemMouseEnter(subItem.name)
                            }
                            onMouseLeave={handleSubItemMouseLeave}
                          >
                            <Link
                              href={subItem.href}
                              className=" px-4 py-2 text-md whitespace-nowrap hover:bg-gray-100 text-gray-700 flex items-center din-medium"
                            >
                              {subItem.name}
                              {subItem.name === "Stainless Steel Profile" && (
                                <MdArrowForwardIos />
                              )}
                            </Link>
                            {subItem.subItems &&
                              (hoveredSubItem === subItem.name ||
                                hoveredItem === "Stainless Steel Profile") && (
                                <div className="absolute left-full top-0 mt-0 w-60 rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5">
                                  <div className="py-1" role="menu">
                                    {subItem.subItems.map((nestedSubItem) => (
                                      <Link
                                        key={nestedSubItem.name}
                                        href={nestedSubItem.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 din-medium"
                                      >
                                        {nestedSubItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
