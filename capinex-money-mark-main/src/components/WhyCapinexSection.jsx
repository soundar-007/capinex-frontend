import React from 'react';
import { 
  Smartphone, Zap, Shield, Percent, Calendar, 
  MapPin, Headphones, CheckCircle, Star 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: Smartphone,
    title: "100% Online Application",
    description: "Apply in minutes from anywhere"
  },
  {
    icon: Zap,
    title: "Fast Disbursal",
    description: "Get money in 1–2 business days"
  },
  {
    icon: Shield,
    title: "No Collateral Needed",
    description: "Purely unsecured loans"
  },
  {
    icon: Percent,
    title: "Competitive Rates",
    description: "Starting from just 10.5% p.a."
  },
  {
    icon: Calendar,
    title: "Flexible Repayment",
    description: "Choose up to 60 months"
  },
  {
    icon: MapPin,
    title: "Pan-India Reach",
    description: "Serving customers across India"
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Guidance at every step"
  }
];

const stats = [
  { number: "50,000+", label: "Happy Customers" },
  { number: "₹500Cr+", label: "Loans Disbursed" },
  { number: "24 Hours", label: "Average Approval Time" },
  { number: "4.8/5", label: "Customer Rating" }
];

const WhyCapinexSection = () => {
    const navigate = useNavigate();
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-yellow-400 fill-current" />
            <h2 className="text-4xl font-bold">Why Capinex?</h2>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience the difference with India's most trusted personal loan platform
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm p-12 rounded-3xl border border-white/10 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of satisfied customers who chose Capinex for their financial needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button onClick={() => navigate('/contact-us')} className="cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 text-lg">
                  <Zap className="w-6 h-6" />
                  Apply Now - It's Free!
                </button>
                
                <button onClick={() => navigate('/emi-calculator')} className="border-2 border-white/30 cursor-pointer hover:bg-white/10 text-white font-semibold py-5 px-10 rounded-2xl transition-all duration-300 flex items-center gap-3 text-lg">
                  <Shield className="w-6 h-6" />
                  Check Eligibility
                </button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Instant approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Secure process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCapinexSection;