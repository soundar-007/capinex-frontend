import React from 'react';
import { Target } from 'lucide-react';

const BusinessLoanCreditProfile = () => {
  return (
    <section className="bg-[#1a202c] py-16 px-4 sm:px-6 md:px-10 lg:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            How Your Business and Personal Credit Profile Affects Your Loan
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Your loan approval, approved amount, and interest rate are determined by a credit assessment that considers both your personal credit profile and your business's financial history.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Promoter Personal CIBIL */}
          <div className="bg-[#0a1628] rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">Promoter Personal CIBIL</h3>
            <div className="flex flex-col gap-3">
              {[
                { score: "750 and above", impact: "Strongest eligibility; likely to receive the lowest available rate", color: "border-l-emerald-500" },
                { score: "720–749", impact: "Good eligibility; competitive rate", color: "border-l-teal-500" },
                { score: "700–719", impact: "Eligible; rate may be at the higher end of the range", color: "border-l-yellow-500" },
                { score: "Below 700", impact: "Not currently eligible for Capinex business loans", color: "border-l-red-500 opacity-70" },
              ].map((item, idx) => (
                <div key={idx} className={`bg-[#1a202c] p-4 rounded-r-lg border-l-4 border border-y-gray-700 border-r-gray-700 ${item.color}`}>
                  <span className="block font-bold text-white mb-1">{item.score}</span>
                  <span className="text-sm text-gray-400">{item.impact}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {/* Business CIBIL */}
            <div className="bg-gradient-to-r from-cyan-900/20 to-[#0a1628] rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Business CIBIL MSME Rank</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                For established businesses with a credit history (existing loans, credit cards, or bank facilities), CIBIL assigns a Commercial Credit Rank and an MSME Rank. A positive business repayment history — no defaults, no bounced payments, no NPA history — is a <strong className="text-cyan-400">strong positive signal</strong> in the credit assessment.
              </p>
              <div className="bg-[#1a202c] p-4 rounded-xl flex items-start gap-3 border border-gray-700 mt-4">
                <Target className="text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  If your business has no credit history (no prior loans or credit facilities), the assessment will rely more heavily on your ITR, bank statements, and promoter's personal CIBIL score.
                </p>
              </div>
            </div>

            {/* Debt to Turnover */}
            <div className="bg-[#0a1628] rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-4">Debt-to-Turnover Ratio</h3>
              <p className="text-gray-300 leading-relaxed">
                Your total existing EMI obligations (business + personal) relative to your monthly turnover and income are assessed. Businesses with EMI obligations exceeding <strong className="text-red-400">50–60% of monthly cash inflows</strong> typically qualify for lower loan amounts or may face eligibility challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanCreditProfile;
