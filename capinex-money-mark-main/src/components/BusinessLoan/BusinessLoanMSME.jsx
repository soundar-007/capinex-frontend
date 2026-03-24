import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

const BusinessLoanMSME = () => {
  return (
    <section className="bg-[#1a202c] py-16 px-4 sm:px-6 md:px-10 lg:px-20 border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            MSME Loans and Udyam Registration — What You Need to Know
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            If your business is registered on the Udyam portal, you may be eligible for additional benefits when applying for a Capinex business loan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Udyam Reg & Classification */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#0a1628] rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">What is Udyam Registration?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Udyam Registration is the official MSME registration issued by the Ministry of Micro, Small and Medium Enterprises, Government of India. It classifies your business as Micro, Small, or Medium based on investment in plant/machinery and annual turnover. Registration is free and done entirely online.
              </p>
              
              <h4 className="text-white font-semibold mb-3">MSME classification thresholds:</h4>
              <div className="overflow-hidden rounded-xl border border-gray-700">
                <table className="w-full text-left text-sm border-collapse bg-[#1a202c]">
                  <thead className="bg-[#0a1628]">
                    <tr>
                      <th className="p-3 border-b border-gray-700 text-white font-bold">Category</th>
                      <th className="p-3 border-b border-gray-700 text-white font-bold">Investment in Plant & Machinery</th>
                      <th className="p-3 border-b border-gray-700 text-white font-bold">Annual Turnover</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cat: "Micro Enterprise", inv: "Up to ₹1 crore", turn: "Up to ₹5 crore" },
                      { cat: "Small Enterprise", inv: "Up to ₹10 crore", turn: "Up to ₹50 crore" },
                      { cat: "Medium Enterprise", inv: "Up to ₹50 crore", turn: "Up to ₹250 crore" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-[#1a202c]" : "bg-[#0a1628]"}>
                        <td className="p-3 border-b border-gray-700 text-cyan-400 font-semibold">{row.cat}</td>
                        <td className="p-3 border-b border-gray-700 text-gray-300">{row.inv}</td>
                        <td className="p-3 border-b border-gray-700 text-gray-300">{row.turn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <a href="https://udyamregistration.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold hover:underline">
                  Visit Udyam Portal to Register <ExternalLink size={14} />
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-900/30 to-teal-900/30 rounded-2xl p-6 md:p-8 border border-cyan-800/50 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">CGTMSE Scheme — How It Works</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The CGTMSE scheme (managed by SIDBI and the Government of India) provides a guarantee to lenders against default risk on loans to MSME borrowers who cannot offer collateral. This allows lenders to approve larger unsecured amounts than they otherwise could.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[#0a1628]/50 p-4 rounded-xl border border-gray-700">
                  <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-1">Available For</span>
                  <span className="text-white font-medium">Micro and Small enterprises with Udyam registration</span>
                </div>
                <div className="bg-[#0a1628]/50 p-4 rounded-xl border border-gray-700">
                  <span className="text-xs text-teal-400 font-bold uppercase tracking-wider block mb-1">Max Guaranteed Amt</span>
                  <span className="text-white font-medium">₹2 crore</span>
                </div>
                <div className="bg-[#0a1628]/50 p-4 rounded-xl border border-gray-700">
                  <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-1">Guarantee Fee</span>
                  <span className="text-white font-medium text-sm">Charged as % of guaranteed amount (passed to borrower)</span>
                </div>
                <div className="bg-[#0a1628]/50 p-4 rounded-xl border border-gray-700">
                  <span className="text-xs text-teal-400 font-bold uppercase tracking-wider block mb-1">Application</span>
                  <span className="text-white font-medium text-sm">Applied for by the lender, not the borrower</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="lg:col-span-1">
            <div className="bg-[#0a1628] rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Benefits for Udyam-Registered Businesses</h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "Preferential interest rate",
                    desc: "Udyam-registered businesses may qualify for lower interest rates under priority sector lending norms."
                  },
                  {
                    title: "CGTMSE scheme access",
                    desc: "Collateral-free lending backed by government guarantee. Access loans up to ₹2 crore without pledging property—the guarantee replaces collateral."
                  },
                  {
                    title: "Faster credit assessment",
                    desc: "Udyam registration provides a verified, standardised business identity that simplifies document verification and may accelerate loan processing."
                  }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 bg-cyan-900/30 p-5 rounded-xl border border-cyan-800/50">
                <p className="text-sm text-gray-300">
                  To check if your business qualifies for CGTMSE-backed lending through Capinex, contact our MSME lending team via our <a href="/contact-us" className="text-cyan-400 font-medium hover:underline">Contact page</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanMSME;
