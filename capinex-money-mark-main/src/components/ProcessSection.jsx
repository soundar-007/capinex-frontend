import React, { useState, useEffect } from 'react';
import { FileText, Upload, CreditCard, CheckCircle, ArrowRight, Clock, Shield, Zap } from 'lucide-react';
import { useParams } from 'react-router-dom';
import personal1 from '../assets/loans/personal/how01.jpg';
import personal2 from '../assets/loans/personal/how2.jpg'
import personal3 from '../assets/loans/personal/how3.jpg'



const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { loanName } = useParams();

  // Auto-advance steps
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

const steps =
  loanName === "home-loan"
    ?  [
  {
    icon: FileText,
    title: "Apply Online",
    description: "Fill out the form with your income, KYC, and property details.",
    details: ["Basic personal information", "Income details", "Loan amount preference", "Instant pre-approval check"],
    image:personal1,
    // image: "https://images.pexels.com/photos/5668501/pexels-photo-5668501.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    icon: Upload,
    title: "Quick Verification & Approval",
    description: "Our team verifies your eligibility and property documents.",
    details: ["PAN Card", "Aadhaar Card", "Bank statements (3 months)", "Salary slips / ITR"],
    image:personal2,
    // image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    icon: CreditCard,
    title: "Select Your Offer & Get Disbursal",
    description: "Digitally sign the agreement and receive funds directly to the builder/seller.",
    details: ["Compare loan offers", "E-sign agreement", "Real-time tracking", "Funds in your account"],
    image:personal3,
    // image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50"
  }
] :  [
  {
    icon: FileText,
    title: "Get Personalized Offers",
    description: "Enter your basic details to instantly view the best loan options suited for you.",
    details: ["Basic personal information", "Income details", "Loan amount preference", "Instant pre-approval check"],
    image:personal1,
    // image: "https://images.pexels.com/photos/5668501/pexels-photo-5668501.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    icon: Upload,
    title: "Complete Online KYC & Upload Documents",
    description: "Submit PAN, Aadhaar, and bank statements via our secure platform.",
    details: ["PAN Card", "Aadhaar Card", "Bank statements (3 months)", "Salary slips / ITR"],
    image:personal2,
    // image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    icon: CreditCard,
    title: "Select Your Offer & Get Disbursal",
    description: "Choose the best plan, e-sign, and track your disbursal in real-time.",
    details: ["Compare loan offers", "E-sign agreement", "Real-time tracking", "Funds in your account"],
    image:personal3,
    // image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50"
  }
];

//   const steps = [
//   {
//     icon: FileText,
//     title: "Get Personalized Offers",
//     description: "Enter your basic details to instantly view the best loan options suited for you.",
//     details: ["Basic personal information", "Income details", "Loan amount preference", "Instant pre-approval check"],
//     image: "https://images.pexels.com/photos/5668501/pexels-photo-5668501.jpeg?auto=compress&cs=tinysrgb&w=600",
//     color: "from-blue-500 to-cyan-500",
//     bgColor: "from-blue-50 to-cyan-50"
//   },
//   {
//     icon: Upload,
//     title: "Complete Online KYC & Upload Documents",
//     description: "Submit PAN, Aadhaar, and bank statements via our secure platform.",
//     details: ["PAN Card", "Aadhaar Card", "Bank statements (3 months)", "Salary slips / ITR"],
//     image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600",
//     color: "from-purple-500 to-pink-500",
//     bgColor: "from-purple-50 to-pink-50"
//   },
//   {
//     icon: CreditCard,
//     title: "Select Your Offer & Get Disbursal",
//     description: "Choose the best plan, e-sign, and track your disbursal in real-time.",
//     details: ["Compare loan offers", "E-sign agreement", "Real-time tracking", "Funds in your account"],
//     image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
//     color: "from-green-500 to-emerald-500",
//     bgColor: "from-green-50 to-emerald-50"
//   }
// ];

  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">SIMPLE PROCESS</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {loanName === "home-loan" ? 'How the Home Loan Process' : ' How It'}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient">
              Works
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Simple 3-Step Process to Get Your Loan
          </p>
          
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-full px-8 py-4 border border-yellow-500/30">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-300 font-semibold">
              💰 Funds usually reach your bank account in just a few hours!
            </span>
          </div>
        </div>
        
        {/* Enhanced Desktop Timeline */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-gray-600 to-gray-600 transform -translate-y-1/2 rounded-full"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 transform -translate-y-1/2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
            
            {/* Step indicators */}
            <div className="flex items-center justify-between relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500 transform hover:scale-110 ${
                      activeStep >= index 
                        ? `bg-gradient-to-r ${step.color} text-white shadow-2xl scale-110 ring-4 ring-white/30` 
                        : 'bg-gray-700/80 backdrop-blur-sm text-gray-400 hover:bg-gray-600/80 hover:text-white'
                    }`}
                  >
                    {activeStep > index ? (
                      <CheckCircle className="w-10 h-10 animate-bounce" />
                    ) : (
                      <span className="text-xl font-bold">{index + 1}</span>
                    )}
                    
                    {/* Ripple effect for active step */}
                    {activeStep === index && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/30 to-orange-500/30 animate-ping"></div>
                    )}
                  </button>
                  
                  {/* Step title */}
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center min-w-max">
                    <div className={`font-semibold text-sm transition-all duration-300 ${
                      activeStep === index ? 'text-yellow-400 scale-110' : 'text-blue-200'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                  
                  {/* Hover tooltip */}
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Step {index + 1}: {step.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced Step Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left">
            <div className={`bg-gradient-to-br ${steps[activeStep].bgColor} p-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-sm`}>
              <div className="flex items-center gap-6 mb-8">
                <div className={`bg-gradient-to-r ${steps[activeStep].color} p-4 rounded-2xl shadow-lg`}>
                  {React.createElement(steps[activeStep].icon, { className: "w-10 h-10 text-white" })}
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium mb-1">Step {activeStep + 1} of 3</div>
                  <h3 className="text-3xl font-bold text-gray-800 leading-tight">{steps[activeStep].title}</h3>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">{steps[activeStep].description}</p>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  What you'll need:
                </h4>
                {steps[activeStep].details.map((detail, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up border border-gray-200/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center flex-shrink-0`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">{detail}</span>
                  </div>
                ))}
              </div>
              
              {/* Mobile Step Navigation */}
              <div className="flex lg:hidden gap-4 mb-8">
                {activeStep > 0 && (
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-700/80 backdrop-blur-sm rounded-xl hover:bg-gray-600/80 transition-all duration-300 text-white font-medium"
                  >
                    Previous
                  </button>
                )}
                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${steps[activeStep].color} rounded-xl hover:shadow-lg transition-all duration-300 text-white font-medium transform hover:scale-105`}
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="flex gap-4">
                <button className={`bg-gradient-to-r ${steps[activeStep].color} hover:shadow-xl text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2`}>
                  <Clock className="w-5 h-5" />
                  Start Step {activeStep + 1}
                </button>
{/*                 
                <button className="border-2 border-white/30 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-2">
                  <Shield className="w-5 h-5 inline-block ml-2" />
                  Apply Now
                </button> */}
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <div className="relative">
                <img 
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="rounded-3xl shadow-2xl w-full transition-all duration-700 transform group-hover:scale-105"
                />
                
                {/* Image overlay with step info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
                
                {/* Floating progress indicator */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${steps[activeStep].color} bg-clip-text text-transparent mb-1`}>
                      {activeStep + 1}/3
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Steps</div>
                  </div>
                </div>
                
                {/* Bottom info card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-gray-800 font-bold text-lg">Step {activeStep + 1}</div>
                      <div className={`px-3 py-1 bg-gradient-to-r ${steps[activeStep].color} text-white text-sm font-medium rounded-full`}>
                        Active
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div 
                        className={`bg-gradient-to-r ${steps[activeStep].color} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${((activeStep + 1) / 3) * 100}%` }}
                      ></div>
                    </div>
                    
                    <div className="text-gray-600 text-sm font-medium">
                      {Math.round(((activeStep + 1) / 3) * 100)}% Complete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProcessSection;