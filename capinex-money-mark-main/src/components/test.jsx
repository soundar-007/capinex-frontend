import React, { useState } from "react";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../assets/Untitled design (11).png";

// Import icons
import LoadIcon1 from "../assets/loanIcons/loanicon1.png"; // Replace with correct icon import
import LoadIcon2 from "../assets/loanIcons/loanicon2.png";
import LoadIcon3 from "../assets/loanIcons/loanicon3.png";
import LoadIcon4 from "../assets/loanIcons/loanicon4.png";
import LoadIcon5 from "../assets/loanIcons/loanicon5.png";
import LoadIcon6 from "../assets/loanIcons/loanicon6.png";
import LoadIcon7 from "../assets/loanIcons/loanicon7.png";
import LoadIcon8 from "../assets/loanIcons/loanicon8.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navItems = [
    {
      title: "Loans",
      items: [
        { name: "Personal loan", icon: LoadIcon1, link: "/loans/personal-loan" },
        { name: "Business loan", icon: LoadIcon1, link: "/loans/business-loan" },
        { name: "Home loan", icon: LoadIcon2, link: "/loans/home-loan" },
        { name: "Car loan", icon: LoadIcon3, link: "/loans/car-loan" },
        { name: "Mortgage loan", icon: LoadIcon4, link: "/loans/mortgage-loan" },
        { name: "Loan against property", icon: LoadIcon5, link: "/loans/loan-against-property" },
        { name: "Transfer personal loan", icon: LoadIcon6, link: "/loans/transfer-personal-loan" },
        { name: "Project loans", icon: LoadIcon7, link: "/loans/project-loans" },
        { name: "MSME loans", icon: LoadIcon8, link: "/loans/msme-loans" },
        { name: "Transfer home loan", icon: LoadIcon8, link: "/loans/transfer-home-loan" },
        { name: "Gold loan", icon: LoadIcon8, link: "/loans/gold-loan" },
      ],
    },
    {
      title: "Financial Resources",
      items: ["Blog", "Calculators", "Investment Tips"],
    },
    {
      title: "About Us",
      items: ["Company", "Team", "Careers"],
    },
  ];

  return (
     <nav className="fixed top-0 left-0 z-50 w-full bg-white py-2 px-4 md:px-10 flex items-center justify-between md:justify-normal md:pl-55 gap-14 max-w-screen-2xl mx-auto">
      {/* Logo */}
      <div className="flex items-center" onClick={() => navigate("/")}>
        <img
          src={CompanyLogo}
          alt="Company Logo"
          className="w-14 h-14 object-contain cursor-pointer"
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((nav, index) => (
          <div key={index} className="relative group">
            <button
              className="flex items-center text-black font-medium text-base"
              onClick={() => toggleDropdown(nav.title)}
            >
              <span>{nav.title}</span>
              <RiArrowDropDownLine size={24} />
            </button>
            <div
              className={`absolute left-0 top-full mt-2 bg-white border rounded shadow-md w-72 group-hover:block ${activeDropdown === nav.title ? "block" : "hidden"} z-10 transition-all duration-300`}
            >
              {nav.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center px-4 py-3 hover:bg-gray-100 text-sm cursor-pointer"
                  onClick={() => {
                    navigate(item.link);
                    setActiveDropdown(null);
                  }} 
                >
                  <img src={item.icon} alt={item.name} className="w-6 h-6 mr-3" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-20 px-4 py-4 md:hidden">
          {navItems.map((nav, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex items-center justify-between w-full text-black font-medium text-base"
                onClick={() => toggleDropdown(nav.title)}
              >
                {nav.title}
                <RiArrowDropDownLine size={24} />
              </button>
              {activeDropdown === nav.title && (
                <div className="mt-2 space-y-2">
                  {nav.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="pl-4 text-sm text-gray-700 cursor-pointer"
                      onClick={() => {
                        navigate(item.link)
                        setActiveDropdown(null)
                        }} 
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
