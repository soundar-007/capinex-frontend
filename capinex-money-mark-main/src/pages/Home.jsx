import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import SectionTwoPerson from "../assets/home/person4.avif";
import SectionTwoPerson1 from "../assets/home/why.jpg";
import YellowOverlay from "../assets/Section2/Section2Vector.png";
import { IoIosCheckmark } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong, FaS } from "react-icons/fa6";
import PersonImage from "../assets/Link.png";
import TickIcon from "../assets/tick.svg";
import {
  FaCreditCard,
  FaHome,
  FaMoneyCheckAlt,
  FaCar,
  FaBuilding,
  FaExchangeAlt,
  FaWallet,
  FaSuitcase,
  FaCoins,
} from "react-icons/fa";
import {
  TrendingUp,
  Shield,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Banknote,
  FileText,
  Upload,
  CreditCard,
} from "lucide-react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./index.css";
import PersonalLoanIcon from "../assets/loanIcons/investor.svg";
import BusinessLoanIcon from "../assets/loanIcons/moneybag.svg";
import HomeLoanIcon from "../assets/loanIcons/home-loan.svg";
import TransferHomeLoanIcon from "../assets/loanIcons/home-loan-t.svg";
import LoanAgainstPropertyIcon from "../assets/loanIcons/installment-loan.svg";
import ProjectLoanIcon from "../assets/loanIcons/project-planning.svg";
import MortgageLoanIcon from "../assets/loanIcons/mortgage.svg";
import MsmeLoanIcon from "../assets/loanIcons/industry.svg";
// import CarLoanIcon from '../assets/loanIcons/';
import { AiFillStar } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CoupleLap from "../assets/CoupleLap.png";

import StarTrustpilot from "../assets/Img.png";
import Home1stImage from "../assets/home/stock-photo-home.jpg";
import {Link, useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PiSealCheckFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import CarLoanIcon from "../assets/loanIcons/car-loan.svg";
import GoldLoanIcon from "../assets/loanIcons/gold-loan.svg";
import SectionFourCarLoan from "../assets/home/carn1.png";
import { motion } from "framer-motion";
import {
  getAllBlogsApi,
  getAllTestimonialsApi,
  getAllClientsApi,
} from "../api/resource";
import { Helmet } from "react-helmet";
import TopHomeSection from "../components/TopHomeSection";
import loan1 from "../assets/home/loan01.gif";
import loan2 from '../assets/home/loan02.gif'
import loan3 from "../assets/home/loan31.gif";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from 'react-owl-carousel';
import service1 from "../assets/home/investor-DNDEP5si.svg";
import service2 from "../assets/home/home-loan-7RF8tgZ2.svg";
import service3 from "../assets/home/business-loan.svg";
import service4 from "../assets/home/mortgage-BeYI0m-W.svg";
import service5 from "../assets/home/installment-loan-BCIYr_TG.svg";
import service6 from "../assets/home/home-loan-t-BD0dw8Fk.svg";
import HomeSlider from "../components/HomeSlider";

// const reviews = [
//   {
//     name: "Ravi Kumar",
//     time: "1 month ago",
//     title: "Thank you b.e.",
//     desc: "Thank you b.e.! I was able to catch up on my bills. Good feeling with no overdue...",
//   },
//   {
//     name: "Priya Sharma",
//     time: "2 months ago",
//     title: "This whole loan process was s...",
//     desc: "This whole loan process was such a breeze, no headaches or stress.",
//   },
//   {
//     name: "Amit Verma",
//     time: "4 months ago",
//     title: "Great customer service fast responses...",
//     desc: "Great customer service, fast responses and fast turnaround time. Highly recommend...",
//   },
//   {
//     name: "Amit Verma",
//     time: "4 months ago",
//     title: "Great customer service fast responses...",
//     desc: "Great customer service, fast responses and fast turnaround time. Highly recommend...",
//   },
//   {
//     name: "Amit Verma",
//     time: "4 months ago",
//     title: "Great customer service fast responses...",
//     desc: "Great customer service, fast responses and fast turnaround time. Highly recommend...",
//   },
// ];
import carLoanImage1 from "../assets/home/carn1.png";
import carLoanImage2 from "../assets/home/car-loan.png";
import carLoanImage3 from "../assets/home/Car-Laon-1.png";
const Home = () => {
  const [selected, setSelected] = useState(0);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [logos, setLogos] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState(0);
  const [email, setEmail] = useState("");
  const limit = 20;
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = testimonials && testimonials.length > 0 ? testimonials : [];
  const reviewsPerPage = 3;
  const totalReviews = reviews?.length || 0;
  const visibleReviews = reviews?.slice(
    currentIndex,
    currentIndex + reviewsPerPage
  );

  // Auto-advance steps
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const blogsQuery = useQuery({
    queryKey: ["BlogsTotal"],
    queryFn: () => getAllBlogsApi(1, limit),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const testimonialQuery = useQuery({
    queryKey: ["TestimonialsTotal"],
    queryFn: () => getAllTestimonialsApi(1, limit),
  });

  const logoQuery = useQuery({
    queryKey: ["LogosTotal"],
    queryFn: () => getAllClientsApi(1, limit),
  });

  // Utility to safely extract nested data
  const extractData = (query, key) =>
    query?.data?.data?.detail?.[0]?.[key] || [];

  useEffect(() => {
    setArticles(extractData(blogsQuery, "blogs"));
    setTestimonials(extractData(testimonialQuery, "testimonials"));
    setLogos(extractData(logoQuery, "clients"));
  }, [blogsQuery.data, testimonialQuery.data, logoQuery.data]);
  const nextSlide = () => {
    if (currentIndex + reviewsPerPage < totalReviews) {
      setCurrentIndex(currentIndex + reviewsPerPage);
    }
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    if (currentIndex - reviewsPerPage >= 0) {
      setCurrentIndex(currentIndex - reviewsPerPage);
    }
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const cardData = [
    {
      title: "Personal Loan",
      bg: "bg-sky-950",
      labelBg: "bg-sky-900",
      textColor: "text-white",
      img: loan1,
      arrow:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a4f65ac0738a490900acbf04aefdb57b404f6cb0?placeholderIfAbsent=true&apiKey=3415081ac2e344e696e4934521b1deb4",
      labelWidth: "w-[224px]",
      aspect: "aspect-[1.01]",
      link: "/loans/personal-loan",
    },
    {
      title: "Car Loan",
      bg: "bg-amber-200",
      labelBg: "bg-amber-300",
      textColor: "text-slate-900",
      img:loan2,
      // img: "https://cdn.builder.io/api/v1/image/assets/TEMP/e22e370f5d0950279de2bdf6cf30b022c79ee1dc?placeholderIfAbsent=true&apiKey=3415081ac2e344e696e4934521b1deb4",
      arrow:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6abcd33a9f86e7f618267c4c9c980fe826e2b69c?placeholderIfAbsent=true&apiKey=3415081ac2e344e696e4934521b1deb4",
      labelWidth: "w-[224px]",
      aspect: "aspect-[1.01]",
      link: "/loans/car-loan",
    },
    {
      title: "Home Discount",
      bg: "bg-red-400",
      labelBg: "bg-red-500",
      textColor: "text-slate-900",
      img:loan3,
      // img: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ab0c46bfcf7a329d301c9805280023a39f607d1?placeholderIfAbsent=true&apiKey=3415081ac2e344e696e4934521b1deb4",
      arrow:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6abcd33a9f86e7f618267c4c9c980fe826e2b69c?placeholderIfAbsent=true&apiKey=3415081ac2e344e696e4934521b1deb4",
      labelWidth: "w-[224px]",
      aspect: "aspect-square",
      link: "/loans/home-loan",
    },
  ];



const points = [
    "Predictable monthly payments with a fixed interest rate",
    "More flexible approval standards than our unsecured personal loan offers",
    "Access up to 250% of your vehicle's value (max. $100,000)",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const images = [carLoanImage1, carLoanImage2, carLoanImage3];
  const [currentIndexx, setCurrentIndexx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexx((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

// const points = [
//     "Predictable monthly payments with a fixed interest rate",
//     "More flexible approval standards than our unsecured personal loan offers",
//     "Access up to 250% of your vehicle's value (max. $100,000)",
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };



  const settings = {
    dots: false,
    infinite: true,
    speed: 7000,
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

  const loanOptionsss = [
    {
      title: "PERSONAL LOAN",
      desc: "Select the best offer curated just for you from a wide choice of Banks & NBFCs",
      icon: PersonalLoanIcon,
      cta: "Check Eligibility",
      link: "/loans/personal-loan",
      card:'card1',
    },
    {
      title: "HOME LOAN",
      desc: "Choose from lowest interest rates available for your dream home",
      icon: HomeLoanIcon,
      cta: "Check Eligibility",
      link: "/loans/home-loan",
      card:'card2',
    },
    {
      title: "BUSINESS LOAN",
      desc: "Expand your business with loans at low interest rates",
      icon: BusinessLoanIcon,
      cta: "Check Eligibility",
      link: "/loans/business-loan",
      card:'card3',
    },
    {
      title: "MORTGAGE LOAN",
      desc: "Get a mortgage loan for your home or business",
      icon: MortgageLoanIcon,
      cta: "Check Eligibility",
      link: "/loans/mortgage-loan",
      card:'card1',
    },
    {
      title: "LOAN AGAINST PROPERTY",
      desc: "Get liquidity against your property at best interest rates",
      icon: LoanAgainstPropertyIcon,
      cta: "Check Eligibility",
      link: "/loans/loan-against-property",
      card:'card2',
    },
    {
      title: "TRANSFER HOME LOAN",
      desc: "Get better interest rates on your existing home loan",
      icon: TransferHomeLoanIcon,
      cta: "Reduce Your EMI",
      link: "/loans/transfer-home-loan",
      card:'card3',
    },
    {
      title: "MSME LOAN",
      desc: "Get loans for your MSME business with minimal documentation",
      icon: MsmeLoanIcon,
      cta: "Check Eligibility",
      link: "/loans/msme-loans",
      card:'card1',
    },
    {
      title: "PROJECT LOAN",
      desc: "Get project loans for your construction or expansion project",
      icon: ProjectLoanIcon,
      cta: "Check Eligibility",
      link: "/loans/project-loans",
      card:'card2',
    },
    {
      title: "GOLD LOAN",
      desc: "Get instant cash against your gold assets at low interest rates",
      icon: GoldLoanIcon,
      cta: "Check Eligibility",
      link: "/loans/gold-loan",
      card:'card3',
    },
    {
      title: "CAR LOAN",
      desc: "Drive your dream car with our easy car loan options",
      icon: CarLoanIcon,
      cta: "Check Eligibility",
      link: "/loans/car-loan",
      card:'card1',
    },
  ];

  const visibleLoans = showAll ? loanOptionsss : loanOptionsss.slice(0, 6);

  const steps = [
    {
      icon: FileText,
      title: "Apply Online",
      description:
        "Enter your basic details to instantly view the best loan options suited for you.",
      details: [
        "Basic personal information",
        "Income details",
        "Loan amount preference",
        "Instant pre-approval check",
      ],
      image:
        "https://images.pexels.com/photos/5668501/pexels-photo-5668501.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: Upload,
      title: "Get Approved",
      description:
        "Submit PAN, Aadhaar, and bank statements via our secure platform.",
      details: [
        "PAN Card",
        "Aadhaar Card",
        "Bank statements (3 months)",
        "Salary slips / ITR",
      ],
      image:
        "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: CreditCard,
      title: "Receive Funds",
      description:
        "Choose the best plan, e-sign, and track your disbursal in real-time.",
      details: [
        "Compare loan offers",
        "E-sign agreement",
        "Real-time tracking",
        "Funds in your account",
      ],
      image:
        "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
  ];
 const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Helmet>
        <title>
          Capinex | Fast & Flexible Personal, Business, and Home Loans in India
        </title>

        <meta
          name="description"
          content="Get instant approval for personal loans, business loans, and home loans with Capinex. Trusted finance partner for MSME, mortgage, gold loans & more. Apply now!"
        />
        <meta
          name="keywords"
          content="Capinex MoneyMark, Moneymark Finance, Personal Loans India, Instant Loan Approval, Vehicle Equity Loans, Business Loans, MSME Loans, Home Loans, Loan Against Property, Fast Loan App, Best Loan Platform, Compare Loans, CIBIL Score, EMI Calculator, Loan Disbursement, Quick Cash, Low Interest Loans, Online Loan Platform"
        />
        <meta name="author" content="Capinex MoneyMark Team" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        <meta
          property="og:title"
          content="Capinex MoneyMark | Fast & Easy Personal Loans and Financial Services"
        />
        <meta
          property="og:description"
          content="Experience financial freedom with Capinex MoneyMark. Get instant approval on personal and vehicle equity loans with predictable monthly payments and minimal documentation."
        />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/home-og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Capinex MoneyMark Finance Pvt. Ltd."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Capinex MoneyMark | Empowering Financial Growth Across India"
        />
        <meta
          name="twitter:description"
          content="From personal to business loans, Capinex MoneyMark delivers instant funding solutions tailored to your financial needs. Check your eligibility and compare rates now!"
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/assets/home-og-image.jpg"
        />
        <meta name="twitter:site" content="@capinex" />
      </Helmet>

      {/* Section one */}
      {/* <TopHomeSection /> */}
      <HomeSlider />
      {/* <div
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >

<div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 opacity-80" />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-32 left-40 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="absolute top-10 right-10 w-4 h-4 bg-emerald-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-32 left-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-20 right-32 w-5 h-5 bg-teal-400 rounded-full animate-bounce delay-1000"></div>

        <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full">
                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-emerald-300 text-sm font-semibold uppercase tracking-wider">
                  Trusted by 10,000+ customers
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Your Financial
                  <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Dreams Made Real
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                  Fast, secure, and transparent financial solutions. Get
                  approved in 48 hours with minimal paperwork and competitive
                  rates.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Choose Your Loan Type
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {loanOptions.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedLoan(index)}
                      className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer group hover:scale-105 ${
                        selectedLoan === index
                          ? "bg-emerald-500/20 border-emerald-500 shadow-lg shadow-emerald-500/25"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div
                              className={`p-2 rounded-lg ${
                                selectedLoan === index
                                  ? "bg-emerald-500/20"
                                  : "bg-white/10"
                              }`}
                            >
                              <div
                                className={`${
                                  selectedLoan === index
                                    ? "text-emerald-400"
                                    : "text-slate-400"
                                }`}
                              >
                                {option.icon}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-white font-semibold text-sm">
                                {option.title}
                              </h4>
                              <p className="text-slate-400 text-xs">
                                {option.subtitle}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-4 text-xs">
                            <span className="text-emerald-400 font-medium">
                              From {option.rate} APR
                            </span>
                            <span className="text-slate-400">
                              {option.amount}
                            </span>
                          </div>
                        </div>
                        {selectedLoan === index && (
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to get started"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                  />
                </div>

                <button
                  onClick={() => navigate("/contact-us")}
                  className="w-full bg-gradient-to-r from-emerald-500 cursor-pointer to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center space-x-2 group"
                >
                  <span>Apply Now - Get Instant Approval</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <p className="text-xs text-slate-400 text-center">
                  No impact on credit score • Secure & encrypted • Takes 2
                  minutes
                </p>
              </div>
            </div>

            <div className="relative space-y-8">
              <Slider {...homeSettings} className="w-full max-w-4xl mx-auto">
                {slideData.map((_, idx) => (
                  <div key={idx} className="px-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm">
                        <img
                          src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                          alt="Professional financial consultation"
                          className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-white font-semibold">
                                  Quick Approval
                                </p>
                                <p className="text-slate-300 text-sm">
                                  Get funds in 48 hours
                                </p>
                              </div>
                              <div className="bg-emerald-500/20 p-3 rounded-full">
                                <Clock className="w-6 h-6 text-emerald-400" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 space-y-8">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    Why Choose Us?
                  </h3>
                  <p className="text-slate-300">
                    Trusted by thousands of satisfied customers
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      10,000+
                    </div>
                    <p className="text-slate-300 text-sm">Loans Approved</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      48hrs
                    </div>
                    <p className="text-slate-300 text-sm">Avg. Approval Time</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      8.5%
                    </div>
                    <p className="text-slate-300 text-sm">
                      Starting Interest Rate
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      99.2%
                    </div>
                    <p className="text-slate-300 text-sm">
                      Customer Satisfaction
                    </p>
                  </div>
                </div>

                <div className="hidden lg:block mb-10">
                  <div className="relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 transform -translate-y-1/2 rounded-full"></div>

                    <div
                      className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 transform -translate-y-1/2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${((activeStep + 1) / steps.length) * 100}%`,
                      }}
                    ></div>

                    <div className="flex items-center justify-between relative z-10">
                      {steps.map((step, index) => (
                        <div key={index} className="relative group">
                          <button
                            onClick={() => handleStepClick(index)}
                            className={`relative w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold transition-all duration-500 transform hover:scale-105 ${
                              activeStep >= index
                                ? `bg-gradient-to-r ${step.color} text-white shadow-xl scale-105 ring-2 ring-white/20`
                                : "bg-gray-700/80 backdrop-blur-sm text-gray-300 hover:bg-gray-600/80 hover:text-white"
                            }`}
                          >
                            {activeStep > index ? (
                              <CheckCircle className="w-5 h-5 animate-bounce" />
                            ) : (
                              <span>{index + 1}</span>
                            )}

                            {activeStep === index && (
                              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/30 to-orange-500/30 animate-ping"></div>
                            )}
                          </button>

                          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center min-w-max">
                            <div
                              className={` font-medium text-xs transition-all duration-300 ${
                                activeStep === index
                                  ? "text-yellow-400 scale-105"
                                  : "text-blue-200"
                              }`}
                            >
                              {step.title}
                            </div>
                          </div>

                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                            Step {index + 1}: {step.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center justify-center space-x-6 text-slate-400">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs">Bank-level Security</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Section two */}
      <div className="container mx-auto px-4 py-2 lg:py-12">
        <div className="flex flex-col justify-evenly lg:flex-row gap-5">
          {/* Left Section */}
          <div className="w-full lg:w-6/12">
            <div className="text-white max-w-xl mx-auto">
              <div className="inline-block mb-6">
                <h2 className="relative z-10 text-sm font-bold tracking-widest uppercase text-slate-900 bg-cyan-400 px-2 py-1 rounded-sm">
                  Key Features
                </h2>
              </div>

              <div className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
                A path to "yes" in an
                <br /> industry of "no"
              </div>
              <div className="mt-6 text-base font-medium tracking-tight leading-relaxed text-gray-300">
                Compare, check, and secure loans instantly with the best rates.
              </div>

              <div className="mt-12 bg-[#1a202c] rounded-2xl p-8 lg:p-10 border border-gray-700">
                {[
                  "Compare Loans effortlessly.",
                  "Check CIBIL Score instantly.",
                  "Instant Loan Approval with ease.",
                  "Low-Interest Rate Offers for you.",
                  "Personal Loan options tailored to your needs.",
                  "EMI Calculator for smart planning.",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 mt-4 first:mt-0"
                  >
                    <div className="flex items-center justify-center bg-cyan-500 rounded-full w-5 h-5 shrink-0 mt-1">
                      <IoIosCheckmark size={18} />
                    </div>
                    <p className="text-lg font-semibold text-white">
                      {text.split(" ").slice(0, -2).join(" ")}{" "}
                      <span className="font-normal text-gray-300">
                        {text.split(" ").slice(-2).join(" ")}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full lg:w-6/12 flex justify-center items-center relative">
            <img
              src={SectionTwoPerson}
              alt="Person illustration"
              className="w-full h-auto rounded-lg max-w-[600px] lg:max-w-[700px] lg:mr-10"
            />
          </div>
        </div>
      </div>






<div className="container mx-auto px-4 py-2 lg:py-12">
  <div className="flex flex-col justify-evenly lg:flex-row gap-5">
    {/* Right Section (Image) */}
    <div className="w-full lg:w-6/12 flex justify-center items-center relative">
     <img
  src={SectionTwoPerson1}
  alt="Person illustration"
  className="w-full h-auto rounded-lg max-w-[600px] lg:max-w-[700px] lg:mr-10 animated-image"
/>


    </div>

    {/* Left Section */}
    <div className="w-full lg:w-6/12">
      <div className="text-white max-w-xl mx-auto">
        {/* Subheading */}
        <div className="mb-4">
          <p className="text-sm uppercase tracking-wide font-semibold text-orange-500">
            {/* Award-Winning & Certified Company */}
          </p>
        </div>

        
             <div className="inline-block mb-6">
                <h2 className="relative z-10 text-sm font-bold tracking-widest uppercase text-slate-900 bg-cyan-400 px-2 py-1 rounded-sm">
                   Award-Winning & Certified Company
                </h2>
              </div>
        {/* Heading */}
        <div className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
          Why Choose Capinex?
        </div>

        {/* Description */}
        <div className="mt-6 text-base font-medium tracking-tight leading-relaxed text-gray-300">
          Capinex is an industry-leading financial services provider, recognized for its innovation and customer trust. From global certifications to multiple industry awards, our legacy is built on transparency and excellence.
        </div>

        {/* Features List */}
        <div className="mt-10 bg-[#1a202c] rounded-2xl p-8 lg:p-10 border border-gray-700">
          {["Trusted by 50K+ Customers", "ISO Certified Company", "Awarded Best FinTech 2024"].map((item, index) => (
            <div key={index} className="flex items-start gap-3 mt-4 first:mt-0">
              <div className="flex items-center justify-center bg-cyan-500 rounded-full w-5 h-5 shrink-0 mt-1">
                <IoIosCheckmark size={18} />
              </div>
              <p className="text-lg font-semibold text-white">
                <span className="font-normal text-gray-300">{item}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-6">
         <Link
  to={"/about-us"}
  className="inline-block px-6 py-3 bg-[#193CB8] hover:bg-[#102A80] text-white text-base font-semibold rounded-full transition duration-300"
>
  More Views
</Link>
        </div>
      </div>
    </div>
  </div>
</div>



 




      {/* Section three */}
      {/* <div className="margin-container bg-[#0A2A57] text-white flex flex-col lg:flex-row gap-10 p-8 md:p-12 max-w-[1440px] xl:max-w-[1600px] mx-auto"> */}
      {/* <div className="margin-container bg-[#0A2A57] text-white flex flex-col lg:flex-row gap-10 p-8 md:p-12 w-full lg:max-w-[1440px] xl:max-w-[1600px] lg:mx-auto">
        <div className="flex-1 space-y-12">
      <div className="margin-container bg-[#0A2A57] text-white flex flex-col lg:flex-row gap-10 p-8 md:p-12 w-full lg:max-w-[1440px] xl:max-w-[1600px] lg:mx-auto items-center justify-between">
        {/* Left section */}

      <div className=" flex justify-center items-center h-22">
        <h1 className="text-2xl font-bold relative">
          <span className="bg-cyan-500 px-1 absolute inset-0 w-[210px] -left-8 h-3 top-4 z-0 rounded-sm" />
          <span className="relative z-10 text-white">Our Services</span>
        </h1>
      </div>


<div className="services-main">
  {visibleLoans.map((option, idx) => (
    <div
      className={`card ${option.card}`}
      key={idx}
      onClick={() => navigate(option.link)}
    >
      <div className="icon">
        <img
          src={option.icon}
          alt={option.title}
          className="zoom-effect"
        />
      </div>
      <div className="content">
        <h2>{option.title}</h2>
        <p>{option.desc}</p>
        <div className="m-view pt-5">
          <Link to={`${option.link}`}>{option.cta}</Link>
        </div>
      </div>
    </div>
  ))}
</div>


     {loanOptionsss.length > 6 && (
        <div className="flex justify-center items-center w-[90%] mx-auto mt-0 mb-3">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )} 

{/* <div className="services-main">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="card card1">
          <div className="icon">
            <img src={service1} width={50} alt="Service 1" />
          </div>
          <div className="content">
            <h2>Card One</h2>
            <p>Select the best offer curated just for you from a wide choice of Banks & NBFCs</p>
          <div className="m-view pt-5">
            <Link to={'/demo'}>More View</Link>
          </div>
          </div>
          
        </div>
        
        <div className="card card2">
          <div className="icon">
            <img src={service2} width={80} alt="Service 2" />
          </div>
          <div className="content">
            <h2>Card Two</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis numquam, alias laborum eaque natus dolor totam perspiciatis adipisci ipsum rem amet nobis commodi placeat!</p>
          </div>
        </div>
        <div className="card card3">
          <div className="icon">
            <img src={service3} width={80} alt="Service 3" />
          </div>
          <div className="content">
            <h2>Card Three</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis numquam, alias laborum eaque natus dolor totam perspiciatis adipisci ipsum rem amet nobis commodi placeat!</p>
          </div>
        </div>
        <div className="card card4">
          <div className="icon">
            <img src={service4} width={80} alt="Service 4" />
          </div>
          <div className="content">
            <h2>Card Four</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis numquam, alias laborum eaque natus dolor totam perspiciatis adipisci ipsum rem amet nobis commodi placeat!</p>
          </div>
        </div>
         <div className="card card4">
          <div className="icon">
            <img src={service4} width={80} alt="Service 4" />
          </div>
          <div className="content">
            <h2>Card five</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis numquam, alias laborum eaque natus dolor totam perspiciatis adipisci ipsum rem amet nobis commodi placeat!</p>
          </div>
        </div>
         <div className="card card4">
          <div className="icon">
            <img src={service4} width={80} alt="Service 4" />
          </div>
          <div className="content">
            <h2>Card six</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis numquam, alias laborum eaque natus dolor totam perspiciatis adipisci ipsum rem amet nobis commodi placeat!</p>
          </div>
        </div>
      </OwlCarousel>
    </div> */}

      {/* <div className="grid gap-6 sm:grid-cols-2 max-w-[1440px] xl:max-w-[1600px] lg:grid-cols-3 p-4 w-[90%] mx-auto mt-0">
        {visibleLoans.map((option, idx) => (
          <div
            key={idx}
            onClick={() => navigate(option.link)}
            className="bg-white rounded-lg service-card shadow-sm hover:shadow-md transition-shadow duration-200 p-5 flex flex-col cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3 text-black-600">
              <img src={option.icon} alt={option.title} className="w-10 h-10" />
              <h3 className="text-lg font-medium">{option.title}</h3>
            </div>
            <p className="text-gray-600 flex-grow">{option.desc}</p>
            <button
              className="cursor-pointer mt-4 text-blue-600 font-semibold hover:underline self-start"
              type="button"
            >
              {option.cta} →
            </button>
          </div>
        ))}
      </div>  */}
       {/* {loanOptionsss.length > 9 && (
        <div className="flex justify-center items-center w-[90%] mx-auto mt-0 mb-3">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="cursor-pointer bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-md transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}  */}



 <motion.section
      className="margin-container overflow-hidden px-6 sm:px-10 lg:px-20 py-5 sm:py-9 bg-amber-200 rounded-2xl max-w-[1440px] xl:max-w-[1600px] mx-auto mt-0 sm:mt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Text Content */}
        <motion.article className="lg:w-[55%] w-full flex items-center" variants={itemVariants}>
          <div className="flex flex-col items-start w-full">
            <h1 className="font-for-heading text-2xl sm:text-4xl lg:text-4xl font-semibold tracking-tight leading-tight text-slate-900">
              Use your used car as collateral
              <br className="hidden sm:block" />
              to get cash fast
            </h1>

            {points.map((point, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4 mt-6 text-base font-medium tracking-tight text-slate-900"
                variants={itemVariants}
              >
                <div className="flex bg-[#E6B350] rounded-full w-6 h-6 items-center justify-center shrink-0">
                  <IoIosCheckmark size={20} />
                </div>
                <p className="flex-1">{point}</p>
              </motion.div>
            ))}

            <motion.div className="flex flex-col sm:flex-row gap-4 mt-8" variants={itemVariants}>
              <button
                onClick={() => navigate("/loans/car-loan")}
                className="px-6 py-4 bg-blue-800 text-white apply-button font-bold rounded-xl hover:bg-blue-900 transition"
              >
                Apply now
              </button>
            </motion.div>
          </div>
        </motion.article>

        {/* Image Section */}
        <motion.aside className="lg:w-[65%] w-full" variants={itemVariants}>
          <motion.img
            src={images[currentIndexx]}
            alt="Car loan illustration"
            className="w-full object-contain rounded-2xl aspect-[1.1] max-h-[550px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.aside>
      </div>
    </motion.section>





{/* <motion.section
      className="margin-container overflow-hidden px-6 sm:px-10 lg:px-20 py-5 sm:py-9 bg-amber-200 rounded-2xl max-w-[1440px] xl:max-w-[1600px] mx-auto mt-0 sm:mt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row gap-12">
        <motion.article className="lg:w-[55%] w-full flex items-center" variants={itemVariants}>
          <div className="flex flex-col items-start w-full">
            <h1 className="font-for-heading text-2xl sm:text-4xl lg:text-4xl font-semibold tracking-tight leading-tight text-slate-900">
              Use your used car as collateral
              <br className="hidden sm:block" />
              to get cash fast
            </h1>

            {points.map((point, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4 mt-6 text-base font-medium tracking-tight text-slate-900"
                variants={itemVariants}
              >
                <div className="flex bg-[#E6B350] rounded-full w-6 h-6 items-center justify-center shrink-0">
                  <IoIosCheckmark size={20} />
                </div>
                <p className="flex-1">{point}</p>
              </motion.div>
            ))}

            <motion.div className="flex flex-col sm:flex-row gap-4 mt-8" variants={itemVariants}>
              <button
                onClick={() => navigate("/loans/car-loan")}
                className="px-6 py-4 bg-blue-800 text-white apply-button font-bold rounded-xl hover:bg-blue-900 transition"
              >
                Apply now
              </button>
            </motion.div>
          </div>
        </motion.article>

        <motion.aside
          className="lg:w-[65%] w-full"
          variants={itemVariants}
        >
          <motion.img
            src={SectionFourCarLoan}
            alt="Car loan illustration"
            className="w-full object-contain rounded-2xl aspect-[1.1] max-h-[550px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.aside>
      </div>
    </motion.section> */}
      {/* Section four */}


      {/* <section className="margin-container overflow-hidden px-6 sm:px-10 lg:px-20 py-5 sm:py-9 bg-amber-200 rounded-2xl max-w-[1440px] xl:max-w-[1600px] mx-auto mt-0 sm:mt-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <article className="lg:w-[55%] w-full flex items-center">
            <div className="flex flex-col items-start w-full">
              <h1 className="font-for-heading text-2xl sm:text-4xl lg:text-4xl font-semibold tracking-tight leading-tight text-slate-900">
                Use your used car as collateral
                <br className="hidden sm:block" />
                to get cash fast
              </h1>

              {[
                "Predictable monthly payments with a fixed interest rate",
                "More flexible approval standards than our unsecured personal loan offers",
                "Access up to 250% of your vehicle's value (max. $100,000)",
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 mt-6 text-base font-medium tracking-tight text-slate-900"
                >
                  <div className="flex bg-[#E6B350] rounded-full w-6 h-6 items-center justify-center shrink-0">
                    <IoIosCheckmark size={20} />
                  </div>
                  <p className="flex-1">{point}</p>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => navigate("/loans/car-loan")}
                  className="px-6 py-4 bg-blue-800 text-white apply-button font-bold rounded-xl hover:bg-blue-900 transition"
                >
                  Apply now
                </button>
              </div>
            </div>
          </article>

          <aside className="lg:w-[65%] w-full">
            <img
              src={SectionFourCarLoan}
              alt="Car loan illustration"
              className="w-full object-contain rounded-2xl aspect-[1.1] max-h-[550px]"
            />
          </aside>
        </div>
      </section> */}

      {/* Section five */}
      {/* <section className="margin-container overflow-hidden px-6 sm:px-10 lg:px-20 py-12 sm:py-6 bg-blue-200 rounded-2xl max-w-[1440px] xl:max-w-[1600px] mx-auto mt-0 sm:mt-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <article className="w-full lg:w-6/12">
            <div className="flex flex-col w-full">
              <h1 className="font-for-heading text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight leading-tight text-slate-900">
                Investment against MF
              </h1>

              <div className="mt-4 space-y-5">
                {[
                  "Access our lowest rates available – average APR savings of 20%",
                  "Fixtures like cabinets and vanities are used as collateral",
                  "Check your rate in minutes with no additional paperwork to apply",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex gap-4 text-base font-medium tracking-tight text-slate-900"
                  >
                    <div className="flex bg-[#399FFF] rounded-full w-6 h-6 items-center justify-center shrink-0">
                      <IoIosCheckmark size={20} />
                    </div>
                    <p className="flex-1">{text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => navigate("/contact-us")}
                  className="px-6 py-4 font-bold text-white bg-sky-950 rounded-xl hover:bg-sky-900 transition"
                >
                  Apply now
                </button>
                <a
                  href="#"
                  className="self-center sm:self-auto underline font-medium text-slate-900"
                >
                  Learn more
                </a>
              </div>

              <hr className="w-full max-w-md mt-8 border-slate-900" />

              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/399288b9c0e7e5aeac341f042662073f1c22f439?placeholderIfAbsent=true&apiKey=3415081ac2e344e696e4934521b1deb4"
                    alt="Star"
                    className="w-4 h-4 object-contain"
                  />
                ))}
              </div>

              <blockquote className="mt-4 text-base font-medium text-slate-900">
                "The ease with the process was something I have NEVER
                experienced in my 40 years of adult purchasing. I have had many
                loans, from home loans to the average car loans. But never was I
                able to get documents done and funded in a week. That is unheard
                of!!! All the people who assisted me were unfailing polite and
                helpful. Thank you so much. I will definitely be using your
                company again!!!"
              </blockquote>

              <cite className="block mt-4 text-sm font-medium text-slate-900">
                Marianne of Santa Paula, CA
              </cite>
              <p className="mt-4 text-xs text-slate-900">
                Quote is an excerpt from actual customer feedback provided via a
                Capinex customer survey.
              </p>
            </div>
          </article>
          <div className="w-full lg:w-6/12 flex flex-col items-center justify-center">
            <figure className="w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/54c7ca21207e9352b6c471587312feb9435a6338?placeholderIfAbsent=true&apiKey=3415081ac2e344e696e4934521b1deb4"
                alt="Investment visualization"
                className="w-full object-contain rounded-2xl aspect-[1.1] max-h-[550px]"
              />
            </figure>
          </div>
        </div>
      </section> */}

      {/* Section Blogs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="w-full px-4 py-8 bg-[#1a202c] rounded-2xl flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-2 text-white">Excellent</h2>
            <div className="flex items-center justify-center md:justify-start mb-2">
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} className="text-green-500 text-xl" />
              ))}
              <FaStar className="text-gray-300 text-xl -ml-1" />
            </div>
            <p className="text-sm text-gray-400">
              Based on <span>10,164 reviews</span>
            </p>
            <div className="mt-2 flex items-center gap-1 text-m text-gray-300">
              <FaStar className="text-green-500 text-2xl" />{" "}
              <span> Trustpilot </span>
            </div>

            {/* 4 & 5 Star Reviews Text */}
            <p className="text-xs text-gray-500 mt-4">
              Showing our 4 & 5 star reviews
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col gap-4 relative">
            <div className="flex items-center justify-center relative">
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute -left-2 p-2 rounded-full border border-gray-600 bg-[#0a1628] text-white z-10 shadow"
              >
                <FaChevronLeft />
              </button>

              {/* Reviews desktop */}
              <div className="w-full hidden px-12 md:block">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-300">
                  {visibleReviews.map((review, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-2 min-w-full md:min-w-0"
                    >
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="text-green-500 text-sm"
                          />
                        ))}
                        <span className="text-gray-400 text-xs flex items-center gap-1">
                          <FaCheckCircle /> Verified
                        </span>
                      </div>
                      <h3
                        className="font-semibold text-sm"
                        dangerouslySetInnerHTML={{
                          __html:
                            review?.feedback
                              ?.replace(/<[^>]+>/g, "")
                              .slice(0, 20) + "...",
                        }}
                      ></h3>

                      <div
                        className="text-gray-300 text-sm line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: review?.feedback }}
                      />
                      <p className="text-gray-500 text-xs">
                        {review?.userName},{" "}
                        {new Date(review?.createdTime).toLocaleDateString(
                          "en-IN",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile View - Reviews Slider */}
              <div className="w-full whitespace-nowrap px-12 md:hidden">
                <div className="flex flex-nowrap gap-8 transition-all duration-300">
                  <div className="flex flex-col gap-2 w-[95%]">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-green-500 text-sm"
                        />
                      ))}
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <FaCheckCircle /> Verified
                      </span>
                    </div>
                    <h3
                      className="font-semibold text-sm text-white"
                      dangerouslySetInnerHTML={{
                        __html:
                          reviews[current]?.feedback
                            ?.replace(/<[^>]+>/g, "") // Strip HTML tags
                            ?.slice(0, 25) + "...", // Limit to 20 chars
                      }}
                    ></h3>

                    <h3
                      className="text-sm text-gray-300 font-semibold overflow-hidden break-words"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2, // or 3, depending on design
                        WebkitBoxOrient: "vertical",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: reviews[current]?.feedback
                          ?.replace(/<[^>]+>/g, "")
                          .slice(0, 100),
                      }}
                    ></h3>

                    <p className="text-gray-400 text-xs">
                      {reviews[current]?.userName},{" "}
                      {new Date(
                        reviews[current]?.createdTime
                      ).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute -right-2 p-2 rounded-full border border-gray-600 bg-[#0a1628] text-white z-10 shadow"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Section six */}

      <section className="flex flex-col bg-[#1a202c] rounded-3xl shadow-[3px_24px_53px_rgba(0,0,0,0.3)] mt-15">
        <div className="flex flex-col md:flex-row gap-5 justify-between self-center w-full max-w-[1132px] max-md:max-w-full">
          <header className="flex flex-col md:flex-row gap-10 md:gap-5 w-full">
            <h1 className="text-4xl font-bold leading-10 text-white w-full md:w-[260px] text-center md:text-left max-md:text-3xl">
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
            className="w-[10px] mx-auto apply-partnership-button cursor-pointer self-start px-2 py-5 mt-4 md:mt-1.5 text-base font-bold tracking-tight text-center text-white rounded-xl bg-sky-950 md:w-auto"
          >
            Apply for Partnership
          </button>
        </div>

        {/* bank image slider */}
        <div className="py-6 w-full max-w-[1132px] mx-auto overflow-hidden">
          <Slider {...settings}>
            {logos?.map((logo, index) => (
              <div key={index} className="px-1 sm:px-2 md:px-3 lg:px-4">
                <div className="flex items-center justify-center h-30 sm:h-38 md:h-46 lg:h-54">
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

      {/* Section seven */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        // height="224"
        viewBox="0 0 1914 224"
        fill="none"
      >
        <path
          d="M1989.36 223.997C1960.04 105.916 1881.08 16.8245 1778.03 2.11772C1669.8 -13.3687 1564.45 57.366 1504.55 172.221C1474.91 99.0059 1418.99 46.451 1349.11 36.3865C1258.54 23.4515 1170.22 86.0001 1123.73 185.724C1101.76 119.454 1054.35 70.7262 993.878 62.1146C921.46 51.7666 851.056 101.699 813.716 181.081C795.841 137.102 762.317 105.491 720.491 99.573C667.857 92.0246 616.599 127.002 588.127 183.384C574.208 153.652 550.257 132.637 521.007 128.384C481.231 122.679 442.514 149.363 421.248 192.173C410.862 169.244 392.669 152.978 370.237 149.647C340.351 145.395 311.313 165.417 295.382 197.701C287.575 180.513 274.186 168.359 257.09 165.807C234.374 162.547 212.261 178.104 200.568 202.875C194.88 189.302 184.425 179.592 171.282 177.715C154.22 175.304 137.652 186.964 128.645 205.533C124.37 195.362 116.528 188.062 106.743 186.68C93.9549 184.873 81.5556 193.59 74.9498 207.553C73.6877 203.955 71.5064 200.752 68.6238 198.265C65.7412 195.777 62.2584 194.092 58.5233 193.378C48.5614 191.96 38.9175 199.084 34.0779 210.246C33.2554 207.246 31.6163 204.534 29.3443 202.414C27.049 200.316 24.2284 198.884 21.1841 198.269C11.6814 196.886 2.53205 205.923 0.73044 218.398C0.328611 220.239 0.0921606 222.113 0.0239258 223.997H1989.36Z"
          fill="#FAF7F0"
        />
      </svg>

      <section className="flex flex-col justify-center items-center bg-orange-50 px-4 py-16 sm:px-8 md:px-12 lg:px-20 2xl:px-40 3xl:px-64 mt-0 w-full">
        <div className="flex flex-col w-full max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-[1800px]">
          <h1 className="font-for-heading text-center text-slate-900 font-semibold tracking-tighter leading-none text-xl sm:text-5xl lg:text-6xl 2xl:text-5xl">
            Explore our options
          </h1>
          <div className="mt-9 w-full px-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {cardData.map((card, index) => (
                <article
                  key={index}
                  className={`mx-auto explore-cards flex flex-col items-center 
          px-1.5 py-2 text-[8px] sm:text-xs font-bold tracking-wider 
          leading-tight uppercase rounded-lg w-full 
          max-w-[180px] min-h-[135px] sm:max-w-[240px] ${card.bg} ${card.textColor} 
          cursor-pointer transition-transform hover:scale-105`}
                  onClick={() => navigate(card.link)}
                >
                  <div
                    className={`py-1 text-center title-loans text-[10px] sm:text-xs ${card.labelBg}`}
                  >
                    {card.title}
                  </div>
                  <img
                    src={card.img}
                    alt={`${card.title} illustration`}
                    className={`object-contain mt-2 w-[60px] sm:w-full ${card.aspect}`}
                  />
                  <FaArrowRightLong size={20} className="mt-1" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
