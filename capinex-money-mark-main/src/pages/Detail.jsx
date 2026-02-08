import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaWallet } from "react-icons/fa"; // Wallet-style icon (or replace with custom SVG if needed)
import FamilyImage from "../assets/two_father.png"; // Replace with your actual image path
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import Sun from "../assets/SUN.png";
import YellowWave from "../assets/YELLOWwave.png";
import "./index.css";
import { FaArrowLeft } from "react-icons/fa";
import YellowBgWave from "../assets/detail/BgWave.png";
import CardIcon from "../assets/detail/cardIcon.png";
import { useParams, useNavigate } from "react-router-dom";
import loan from "../data/loans.js";
import { AiFillHome } from "react-icons/ai";
import EligibilityCheckForm from "../components/EligibilityCheckForm.jsx";
import {
  FaUserAlt,
  FaMoneyBillWave,
  FaRegCheckCircle,
  FaBriefcase,
  FaIndustry,
  FaHome,
  FaFileAlt,
  FaBuilding,
  FaHandshake,
  FaDatabase,
  FaGem,
  FaRegPaperPlane,
  FaCar,
} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogsApi, getAllClientsApi } from "../api/resource";
import { Helmet } from "react-helmet";
import WhyCapinexSection from "../components/WhyCapinexSection.jsx";
import ProcessSection from "../components/ProcessSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import LoanEligibility from "../components/LoanEligibility.jsx";
import LoanTypes from "../components/LoanTypes.jsx";
import { GoHome } from "react-icons/go";

export default function Detail() {
  const navigate = useNavigate();
  const { loanName } = useParams();
  const [logos, setLogos] = useState([]);
  const [articles, setArticles] = useState([]);
  const [email, setEmail] = useState("");
  const limit = 20;

  const blogsQuery = useQuery({
    queryKey: ["BlogsTotal"],
    queryFn: () => getAllBlogsApi(1, limit),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const logoQuery = useQuery({
    queryKey: ["LogosTotal"],
    queryFn: () => getAllClientsApi(1, limit),
  });

  const extractData = (query, key) =>
    query?.data?.data?.detail?.[0]?.[key] || [];

  useEffect(() => {
    setArticles(extractData(blogsQuery, "blogs"));
    setLogos(extractData(logoQuery, "clients"));
  }, [blogsQuery.data, logoQuery.data]);

  const key =
    loanName === "personal-loan"
      ? "personal"
      : loanName === "business-loan"
      ? "business"
      : loanName === "home-loan"
      ? "home"
      : loanName === "car-loan"
      ? "car"
      : loanName === "mortgage-loan"
      ? "mortgage"
      : loanName === "loan-against-property"
      ? "lap"
      : loanName === "transfer-personal-loan"
      ? "transfer"
      : loanName === "project-loans"
      ? "project"
      : loanName === "msme-loans"
      ? "msme"
      : loanName === "transfer-home-loan"
      ? "homeLoanTransfer"
      : loanName === "gold-loan"
      ? "gold"
      : "unknown";

  const loanData = loan[key];

  const scrollRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleApplyNow = () => {
    const payload = {
      email: email, // Or whatever variable you're using
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbw8lQQQd2cLwKEqbJFSK9t6UF4QOOaRYSZLU-c5HYOy95ToIVdAF43YxVFhZngg2HJb/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    navigate("/contact-us");

    // alert('Application process would start here!');
  };

  console.log(loanData);

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Tags for SEO */}
        <title>{`${loanData.subtitle}-${loanData.type}`}</title>
        <meta
          name="description"
          content={
            loanData.description ||
            "Find out more about various loan options and apply today."
          }
        />
        <meta
          name="keywords"
          content="loan, personal loan, business loan, car loan, home loan, mortgage loan"
        />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content={loanData.subtitle || "Loan Details"}
        />
        <meta
          property="og:description"
          content={
            loanData.description ||
            "Explore different loan options and find the best one for you."
          }
        />
        <meta
          property="og:image"
          content={
            loanData.images ? loanData.images[0] : "default-image-url.jpg"
          }
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:title"
          content={loanData.subtitle || "Loan Details"}
        />
        <meta
          name="twitter:description"
          content={
            loanData.description ||
            "Learn about various loan options and how to apply."
          }
        />
        <meta
          name="twitter:image"
          content={
            loanData.images ? loanData.images[0] : "default-image-url.jpg"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* section one */}

      <main className="overflow-hidden pt-25 pb-16 bg-[#0a1628] text-white">
        <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 gap-10 xl:gap-20 max-w-screen-2xl mx-auto w-full">
          {/* Left Section */}
          <div className="flex-1 w-full">
            <nav className="flex items-center text-sm text-gray-400 mb-4 space-x-2">
              <button
                onClick={() => navigate("/")}
                className="flex items-center text-gray-400 hover:text-cyan-400 transition"
              >
                <AiFillHome size={16} />
              </button>
              <span>{">"}</span>
              <span className="text-white font-medium">{loanData.type}</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="font-semibold">{loanData.type}</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-8">
              {loanData.description}
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
              {loanName === "home-loan"
                ? [
                    {
                      title: "✅ Best Home Loan Deals",
                      color: "text-green-600",
                      desc: "Compare offers from 30+ top banks & NBFCs",
                    },
                    {
                      title: "⚡ Instant Home Loan Eligibility Check",
                      color: "text-blue-600",
                      desc: "No impact on your credit score",
                    },
                    {
                      title: "✅ Quick Approval",
                      color: "text-yellow-600",
                      desc: "Get approval within 24–48 hours",
                    },
                    {
                      title: "🧾 Apply Home Loan Online ",
                      color: "text-orange-600",
                      desc: "Completely paperless and secure",
                    },
                  ].map((card, index) => (
                    <div
                      key={index}
                      className="rounded-lg p-4 bg-[#1a202c] shadow-xl mb-4 border border-gray-700"
                    >
                      <div className={`${card.color} font-medium mb-1`}>
                        {card.title}
                      </div>
                      <p className="text-sm text-gray-300">{card.desc}</p>
                    </div>
                  ))
                : [
                    {
                      title: "✅ Best Loan Deals",
                      color: "text-green-600",
                      desc: "Hand picked offers from 30+ lenders",
                    },
                    {
                      title: "⚡ Instant Loan",
                      color: "text-blue-600",
                      desc: "Money in Mins via Pre-Approved Loans",
                    },
                    {
                      title: "✅ Quick Approval",
                      color: "text-yellow-600",
                      desc: "Instant Sanction & Disbursal",
                    },
                    {
                      title: "🧾 Digital Process",
                      color: "text-orange-600",
                      desc: "Hassle free Contact-less processes",
                    },
                  ].map((card, index) => (
                    <div
                      key={index}
                      className="rounded-lg p-4 bg-[#1a202c] shadow-xl mb-4 border border-gray-700"
                    >
                      <div className={`${card.color} font-medium mb-1`}>
                        {card.title}
                      </div>
                      <p className="text-sm text-gray-300">{card.desc}</p>
                    </div>
                  ))}
              {/* {[
                {
                  title: "✅ Best Loan Deals",
                  color: "text-green-600",
                  desc: "Hand picked offers from 30+ lenders",
                },
                {
                  title: "⚡ Instant Loan",
                  color: "text-blue-600",
                  desc: "Money in Mins via Pre-Approved Loans",
                },
                {
                  title: "✅ Quick Approval",
                  color: "text-yellow-600",
                  desc: "Instant Sanction & Disbursal",
                },
                {
                  title: "🧾 Digital Process",
                  color: "text-orange-600",
                  desc: "Hassle free Contact-less processes",
                },
              ].map((card, index) => (
                <div key={index} className="rounded-lg p-4 bg-white shadow-xl">
                  <div className={`${card.color} font-medium mb-1`}>
                    {card.title}
                  </div>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              ))} */}
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full max-w-md bg-[#1a202c] shadow-lg rounded-xl p-6 relative border border-gray-700">
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-cyan-500 to-cyan-400" />
            <h2 className="text-xl font-medium mb-4 text-white">
              Check <strong>{loanData.type} Offers</strong> Online
            </h2>

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-600 bg-[#0a1628] rounded-lg p-3 mb-2 text-white placeholder-gray-400"
            />

            <p className="text-xs text-gray-400 mb-4">
              Don't worry, this will not affect your credit score.
            </p>

            <div className="w-full h-3 bg-gray-700 rounded mb-2 animate-pulse"></div>
            <div className="w-3/4 h-3 bg-gray-700 rounded mb-4 animate-pulse"></div>

            <button
              onClick={handleApplyNow}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg cursor-pointer"
            >
              Apply Now →
            </button>
          </div>
        </section>
      </main>

      {/* Eligibility Check Form Section */}
      <EligibilityCheckForm loanData={loanData} />

      {/* Section Two */}
      <section className="flex relative flex-col justify-center items-center mx-auto my-0 max-w-none h-[187px] w-[864px] max-md:px-5 max-md:py-0 max-md:w-full max-md:max-w-[991px] max-sm:px-4 max-sm:py-0 max-sm:max-w-screen-sm bg-[#0a1628]">
        <div className="flex justify-center items-center h-22">
          <h1 className="text-2xl font-bold relative">
            <span className="bg-cyan-400 px-1 absolute inset-0 w-[140px] -left-9 h-3 top-4 z-0 rounded-sm" />
            <span className="relative z-10 text-white">Why ?</span>
          </h1>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-4xl 2xl:text-6xl text-center font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
          Why Choose a {loanData.type}?
        </h1>
        <p
          className="mt-5 px-4 text-center text-gray-300 text-base leading-7 tracking-tight w-full max-w-[636px] mx-auto 
  md:text-sm md:leading-6 
  sm:text-xs sm:leading-5"
        >
          {loanData.why}
        </p>
      </section>

      <section className="bg-[#1a202c] py-12 px-6 md:px-16">
        <div className="max-w-7xl flex mx-auto flex-col justify-center md:flex-row items-center gap-12">
          {/* Left Section - Text */}
          <div className="flex-1 w-full max-w-md md:max-w-[48%] sm:max-w-full sm:px-4">
            <div className="space-y-0">
              {loanData.reasons.map((item, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer border-l-4 pl-6 py-4 border-gray-600 hover:border-cyan-400 hover:bg-cyan-900/20 transition-all`}
                >
                  <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white transition">
                    <span className="bg-cyan-400 w-10 h-6 p-1 mr-3 rounded-full text-sm font-medium inline-block text-center text-[#0a1628]">
                      {index + 1}
                    </span>
                    {item.title}
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-gray-400 group-hover:text-gray-200 transition">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image + Icon */}
          <div className="flex-1 relative w-full max-w-md md:max-w-sm sm:max-w-xs sm:px-4">
            <div className="card-icon-for-family absolute top-10 -left-6 z-10 bg-yellow-300 w-12 h-12 rounded-full flex items-center justify-center shadow-lg md:w-10 md:h-10 sm:w-8 sm:h-8 sm:top-6 sm:-left-4">
              <img
                src={CardIcon}
                alt="Card Icon"
                className="w-16 h-16 sm:w-12 sm:h-12"
              />
            </div>

            <img
              src={loanData.images[0]}
              alt="Happy family with baby"
              className="w-full rounded-lg shadow-lg sm:rounded-md family-with-baby mx-auto"
            />
          </div>
        </div>
      </section>

      {/* section three */}
      {/* <div className="margin-container mx-auto w-full flex items-center justify-center bg-[#0A2A57] text-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row w-full max-w-7xl">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {loanData.type} Eligibility Criteria
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-xl">
              {loanData.eligibilityNote}
            </p>

            <ul className="space-y-4 mt-4">
              {loanData.eligibility.map((item, index) => {
                let icon;
                switch (item.title) {
                  case "Age: 23 – 58 years":
                  case "Age: 21 – 65 years":
                  case "Age: 25–65 years":
                  case "Age: 21–60 years":
                  case "Age: 18–70 years":
                    icon = <FaUserAlt className="w-6 h-6 mt-1" />;
                    break;
                  case "Minimum Income: ₹20,000/month":
                  case "Income: ₹25,000/month minimum":
                  case "Income: ₹15,000/month":
                  case "Turnover: ₹5–12 lakhs annually":
                  case "Minimum Turnover: ₹12 lakhs annually":
                    icon = <FaMoneyBillWave className="w-6 h-6 mt-1" />;
                    break;
                  case "Credit Score: 700+":
                  case "Credit Score: 650+":
                    icon = <FaRegCheckCircle className="w-6 h-6 mt-1" />;
                    break;
                  case "Employment Type: Salaried & Self-employed":
                  case "Employment: Salaried or Self-employed":
                    icon = <FaBriefcase className="w-6 h-6 mt-1" />;
                    break;
                  case "Work Experience: Salaried - Minimum 1 year | Self-employed - At least 2 years":
                  case "Business Vintage: Minimum 1 year":
                    icon = <FaIndustry className="w-6 h-6 mt-1" />;
                    break;
                  case "Business Type":
                    icon = <FaBuilding className="w-6 h-6 mt-1" />;
                    break;
                  case "Car Age: Up to 7 years (used cars)":
                    icon = <FaCar className="w-6 h-6 mt-1" />;
                    break;
                  case "Documents":
                  case "KYC: Aadhaar + PAN":
                    icon = <FaFileAlt className="w-6 h-6 mt-1" />;
                    break;
                  case "Property: Residential or commercial":
                    icon = <FaHome className="w-6 h-6 mt-1" />;
                    break;
                  case "Property Value: ₹10 lakhs minimum":
                  case "Property Value: Minimum ₹10 lakhs":
                    icon = <FaHome className="w-6 h-6 mt-1" />;
                    break;
                  case "Ownership: Residential or commercial property":
                    icon = <FaHome className="w-6 h-6 mt-1" />;
                    break;
                  case "Loan Amount: ₹50,000 and above":
                  case "Loan Amount: ₹10,000 to ₹50 lakhs":
                  case "Loan Amount: ₹5 lakhs and above":
                    icon = <FaMoneyBillWave className="w-6 h-6 mt-1" />;
                    break;
                  case "Loan History: At least 12 months":
                  case "Existing Loan Tenure: Minimum 12 months":
                    icon = <FaRegPaperPlane className="w-6 h-6 mt-1" />;
                    break;
                  case "No Credit Check Required":
                    icon = <FaRegCheckCircle className="w-6 h-6 mt-1" />;
                    break;
                  case "Track Record: 1+ completed project":
                    icon = <FaDatabase className="w-6 h-6 mt-1" />;
                    break;
                  case "Entity: Builder, LLP, or Company":
                    icon = <FaBuilding className="w-6 h-6 mt-1" />;
                    break;
                  case "Approval: RERA, local authorities":
                    icon = <FaHandshake className="w-6 h-6 mt-1" />;
                    break;
                  case "Financials: 2 years of audited reports":
                    icon = <FaDatabase className="w-6 h-6 mt-1" />;
                    break;
                  case "Gold Type: 22K Jewellery preferred":
                    icon = <FaGem className="w-6 h-6 mt-1" />;
                    break;
                  default:
                    icon = <FaUserAlt className="w-6 h-6 mt-1" />;
                }
                return (
                  <li
                    key={index}
                    className="flex justify-between items-start border-b border-gray-700 pb-3 hover:bg-[#17416D]/80 rounded-md px-2 cursor-pointer transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      {icon}
                      <div>
                        <p className="font-for-heading font-semibold">
                          {item.title}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-green-400 mt-1">
                      <FaArrowRight size={20} />
                    </span>
                  </li>
                );
              })}
            </ul>

            <div>
              <button
                onClick={() => navigate("/contact-us")}
                className="flex items-center justify-center px-4 py-2 mt-4 bg-[#FFDC82] text-[#0A2A57] rounded-md font-semibold shadow-lg hover:shadow-[0_0_20px_#FFDC82] transition-all duration-300 cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex items-center relative justify-center mt-12 md:mt-0 md:ml-12 w-full md:w-1/2">
            <div className="relative max-w-[400px] w-full">
              <div className="w-full aspect-square rounded-full overflow-hidden shadow-xl person-with-phone mx-auto">
                <img
                  src={loanData.images[2]}
                  alt="Person checking loan details"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute  -bottom-6 right-0 bg-white text-[#0A2A57] rounded-full w-[120px] h-[120px] person-with-phone-circle flex items-center justify-center shadow-md text-sm font-medium text-center">
                <div className="text-center">
                  <span className="font-bold">4.6 rating from</span>
                  <p className="text-xs underline">9,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* section four */}

      <section className="flex relative flex-col justify-center items-center mx-auto my-0 max-w-none h-[187px] w-[864px] max-md:px-5 max-md:py-0 max-md:w-full max-md:max-w-[991px] max-sm:px-4 max-sm:py-0 max-sm:max-w-screen-sm mt-4 bg-[#0a1628]">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold relative">
            <span className="bg-cyan-400 px-1 absolute inset-0 w-[175px] -left-4 h-3 top-4 z-0 rounded-sm" />
            <span className="relative z-10 text-white">How it works</span>
          </h1>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-4xl 2xl:text-6xl font-bold text-center leading-tight bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-8">
          {loanData.howItWorksNote}
        </h1>
      </section>

      <section className="bg-[#1a202c] py-0 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Section - Image and Floating Box */}
          <div
            className="flex-1 relative w-full max-w-md 
      md:max-w-[48%] 
      sm:max-w-full sm:px-4"
          >
            {/* Floating Icon Box */}
            <div
              className="load-box-in-image custom-box absolute -top-10 -left-16 z-10 bg-[#092951] w-52 h-32 rounded-lg flex flex-col items-center justify-center shadow-lg 
  md:-top-8 md:-left-12 md:w-48 md:h-28 
  sm:-top-6 sm:-left-8 sm:w-40 sm:h-20 sm:text-center sm:px-2 sm:py-1"
            >
              <p className="text-white text-sm font-semibold sm:text-xs">
                Apply for a loan today!
              </p>
              <hr className="border-2 border-[#8494A8] rounded-lg w-36 mt-2 sm:w-28" />
              <hr className="border-2 border-[#8494A8] rounded-lg w-36 mt-2 mb-3 sm:w-28" />
              <button
                onClick={() => navigate("/contact-us")}
                className="bg-cyan-400 text-[#0a1628] text-xs px-3 py-1.5 rounded-lg sm:text-[10px] sm:px-2 sm:py-1 cursor-pointer"
              >
                Apply Now
              </button>
            </div>

            <img
              src={loanData.images[1]}
              alt="Happy family with baby"
              className="w-full rounded-lg shadow-lg sm:rounded-md person-with-lap mx-auto"
            />
          </div>

          {/* Right Section - Text */}
          <div className="flex-1">
            <div className="space-y-0">
              {loanData.howItWorksSteps.map((item, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer border-l-4 pl-6 py-4 border-gray-600 hover:border-cyan-400 hover:bg-cyan-900/20 transition-all`}
                >
                  <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white transition">
                    <span className="bg-cyan-400 w-10 h-6 p-1 mr-3 rounded-full text-sm font-medium inline-block text-center text-[#0a1628]">
                      {index + 1}
                    </span>
                    {item.title}
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-gray-400 group-hover:text-gray-200 transition">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Blogs */}
      <div className="bg-[#0a1628]">
        {/* Blog Section Header */}
        <section className="flex relative flex-col justify-center items-center mx-auto my-0 w-full px-4 sm:px-6 md:px-8 2xl:px-32 3xl:px-60 mt-8 max-w-screen-xl">
          <div className="flex justify-center items-center h-14">
            <h1 className="text-2xl font-bold relative">
              <span className="bg-cyan-400 px-1 absolute inset-0 w-[135px] -left-4 h-3 top-4 z-0 rounded-sm" />
              <span className="relative z-10 text-white">Our Blog</span>
            </h1>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-4xl 2xl:text-6xl text-center font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            Get answers to your questions in our articles and resources
          </h1>
        </section>

        {/* Blog Cards */}
        <div className="relative w-full bg-[#1a202c] py-8 px-4 sm:px-6 md:px-12 2xl:px-32 3xl:px-60 max-w-screen-xl mx-auto">
          <div className="w-full pt-0 relative">
            {/* Scrollable Articles */}
            <div
              ref={scrollRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 w-full max-w-7xl mx-auto"
            >
              {blogsQuery.isLoading && <p>Loading blogs...</p>}
              {blogsQuery.isError && <p>Error loading blogs</p>}
              {!blogsQuery.isLoading &&
                articles.map((article, idx) => (
                  <div
                    key={idx}
                    onClick={() => navigate(`/blogs/${article.permalink}`)}
                    className="bg-[#1a202c] rounded-md overflow-hidden shadow-sm cursor-pointer border border-gray-700"
                  >
                    <img
                      src={article.bannerImageUrl}
                      alt={article.title}
                      className="w-full h-68 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-md font-semibold leading-tight text-white">
                        {article.title}
                      </h2>
                      <div className="mt-2 text-sm text-gray-400 flex items-center justify-between">
                        <span>{article.readTime} min read</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Arrow Controls at Bottom Right */}
            <div className="absolute -bottom-4 right-4 flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="cursor-pointer w-10 h-10 rounded-full bg-[#0a1628] hover:bg-gray-700 text-gray-300 flex items-center justify-center shadow border border-gray-600"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className="cursor-pointer w-10 h-10 rounded-full bg-[#0a1628] hover:bg-gray-700 text-gray-300 flex items-center justify-center shadow border border-gray-600"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Section six */}

      <section className="flex flex-col bg-[#1a202c] rounded-3xl shadow-[3px_24px_53px_rgba(208,221,240,0.1)] mt-15 border border-gray-700">
        <div className="flex flex-col md:flex-row gap-5 justify-between self-center w-full max-w-[1132px] max-md:max-w-full">
          <header className="flex flex-col md:flex-row gap-10 md:gap-5 w-full">
            <h1 className="font-for-heading text-4xl font-bold leading-10 text-white w-full md:w-[260px] text-center md:text-left max-md:text-3xl">
              Major Banks And NBFCs
            </h1>
            <p className="flex-auto my-auto text-base font-medium leading-6 text-gray-300 text-center md:text-left max-md:text-sm">
              We're backed by leading investors from around
              <br />
              the globe, all of whom believe in our dream.
            </p>
          </header>
          <button
            onClick={() => navigate("/contact-us")}
            className="w-[10px] mx-auto apply-partnership-button cursor-pointer self-start px-2 py-5 mt-4 md:mt-1.5 text-base font-bold tracking-tight text-center text-white rounded-xl bg-cyan-500 hover:bg-cyan-600 md:w-auto"
          >
            Apply for Partnership
          </button>
        </div>

        {/* bank image slider */}
        <div className="py-6 w-full max-w-[1132px] mx-auto overflow-hidden">
          <Slider {...settings}>
            {logos?.map((logo, index) => (
              <div key={index} className="px-1 sm:px-2 md:px-3 lg:px-4">
                <div className="flex items-center justify-center h-32 sm:h-40 md:h-48 lg:h-56">
                  <img
                    src={logo.logoUrl}
                    alt={logo.name}
                    className="object-contain h-full w-auto max-w-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Features Section */}
      {loanData?.features && loanData?.features?.length > 0 && (
        <FeaturesSection loanData={loanData} />
      )}

      <LoanEligibility loanData={loanData} />

      {/* Process Section  */}
      <ProcessSection />

      {/* Loan Types Section */}
      {loanData?.loanTypes && loanData?.loanTypes?.length > 0 && (
        <LoanTypes loanData={loanData} />
      )}

      {/* Why Capinex Section */}
      <WhyCapinexSection />

      {/* Contact section */}
      <ContactSection />

      {/* FAQ Section */}
      <div className="mb-8 md:px-24 bg-[#0a1628] py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center items-center h-32">
            <h1 className="text-2xl font-bold relative">
              <span className="bg-cyan-400 px-1 absolute inset-0 w-full h-3 top-4 z-0 rounded-sm" />
              <span className="relative z-10 text-white">FAQ</span>
            </h1>
          </div>

          <div className="space-y-4 mx-auto faqs-container">
            {loanData.faq.map((item, index) => (
              <div
                key={index}
                className="pb-4 cursor-pointer"
                style={{ borderBottom: "2px solid #374151" }}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-base md:text-lg font-medium text-white">
                    {item.question}
                  </p>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-cyan-500 text-white">
                    {openIndex === index ? (
                      <FaMinus size={12} />
                    ) : (
                      <FaPlus size={12} />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-sm text-gray-300">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      {/* <Footer /> */}
      {/* section five */}
      {/* <img src={YellowWave} alt="wave" className="w-full" />
      <section className="bg-[#fdfaf4] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-row md:flex-row justify-between items-center">
          <div className="text-center md:text-left  md:mb-0">
            <h2 className="font-for-heading text-2xl md:text-3xl font-semibold text-[#0A2A57]">
              Ready to get {loanData.type}
            </h2>
            <button
              onClick={() => navigate("/contact-us")}
              className="cursor-pointer mt-4 bg-[#2F5FA7] text-white px-6 py-2 rounded-md animate-pulse drop-shadow-[0_0_10px_#2F5FA7] font-semibold shadow-lg hover:shadow-[0_0_20px_#2F5FA7] transition-all duration-300"
            >
              Apply Now
            </button>
          </div>

          <div className="relative w-[260px] h-[140px] sm:w-[300px] sm:h-[170px] md:w-[360px] md:h-[200px] lg:w-[420px] lg:h-[220px]">
            <img
              src={Sun}
              alt="Sun Illustration"
              className="absolute top-16 left-0 w-full h-full object-cover sun-image"
            />
          </div>
        </div>
      </section> */}
    </>
  );
}
