import React from 'react';
import { Quote, Star } from 'lucide-react';

const BusinessLoanTestimonials = () => {
  const testimonials = [
    {
      name: "Rajan K.",
      business: "Textile Manufacturer, Tiruppur",
      loanType: "Machinery Loan",
      quote: "We needed ₹15 lakh to upgrade our loom machinery before the festive season. Traditional banks were taking too long with collateral documentation. Capinex verified our GST returns and ITR and approved the loan within 48 hours without property collateral. The interest on reducing balance was fair and transparent.",
      rating: 5
    },
    {
      name: "Preethi N.",
      business: "B2B Software Agency, Bengaluru",
      loanType: "Working Capital",
      quote: "Client payment cycles of 90 days were crippling our payroll. We took a short-term working capital limit from Capinex. The online process was simple—I uploaded my company's audited financials and we had funds in our current account the next day. The fee structure was precisely what was shown in the offer letter.",
      rating: 5
    },
    {
      name: "Vinod S.",
      business: "Retail Distributor, Pune",
      loanType: "Business Term Loan",
      quote: "My CIBIL was hovering around 720. My relationship manager at Capinex explained how my existing credit card utilisation was affecting my score, which I reduced before applying. We secured a ₹[X] lakh term loan for route expansion. No hidden foreclosure charges and great customer service.",
      rating: 4
    }
  ];

  return (
    <section className="bg-[#0a1628] py-16 px-4 sm:px-6 md:px-10 lg:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            Hear from Our Business Borrowers
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Real feedback from MSME owners who scaled their operations with Capinex.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-[#1a202c] p-8 rounded-2xl border border-gray-700 shadow-xl relative hover:-translate-y-1 transition-transform">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-800 rotate-180" />
              <div className="flex gap-1 mb-4 text-cyan-400">
                {[...Array(test.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed relative z-10">"{test.quote}"</p>
              <div className="pt-6 border-t border-gray-700">
                <p className="font-bold text-white">{test.name}</p>
                <p className="text-sm text-cyan-400 font-medium">{test.business}</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{test.loanType}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanTestimonials;
