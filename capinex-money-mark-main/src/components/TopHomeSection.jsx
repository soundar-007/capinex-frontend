import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Clock, Shield, Home, Car, CreditCard, Building2, Users, TrendingUp } from 'lucide-react';
// import backgroundImage from "../assets/HomePageImage.jpg";
import backgroundImage from "../assets/home/homebg.jpg";
import { useNavigate } from 'react-router-dom';
import CoupleLapp from "../assets/CoupleLap.png";
import CoupleLapp1 from "../assets/person3.avif";
import CoupleLapp2 from "../assets/person4.avif";
const Hero = () => {
  const navigate = useNavigate();
  const [selectedLoan, setSelectedLoan] = useState(0);
  const [email, setEmail] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    'No Hidden Fees',
    'Quick Approval',
    'Competitive Rates',
    'Flexible Terms',
    '24/7 Support',
    'Secure Process'
  ];

  const loanOptions = [
    {
      title: 'Personal Loan',
      subtitle: 'For any purpose',
      rate: '10.8%',
      amount: 'Up to 50k',
      icon: <Users className="w-4 h-4" />
    },
    {
      title: 'Home Loan',
      subtitle: 'Buy your dream home',
      rate: '6.2%',
      amount: 'Up to 2M',
      icon: <Home className="w-4 h-4" />
    },
    {
      title: 'Vehicle Loan',
      subtitle: 'New & used cars',
      rate: '5.9%',
      amount: 'Up to 100k',
      icon: <Car className="w-4 h-4" />
    },
    {
      title: 'Business Loan',
      subtitle: 'Grow your business',
      rate: '9.1%',
      amount: 'Up to 500k',
      icon: <Building2 className="w-4 h-4" />
    }
  ];

  const steps = [
    { title: 'Apply', color: 'from-blue-500 to-blue-600' },
    { title: 'Approve', color: 'from-green-500 to-green-600' },
    { title: 'Fund', color: 'from-yellow-500 to-orange-500' }
  ];

  const slideImages = [
    // 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
    // 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    // 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
     { src: CoupleLapp, alt: "Image 1 Description" },
    { src: CoupleLapp1, alt: "Image 2 Description" },
    { src: CoupleLapp2, alt: "Image 3 Description" },
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

const handleApplyNow = () => {
  const payload = {
    email: email, // Or whatever variable you're using
  };

  fetch('https://script.google.com/macros/s/AKfycbw8lQQQd2cLwKEqbJFSK9t6UF4QOOaRYSZLU-c5HYOy95ToIVdAF43YxVFhZngg2HJb/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  navigate('/contact-us')
  
  // alert('Application process would start here!');
};


  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slideImages.length]);

  // Auto-step progression
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
<div
  className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
  style={{
    backgroundImage:
      window.innerWidth >= 640 ? `url('${backgroundImage}')` : "none",
  }}
>
<div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 opacity-100 sm:opacity-80" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-16 sm:-bottom-32 left-20 sm:left-40 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      {/* <div className="absolute top-10 right-10 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-32 left-10 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-20 right-16 sm:right-32 w-4 h-4 sm:w-5 sm:h-5 bg-teal-400 rounded-full animate-bounce delay-1000"></div> */}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 mr-2" />
              <span className="text-emerald-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Trusted by 10,000+ customers
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                Your Financial
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Dreams Made Real
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Fast, secure, and transparent financial solutions. Get
                approved in 48 hours with minimal paperwork and competitive
                rates.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300 text-xs sm:text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Loan Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Choose Your Loan Type
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {loanOptions.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedLoan(index)}
                    className={`p-3 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer group hover:scale-105 ${
                      selectedLoan === index
                        ? "bg-emerald-500/20 border-emerald-500 shadow-lg shadow-emerald-500/25"
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
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
                          <div className="min-w-0 flex-1">
                            <h4 className="text-white font-semibold text-sm truncate">
                              {option.title}
                            </h4>
                            <p className="text-slate-200 text-xs truncate">
                              {option.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0 text-xs">
                          <span className="text-emerald-400 font-medium">
                            From {option.rate} APR
                          </span>
                          <span className="text-slate-400">
                            {option.amount}
                          </span>
                        </div>
                      </div>
                      {selectedLoan === index && (
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0 ml-2" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to get started"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              <button
                onClick={handleApplyNow}
                className="cursor-pointer w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center space-x-2 group text-sm sm:text-base"
              >
                <span>Apply Now - Get Instant Approval</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <p className="text-xs text-slate-400 text-center">
                No impact on credit score • Secure & encrypted • Takes 2 minutes
              </p>
            </div>
          </div>

          {/* Right Content - Hero Image & Stats */}
          <div className="relative space-y-6 sm:space-y-8 order-2 lg:order-2">
            {/* Hero Image Slider */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="relative h-64 sm:h-80 lg:h-96">
                  {slideImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={`Financial consultation ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                        currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold text-sm sm:text-base">
                            Quick Approval
                          </p>
                          <p className="text-slate-300 text-xs sm:text-sm">
                            Get funds in 48 hours
                          </p>
                        </div>
                        <div className="bg-emerald-500/20 p-2 sm:p-3 rounded-full">
                          <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slideImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-emerald-400 w-4' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
              {/* Stats Header */}
              <div className="text-center space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Why Choose Us?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  Trusted by thousands of satisfied customers
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    10,000+
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm">Loans Approved</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    48hrs
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm">Avg. Approval Time</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    8.5%
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    Starting Interest Rate
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    99.2%
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    Customer Satisfaction
                  </p>
                </div>
              </div>

              {/* Process Steps - Hidden on mobile, visible on larger screens */}
              <div className="hidden md:block">
                <div className="relative">
                  {/* Progress line background */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 transform -translate-y-1/2 rounded-full"></div>

                  {/* Progress line fill */}
                  <div
                    className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 transform -translate-y-1/2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${((activeStep + 1) / steps.length) * 100}%`,
                    }}
                  ></div>

                  {/* Step indicators */}
                  <div className="flex items-center justify-between relative z-10">
                    {steps.map((step, index) => (
                      <div key={index} className="relative group">
                        <button
                          onClick={() => handleStepClick(index)}
                          className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base font-semibold transition-all duration-500 transform hover:scale-105 ${
                            activeStep >= index
                              ? `bg-gradient-to-r ${step.color} text-white shadow-xl scale-105 ring-2 ring-white/20`
                              : "bg-gray-700/80 backdrop-blur-sm text-gray-300 hover:bg-gray-600/80 hover:text-white"
                          }`}
                        >
                          {activeStep > index ? (
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
                          ) : (
                            <span>{index + 1}</span>
                          )}

                          {activeStep === index && (
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/30 to-orange-500/30 animate-ping"></div>
                          )}
                        </button>

                        {/* Step title */}
                        <div className="absolute top-14 sm:top-16 left-1/2 transform -translate-x-1/2 text-center min-w-max">
                          <div
                            className={`font-medium text-xs transition-all duration-300 ${
                              activeStep === index
                                ? "text-yellow-400 scale-105"
                                : "text-blue-200"
                            }`}
                          >
                            {step.title}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Process Steps - Simplified version */}
              <div className="md:hidden">
                <div className="flex items-center justify-center space-x-2">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                        activeStep === index
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                          : "bg-gray-700/50 text-gray-300"
                      }`}
                    >
                      {activeStep > index ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                      <span>{step.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className=" pt-4 sm:pt-6">
                <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs">Bank-level Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;