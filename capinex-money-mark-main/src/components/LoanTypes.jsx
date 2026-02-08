import React from 'react';
import { 
  TrendingUp, 
  Settings, 
  Building, 
  FileText, 
  CreditCard,
  Star,
  Quote,
  CheckCircle2,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const MSMELoans = ({loanData}) => {
  const navigate = useNavigate();

    
  // const loanTypes = [
  //   {
  //     icon: TrendingUp,
  //     title: "Working Capital Loans",
  //     description: "Maintain smooth day-to-day operations, manage inventory, and pay vendors on time.",
  //     color: "from-blue-500 to-cyan-500",
  //     bgColor: "from-blue-50 to-cyan-50"
  //   },
  //   {
  //     icon: Settings,
  //     title: "Equipment & Machinery Loans",
  //     description: "Upgrade your tools or purchase new machines to boost productivity.",
  //     color: "from-green-500 to-emerald-500",
  //     bgColor: "from-green-50 to-emerald-50"
  //   },
  //   {
  //     icon: Building,
  //     title: "Business Expansion Loans",
  //     description: "Open new branches, launch new products, or enter untapped markets.",
  //     color: "from-purple-500 to-indigo-500",
  //     bgColor: "from-purple-50 to-indigo-50"
  //   },
  //   {
  //     icon: FileText,
  //     title: "Invoice Financing",
  //     description: "Get instant cash flow by converting unpaid invoices into working capital.",
  //     color: "from-orange-500 to-red-500",
  //     bgColor: "from-orange-50 to-red-50"
  //   },
  //   {
  //     icon: CreditCard,
  //     title: "Line of Credit",
  //     description: "Access funds when you need them with a revolving line of credit facility.",
  //     color: "from-pink-500 to-rose-500",
  //     bgColor: "from-pink-50 to-rose-50"
  //   }
  // ];


  const loanTypes = loanData.loanTypes || [];

  return (
    <div className="min-h-screen bg-[#0a1628] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl mb-6 shadow-lg">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            Types of {loanData.type} We Offer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We understand that every business is different. That's why we offer a wide range of 
            custom {loanData.type} options tailored to your specific needs.
          </p>
        </div>

        {/* Loan Types Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {loanTypes.map((loan, index) => {
            const IconComponent = loan.icon;
            return (
              <div
                key={index}
                className={`group relative bg-[#1a202c] rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-700 overflow-hidden`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {loan.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {loan.description}
                  </p>
                  
                  <button onClick={() => navigate("/contact-us")} className="cursor-pointer inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Story Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-lg text-gray-400">Real experiences from our satisfied customers</p>
          </div>

          <div className="relative">
            {/* Main testimonial card */}
            <div className="bg-gradient-to-br from-cyan-600 via-teal-600 to-teal-700 rounded-3xl p-1 shadow-2xl">
              <div className="bg-[#1a202c] rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-900/20 to-teal-900/20 rounded-full translate-x-12 translate-y-12"></div>
                
                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Testimonial content */}
                  <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 font-medium">
                    {loanData.testimonial.feedback}
                  </blockquote>
                  
                  {/* Customer info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">{loanData.testimonial.initials}</span>
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg">{loanData.testimonial.name}</p>
                        <p className="text-gray-400">{loanData.testimonial.location}</p>
                      </div>
                    </div>
                    
                    {/* Star rating */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Grow Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful businesses who have achieved their goals with our MSME loan solutions.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-2">
              <span>Apply for MSME Loan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MSMELoans;