import React from 'react';
import { 
  Shield, 
  ThumbsUp, 
  Banknote, 
  Clock, 
  Plus, 
  FileText, 
  CheckCircle,
  Target,
  TrendingUp,
  Calculator,
  Lock,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PersonalLoanFeatures = ({loanData}) => {
  const navigate = useNavigate();
  const features = loanData?.features || [];

  const tips = [
    {
      icon: Target,
      text: "Check your credit score before applying",
      highlight: "760+ score recommended"
    },
    {
      icon: TrendingUp,
      text: "Compare interest rates from various lenders",
      highlight: "Save up to 2-3% annually"
    },
    {
      icon: FileText,
      text: "Read the fine print on terms and conditions",
      highlight: "Avoid hidden surprises"
    },
    {
      icon: Calculator,
      text: "Consider your repayment ability carefully",
      highlight: "EMI should be <40% of income"
    },
    {
      icon: Lock,
      text: "Look for any hidden charges or fees",
      highlight: "Processing fees vary 0.5-3%"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl mb-6 shadow-lg">
            <Banknote className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            {loanData?.type} Features
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Unlock your financial potential with our comprehensive {loanData?.type} solutions. 
            Designed for your convenience, built for your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Features Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-[#1a202c] backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tips Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-cyan-600 to-teal-700 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <Target className="w-5 h-5" />
                  </div>
                  {loanData?.type} Tips
                </h3>
                <div className="space-y-4">
                  {tips.map((tip, index) => {
                    const IconComponent = tip.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20"
                      >
                        <div className="flex items-start space-x-3">
                          <IconComponent className="w-5 h-5 text-indigo-200 flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                          <div>
                            <p className="text-white/90 text-sm mb-1 group-hover:text-white transition-colors">
                              {tip.text}
                            </p>
                            <p className="text-indigo-200 text-xs font-medium">
                              {tip.highlight}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <button onClick={()=>navigate('/contact-us')} className="cursor-pointer w-full bg-white text-cyan-600 font-semibold py-3 px-6 rounded-xl hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-lg">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoanFeatures;