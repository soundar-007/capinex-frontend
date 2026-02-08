import React from 'react';
import { User, Calendar, Building2, TrendingUp, CreditCard, Star, FileText, Car as IdCard, Landmark, Receipt, FolderOpen, CheckCircle2, AlertCircle, ArrowRight, Shield } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckCircle } from "lucide-react";
import loans from '../data/loans'

const BusinessLoanEligibility = ({loanData}) => {
  const navigate = useNavigate();
  const { loanName } = useParams();

  const eligibilityCriteria = loanData?.eligibility || [];
  const documents = loanData?.documents || [];
const tips =
  loanName === "home-loan"
    ? [
        "Maintain a high credit score (750+)",
        "Keep all income and property documents updated",
        "Compare home loan interest rates from multiple lenders",
        "Ensure your EMI is below 40% of your monthly income",
        "Review fine print and ask about processing fees or hidden charges"
      ]
    : [
      "Maintain a good credit score for better interest rates",
        "Keep all business documents updated and ready",
        "Ensure consistent business bank account activity",
        "Have a clear business plan and purpose for the loan",
    ];
  // const tips = [
  //   "Maintain a good credit score for better interest rates",
  //   "Keep all business documents updated and ready",
  //   "Ensure consistent business bank account activity",
  //   "Have a clear business plan and purpose for the loan"
  // ];

  return (
    <div className="min-h-screen bg-[#0a1628] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl mb-6 shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-4xl 2xl:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            {loanData?.type} Requirements
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about eligibility criteria and required documents 
            for your {loanData?.type} application.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Eligibility Criteria */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Eligibility Criteria</h2>
            </div>
            
            <div className="space-y-4">
              {eligibilityCriteria.map((criteria, index) => {
                const IconComponent = criteria.icon;
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
                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                          {criteria.title}
                        </h3>
                        <p className="text-cyan-400 font-medium text-sm mb-2">
                          {criteria.description}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {criteria.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Documents Required */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Documents Required</h2>
            </div>
            
            <div className="grid gap-6">
              {documents.map((doc, index) => {
                const IconComponent = doc.icon;
                return (
                  <div
                    key={index}
                    className="group bg-[#1a202c] backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {doc.title}
                        </h3>
                        <ul className="space-y-2">
                          {doc.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-br from-cyan-600 to-teal-700 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden mb-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <AlertCircle className="w-5 h-5" />
              </div>
              {/* <h3 className="text-2xl font-bold">Pro Tips for Approval</h3> */}
               <h3 className="text-2xl font-bold"> { loanName === "home-loan" ? 'Pro Tips to Boost Your Home Loan Approval' : 'Pro Tips for Approval'}   </h3>
              
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-indigo-200 flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                    <p className="text-white/90 text-sm group-hover:text-white transition-colors">
                      {tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-white/20 text-center">
              <button onClick={()=> navigate("/emi-calculator")} className="cursor-pointer bg-white text-cyan-600 font-semibold py-3 px-8 rounded-xl hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-2">
                <span>Check Your Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Secure</h4>
            <p className="text-gray-400">100% Safe & Encrypted</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Quick</h4>
            <p className="text-gray-400">Fast Processing</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <FolderOpen className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Simple</h4>
            <p className="text-gray-400">Minimal Documentation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoanEligibility;