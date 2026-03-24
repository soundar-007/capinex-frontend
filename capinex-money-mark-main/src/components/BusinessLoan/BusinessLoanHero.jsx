import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const BusinessLoanHero = () => {
  return (
    <section className="bg-[#0a1628] text-white pt-24 pb-12 px-4 sm:px-6 md:px-10 lg:px-20 max-w-screen-2xl mx-auto w-full">
      <div className="flex flex-col gap-6">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-400 space-x-2">
          <Link to="/" className="flex items-center hover:text-cyan-400 transition">
            <AiFillHome size={16} />
          </Link>
          <span>›</span>
          <Link to="/loans" className="hover:text-cyan-400 transition">
            Loans
          </Link>
          <span>›</span>
          <span className="text-white font-medium">Business Loan</span>
        </nav>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Business Loan in India — Collateral-Free Funding from ₹1 Lakh for MSMEs and SMEs
        </h1>

        {/* Expert Reviewer */}
        <div className="flex items-center gap-2 text-sm text-gray-400 bg-[#1a202c] p-4 rounded-lg border border-gray-700 w-fit">
          <span className="font-semibold text-cyan-400">Reviewed by [Name], [Qualification]</span>
          <span>|</span>
          <span>[Brief credentials, e.g., "10 years in MSME lending and commercial credit assessment"]</span>
          <span>|</span>
          <span className="text-gray-300">Last reviewed: March 2026</span>
        </div>

        {/* Hero Paragraph */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl">
          Capinex MoneyMark Finance Pvt. Ltd. offers business loans from ₹1 lakh to ₹[X] lakh for sole proprietorships, partnership firms, private limited companies, and LLPs operating across India. Interest rates start from [X]% per annum on a reducing balance basis. Collateral is not required for loans up to ₹[Y] lakh — no property pledge, no guarantor, no asset hypothecation. Udyam-registered MSME businesses may qualify for preferential interest rates and access to the CGTMSE guarantee scheme. Apply online in under 10 minutes. Funds are typically disbursed within 48 to 72 hours of document verification. Use the EMI calculator below to estimate your monthly instalment.
        </p>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
          {[
            { label: "Loan amount", value: "From ₹1 lakh to ₹[X] lakh" },
            { label: "Starting interest rate", value: "[X]% p.a. (reducing balance)" },
            { label: "Loan tenure", value: "[X] to [X] months" },
            { label: "Disbursal time", value: "48–72 hours after document verification" },
            { label: "Collateral required", value: "None up to ₹[Y] lakh" },
            { label: "Minimum business vintage", value: "1 year" },
            { label: "Minimum annual turnover", value: "₹10 lakh" },
            { label: "Promoter CIBIL score", value: "700 or above" },
            { label: "Eligible entities", value: "Proprietorship, Partnership, Pvt Ltd, LLP" },
          ].map((item, index) => (
            <div key={index} className="bg-[#1a202c] p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
              <p className="text-xs text-cyan-400 font-medium uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-sm text-white font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanHero;
