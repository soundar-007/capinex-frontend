import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Phone,
  Mail,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Award,
  PartyPopper,
} from "lucide-react";
import happyFamilyImage from "../assets/happy-family.webp";

const EligibilityCheckForm = ({ loanData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    loanAmount: "",
    employmentType: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loanAmountOptions = [
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹3,00,000",
    "₹3,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "₹10,00,000 - ₹25,00,000",
    "₹25,00,000 - ₹50,00,000",
    "₹50,00,000+",
  ];

  const employmentTypes = [
    "Salaried",
    "Self-Employed Professional",
    "Self-Employed Business Owner",
    "Freelancer",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address";
    }

    if (!formData.loanAmount) {
      newErrors.loanAmount = "Please select loan amount";
    }

    if (!formData.employmentType) {
      newErrors.employmentType = "Please select employment type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Google Sheets
      const payload = {
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        emailAddress: formData.emailAddress,
        loanAmount: formData.loanAmount,
        employmentType: formData.employmentType,
        loanType: loanData?.type || "Not specified",
        timestamp: new Date().toISOString(),
      };

      await fetch(
"https://script.google.com/macros/s/AKfycbxAP619u4cv_ihag7Do5hOsHJxlBvtVvzYTMu6UiDhwQh11BtuL2xN7PSlFA2Vz9zMaXQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      // Show success message
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        fullName: "",
        mobileNumber: "",
        emailAddress: "",
        loanAmount: "",
        employmentType: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-[#0a1628] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image & Info */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={happyFamilyImage}
                  alt="Happy family"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-[#1a202c] rounded-2xl shadow-xl p-6 max-w-xs border border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">10,000+</p>
                    <p className="text-sm text-gray-400">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-16 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Quick Process
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Get instant eligibility results
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    100% Secure
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Your personal information is safe and encrypted
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Best Rates
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Competitive interest rates tailored for you
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-[#1a202c] rounded-3xl p-8 md:p-10 shadow-lg border border-gray-700">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Check Your Eligibility
                </h2>
                <p className="text-gray-300">
                  Fill in your details and get instant pre-approval for your{" "}
                  {loanData?.type || "loan"}
                </p>
              </div>

              {isSubmitted ? (
                /* Success Message */
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-900/50 rounded-full mb-6">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for your interest! Our team will review your application and contact you within 24 hours.
                  </p>
                  <div className="bg-cyan-900/30 border border-cyan-800/50 rounded-xl p-4 mb-6">
                    <p className="text-sm text-gray-300">
                      <strong className="text-white">What's next?</strong>
                    </p>
                    <ul className="text-sm text-gray-300 mt-2 space-y-1 text-left">
                      <li>✓ We'll verify your details</li>
                      <li>✓ Check your eligibility</li>
                      <li>✓ Our expert will call you to discuss your loan options</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full pl-12 pr-4 py-3.5 bg-[#0a1628] border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-gray-400 ${
                        errors.fullName ? "border-red-500" : "border-gray-600"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-sm text-red-400">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mobile Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="Enter 10-digit mobile number"
                      maxLength="10"
                      className={`w-full pl-12 pr-4 py-3.5 bg-[#0a1628] border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-gray-400 ${
                        errors.mobileNumber
                          ? "border-red-500"
                          : "border-gray-600"
                      }`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="mt-1.5 text-sm text-red-400">
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`w-full pl-12 pr-4 py-3.5 bg-[#0a1628] border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-gray-400 ${
                        errors.emailAddress
                          ? "border-red-500"
                          : "border-gray-600"
                      }`}
                    />
                  </div>
                  {errors.emailAddress && (
                    <p className="mt-1.5 text-sm text-red-400">
                      {errors.emailAddress}
                    </p>
                  )}
                </div>

                {/* Loan Amount Required */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Loan Amount Required <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10 font-semibold">₹</span>
                    <select
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-10 py-3.5 bg-[#0a1628] border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none cursor-pointer text-white ${
                        errors.loanAmount ? "border-red-500" : "border-gray-600"
                      }`}
                    >
                      <option value="">Select Amount</option>
                      {loanAmountOptions.map((amount, index) => (
                        <option key={index} value={amount}>
                          {amount}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.loanAmount && (
                    <p className="mt-1.5 text-sm text-red-400">
                      {errors.loanAmount}
                    </p>
                  )}
                </div>

                {/* Employment Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Employment Type <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-10 py-3.5 bg-[#0a1628] border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none cursor-pointer text-white ${
                        errors.employmentType
                          ? "border-red-500"
                          : "border-gray-600"
                      }`}
                    >
                      <option value="">Select Employment Type</option>
                      {employmentTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.employmentType && (
                    <p className="mt-1.5 text-sm text-red-400">
                      {errors.employmentType}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 group mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Submitting..." : "Check Eligibility Now"}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>

                {/* Terms Text */}
                <p className="text-center text-xs text-gray-400 mt-4">
                  By submitting, you agree to our{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/privacy-policy")}
                    className="text-cyan-400 hover:underline"
                  >
                    Terms & Conditions
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/privacy-policy")}
                    className="text-cyan-400 hover:underline"
                  >
                    Privacy Policy
                  </button>
                </p>
              </form>
              )}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-900/50 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-sm font-medium text-gray-300">
              Trusted by 10,000+ Customers
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cyan-900/50 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-sm font-medium text-gray-300">
              4.8★ Average Rating
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-900/50 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-sm font-medium text-gray-300">
              Fast & Reliable Process
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCheckForm;
