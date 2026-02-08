import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { Globe } from "lucide-react";
import CompanyLogo from "../assets/Untitled design (11).png";
import CompanyLogo2 from "../assets/Untitled design (11).png";

export const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-white px-6 md:px-16 pt-14 pb-10 text-sm">
      {/* Row 1: Main Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logos + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={CompanyLogo2} alt="Company Logo 2" className="h-10" />
          </div>
          <p className="text-gray-400 mb-2">
            Capinex Inc. is an all-in-one financial ecosystem, helping 10
            million businesses and individuals access seamless payments,
            banking, credit, and business management tools since 2019.
          </p>
          <div className="col-span-3 mt-3">
            <h4 className="font-semibold mb-2">Connect with us</h4>
            <p className="text-gray-400 mb-4">support@capinex.in</p>

            <div className="flex justify-between items-center gap-6">
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/106460766"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="hover:text-white text-gray-400" />
                </a>
                <a
                  href="https://x.com/capinex52020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="hover:text-white text-gray-400" />
                </a>
                <a
                  href="https://www.instagram.com/capinexmoneymarkfinancepvt/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:text-white text-gray-400" />
                </a>
                <a
                  href="https://www.youtube.com/@CapinexMoneyMarkFinance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="hover:text-white text-gray-400" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61555631681527"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="hover:text-white text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div className="md:order-2">
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/emi-calculator">EMI Calculator</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Combined Services */}
        {/* Column 3: Services */}
        <div className="md:order-3 md:col-span-2">
          <h4 className="font-semibold mb-4">Services</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First half of services */}
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/loans/personal-loan">Personal loan</Link>
              </li>
              <li>
                <Link to="/loans/business-loan">Business loan</Link>
              </li>
              <li>
                <Link to="/loans/home-loan">Home loan</Link>
              </li>
              <li>
                <Link to="/loans/car-loan">Car loan</Link>
              </li>
              <li>
                <Link to="/loans/mortgage-loan">Mortgage</Link>
              </li>
              <li>
                <Link to="/loans/loan-against-property">
                  Loan against property
                </Link>
              </li>
              <li>
                <Link to="/loans/transfer-personal-loan">
                  Transfer personal loan
                </Link>
              </li>
            </ul>

            {/* Second half of services */}
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/loans/project-loans">Project loans</Link>
              </li>
              <li>
                <Link to="/loans/msme-loans">MSME loans</Link>
              </li>
              <li>
                <Link to="/loans/transfer-home-loan">Transfer home loan</Link>
              </li>
              <li>
                <Link to="/loans/gold-loan">Gold loan</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Row 4: Address Blocks */}
      <div className="max-w-7xl mx-auto mt-5 md:mt-5">
        <h2 className="text-2xl font-bold text-white-300 mb-6 text-center">
          Our Branch Network
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((_, i) => (
            <div className="mt-4" key={i}>
              <h4 className="font-semibold mb-2 text-cyan-400">
                Branch Network
              </h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {i === 0 && (
                  <>
                    1710, Dr Rajkumar Rd, Prakash Nagar,
                    <br />
                    Rajajinagar, Bengaluru, Karnataka 560021
                  </>
                )}
                {i === 1 && (
                  <>
                    14/1, 1, Magadi Main Rd, near GT World Mall,
                    {/* <br /> */}
                    near SpineCare Hospital, Landmark, Tollgate, Bengaluru,
                    Karnataka 560023
                  </>
                )}
                {i === 2 && (
                  <>
                    2930/15 4th floor D block Rajaji Nagar,
                    <br />
                    Behind Kuvempu Metro Station, Bangalore 560010
                  </>
                )}
                {i === 3 && (
                  <>
                    Nakshtra Complex, C.M.C. No. 19-6-396/2, Papnash Road,
                    {/* <br /> */}
                    Shivnagar, Bidar Karnataka-585461
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Connect With Us - Desktop only */}

      {/* Bottom Footer - Legal */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-gray-400 text-xs max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p>&copy; 2025, Capinex</p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/cookie-policy" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
        <p className="mt-6 text-gray-500 leading-relaxed">
          © 2025 Capinex. Capinex is a financial services provider operating in
          India. Unauthorised reproduction or redistribution of any copyrighted
          material on this website or Capinex’s digital platforms is strictly
          prohibited. By clicking certain links, you may be redirected to
          third-party websites with their own privacy policies, which may differ
          from ours. We recommend reviewing their privacy practices, as Capinex
          is not responsible for the content, data handling, or security
          measures of third-party sites. For more information, please refer to
          the Resources section of our website.
        </p>
      </div>
    </footer>
  );
};
