import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const BusinessLoanFAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: "What is the maximum business loan amount I can get without collateral?", a: "For qualified MSMEs, we offer unsecured (collateral-free) business loans up to ₹[X] lakh. For amounts above this, collateral (property) will be required. Final approval depends entirely on your business turnover and CIBIL score." },
    { q: "Can a newly registered business or startup get a loan?", a: "We require a minimum business vintage of 1 year. If your business is brand new, we cannot currently fund you. For businesses exactly at the 1-year mark, we offer short-term working capital limits. For larger term loans, a 3-year vintage is preferred." },
    { q: "Do you offer the CGTMSE guarantee scheme?", a: "Yes. For eligible Udyam-registered MSMEs, Capinex facilitates loans under the CGTMSE scheme. This allows you to borrow without pledging collateral, as the trust provides a guarantee to the lender. A guarantee fee applies as per scheme norms." },
    { q: "Does applying affect my CIBIL score?", a: "Checking your eligibility on our initial calculator does not affect your score. However, once you submit a formal application and authorise us, we will conduct a 'hard pull' on your CIBIL report, which may result in a temporary, minor reduction in your credit score." },
    { q: "What does 'reducing balance interest rate' mean?", a: "It means you only pay interest on the outstanding principal amount. As you pay your EMIs, the principal decreases, and so does the interest component of your EMI. This is significantly cheaper overall than a 'flat rate' loan where interest is charged on the original loan amount for the entire tenure." },
    { q: "Can I pre-pay or foreclose the loan early?", a: "Yes. Capinex allows loan foreclosure after the payment of the first [X] EMIs. A foreclosure charge of [X]% on the outstanding principal plus applicable GST will be levied. Partial prepayments are also allowed, subject to conditions specified in your loan agreement." },
    { q: "Why was my business loan application rejected?", a: "The most common reasons are: 1) Promoter CIBIL score below 700; 2) Business vintage of less than 1 year; 3) Low annual turnover (below ₹10 lakh); 4) High existing EMI obligations leaving insufficient cash flow for a new loan; or 5) Bounced EMIs in the recent past." },
    { q: "How long does disbursal take?", a: "If all documents are provided correctly and your profile meets our criteria, approval takes 24–48 hours. Post-agreement signing, funds are disbursed to your current account within 24 hours. The entire process takes approximately 48 to 72 hours." },
    { q: "Are there any hidden fees?", a: "No. The only fees charged are the processing fee (deducted from disbursal) and applicable GST. Both are explicitly stated in your offer letter before you accept the loan. We do not charge any upfront application fees before approval." },
    { q: "Do I have to visit a branch to submit physical documents?", a: "No. The Capinex lending process is 100% digital. You can securely upload all KYC and business documents via our application portal. Physical visits are only initiated by us if necessary for field verification." },
  ];

  return (
    <section className="bg-[#1a202c] py-16 px-4 sm:px-6 md:px-10 lg:px-20 border-t border-gray-800" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg">Clear answers to common questions about MSME funding.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`bg-[#0a1628] rounded-xl border transition-colors duration-300 ${isOpen ? 'border-cyan-500' : 'border-gray-700 hover:border-gray-500'}`}
                itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <h3 className="font-semibold text-white pr-8 text-lg" itemProp="name">{faq.q}</h3>
                  <ChevronDown className={`flex-shrink-0 text-cyan-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                >
                  <div className="p-5 pt-0 text-gray-400 leading-relaxed border-t border-gray-800 mt-2" itemProp="text">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanFAQ;
