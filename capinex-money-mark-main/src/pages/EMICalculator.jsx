import React, { useState, useEffect } from "react";
import { loanTypes } from "../data/loanEMI";
import {
  Calculator,
  IndianRupee,
  Calendar,
  PieChart,
  ArrowRight,
  Info,
} from "lucide-react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const EMICalculator = () => {
  const navigate = useNavigate();
  const [selectedLoan, setSelectedLoan] = useState(loanTypes[0]);
  const [loanAmount, setLoanAmount] = useState(selectedLoan.minAmount);
  const [tenure, setTenure] = useState(selectedLoan.minTenure);
  const [interestRate, setInterestRate] = useState(selectedLoan.interestRate);
  const [emi, setEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showTooltip, setShowTooltip] = useState("");

  const calculateEMI = () => {
    const p = loanAmount;
    const n = tenure;

    const monthlyRate = interestRate / 12 / 100;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);

    const total = emi * n;

    setEMI(Math.round(emi));
    setTotalAmount(Math.round(total));
    setTotalInterest(Math.round(total - p));
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, tenure, selectedLoan, interestRate]);

  useEffect(() => {
    setLoanAmount(selectedLoan.minAmount);
    setTenure(selectedLoan.minTenure);
    setInterestRate(selectedLoan.interestRate);
  }, [selectedLoan]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateProgress = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <>
      <Helmet>
        <title>
          EMI Loan Calculator | Check Your Monthly EMI Online – Capinex
        </title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Calculate your loan EMI with ease using our EMI calculator. Get accurate calculations based on your loan amount and tenure."
        />
        <meta
          name="keywords"
          content="EMI calculator, loan EMI, loan amount, loan tenure, interest rate, loan planner, financial tools"
        />
        <meta name="author" content="Jeevankumar S" />
        <meta property="og:title" content="EMI Calculator" />
        <meta
          property="og:description"
          content="Plan your loan with our easy-to-use EMI calculator. Get instant calculations and make informed decisions."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="URL_OF_YOUR_PAGE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@username" />
        <meta name="twitter:title" content="EMI Calculator" />
        <meta
          name="twitter:description"
          content="Plan your loan with our easy-to-use EMI calculator."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
      </Helmet>
      <main className="min-h-screen mt-16 bg-[#0a1628] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-cyan-900/50 text-cyan-400 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide mb-4">
              Calculate Your EMI
            </span>
            <h1 className="text-4xl font-bold text-white mb-4">
              EMI Calculator
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Plan your loan with our easy-to-use EMI calculator. Get instant
              calculations and make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Input Section */}
            <div className="bg-[#1a202c] rounded-2xl shadow-lg p-8 border border-gray-700">
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Loan Type
                </label>
                <div className="relative">
                  <select
                    value={selectedLoan.name}
                    onChange={(e) =>
                      setSelectedLoan(
                        loanTypes.find((loan) => loan.name === e.target.value)
                      )
                    }
                    className="w-full p-4 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-[#0a1628] text-white appearance-none pr-10"
                  >
                    {loanTypes.map((loan) => (
                      <option key={loan.name} value={loan.name}>
                        {loan.name} (Up to {formatCurrency(loan.maxAmount)})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ArrowRight size={20} className="text-gray-400 rotate-90" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-400 flex items-center">
                  <Info size={16} className="mr-1" />
                  {selectedLoan.description}
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Loan Amount
                    </label>
                    <div
                      className="relative"
                      onMouseEnter={() => setShowTooltip("amount")}
                      onMouseLeave={() => setShowTooltip("")}
                    >
                      <Info size={16} className="text-gray-400 cursor-help" />
                      {showTooltip === "amount" && (
                        <div className="absolute right-0 top-6 w-48 bg-gray-900 text-white text-xs rounded p-2 z-10">
                          Adjust the loan amount using the slider or input field
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <IndianRupee
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="number"
                      value={loanAmount}
                      // onChange={(e) => setLoanAmount(Number(e.target.value))}
                      onChange={(e) => {
                        const value = e.target.value.replace(/^0+(?=\d)/, "");
                        setLoanAmount(value);
                      }}
                      min={selectedLoan.minAmount}
                      max={selectedLoan.maxAmount}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min={selectedLoan.minAmount}
                      max={selectedLoan.maxAmount}
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #1e3a8a 0%, #1e3a8a ${calculateProgress(
                          loanAmount,
                          selectedLoan.minAmount,
                          selectedLoan.maxAmount
                        )}%, #e5e7eb ${calculateProgress(
                          loanAmount,
                          selectedLoan.minAmount,
                          selectedLoan.maxAmount
                        )}%, #e5e7eb 100%)`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-400">
                    <span>{formatCurrency(selectedLoan.minAmount)}</span>
                    <span>{formatCurrency(selectedLoan.maxAmount)}</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Loan Tenure (in months)
                    </label>
                    <div
                      className="relative"
                      onMouseEnter={() => setShowTooltip("tenure")}
                      onMouseLeave={() => setShowTooltip("")}
                    >
                      <Info size={16} className="text-gray-400 cursor-help" />
                      {showTooltip === "tenure" && (
                        <div className="absolute right-0 top-6 w-48 bg-gray-900 text-white text-xs rounded p-2 z-10">
                          Select your preferred loan duration
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <Calendar
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="number"
                      value={tenure}
                      // onChange={(e) => setTenure(Number(e.target.value))}
                      onChange={(e) => {
                        const value = e.target.value.replace(/^0+(?=\d)/, "");
                        setTenure(value);
                      }}
                      min={selectedLoan.minTenure}
                      max={selectedLoan.maxTenure}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min={selectedLoan.minTenure}
                      max={selectedLoan.maxTenure}
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #1e3a8a 0%, #1e3a8a ${calculateProgress(
                          tenure,
                          selectedLoan.minTenure,
                          selectedLoan.maxTenure
                        )}%, #e5e7eb ${calculateProgress(
                          tenure,
                          selectedLoan.minTenure,
                          selectedLoan.maxTenure
                        )}%, #e5e7eb 100%)`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-400">
                    <span>{selectedLoan.minTenure} months</span>
                    <span>{selectedLoan.maxTenure} months</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Interest Rate (% per annum)
                    </label>
                    <div
                      className="relative"
                      onMouseEnter={() => setShowTooltip("interest")}
                      onMouseLeave={() => setShowTooltip("")}
                    >
                      <Info size={16} className="text-gray-400 cursor-help" />
                      {showTooltip === "interest" && (
                        <div className="absolute right-0 top-6 w-52 bg-gray-900 text-white text-xs rounded p-2 z-10">
                          Adjust your interest rate (between{" "}
                          {selectedLoan.minInterest}% and{" "}
                          {selectedLoan.maxInterest}%)
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <Calculator
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="number"
                      value={interestRate}
                      // onChange={(e) => setInterestRate(Number(e.target.value))}
                      onChange={(e) => {
                        const value = e.target.value.replace(/^0+(?=\d)/, "");
                        setInterestRate(value);
                      }}
                      min={selectedLoan.minInterest}
                      max={selectedLoan.maxInterest}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min={selectedLoan.minInterest}
                      max={selectedLoan.maxInterest}
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #1e3a8a 0%, #1e3a8a ${calculateProgress(
                          interestRate,
                          selectedLoan.minInterest,
                          selectedLoan.maxInterest
                        )}%, #e5e7eb ${calculateProgress(
                          interestRate,
                          selectedLoan.minInterest,
                          selectedLoan.maxInterest
                        )}%, #e5e7eb 100%)`,
                      }}
                    />
                  </div>

                  <div className="flex justify-between mt-2 text-sm text-gray-400">
                    <span>{selectedLoan.minInterest}%</span>
                    <span>{selectedLoan.maxInterest}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-[#1a202c] rounded-2xl shadow-lg p-8 border border-gray-700">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">
                  Loan Summary
                </h2>
                <PieChart size={24} className="text-cyan-400" />
              </div>

              <div className="space-y-6">
                <div className="bg-[#0a1628] rounded-2xl p-8 text-white border border-gray-700">
                  <h3 className="text-lg font-medium mb-2">Monthly EMI</h3>
                  <p className="text-4xl font-bold text-cyan-400">{formatCurrency(emi)}</p>
                  <div className="mt-4 text-gray-400 text-sm">
                    Based on your loan amount and tenure
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-cyan-900/30 rounded-xl p-6 transition-all hover:shadow-md border border-cyan-800/50">
                    <h4 className="text-sm font-medium text-cyan-400 mb-2">
                      Principal Amount
                    </h4>
                    <p className="text-2xl font-bold text-white">
                      {formatCurrency(loanAmount)}
                    </p>
                    <div className="mt-2 text-sm text-cyan-300">
                      Total amount borrowed
                    </div>
                  </div>

                  <div className="bg-cyan-900/30 rounded-xl p-6 transition-all hover:shadow-md border border-cyan-800/50">
                    <h4 className="text-sm font-medium text-cyan-400 mb-2">
                      Total Interest
                    </h4>
                    <p className="text-2xl font-bold text-white">
                      {formatCurrency(totalInterest)}
                    </p>
                    <div className="mt-2 text-sm text-cyan-300">
                      Interest amount payable
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a1628] rounded-xl p-6 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium text-gray-300">
                      Total Amount Payable
                    </h4>
                    <span className="text-xs text-gray-400">
                      Principal + Interest
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(totalAmount)}
                  </p>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-500 rounded-full"
                      style={{ width: `${(loanAmount / totalAmount) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>
                      Principal: {Math.round((loanAmount / totalAmount) * 100)}%
                    </span>
                    <span>
                      Interest:{" "}
                      {Math.round((totalInterest / totalAmount) * 100)}%
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => navigate(selectedLoan.link)}
                  className="w-full apply-button bg-cyan-500 text-white py-4 px-6 rounded-xl hover:bg-cyan-600 transition-colors flex items-center justify-center space-x-2 group"
                >
                  <span>Apply for {selectedLoan.name}</span>
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EMICalculator;
