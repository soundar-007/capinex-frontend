import React, { useState, useEffect } from "react";
import { Calculator, IndianRupee, Calendar, PieChart, ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessLoanEMI = () => {
  // Hardcoded for Business Loan defaults
  const [loanAmount, setLoanAmount] = useState(1500000); // 15 Lakh
  const [tenure, setTenure] = useState(36); // 36 months
  const [interestRate, setInterestRate] = useState(15); // 15%
  
  const minAmount = 100000;
  const maxAmount = 5000000;
  const minTenure = 6;
  const maxTenure = 60;
  const minInterest = 12;
  const maxInterest = 24;

  const [emi, setEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateEMI = () => {
    const p = Number(loanAmount) || 0;
    const n = Number(tenure) || 0;
    const r = Number(interestRate) || 0;

    if (p <= 0 || n <= 0 || r <= 0) {
      setEMI(0);
      setTotalAmount(0);
      setTotalInterest(0);
      return;
    }

    const monthlyRate = r / 12 / 100;
    const emiCalc = (p * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    const total = emiCalc * n;

    setEMI(Math.round(emiCalc));
    setTotalAmount(Math.round(total));
    setTotalInterest(Math.round(total - p));
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, tenure, interestRate]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateProgress = (value, min, max) => ((value - min) / (max - min)) * 100;

  return (
    <section className="bg-[#1a202c] py-16 px-4 sm:px-6 md:px-10 lg:px-20 border-y border-gray-800" id="emi-calc">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-4">
            Business Loan EMI Calculator
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Estimate your monthly payments. Adjust the sliders to see how different parameters affect your EMI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="bg-[#0a1628] rounded-2xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="space-y-8">
              {/* Amount */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-300">Loan Amount</label>
                </div>
                <div className="relative mb-4">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value.replace(/^0+(?=\d)/, ""))}
                    min={minAmount} max={maxAmount}
                    className="w-full pl-10 pr-4 py-3 bg-[#1a202c] border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="range" min={minAmount} max={maxAmount} value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #22d3ee 0%, #22d3ee ${calculateProgress(loanAmount, minAmount, maxAmount)}%, #374151 ${calculateProgress(loanAmount, minAmount, maxAmount)}%, #374151 100%)`
                  }}
                />
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>{formatCurrency(minAmount)}</span>
                  <span>{formatCurrency(maxAmount)}</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-300">Loan Tenure (Months)</label>
                </div>
                <div className="relative mb-4">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value.replace(/^0+(?=\d)/, ""))}
                    min={minTenure} max={maxTenure}
                    className="w-full pl-10 pr-4 py-3 bg-[#1a202c] border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="range" min={minTenure} max={maxTenure} value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #22d3ee 0%, #22d3ee ${calculateProgress(tenure, minTenure, maxTenure)}%, #374151 ${calculateProgress(tenure, minTenure, maxTenure)}%, #374151 100%)`
                  }}
                />
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>{minTenure} mos</span>
                  <span>{maxTenure} mos</span>
                </div>
              </div>

              {/* Interest */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-300">Interest Rate (% p.a.)</label>
                </div>
                <div className="relative mb-4">
                  <Calculator className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value.replace(/^0+(?=\d)/, ""))}
                    min={minInterest} max={maxInterest} step="0.5"
                    className="w-full pl-10 pr-4 py-3 bg-[#1a202c] border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="range" min={minInterest} max={maxInterest} step="0.5" value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #22d3ee 0%, #22d3ee ${calculateProgress(interestRate, minInterest, maxInterest)}%, #374151 ${calculateProgress(interestRate, minInterest, maxInterest)}%, #374151 100%)`
                  }}
                />
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>{minInterest}%</span>
                  <span>{maxInterest}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-[#0a1628] rounded-2xl shadow-xl p-6 md:p-8 border border-gray-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Loan Summary</h2>
                <PieChart size={24} className="text-cyan-400" />
              </div>

              <div className="bg-[#1a202c] rounded-2xl p-6 md:p-8 text-white border border-gray-700 text-center mb-6">
                <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Monthly EMI</h3>
                <p className="text-5xl font-bold text-cyan-400">{formatCurrency(emi)}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-cyan-900/20 rounded-xl p-4 border border-cyan-800/30 text-center">
                  <h4 className="text-xs font-medium text-gray-400 mb-1">Principal Amount</h4>
                  <p className="text-xl font-bold text-white">{formatCurrency(loanAmount)}</p>
                </div>
                <div className="bg-cyan-900/20 rounded-xl p-4 border border-cyan-800/30 text-center">
                  <h4 className="text-xs font-medium text-gray-400 mb-1">Total Interest</h4>
                  <p className="text-xl font-bold text-white">{formatCurrency(totalInterest)}</p>
                </div>
              </div>
            </div>

            <Link to="/contact-us" className="w-full bg-cyan-500 text-gray-900 font-bold py-4 px-6 rounded-xl hover:bg-cyan-400 transition-colors flex items-center justify-center space-x-2 group mt-auto">
              <span>Apply Now With This EMI</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanEMI;
