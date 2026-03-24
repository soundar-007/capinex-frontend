import React from 'react';
import { AlertCircle } from 'lucide-react';

const BusinessLoanEligibility = () => {
  return (
    <section className="bg-[#0a1628] py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            Business Loan Eligibility — Who Can Apply?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* General Eligibility */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              General Eligibility Criteria
            </h3>
            <div className="overflow-hidden rounded-xl border border-gray-700 shadow-xl">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    { label: "Business vintage", val: "Minimum 1 year from incorporation / registration date" },
                    { label: "Annual turnover", val: "Minimum ₹10 lakh (as per latest ITR or audited financials)" },
                    { label: "Promoter CIBIL score", val: "700 or above" },
                    { label: "Business CIBIL / Rank", val: "Assessed during credit evaluation (positive history preferred)" },
                    { label: "GST registration", val: "Required if annual turnover exceeds ₹20 lakh" },
                    { label: "Existing loan status", val: "No active NPA with any lender" },
                    { label: "Business location", val: "Registered and operating in India" },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-[#1a202c]" : "bg-[#0a1628]"}>
                      <td className="p-4 border-b border-gray-700 text-cyan-400 font-semibold w-1/3">{row.label}</td>
                      <td className="p-4 border-b border-gray-700 text-gray-300">{row.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* By Business Structure */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              Eligibility by Business Structure
            </h3>
            <div className="overflow-hidden rounded-xl border border-gray-700 shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#1a202c]">
                  <tr>
                    <th className="p-4 border-b border-gray-700 text-white font-bold">Business Structure</th>
                    <th className="p-4 border-b border-gray-700 text-white font-bold">Key Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: "Sole Proprietorship", r: "Promoter KYC serves as business KYC" },
                    { s: "Partnership Firm", r: "All partners' KYC required" },
                    { s: "Private Limited Company", r: "Director's KYC and DIN required" },
                    { s: "LLP", r: "Designated partner's KYC required" },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-[#0a1628]" : "bg-[#1a202c]"}>
                      <td className="p-4 border-b border-gray-700 text-teal-400 font-semibold font-medium">{row.s}</td>
                      <td className="p-4 border-b border-gray-700 text-gray-300">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Body Copy Below */}
        <div className="mt-12 bg-gradient-to-r from-cyan-900/40 to-teal-900/40 border border-cyan-800/50 p-6 sm:p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <AlertCircle className="w-32 h-32 text-cyan-500" />
          </div>
          <div className="relative z-10">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Meeting the minimum eligibility criteria does not guarantee loan approval. The final approved loan amount and interest rate are determined by Capinex's credit assessment model, which evaluates your complete financial profile: business repayment history, existing liabilities relative to turnover, promoter's personal CIBIL score, business stability, and industry/sector risk profile.
            </p>
            <div className="bg-[#0a1628] p-6 rounded-xl border border-gray-700 shadow-inner">
              <h4 className="text-xl font-bold text-white mb-3">Not currently eligible?</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The most common reason for business loan rejection is a promoter CIBIL score below 700 or insufficient business vintage.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li><strong className="text-cyan-400">If your score is below 700:</strong> pay all existing EMIs and credit card dues on time, reduce outstanding credit card utilisation below 30%, and avoid multiple loan applications within a short period. Allow 3–6 months of consistent repayment behaviour before re-applying.</li>
                <li><strong className="text-teal-400">If your business is under 1 year old:</strong> explore our working capital or invoice discounting options which may have different vintage requirements.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanEligibility;
