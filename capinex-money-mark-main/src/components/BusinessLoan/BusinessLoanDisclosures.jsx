import React from 'react';
import { Scale, Phone, Info } from 'lucide-react';

const BusinessLoanDisclosures = () => {
  return (
    <section className="bg-[#0f172a] py-12 px-4 sm:px-6 md:px-10 lg:px-20 border-t-4 border-cyan-800">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
          <Scale className="text-cyan-500" size={28} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-300 uppercase tracking-wide">
            Regulatory Disclosures & Consumer Information (YMYL)
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-400">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-300 mb-2 uppercase text-xs tracking-wider">Company Information</h3>
              <p>Capinex MoneyMark Finance Pvt. Ltd. is incorporated under the Companies Act, 2013 (CIN: <span className="text-gray-300">U64990KA2023PTC173670</span>). Loans are originated exclusively by our RBI-registered NBFC lending partners (NBFC Registration No. <span className="text-gray-300">[X]</span>).</p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-300 mb-2 uppercase text-xs tracking-wider">Transparency Statement</h3>
              <p>All loan interest rates are calculated on a reducing balance basis. We do not engage in predatory lending practices. You will receive a Key Fact Statement (KFS) detailing the exact Annual Percentage Rate (APR), processing fees, GST, and penalty clauses prior to signing the loan agreement. No hidden charges will apply.</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-300 mb-2 uppercase text-xs tracking-wider">Fair Lending Practice</h3>
              <p>We do not discriminate on the basis of race, caste, religion, gender, or marital status. Loan approval is determined strictly by an automated algorithmic credit assessment based on financial history and repayment capacity.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1e293b] p-5 rounded-xl border border-gray-700 shadow-inner">
              <h3 className="font-bold text-red-400 flex items-center gap-2 mb-3">
                <Info size={16} /> Important Notice on Repayments
              </h3>
              <p className="mb-3 text-gray-300">Failure to repay the loan on schedule will result in:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-400 mb-3">
                <li>Late payment fees applying to the overdue amount.</li>
                <li>Negative reporting to CIBIL, impacting future borrowing.</li>
                <li>Initiation of legal recovery proceedings under the applicable laws, including the Negotiable Instruments Act, 1881 for bounced mandates.</li>
              </ul>
            </div>

            <div className="bg-[#1e293b] p-5 rounded-xl border border-gray-700 shadow-inner">
              <h3 className="font-bold text-cyan-400 flex items-center gap-2 mb-3">
                <Phone size={16} /> Grievance Redressal
              </h3>
              <p className="mb-2">If you have a complaint regarding a loan, our collection practices, or specific terms, please contact:</p>
              <p className="text-gray-300 mb-2"><strong>Grievance Redressal Officer:</strong> [Name]<br/>
              <strong>Email:</strong> grievances@capinex.in<br/>
              <strong>Contact:</strong> 1800-[XXX]-[XXXX]</p>
              <p>If your complaint is not resolved within 30 days, you may escalate to the Ombudsman for NBFCs on the <a href="https://cms.rbi.org.in/" className="text-cyan-400 underline hover:text-cyan-300" target="_blank" rel="noopener noreferrer">RBI CMS portal</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanDisclosures;
