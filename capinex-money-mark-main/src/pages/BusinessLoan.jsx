import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BusinessLoanHero from '../components/BusinessLoan/BusinessLoanHero';
import BusinessLoanTypes from '../components/BusinessLoan/BusinessLoanTypes';
import BusinessLoanEligibility from '../components/BusinessLoan/BusinessLoanEligibility';
import BusinessLoanDocuments from '../components/BusinessLoan/BusinessLoanDocuments';
import BusinessLoanCost from '../components/BusinessLoan/BusinessLoanCost';
import BusinessLoanMSME from '../components/BusinessLoan/BusinessLoanMSME';
import BusinessLoanProcess from '../components/BusinessLoan/BusinessLoanProcess';
import BusinessLoanEMI from '../components/BusinessLoan/BusinessLoanEMI';
import BusinessLoanCreditProfile from '../components/BusinessLoan/BusinessLoanCreditProfile';
import BusinessLoanFAQ from '../components/BusinessLoan/BusinessLoanFAQ';
import BusinessLoanTestimonials from '../components/BusinessLoan/BusinessLoanTestimonials';
import BusinessLoanDisclosures from '../components/BusinessLoan/BusinessLoanDisclosures';

// Existing Shared Components
import ContactSection from '../components/ContactSection';

const BusinessLoan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredDataObj = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LoanOrCredit",
        "name": "Capinex Business Loan",
        "amount": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "minValue": "100000",
          "maxValue": "[X]00000"
        },
        "interestRate": {
          "@type": "QuantitativeValue",
          "minValue": "[X]",
          "unitText": "Percent"
        },
        "loanTerm": {
          "@type": "QuantitativeValue",
          "minValue": "[X]",
          "maxValue": "[X]",
          "unitText": "Months"
        },
        "requiredCollateral": "None up to ₹[Y] lakh",
        "provider": {
          "@type": "FinancialService",
          "name": "Capinex MoneyMark Finance Pvt. Ltd."
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://capinex.in/" },
          { "@type": "ListItem", "position": 2, "name": "Loans", "item": "https://capinex.in/loans" },
          { "@type": "ListItem", "position": 3, "name": "Business Loan", "item": "https://capinex.in/loans/business-loan" }
        ]
      },
      {
        "@type": "WebPage",
        "name": "Business Loan Online – Collateral-Free Funding | Capinex",
        "reviewedBy": {
          "@type": "Person",
          "name": "[Reviewer Name]"
        },
        "lastReviewed": "2026-03-20"
      }
    ]
  };

  return (
    <>
      {/* 1. Page Metadata & Schema Markup */}
      <Helmet>
        <title>Business Loan Online – Collateral-Free Funding for MSMEs | Capinex</title>
        <meta name="description" content="Apply for a business loan from ₹1 lakh. Collateral-free up to ₹[X] lakh. Rates from [X]% p.a. Approval in 24 hrs for MSMEs, sole proprietors, and Pvt Ltd companies. Check eligibility now." />
        <link rel="canonical" href="https://capinex.in/loans/business-loan" />
        
        <meta property="og:title" content="Business Loan Online – Collateral-Free Funding for MSMEs | Capinex" />
        <meta property="og:description" content="Business loans from ₹1 lakh. No collateral up to ₹[X] lakh. Rates from [X]% p.a. Approval in 24 hrs. Sole proprietors, partnerships, Pvt Ltd eligible." />
        <meta property="og:url" content="https://capinex.in/loans/business-loan" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Capinex" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Loan Online – Fast Approval | Capinex" />
        <meta name="twitter:description" content="MSME business loans at competitive rates. Unsecured limits up to ₹[X] lakh. Click to check eligibility and apply online in 10 minutes." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredDataObj)}
        </script>
      </Helmet>

      <main className="bg-[#0a1628] min-h-screen font-sans overflow-x-hidden">
        {/* Sections 2-6: Breadcrumb, H1, Reviewer, Hero Para, Stat Cards */}
        <BusinessLoanHero />

        {/* Section 7: Loan Types */}
        <BusinessLoanTypes />

        {/* Section 8: Eligibility Criteria */}
        <BusinessLoanEligibility />

        {/* Section 9: Documents Required */}
        <BusinessLoanDocuments />

        {/* Section 10: Cost of Loan */}
        <BusinessLoanCost />

        {/* Section 11: MSME & Udyam Benefits */}
        <BusinessLoanMSME />

        {/* Section 12: Application Process */}
        <BusinessLoanProcess />

        {/* Section 13: EMI Calculator */}
        <BusinessLoanEMI />

        {/* Section 14: Credit Profile Impact */}
        <BusinessLoanCreditProfile />

        {/* Section 15: FAQ */}
        <BusinessLoanFAQ />

        {/* Section 16: Testimonials */}
        <BusinessLoanTestimonials />

        {/* Section 17: YMYL Disclosures */}
        <BusinessLoanDisclosures />

        {/* Shared section: Email application / Support */}
        <ContactSection />
      </main>
    </>
  );
};

export default BusinessLoan;
