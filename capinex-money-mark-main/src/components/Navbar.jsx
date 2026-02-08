import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../assets/Untitled design (11).png";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

import PersonalLoanIcon from "../assets/loanIcons/investor.svg";
import BusinessLoanIcon from "../assets/loanIcons/moneybag.svg";
import HomeLoanIcon from "../assets/loanIcons/home-loan.svg";
import CarLoanIcon from "../assets/loanIcons/car-loan.svg";
import TransferHomeLoanIcon from "../assets/loanIcons/home-loan-t.svg";
import LoanAgainstPropertyIcon from "../assets/loanIcons/installment-loan.svg";
import ProjectLoanIcon from "../assets/loanIcons/project-planning.svg";
import MortgageLoanIcon from "../assets/loanIcons/mortgage.svg";
import MsmeLoanIcon from "../assets/loanIcons/industry.svg";
import GoldLoanIcon from "../assets/loanIcons/gold-loan.svg";
import { useLocation } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);
  // const menuRef = useRef(null);
  const desktopMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

 const handleDropdown = (menuName) => {
  const newState = activeDropdown === menuName ? null : menuName;
  // console.log("Setting activeDropdown to:", newState);
  setActiveDropdown(newState);
};
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      desktopMenuRef.current &&
      !desktopMenuRef.current.contains(event.target) &&
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      // console.log("Clicked outside, resetting activeDropdown");
      setActiveDropdown(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
        setMenuOpen(false); // 🔁 add this line
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const items = [
    {
      name: "Personal loan",
      icon: PersonalLoanIcon,
      link: "/loans/personal-loan",
    },
    {
      name: "Business loan",
      icon: BusinessLoanIcon,
      link: "/loans/business-loan",
    },
    { name: "Home loan", icon: HomeLoanIcon, link: "/loans/home-loan" },
    { name: "Car loan", icon: CarLoanIcon, link: "/loans/car-loan" },
    {
      name: "Mortgage loan",
      icon: MortgageLoanIcon,
      link: "/loans/mortgage-loan",
    },
    {
      name: "Loan against property",
      icon: LoanAgainstPropertyIcon,
      link: "/loans/loan-against-property",
    },
    {
      name: "Transfer personal loan",
      icon: TransferHomeLoanIcon,
      link: "/loans/transfer-personal-loan",
    },
    {
      name: "Project loans",
      icon: ProjectLoanIcon,
      link: "/loans/project-loans",
    },
    { name: "MSME loans", icon: MsmeLoanIcon, link: "/loans/msme-loans" },
    {
      name: "Transfer home loan",
      icon: TransferHomeLoanIcon,
      link: "/loans/transfer-home-loan",
    },
    { name: "Gold loan", icon: GoldLoanIcon, link: "/loans/gold-loan" },
  ];

  const navigateTo = (menu) => {
    if (menu === "EMI Calculator") {
      navigate("/emi-calculator");
    }
     else if (menu === "Home") {
      navigate("/");
    } 
    else if (menu === "About Us") {
      navigate("/about-us");
    } else if (menu === "Blog") {
      navigate("/blogs");
    } else if (menu === "Contact Us") {
      navigate("/contact-us");
    } else if (menu === "Careers") {
      navigate("/careers");
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-[#0a1628] py-0 px-4 font-for-nav">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between md:justify-normal md:pl-20">
        {/* Logo */}
        <div className="flex items-center" onClick={() => navigate("/")}>
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className=" h-23 object-contain logo-nav cursor-pointer"
          />
        </div>

        {/* Nav Menu */}
        <div className=" hidden md:flex marginLeft-auto flex  justify-center align items-center w-full p-4 px-8 font-semibold text-gray-200">
          {/* Left side - Main Menu */}
          <ul className=" items-center flex space-x-6">
             {["Home","About Us",].map((menu) => (
              <li key={menu}>
                <button
                  onClick={() => navigateTo(menu)}
                  className="cursor-pointer font-size-for-nav hover:text-cyan-400 transition duration-300"
                >
                  {menu}
                </button>
              </li>
            ))}
            <li className="product-list">
              <button
                onClick={() => handleDropdown("Products")}
                className="cursor-pointer hover:text-cyan-400 font-size-for-nav transition duration-300 flex items-center"
              >
                Products
                {activeDropdown === "Products" ? (
                  <RiArrowDropUpLine size={24} />
                ) : (
                  <RiArrowDropDownLine size={24} />
                )}
              </button>
            </li>

            {[ "EMI Calculator", "Blog", "Careers"].map((menu) => (
              <li key={menu}>
                <button
                  onClick={() => navigateTo(menu)}
                  className="cursor-pointer font-size-for-nav hover:text-cyan-400 transition duration-300"
                >
                  {menu}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Contact */}
        <div className="p-4 hidden sm:block">
          <button
            onClick={() => navigate("/contact-us")}
            className="cursor-pointer whitespace-nowrap hover:bg-cyan-600 transition duration-300 bg-cyan-500 text-white px-4 py-2 rounded-md"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-full left-0 w-full bg-[#0a1628] shadow-md z-20 px-4 py-4 md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            {[
              "Home",
              "About Us",
              "Products",
              "EMI Calculator",
              "Blog",
              "Careers",
              "Contact Us",
            ].map((menu) => (
              <div key={menu} className="mb-4">
                {menu === "Products" ? (
                  <button
                    className="flex items-center justify-between w-full text-gray-200 font-medium text-base"
                    onClick={() => handleDropdown(menu)}
                  >
                    {menu}
                    {activeDropdown === "Products" ? (
                      <RiArrowDropUpLine size={24} />
                    ) : (
                      <RiArrowDropDownLine size={24} />
                    )}
                  </button>
                ) : (
                  <button
                    className="w-full text-gray-200 font-medium text-base text-left"
                    onClick={() => {
                      navigateTo(menu);
                      setMenuOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    {menu}
                  </button>
                )}

                {/* Display full mega-dropdown content for the active menu */}
                {activeDropdown === menu && (
                  <div className="mt-4 space-y-6">
                    {menu === "Products" && (
                      <>
                        <div>
                          <h3 className="font-bold text-gray-100 mb-1">
                            Retail Loan Products
                          </h3>
                          <ul className="space-y-2 text-gray-300">
                            {items.slice(0, 4).map((item, index) => (
                              <li key={index} className="flex items-center">
                                <img
                                  src={item.icon}
                                  alt={item.name}
                                  className="w-5 h-5 mr-2"
                                />
                                <a href={item.link}>{item.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-100 mb-1">
                            Business & Property Loans
                          </h3>
                          <ul className="space-y-2 text-gray-300">
                            {items.slice(4).map((item, index) => (
                              <li key={index} className="flex items-center">
                                <img
                                  src={item.icon}
                                  alt={item.name}
                                  className="w-5 h-5 mr-2"
                                />
                                <a href={item.link}>{item.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Mega Dropdown */}
        {activeDropdown && (
          <div
            ref={desktopMenuRef}
            className={`hidden md:grid absolute top-full left-80 bg-[#1a202c] shadow-lg border border-gray-700 rounded-md mt-2 p-4 grid-cols-3 gap-2 w-[850px] z-50 animate-slideDown`}
          >
            {activeDropdown === "Products" && (
              <>
                <div className="ml-5 w-[160px]">
                  <h3 className="font-bold text-gray-100 mb-3">
                    Retail Loan Products
                  </h3>
                  <ul className="space-y-5 text-gray-300">
                    {items.slice(0, 4).map((item, index) => (
                      <li key={index} className="flex items-center">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-6 h-6 mr-2"
                        />
                        <a href={item.link}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-[200px]">
                  <h3 className="font-bold text-gray-100 mb-3">
                    Business & Property Loans
                  </h3>
                  <ul className="space-y-5 text-gray-300">
                    {items.slice(4).map((item, index) => (
                      <li key={index} className="flex items-center">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-6 h-6 mr-2"
                        />
                        <a href={item.link}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="ml-5 bg-cyan-900/30 p-6 rounded-2xl shadow-md border border-cyan-700/30">
                  <h4 className="font-bold text-xl text-cyan-400 mb-3">
                    Financial Health
                  </h4>
                  <p className="text-gray-300 text-base mb-6">
                    Explore tools and resources designed to help you understand
                    your current financial picture.
                  </p>
                  <button
                    onClick={() => navigate("/contact-us")}
                    className="cursor-pointer bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-cyan-600 transition"
                  >
                    Get Started
                  </button>
                </div>
              </>
            )}

            {activeDropdown === "Financial Resources" && (
              <>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Educational Articles
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Budgeting Basics</li>
                    <li>Managing Debt</li>
                    <li>Credit Score Tips</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Tools & Calculators
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Loan Calculator</li>
                    <li>Debt Payoff Planner</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Webinars</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Upcoming Events</li>
                    <li>Past Recordings</li>
                  </ul>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">Get Smarter</h4>
                  <p className="text-sm text-green-900 mb-4">
                    Free learning materials to help you reach your financial
                    goals.
                  </p>
                  <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600">
                    Explore
                  </button>
                </div>
              </>
            )}

            {activeDropdown === "About Us" && (
              <>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Company</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Our Story</li>
                    <li>Mission & Values</li>
                    <li>Careers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Legal</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Contact</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Support Center</li>
                    <li>Get in Touch</li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Join Us</h4>
                  <p className="text-sm text-blue-900 mb-4">
                    Be part of a team that’s changing the way people experience
                    finance.
                  </p>
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    View Careers
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
