import React from 'react';
import { Search, FileUp, CheckCircle, HandCoins } from 'lucide-react';

const BusinessLoanProcess = () => {
  const steps = [
    {
      icon: Search,
      title: "Step 1: Check Your Eligibility (2 minutes)",
      desc: "Enter your business vintage, annual turnover, promoter CIBIL score, and desired loan amount. You receive an instant eligibility estimate before filling out the full application — so you know where you stand before submitting documents."
    },
    {
      icon: FileUp,
      title: "Step 2: Complete Online Application (8–10 mins)",
      desc: "Fill in your business details, promoter information, and financial details in our secure online application. Upload the documents applicable to your business structure. No physical documents, no courier, no branch visit — the entire process is digital."
    },
    {
      icon: CheckCircle,
      title: "Step 3: Verification & Offer (24–48 hours)",
      desc: "Our credit team verifies your documents and assesses your credit profile using your ITR, bank statements, CIBIL data, and business history. You receive a loan offer stating the approved amount, interest rate, tenure, and complete fee schedule."
    },
    {
      icon: HandCoins,
      title: "Step 4: Accept and Receive Funds (24–48 hrs)",
      desc: "Digitally sign the loan agreement. Funds are transferred to your registered business bank account within 24 to 48 hours of signing. You receive SMS and email notifications at every stage: application, approval, offer, agreement, and disbursal."
    }
  ];

  return (
    <section className="bg-[#0a1628] py-16 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            <span className="bg-cyan-400 px-1 absolute inset-0 w-full -left-2 h-4 top-6 z-0 rounded-sm opacity-30" />
            <span className="relative z-10">How to Apply for a Business Loan — 4 Steps</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4 font-medium">
            Total typical timeline: <span className="text-cyan-400">48 to 72 hours</span> from a complete application to funds in your account.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-[#1a202c] rounded-2xl p-6 border border-gray-700 shadow-xl relative mt-8 lg:mt-0 group hover:border-cyan-400 transition-colors">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-[#0a1628]" />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-white mb-3 min-h-[56px] flex items-center justify-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanProcess;
