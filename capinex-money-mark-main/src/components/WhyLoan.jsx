import React from 'react';
import { Briefcase, HeartPulse, Home, CalendarHeart, Plane, GraduationCap, CreditCard } from 'lucide-react';

const reasons = [
  { icon: <HeartPulse className="w-6 h-6 text-blue-600" />, label: 'Medical Emergencies' },
  { icon: <Home className="w-6 h-6 text-blue-600" />, label: 'Home Renovation' },
  { icon: <CalendarHeart className="w-6 h-6 text-blue-600" />, label: 'Weddings & Events' },
  { icon: <Plane className="w-6 h-6 text-blue-600" />, label: 'Travel & Education' },
  { icon: <CreditCard className="w-6 h-6 text-blue-600" />, label: 'Credit Card & Debt Consolidation' },
];

const CapinexLoanSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Briefcase className="w-10 h-10 text-blue-700" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What is a Capinex Personal Loan?</h2>
        <p className="text-gray-600 text-lg mb-10">
          A Capinex Personal Loan is an <strong>unsecured, flexible, and quick-funding solution</strong> for:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-2 bg-blue-100 rounded-full">{reason.icon}</div>
              <span className="text-gray-800 font-medium">{reason.label}</span>
            </div>
          ))}
        </div>

        <div className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
          ✔️ Fast, fair, and transparent. Always.
        </div>
      </div>
    </section>
  );
};

export default CapinexLoanSection;
