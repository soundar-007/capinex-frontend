import React, { useState } from 'react';
import { User, Users, Building, Building2, CheckCircle2 } from 'lucide-react';

const BusinessLoanDocuments = () => {
  const [activeTab, setActiveTab] = useState('common');

  const tabs = [
    { id: 'common', label: 'All Applicants', icon: User },
    { id: 'sole', label: 'Sole Proprietorship', icon: User },
    { id: 'partnership', label: 'Partnership', icon: Users },
    { id: 'company', label: 'Private Limited', icon: Building2 },
    { id: 'llp', label: 'LLP', icon: Building },
  ];

  const documents = {
    common: [
      "Promoter Aadhaar Card (KYC + address verification)",
      "Promoter PAN Card (mandatory for credit check and tax verification)",
      "Last 6 months' business bank account statements",
      "Last 2 years' Income Tax Returns (ITR) with computation sheet",
      "GST registration certificate (if applicable — see eligibility criteria)",
      "Last 6 months' GST returns (Form GSTR-3B) if GST-registered"
    ],
    sole: [
      "Udyam Registration Certificate (recommended — enables MSME benefits)",
      "Any one business identity document: Shop and Establishment certificate, trade licence, or GST certificate"
    ],
    partnership: [
      "Partnership Deed (registered or unregistered)",
      "All partners' Aadhaar and PAN cards",
      "Firm's PAN card",
      "Udyam Registration Certificate (if MSME-registered)"
    ],
    company: [
      "Certificate of Incorporation (MCA-issued)",
      "Memorandum of Association (MoA) and Articles of Association (AoA)",
      "Board Resolution authorising the loan application",
      "All directors' Aadhaar and PAN cards",
      "Company PAN card",
      "Last 2 years' audited balance sheet with Profit & Loss statement and auditor's report"
    ],
    llp: [
      "LLP Deed",
      "Certificate of Incorporation (MCA-issued)",
      "All designated partners' Aadhaar and PAN cards",
      "LLP PAN card",
      "Last 2 years' audited financials"
    ]
  };

  return (
    <section className="bg-[#1a202c] py-16 px-4 sm:px-6 md:px-10 lg:px-20 border-y border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            Documents Required for a Business Loan
          </h2>
          <p className="text-gray-300 text-lg">
            All documents are submitted digitally through our secure portal. Physical copies and branch visits are not required.
          </p>
        </div>

        <div className="bg-[#0a1628] rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
          {/* Tabs header */}
          <div className="flex flex-wrap border-b border-gray-700 bg-gray-900/50">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[140px] px-4 py-4 text-sm font-semibold flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                    isActive 
                      ? "text-cyan-400 border-b-2 border-cyan-400 bg-[#0a1628]" 
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-10">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {tabs.find(t => t.id === activeTab)?.label} Documents
              </h3>
              {activeTab !== 'common' && (
                <p className="text-cyan-400 text-sm mb-4">
                  Note: Please also submit the "All Applicants" (Common) documents alongside these.
                </p>
              )}
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents[activeTab].map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-[#1a202c] p-4 rounded-xl border border-gray-700">
                  <CheckCircle2 className="text-cyan-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300 text-sm leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>

            {/* Note box */}
            <div className="mt-8 bg-gray-800/50 border border-gray-700 p-4 rounded-xl text-center">
              <p className="text-sm text-gray-400">
                <strong className="text-white">No property documents required for unsecured business loans up to ₹[Y] lakh.</strong> Property documents (ownership papers, valuation reports) are only required for secured business loans where property is offered as collateral. For collateral-free loans, do not include property documents in your application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanDocuments;
