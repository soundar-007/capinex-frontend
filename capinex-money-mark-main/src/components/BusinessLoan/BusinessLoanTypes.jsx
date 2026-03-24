import React from 'react';
import { Briefcase, Zap, Factory, Receipt, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessLoanTypes = () => {
  const loanTypes = [
    {
      icon: Briefcase,
      title: "Term Loan",
      description: "A fixed loan amount disbursed in one tranche, repaid in equal monthly instalments (EMIs) over a defined tenure. Best for: capital expenditure, equipment purchase, business expansion, office fit-out, and one-time large purchases. Available from ₹1 lakh to ₹[X] lakh with tenures from [X] to [X] months.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Working Capital Loan",
      description: "Short-term funding to cover operational expenses — staff salaries, supplier payments, inventory purchases, and cash flow gaps between invoicing and collection. Best for: seasonal businesses, trading companies, and businesses with long receivable cycles. Typically offered as an overdraft facility or short-tenure term loan.",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: Factory,
      title: "Machinery and Equipment Loan",
      description: "Financing specifically for the purchase of plant, machinery, or manufacturing equipment. The machinery itself may serve as collateral, enabling access to higher loan amounts at competitive rates. Best for: manufacturers, fabricators, and businesses expanding production capacity.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Receipt,
      title: "Invoice Discounting / Bill Financing",
      description: "Convert outstanding invoices into immediate cash by borrowing against the value of your receivables. Best for: businesses with large B2B clients on 30–90 day payment terms who need to manage working capital without waiting for invoice settlement.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Building2,
      title: "MSME Loan (Udyam-Registered Businesses)",
      description: "Business loans with preferential terms for businesses registered under the Udyam portal. Access to collateral-free lending under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme may be available for eligible MSME borrowers.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="bg-[#1a202c] py-16 px-4 sm:px-6 md:px-10 lg:px-20 border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            Business Loan Types Available at Capinex
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Not every business has the same funding need. Capinex offers multiple business loan structures to match different use cases:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div key={index} className="bg-[#0a1628] rounded-xl p-6 border border-gray-700 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 shadow-lg group">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{type.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{type.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center bg-[#0a1628] p-6 rounded-xl border border-gray-700">
          <p className="text-gray-300 text-lg">
            Not sure which loan type fits your business? <Link to="/contact-us" className="text-cyan-400 font-semibold hover:underline">Contact our lending team</Link> — we will assess your business profile and recommend the right product structure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanTypes;
