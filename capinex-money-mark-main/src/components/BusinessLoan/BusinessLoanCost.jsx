import React from 'react';
import { AlertTriangle, Calculator, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessLoanCost = () => {
  return (
    <section className="bg-[#0a1628] py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            What Does a Capinex Business Loan Actually Cost?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Understanding the full cost of your loan helps you make a financially sound borrowing decision. There are three components: the principal, the interest, and the fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interest Calculation & Example */}
          <div className="space-y-8">
            <div className="bg-[#1a202c] rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Interest Calculation</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Interest on a Capinex business loan is calculated on the <strong className="text-cyan-400">reducing balance method</strong>. Each month's interest is charged on the outstanding principal — not on the original loan amount. As you repay each EMI, the interest component decreases and the principal repayment component increases.
              </p>
              
              <h4 className="text-white font-semibold mb-3">Reducing balance vs. flat rate (illustrative at 15% p.a., ₹5L, 24m)</h4>
              <div className="overflow-hidden rounded-xl border border-gray-700">
                <table className="w-full text-left text-sm border-collapse bg-[#0a1628]">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="p-3 border-b border-gray-700 text-white font-bold">Method</th>
                      <th className="p-3 border-b border-gray-700 text-white font-bold">Monthly EMI</th>
                      <th className="p-3 border-b border-gray-700 text-white font-bold">Total Interest Paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border-b border-gray-700 text-cyan-400 font-semibold">Reducing balance</td>
                      <td className="p-3 border-b border-gray-700 text-gray-300">₹24,272</td>
                      <td className="p-3 border-b border-gray-700 text-gray-300">₹81,528</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-700 text-red-400 font-semibold">Flat rate</td>
                      <td className="p-3 border-b border-gray-700 text-gray-300">₹27,083</td>
                      <td className="p-3 border-b border-gray-700 text-gray-300">₹1,50,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-4 italic">
                Always confirm which method applies to any loan offer you receive — the effective cost difference is significant.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-[#0a1628] rounded-2xl p-6 md:p-8 border border-cyan-800/50 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <IndianRupee className="w-8 h-8 text-teal-400" />
                <h3 className="text-2xl font-bold text-white">Worked Example: ₹5 Lakh Loan</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4 italic">
                *This is an illustrative example only. Your actual EMI and total cost will depend on the interest rate, tenure, and fees applicable to your specific loan offer.*
              </p>
              
              <div className="space-y-3">
                {[
                  { label: "Loan amount", value: "₹5,00,000" },
                  { label: "Interest rate (illustrative)", value: "15% p.a. (reducing balance)" },
                  { label: "Loan tenure", value: "24 months" },
                  { label: "Monthly EMI", value: "₹24,272" },
                  { label: "Total amount repaid", value: "₹5,82,528" },
                  { label: "Total interest paid", value: "₹82,528" },
                  { label: "Processing fee (illustrative, 2%)", value: "₹10,000" },
                  { label: "GST on processing fee", value: "₹1,800" },
                  { label: "Total cost of credit (illustrative)", value: "₹94,328", highlight: true },
                ].map((row, idx) => (
                  <div key={idx} className={`flex justify-between items-center pb-2 ${row.highlight ? 'pt-2 border-t border-cyan-500/50 font-bold text-lg' : 'border-b border-gray-700/50 text-sm'}`}>
                    <span className={`${row.highlight ? 'text-cyan-400' : 'text-gray-400'}`}>{row.label}</span>
                    <span className={`${row.highlight ? 'text-white' : 'text-gray-200'}`}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a href="#emi-calc" className="text-cyan-400 text-sm font-semibold hover:underline">Use the EMI calculator below to generate a personalised estimate</a>
              </div>
            </div>
          </div>

          {/* Fees & Risk Warning */}
          <div className="space-y-8">
            <div className="bg-[#1a202c] rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Fee Schedule</h3>
              <div className="overflow-hidden rounded-xl border border-gray-700">
                <table className="w-full text-left text-sm border-collapse bg-[#0a1628]">
                  <tbody>
                    {[
                      { type: "Processing fee", details: "Charged as a percentage of the loan amount. Exact rate disclosed in loan offer before acceptance." },
                      { type: "GST on processing fee", details: "18% on the processing fee amount (mandatory government tax)" },
                      { type: "Late EMI payment penalty", details: "Charged on the overdue amount per month. Rate disclosed in loan agreement." },
                      { type: "Foreclosure charge", details: "Applicable if the loan is closed before the agreed tenure. Rate disclosed in loan agreement." },
                      { type: "Part-prepayment charge", details: "Applicable on partial early repayment above a defined threshold. Disclosed in loan agreement." },
                      { type: "EMI bounce / dishonour charge", details: "Charged if EMI payment is returned by your bank. Disclosed in loan agreement." },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-[#1a202c]" : "bg-[#0a1628]"}>
                        <td className="p-3 border-b border-gray-700 text-teal-400 font-semibold w-2/5 align-top">{row.type}</td>
                        <td className="p-3 border-b border-gray-700 text-gray-300 align-top leading-relaxed">{row.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-gray-900/50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Important:</strong> You will not be charged any fee before you receive and accept your loan offer. The complete fee schedule applicable to your specific loan is disclosed in the offer letter before signing. <span className="text-cyan-400 font-medium">No hidden fees apply.</span>
                </p>
              </div>
            </div>

            <div className="bg-red-950/20 border border-red-900/50 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">⚠️ Risk Warning</h3>
              </div>
              <div className="text-sm text-gray-300 space-y-4 leading-relaxed">
                <p>
                  <strong className="text-white">Important notice:</strong> Applying for a business loan will result in a hard credit enquiry on both the promoter's personal CIBIL report and, where applicable, the business's CIBIL MSME Rank. This may temporarily reduce credit scores. 
                </p>
                <p>
                  Missing an EMI will attract late payment penalties and negatively affect both your personal and business credit scores. Payments overdue by more than 90 days may result in the loan being classified as a <strong className="text-red-400">Non-Performing Asset (NPA)</strong> under RBI guidelines. For secured business loans where property is pledged as collateral, default may trigger recovery proceedings under the SARFAESI Act, 2002.
                </p>
                <p>
                  Please ensure your business has adequate and consistent cash flow to service the EMI before applying. If you encounter financial difficulty after disbursal, <Link to="/contact-us" className="text-cyan-400 underline">contact our customer support team immediately</Link> — early communication allows us to explore restructuring options before escalation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanCost;
