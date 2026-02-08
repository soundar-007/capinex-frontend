import React from "react";
import businessWhy from "../assets/loans/business/why1.jpg";
import businessHow from "../assets/loans/business/how1.jpg";
import businessEle from "../assets/loans/business/ele.jpg";
import homeWhy from "../assets/loans/home/why1.jpg";
import homeHow from "../assets/loans/home/how1.jpg";
import homeEle from "../assets/loans/home/ele.jpg";
import personalWhy from "../assets/loans/personal/why2.jpg";
import personalHow from "../assets/loans/personal/why1.avif";
import personalEle from "../assets/loans/personal/ele.png";
import carWhy from "../assets/loans/car/why1.jpg";
import carHow from "../assets/loans/car/how1.jpg";
import carEle from "../assets/loans/car/ele.jpg";
import mortgageWhy from "../assets/loans/mortgage/why1.jpeg";
import mortgageHow from "../assets/loans/mortgage/how1.png";
import mortgageEle from "../assets/loans/mortgage/ele.jpg";
import lapWhy from "../assets/loans/property/why1.jpg";
import lapHow from "../assets/loans/property/how1.jpg";
import lapEle from "../assets/loans/property/ele.jpg";
import transferWhy from '../assets/loans/personalt/why.jpg';
import transferHow from '../assets/loans/personalt/how.jpg';
// import transferEle from '../assets/loans/personalt/ele.jpg';
import projectWhy from "../assets/loans/project/why1.webp";
import projectHow from "../assets/loans/project/how1.webp";
import projectEle from "../assets/loans/project/ele.jpg";
import msmeWhy from "../assets/loans/msme/why2.jpg";
import msmeHow from "../assets/loans/msme/how1.jpg";
import msmeEle from "../assets/loans/msme/ele.jpg";
import hometWhy from "../assets/loans/homet/why1.jpg";
import hometHow from "../assets/loans/homet/how1.avif";
import hometEle from "../assets/loans/homet/ele.jpg";
import goldWhy from "../assets/loans/gold/why1.jpg";
import goldHow from "../assets/loans/gold/how1.webp";
import goldEle from "../assets/loans/gold/ele.jpg";
import {
  Shield,
  ThumbsUp,
  Banknote,
  Clock,
  Plus,
  FileText,
  CheckCircle,
  Target,
  TrendingUp,
  Calculator,
  Lock,
  Zap,
  UserCheck,
  Building2,
  Home,
  Percent,
  Laptop,
  RefreshCcw,
  Users,
  Trophy,
  Briefcase,
  Calendar,
  ShieldCheck,
  BadgeIndianRupee,
  Smartphone,
  ArrowDown,
  Headset,
  Gem,
  Ban,
  Wallet,
  MonitorSmartphone,
  Settings,
  Building,
  CreditCard,
  MapPin,
  Hammer,
  Expand,
  PlusCircle,
  Leaf,
  Microscope,
  Route,
  Factory,
  BatteryCharging,
  Car,
  History,
} from "lucide-react";
import { User, Star } from "lucide-react";
import { IdCard, Landmark, Receipt } from "lucide-react";
import { Globe, Image } from "lucide-react";
import { ClipboardList, UploadCloud, ScrollText, Flag } from "lucide-react";

const loanData = {
  personal: {
    type: "Personal Loan",
    subtitle: "A Personal Loan That Works for Your Every Need",
    description:
      "Personal Loans offer a quick, fully digital, and hassle-free way to manage expenses - from celebrations and debt consolidation to urgent needs - with minimal paperwork, flexible repayment options, and the confidence to achieve your goals smoothly",
    emailPlaceholder: "Your Email Address",
    buttonText: "View Offers",
    impactNote: "No impact on your credit score when you check your rate!",
    why: "Quick, easy funds when you need them most. Perfect for emergencies, dreams, and more.",
    reasons: [
      {
        title: "No Collateral Required",
        text: "Get funds without pledging any assets—fully unsecured. Ideal for salaried and self-employed individuals seeking quick access to money.",
      },
      {
        title: "Quick & Hassle-Free Processing",
        text: "100% digital process with same-day approval and disbursal. Skip long queues, paperwork, and delays—get funded in hours.",
      },
      {
        title: "Low-Interest Rates",
        text: "Affordable EMIs with competitive interest starting from 10.5% p.a. Save more every month with smart, flexible repayment options.",
      },
    ],
    eligibilityNote: "Simple steps. Quick checks. Instant eligibility.",
    eligibility: [
      {
        icon: User,
        title: "Age",
        description: "23 to 58 years",
        detail: "Applicant must fall within this age range to qualify",
      },
      {
        icon: Banknote,
        title: "Monthly Income",
        description: "₹20,000 and above",
        detail: "Stable income is essential for repayment capacity",
      },
      {
        icon: Star,
        title: "Credit Score (CIBIL)",
        description: "700+ recommended",
        detail: "Higher credit score boosts approval chances",
      },
      {
        icon: Briefcase,
        title: "Employment Type",
        description: "Salaried / Self-employed",
        detail: "Both salaried and self-employed individuals are eligible",
      },
      {
        icon: Calendar,
        title: "Work Experience",
        description: "1 year (salaried), 2 years (business)",
        detail: "Proof of steady work history is required",
      },
      {
        icon: ShieldCheck,
        title: "Citizenship",
        description: "Resident Indian",
        detail: "Only Indian residents are eligible to apply",
      },
    ],
    images: [personalWhy, personalHow, personalEle],
    howItWorksNote: "Your journey to the perfect loan starts here",
    howItWorksSteps: [
      {
        title: "Get Personalized Offers",
        description:
          "Enter basic details to instantly view the best loan options tailored to your profile.",
      },
      {
        title: "Complete KYC & Upload Documents",
        description:
          "Securely submit PAN, Aadhaar, and bank statements via our digital platform.",
      },
      {
        title: "Choose Offer & Get Disbursal",
        description:
          "Select your plan, e-sign the agreement, and track your disbursal in real-time—funds in a few hours!",
      },
    ],
    faq: [
      {
        question: "What is a Personal Loan?",
        answer:
          "An unsecured loan designed for various personal financial needs.",
      },
      {
        question: "Who is eligible for a Personal Loan?",
        answer:
          "Salaried or self-employed individuals with a stable income and good credit.",
      },
      {
        question: "What loan amounts are offered?",
        answer:
          "Loan amounts typically start from ₹50,000 and are adjusted based on your profile.",
      },
      {
        question: "How fast is the disbursal?",
        answer:
          "Funds are usually transferred within 24 to 48 hours after approval.",
      },
      {
        question: "Are there hidden fees?",
        answer:
          "No; We ensures complete fee disclosure with no hidden charges.",
      },
    ],
    testimonial: {
      name: "Divya M.",
      location: "Mumbai",
      initials: "DM",
      feedback:
        "Got my personal loan approved within hours! The documentation was minimal and the support team was extremely helpful.",
    },
    documents: [
      {
        icon: IdCard,
        title: "Identity Proof",
        items: ["PAN Card", "Aadhaar Card"],
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Landmark,
        title: "Property Documents",
        items: ["Ownership papers", "Valuation report"],
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: Receipt,
        title: "Bank Statements",
        items: ["Latest 6–12 months' statements"],
        color: "from-purple-500 to-indigo-500",
      },
      {
        icon: Wallet,
        title: "Salary Slips",
        items: ["Latest 3 months' salary slips"],
        color: "from-pink-500 to-rose-500",
      },
    ],
  },
  business: {
    type: "Business Loan",
    subtitle: "Smart Business Loan Solutions to Power Your Ambitions",
    description:
      "Business Loans empower start-ups, MSMEs, and growing enterprises with fast, flexible funding for scaling operations, buying inventory, or investing in equipment — all with minimal documentation, quick processing, and tailored repayment options to keep your focus on growth.",
    emailPlaceholder: "Your Email Address",
    buttonText: "View Offers",
    impactNote: "No impact on your credit score when you check your rate!",
    why: "Fuel your business ambitions with quick, flexible funding. Perfect for growth, expansion, or managing working capital.",
    images: [businessWhy, businessHow, businessEle],
    faq: [
      {
        question: "Who can apply for a small business loan in India?",
        answer:
          "Any entrepreneur, self-employed individual, startup founder, or MSME owner with 1+ year of business history.",
      },
      {
        question: "Are your business loans suitable for women entrepreneurs?",
        answer:
          "Yes, we support women-led businesses with fast approval and flexible repayment.",
      },
      {
        question: "Do you provide working capital loans for business needs?",
        answer:
          "Absolutely. Our working capital loans help manage day-to-day operations without cash flow issues.",
      },
      {
        question: "What is the minimum CIBIL score for a business loan?",
        answer:
          "A CIBIL score of 650+ is preferred, but we assess eligibility on a case-by-case basis.",
      },
      {
        question: "Can I get a business loan without collateral?",
        answer: "Yes, we offer unsecured business loans up to ₹50 lakhs.",
      },
      {
        question: "How soon can I get the funds?",
        answer: "Loan disbursal happens within 24–48 hours after approval.",
      },
      {
        question: "Do you provide loans to startups?",
        answer:
          "Yes, startups with at least 1 year of operations and proper documents can apply.",
      },
    ],

    reasons: [
      {
        title: "Quick Approval & Disbursal",
        text: "Experience fast loan approval and disbursal within 24–48 hours, ensuring your business gets timely access to funds.",
      },
      {
        title: "Zero Collateral Required",
        text: "Avail unsecured business loans up to ₹50 lakhs without pledging any assets—ideal for startups and MSMEs.",
      },
      {
        title: "Flexible & Transparent Repayment",
        text: "Choose repayment plans tailored to your cash flow with low interest rates starting at 12% p.a. and no hidden charges.",
      },
    ],
    eligibilityNote:
      "Simple checks. Quick decisions. Built for MSMEs & entrepreneurs.",
    eligibility: [
      {
        icon: User,
        title: "Age Requirement",
        description: "21–60 years",
        detail: "Applicant must be within the eligible age range",
      },
      {
        icon: Calendar,
        title: "Business Vintage",
        description: "At least 1 year operational",
        detail: "Business should be running for a minimum of 12 months",
      },
      {
        icon: TrendingUp,
        title: "Annual Turnover",
        description: "Based on loan amount",
        detail: "Minimum turnover requirement varies by loan type",
      },
      {
        icon: Building2,
        title: "Business Registration",
        description: "Valid registration & bank account",
        detail: "Business must be registered and have an active bank account",
      },
      {
        icon: Star,
        title: "Credit Score",
        description: "CIBIL score 650+ preferred",
        detail: "A higher credit score improves approval chances",
      },
    ],
    documents: [
      {
        icon: IdCard,
        title: "Identity Proof",
        items: ["PAN Card", "Aadhaar Card"],
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Building2,
        title: "Business Registration",
        items: ["GST Certificate", "Udyam Registration", "Shop Act License"],
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: Landmark,
        title: "Bank Statements",
        items: ["Last 6 months' statements", "Active business account"],
        color: "from-purple-500 to-indigo-500",
      },
      {
        icon: Receipt,
        title: "Financial Documents",
        items: ["ITR for higher amounts", "Audited financials if applicable"],
        color: "from-orange-500 to-red-500",
      },
    ],
    howItWorksNote: "Get your business funded in just 3 simple steps",
    howItWorksSteps: [
      {
        title: "Submit Application Online",
        description:
          "Fill in your business details to explore the best-matched loan offers instantly.",
      },
      {
        title: "Upload Documents",
        description:
          "Securely upload financial statements, GST, ITR, and KYC documents for verification.",
      },
      {
        title: "Get Approved & Disbursed Fast",
        description:
          "We assess your eligibility, finalize the offer, and disburse funds within 24–48 hours.",
      },
    ],
    features: [
      {
        icon: Banknote,
        title: "Loan amount ₹50,000 to ₹50 lakhs",
        description: "Funding available to meet various business needs",
      },
      {
        icon: ThumbsUp,
        title: "Attractive interest rates",
        description: "Rates starting from 10% per annum",
      },
      {
        icon: CheckCircle,
        title: "Quick disbursal",
        description: "Funds released within 24–48 hours",
      },
      {
        icon: Clock,
        title: "Flexible repayment",
        description: "Tenure of up to 5 years",
      },
      {
        icon: Shield,
        title: "Zero hidden charges",
        description: "No prepayment penalties or surprise fees",
      },
      {
        icon: Zap,
        title: "100% digital process",
        description: "Apply from anywhere in India, anytime",
      },
      {
        icon: Plus,
        title: "Wide usage support",
        description: "For expansion, inventory, working capital, and more",
      },
      {
        icon: UserCheck,
        title: "Women & startup support",
        description: "Special assistance for entrepreneurs and new businesses",
      },
      {
        icon: FileText,
        title: "Transparent processing",
        description: "Safe, secure, and transparent loan handling",
      },
    ],
    testimonial: {
      name: "Ramesh K.",
      location: "Chennai",
      initials: "RK",
      feedback:
        "Excellent service! I got my business loan approved within 2 days. The team was very supportive.",
    },
  },
  home: {
    type: "Home Loan",
    subtitle: "Your Dream Home Starts with the Right Home Loan",
    description:
      "Looking to buy, build, or renovate your dream home? Capinex Home Loans offer a fast, stress-free, and 100% digital process with minimal documentation and competitive interest rates.",
    emailPlaceholder: "Your Email Address",
    buttonText: "View Offers",
    impactNote: "No impact on your credit score when you check your rate!",
    why: "Make your dream home a reality. Perfect for buying, building, or renovating a house.",
    images: [homeWhy, homeHow, homeEle],
    faq: [
      {
        question: "What is the minimum salary to get a home loan?",
        answer: "You need at least ₹25,000 per month, subject to lender approval.",
      },
      {
        question: "Can NRIs apply for a home loan in India?",
        answer:
          "Yes, Capinex offers NRI home loans with simplified documentation.",
      },
      {
        question: "How much home loan can I get on my salary?",
        answer:
          "Generally, up to 60 times your monthly income depending on eligibility.",
      },
      {
        question: " Can I get a home loan with a low credit score?",
        answer:
          "Yes, but the interest rate may be higher, and the loan amount could be lower.",
      },
      {
        question: "How do I calculate my home loan EMI?",
        answer: "Use the [EMI Calculator] to get a clear idea based on your loan amount and tenure.",
      },
      // {
      //   question: "How do I calculate my EMI?",
      //   answer:
      //     "Use our Home Loan EMI Calculator to get accurate estimates instantly.",
      // },
    ],
    reasons: [
      {
        title: "Fast & Trusted Home Loan Services",
        // text: "Trusted by thousands with 48-hour approval and dedicated relationship managers for personalized support.",
        text:"Trusted by 50,000+ customers, Quick approvals with dedicated relationship managers"
      },
      {
        title: "Flexible & Transparent Loan Options",
        text:"Home loan tenure up to 30 years, Low home loan interest rates starting from 8% p.a., Zero hidden charges or processing surprises"
        // text: "Enjoy long tenures up to 30 years, competitive interest rates from 8.25% p.a., and fully transparent fees.",
      },
      {
        title: "Smart Loan Features",
        text:'Easy home loan balance transfer to reduce EMIs, Top-up home loan for renovation or additional funds, Track your home loan status online'
        // text: "Benefit from digital tools to track status, smooth balance transfers, and top-up options for renovation needs.",
      },
    ],
    loanTypes: [
      {
        icon: Home,
        title: "Home Purchase Loan",
        description:
          "Finance your dream home with ease through attractive interest rates and quick approval.",
        color: "from-blue-500 to-sky-500",
        bgColor: "from-blue-50 to-sky-50",
      },
      {
        icon: Building2,
        title: "Home Construction Loan",
        description:
          "Build your house on your own land with flexible disbursals as construction progresses.",
        color: "from-green-500 to-lime-500",
        bgColor: "from-green-50 to-lime-50",
      },
      {
        icon: Hammer,
        title: "Home Improvement Loan",
        description:
          "Renovate, upgrade, or repair your home with a loan tailored to your project.",
        color: "from-yellow-500 to-amber-500",
        bgColor: "from-yellow-50 to-amber-50",
      },
      {
        icon: Expand,
        title: "Home Extension Loan",
        description:
          "Add rooms or expand your living space to accommodate your growing family.",
        color: "from-purple-500 to-fuchsia-500",
        bgColor: "from-purple-50 to-fuchsia-50",
      },
      {
        icon: MapPin,
        title: "Plot + Construction Loan",
        description:
          "Buy a plot and build your home with a single, easy-to-manage loan.",
        color: "from-indigo-500 to-violet-500",
        bgColor: "from-indigo-50 to-violet-50",
      },
      {
        icon: PlusCircle,
        title: "Top-Up Loan",
        description:
          "Get additional funds on your home loan for personal or home-related needs.",
        color: "from-orange-500 to-red-500",
        bgColor: "from-orange-50 to-red-50",
      },
    ],
    eligibilityNote: "Simple eligibility to own your dream home.",
    eligibility: [
      {
        icon: User,
        title: "Age Requirement",
        description: "21–60 years (Salaried), 25–65 years (Self-employed)",
        detail:
          "Applicant must fall within the respective age bracket based on employment type",
      },
      {
        icon: Briefcase,
        title: "Employment",
        description: "Min. 2 years (Salaried), 3 years (Self-employed)",
        detail:
          "Proof of consistent employment or business track record required",
      },
      {
        icon: Banknote,
        title: "Minimum Monthly Income",
        description: "₹25,000 or as per latest ITR",
        detail: "Income documents must support the ability to repay",
      },
      {
        icon: Star,
        title: "Credit Score Required",
        description: "750+ CIBIL Score for home loan",
        detail: "A higher score improves eligibility and loan terms",
      },
      {
        icon: Globe,
        title: "Eligible Applicants",
        description: "Indian Citizens and NRIs for home loan",
        detail: "Eligible for both domestic applicants and NRIs",
      },
    ],
    documents: [
      {
        icon: IdCard,
        title: "Identity Proof",
        items: ["Aadhaar Card", "PAN Card", "Passport", "Voter ID"],
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Landmark,
        title: "Address Proof",
        items: ["Utility bills", "Passport", "Rent Agreement"],
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: FileText,
        title: "Income Proof (Salaried)",
        items: ["3 months’ salary slips", "Form 16", "Bank Statements"],
        color: "from-purple-500 to-indigo-500",
      },
      {
        icon: Receipt,
        title: "Income Proof (Self-Employed)",
        items: ["Last 3 years ITR", "Balance Sheet", "Profit & Loss Statement"],
        color: "from-orange-500 to-red-500",
      },
      {
        icon: Landmark,
        title: "Property Documents",
        items: ["Sale deed", "Title document", "NOC from Builder/Society"],
        color: "from-yellow-500 to-amber-500",
      },
      {
        icon: Image,
        title: "Photographs",
        items: ["Passport-sized photos of applicant and co-applicant"],
        color: "from-pink-500 to-rose-500",
      },
    ],
    howItWorksNote: "How It Works – Home Loan",
    howItWorksSteps: [
      {
        title: "Apply Online in Minutes",
        description:
          "Submit your home loan request with income, KYC, and property details through our secure platform.",
      },
      {
        title: "Quick Verification & Sanction",
        description:
          "We verify your eligibility and property documents for fast loan sanction.",
      },
      {
        title: "E-Sign & Get Disbursal",
        description:
          "Digitally sign the agreement or schedule a visit—funds are sent directly to the builder or seller.",
      },
    ],
    features: [
      {
        icon: Home,
        title: "Loan Amount from ₹5 lakhs to ₹5 crores",
        description: "Ideal for purchasing or constructing your dream home",
      },
      {
        icon: Percent,
        title: "Low interest rates",
        description: "Starting from just 8% per annum",
      },
      {
        icon: Clock,
        title: "Long repayment tenure",
        description: "Flexible tenure of up to 30 years",
      },
      {
        icon: FileText,
        title: "Minimal documentation",
        description: "Hassle-free paperwork with doorstep service",
      },
      {
        icon: Laptop,
        title: "100% online process",
        description: "Apply conveniently from home",
      },
      {
        icon: Banknote,
        title: "Zero prepayment/foreclosure charges",
        description: "No extra cost for floating-rate loan closure",
      },
      {
        icon: RefreshCcw,
        title: "Easy balance transfer",
        description: "Switch to a lower EMI effortlessly",
      },
      {
        icon: Users,
        title: "Joint home loan options",
        description: "Enhance eligibility with co-applicant support",
      },
      {
        icon: Trophy,
        title: "Tax benefits",
        description: "Save under Sections 80C and 24(b) of Income Tax Act",
      },
    ],
    testimonial: {
      name: "Suresh T.",
      location: "Coimbatore",
      initials: "ST",
      feedback:
        "I never imagined getting a home loan could be so easy. They guided me through every step and made the process stress-free.",
    },
  },
  car: {
    type: "Car Loan",
    subtitle: "Your Dream Home Starts with the Right Home Loan",
    description:
      "Get instant funding for new or used cars with same-day approvals, up to 100% financing, and flexible EMIs.",
    emailPlaceholder: "Your Email Address",
    buttonText: "View Offers",
    impactNote: "No impact on your credit score when you check your rate!",
    why: "Drive your dream car today. Applicable for both new and used cars.",
    images: [carWhy, carHow, carEle],
    faq: [
      {
        question: "Can I get a car loan without a down payment?",
        answer: "Yes, up to 100% funding is available for select car models.",
      },
      {
        question: "Do I need a co-applicant?",
        answer:
          "Not mandatory, but adding one may help get higher eligibility or better rates.",
      },
      {
        question: "Can I foreclose my loan early?",
        answer: "Yes! Most plans offer zero or minimal foreclosure charges.",
      },
      {
        question: "Can I get a loan for a used car?",
        answer: "Yes, we offer used car loans at competitive interest rates.",
      },
      {
        question: "How long does approval take?",
        answer: "Within 24–48 hours, subject to documentation and eligibility.",
      },
    ],
    reasons: [
      {
        title: "100% On-Road Funding",
        text: "Get complete financing for your vehicle including insurance and registration. Zero down payment options available for eligible profiles.",
      },
      {
        title: "Fast Approval & Disbursal",
        text: "Experience lightning-fast loan processing with same-day approval. Minimal paperwork ensures a smooth and hassle-free disbursal.",
      },
      {
        title: "Attractive Interest Rates",
        text: "Enjoy competitive car loan interest rates starting at just 8.5% p.a. Save more with flexible EMIs and no hidden charges.",
      },
    ],
    loanTypes: [
      {
        icon: Car,
        title: "Brand-New Cars",
        description:
          "Finance for any new car model with attractive interest rates and fast approval.",
        color: "from-blue-500 to-cyan-500",
        bgColor: "from-blue-50 to-cyan-50",
      },
      {
        icon: History,
        title: "Used Cars",
        description:
          "Loans available for pre-owned cars up to 10 years old at flexible terms.",
        color: "from-amber-500 to-orange-500",
        bgColor: "from-amber-50 to-orange-50",
      },
      {
        icon: BatteryCharging,
        title: "Electric Vehicles",
        description:
          "Special loan schemes for eco-friendly EVs with green benefits.",
        color: "from-green-500 to-emerald-500",
        bgColor: "from-green-50 to-emerald-50",
      },
      {
        icon: Gem,
        title: "Luxury Cars",
        description: "Exclusive financing for high-end premium vehicles.",
        color: "from-purple-500 to-fuchsia-500",
        bgColor: "from-purple-50 to-fuchsia-50",
      },
      {
        icon: RefreshCcw,
        title: "Car Loan Balance Transfers",
        description:
          "Transfer your existing car loan and save with lower interest rates.",
        color: "from-pink-500 to-rose-500",
        bgColor: "from-pink-50 to-rose-50",
      },
    ],
    eligibilityNote: "Simple steps. Instant checks. Easy access.",
    eligibility: [
      {
        icon: Briefcase,
        title: "Employment Type",
        description: "Salaried / Self-employed",
        detail: "Salaried (₹15,000+ income) or self-employed professionals",
      },
      {
        icon: Calendar,
        title: "Age Requirement",
        description: "21 to 60 years",
        detail: "Applicants should be within the age range",
      },
      {
        icon: Star,
        title: "Credit History",
        description: "Good repayment history preferred",
        detail: "Healthy CIBIL score boosts approval chances",
      },
    ],
    documents: [
      {
        icon: IdCard,
        title: "KYC Documents (All Applicants)",
        items: ["Aadhaar Card", "PAN Card", "Voter ID"],
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Home,
        title: "Address Proof",
        items: ["Utility Bill", "Rent Agreement"],
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: FileText,
        title: "For Salaried Individuals",
        items: [
          "Salary Slips (Last 3 Months)",
          "Bank Statement (Last 6 Months)",
        ],
        color: "from-orange-500 to-red-500",
      },
      {
        icon: FileText,
        title: "For Self-employed/Business Owners",
        items: [
          "PAN & Aadhaar",
          "Business Registration",
          "ITR / Audited Financials (2 Years)",
          "Bank Statement",
          "Office Address Proof",
        ],
        color: "from-purple-500 to-indigo-500",
      },
      {
        icon: Image,
        title: "Photograph",
        items: ["1 Passport-size photo"],
        color: "from-pink-500 to-rose-500",
      },
    ],
    howItWorksNote: "Fast-track your car ownership journey",
    howItWorksSteps: [
      {
        title: "Choose Your Car",
        description:
          "Pick a new or used car from any showroom or individual seller.",
      },
      {
        title: "Apply & Submit KYC",
        description: "Provide ID proof, income proof, and car details.",
      },
      {
        title: "Loan Sanctioned & Drive Away",
        description:
          "Loan is approved and disbursed to seller/dealer, drive away.",
      },
    ],
    features: [
      {
        icon: BadgeIndianRupee,
        title: "Loan amount ₹1 Lakh – ₹50 Lakhs+",
        description: "Flexible loan amounts for new and used cars",
      },
      {
        icon: Calendar,
        title: "Tenure up to 7 years",
        description: "Repayment period ranging from 1 to 7 years",
      },
      {
        icon: Percent,
        title: "Attractive interest rates",
        description: "Rates starting from 8.75% per annum",
      },
      {
        icon: FileText,
        title: "Low processing fee",
        description: "As low as 0.5% of the loan amount",
      },
      {
        icon: ShieldCheck,
        title: "Prepayment allowed",
        description: "Close your loan early with minimal or zero charges",
      },
      {
        icon: MonitorSmartphone,
        title: "Instant eligibility check",
        description: "Quick online check or assistance at branch",
      },
    ],
    testimonial: {
      name: "Siddharth B.",
      location: "Nagpur",
      initials: "SB",
      feedback:
        "Bought my first car with their quick and affordable car loan. The interest rate was competitive and the service was excellent.",
    },
  },
  mortgage: {
    type: "Mortgage Loan",
    subtitle: "Turn Property into Power with the Right Mortgage Loan",
    description:
      "Mortgage Loans let you unlock the value of your property to meet major financial needs—like business growth, education, or medical expenses—with quick processing and expert guidance for a smooth, stress-free experience.",
    emailPlaceholder: "Your Email Address",
    buttonText: "View Offers",
    impactNote: "No impact on your credit score when you check your rate!",
    why: "Use your property to unlock big-ticket funds. Perfect for business expansion, education, or large expenses.",
    images: [mortgageWhy, mortgageHow, mortgageEle],
    faq: [
      {
        question: "What type of property is accepted as collateral?",
        answer:
          "We accept residential, commercial, and industrial properties with clear ownership.",
      },
      {
        question: "Can I use the property during the loan tenure?",
        answer: "Yes, you retain possession and usage of the property.",
      },
      {
        question: "What is the maximum loan I can get against property?",
        answer:
          "Up to 60–70% of the market value, depending on the profile and property.",
      },
      {
        question: "How is the interest rate determined?",
        answer:
          "Based on loan amount, repayment capacity, property type, and credit score.",
      },
      {
        question: "Can NRIs apply for a mortgage loan?",
        answer: "Yes, NRIs with valid Indian property ownership can apply.",
      },
    ],

    reasons: [
      {
        title: "Fast & Hassle-Free Processing",
        text: "Get expert legal checks and disbursal within 48 hours with complete end-to-end assistance.",
      },
      {
        title: "High Loan Amounts at Low Rates",
        text: "Avail up to ₹5 crores with interest rates starting from 9.5% p.a. and tenures up to 20 years.",
      },
      {
        title: "Smart Transfer & Top-Up Options",
        text: "Easily transfer your loan to lower rates and get additional funds when needed—ideal for MSMEs and professionals.",
      },
    ],
    eligibilityNote: "Qualify easily with basic checks and documents.",
    eligibility: [
      {
        icon: User,
        title: "Age Requirement",
        description: "21–65 years (Salaried), 25–70 years (Self-employed)",
        detail:
          "Applicant must be within eligible age range depending on employment type",
      },
      {
        icon: Briefcase,
        title: "Employment/Business",
        description: "2 years (Salaried), 3 years (Business)",
        detail: "Consistent work or business history required",
      },
      {
        icon: Home,
        title: "Property Type",
        description: "Owned property (residential/commercial)",
        detail: "Property must have clear title and approved usage",
      },
      {
        icon: Star,
        title: "Credit Score",
        description: "700+ preferred",
        detail: "Good credit score improves approval chances and terms",
      },
      {
        icon: CheckCircle,
        title: "Income Stability",
        description: "Proof required",
        detail: "Steady income necessary to repay loan responsibly",
      },
    ],
    documents: [
      {
        icon: IdCard,
        title: "Identity Proof",
        items: ["PAN Card", "Aadhaar Card"],
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Landmark,
        title: "Property Documents",
        items: ["Ownership papers", "Valuation report"],
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: Receipt,
        title: "Bank Statements",
        items: ["Latest 6–12 months' statements"],
        color: "from-purple-500 to-indigo-500",
      },
      {
        icon: FileText,
        title: "Income Proof",
        items: ["Salary Slips", "ITR", "Business Proof"],
        color: "from-orange-500 to-red-500",
      },
      {
        icon: Image,
        title: "Photographs",
        items: ["Passport-size photos"],
        color: "from-pink-500 to-rose-500",
      },
      {
        icon: ClipboardList,
        title: "Loan Details",
        items: ["Existing loan documents (if any)"],
        color: "from-yellow-500 to-amber-500",
      },
    ],
    howItWorksNote: "Your journey to unlocking property value begins here",
    howItWorksSteps: [
      {
        title: "Apply Online & Upload Documents",
        description:
          "Fill out the form in 2 minutes and submit KYC, income proof, and property details securely.",
      },
      {
        title: "Verification & Loan Assessment",
        description:
          "We conduct property valuation and creditworthiness checks for quick loan approval.",
      },
      {
        title: "Sign Agreement & Get Disbursal",
        description:
          "Digitally sign the loan documents and receive funds directly in your bank account.",
      },
    ],
    features: [
      {
        icon: Briefcase,
        title: "Loan Amount from ₹5 lakhs to ₹10 crores",
        description:
          "High-value funding against property for business or personal needs",
      },
      {
        icon: Percent,
        title: "Competitive interest rates",
        description: "Starting from just 9% per annum",
      },
      {
        icon: Calendar,
        title: "Flexible repayment tenure",
        description: "Loan tenure up to 15 years",
      },
      {
        icon: Building2,
        title: "Property-based loans",
        description:
          "Available on residential, commercial, and industrial properties",
      },
      {
        icon: RefreshCcw,
        title: "Balance transfer facility",
        description: "Lower your EMI by switching your existing loan",
      },
      {
        icon: Laptop,
        title: "100% digital processing",
        description: "Seamless application to disbursal process online",
      },
      {
        icon: Plus,
        title: "Top-up loan options",
        description: "Get additional funds on existing mortgage loan",
      },
      {
        icon: ShieldCheck,
        title: "Transparent terms",
        description: "No hidden charges or surprise fees",
      },
    ],
    testimonial: {
      name: "Lakshmi R.",
      location: "Pune",
      initials: "LR",
      feedback:
        "I availed a mortgage loan to expand my business. The process was quick, and I received funds without any hassle. Highly recommended!",
    },
  },
  lap: {
    type: "Loan Against Property (LAP)",
    subtitle: "Secure Big Dreams with a Trusted Loan Against Property",
    description:
      "Loan Against Property (LAP) offers an ideal way to access funds using your existing property—without selling it—perfect for business needs, overseas education, or unexpected financial emergencies.",
    emailPlaceholder: "Your Email Address",
    buttonText: "View Offers",
    impactNote: "No impact on your credit score when you check your rate!",
    why: "Leverage your owned property for personal or business needs.",
    images: [lapWhy, lapHow, lapEle],
    faq: [
      {
        question: "What is Loan Against Property?",
        answer: "A loan where your property is used as collateral.",
      },
      {
        question: "Who can apply for a Loan Against Property?",
        answer: "Property owners with regular income.",
      },
      {
        question: "What type of properties qualify?",
        answer: "Residential, commercial, or mixed-use.",
      },
      {
        question: "How is the value assessed?",
        answer: "Through market valuation and documentation.",
      },
      {
        question: "What’s the repayment tenure?",
        answer: "Typically 5 to 15 years.",
      },
      {
        question:
          "Can I get a LAP if my property is in a tier-2 or tier-3 city?",
        answer:
          "Yes. We offer loan against property across India, including tier-2/3 cities with approved legal documents.",
      },
      {
        question: "Is insurance required for LAP?",
        answer:
          "Property and life insurance are recommended for long-tenure loans, but not mandatory.",
      },
      {
        question: "Can I get LAP on jointly owned property?",
        answer: "Yes, with consent and documents from all co-owners.",
      },
      {
        question: "Will taking a LAP affect my credit score?",
        answer:
          "Timely repayment of your loan against property can improve your credit score over time.",
      },
    ],
    documents: [
      {
        icon: IdCard,
        title: "KYC Documents",
        items: ["PAN Card", "Aadhaar Card"],
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Receipt,
        title: "Bank Statements",
        items: ["Latest 6–12 months’ statements"],
        color: "from-purple-500 to-indigo-500",
      },
      {
        icon: FileText,
        title: "Income Proof",
        items: ["Salary Slips", "ITRs"],
        color: "from-orange-500 to-red-500",
      },
      {
        icon: Landmark,
        title: "Property Documents",
        items: ["Ownership Proof", "Valuation Reports"],
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: Image,
        title: "Photographs",
        items: ["Passport-size photographs"],
        color: "from-pink-500 to-rose-500",
      },
      {
        icon: ClipboardList,
        title: "Loan Details",
        items: ["Existing loan details (if applicable)"],
        color: "from-yellow-500 to-amber-500",
      },
      {
        icon: UploadCloud,
        title: "Digital Upload",
        items: ["100% online – No branch visit needed"],
        color: "from-gray-500 to-slate-500",
      },
    ],
    reasons: [
      {
        title: "Trusted Lending Experience",
        text: "Over 10 years of expertise with tie-ups across top banks and NBFCs to ensure better loan terms.",
      },
      {
        title: "Tailored Loan Solutions",
        text: "Customized LAP options for NRIs, retirees, and professionals with flexible EMIs starting from 9.5% p.a.",
      },
      {
        title: "Top-Up & Balance Transfer Benefits",
        text: "Easily transfer your loan for lower rates and get additional funds when needed, with 24x7 online support.",
      },
    ],
    eligibilityNote: "Basic eligibility to get started quickly.",
    eligibility: [
      {
        icon: User,
        title: "Age Requirement",
        description: "21–60 years",
        detail: "Applicant must be within the eligible age range",
      },
      {
        icon: Calendar,
        title: "Business Experience",
        description: "At least 1 year operational",
        detail: "Your business should be running for minimum 12 months",
      },
      {
        icon: TrendingUp,
        title: "Annual Turnover",
        description: "As per loan requirement",
        detail: "Minimum turnover varies based on loan amount",
      },
      {
        icon: Building2,
        title: "Business Registration",
        description: "Valid registration & active bank account",
        detail: "Proper business documentation and banking relationship",
      },
      {
        icon: Star,
        title: "Credit Score",
        description: "CIBIL score 650+",
        detail: "Minimum score required for loan approval",
      },
    ],
    howItWorksNote: "Seamless process from property to payout.",
    howItWorksSteps: [
      {
        title: "Apply Online with Property Details",
        description:
          "Submit a quick form with your property and financial information to get started.",
      },
      {
        title: "Verification & Approval",
        description:
          "We conduct property inspection, credit evaluation, and document checks—approval follows instantly.",
      },
      {
        title: "Sign & Get Disbursal",
        description:
          "E-sign the agreement and receive funds in your bank account within 48–72 hours.",
      },
    ],
    testimonial: {
      name: "Manoj R.",
      location: "Pune",
      initials: "MR",
      feedback:
        "We needed funds for our daughter's admission in Canada. The LAP process was fast, and the team helped us at every step. Highly recommended!",
    },
  },
  transfer: {
    type: "Personal Loan Balance Transfer",
    subtitle: "Lower Your EMIs with a Personal Loan Balance Transfer",
    description:
      "Refinance your existing personal loan with Capinex to lower EMIs, reduce interest rates, and consolidate debt—through a simplified process with minimal documentation and greater peace of mind.",
    emailPlaceholder: "Your Email Address",
    buttonText: "View Offers",
    impactNote: "No impact on your credit score when you check your rate!",
    why: "Reduce EMIs by switching to lower interest.",
    images: [transferWhy, transferHow, personalEle],
    faq: [
      {
        question: "Can I get a top-up loan during transfer?",
        answer:
          "Yes, eligible borrowers can apply for a top-up loan with the balance transfer.",
      },
      {
        question: "Will I have to close my old loan manually?",
        answer:
          "No. We handle the entire loan closure and transfer process on your behalf.",
      },
      {
        question: "Does transferring a loan affect my credit score?",
        answer:
          "Not negatively. In fact, timely EMI payments on the new loan may improve your score.",
      },
      {
        question: "Can I transfer my loan even if my CIBIL is below 750?",
        answer:
          "Yes, we evaluate each profile individually, especially if repayment history is strong.",
      },
    ],
    reasons: [
      {
        title: "Lower Interest Rates",
        text: "Switch to top lenders with exclusive tie-ups and save with rates starting at just 10% p.a.",
      },
      {
        title: "Top-Up & EMI Savings",
        text: "Get instant top-up offers and a free EMI savings report to maximize your benefits.",
      },
      {
        title: "Full Support & Zero Hidden Charges",
        text: "Enjoy expert assistance, real-time tracking, and zero foreclosure charges on select offers.",
      },
    ],
    eligibilityNote: "Only a few checks to get started.",
    eligibility: [
      {
        icon: Clock,
        title: "Existing Loan Tenure",
        description: "Min 12 EMIs paid",
        detail: "You must have repaid at least 12 EMIs (may vary by lender)",
      },
      {
        icon: User,
        title: "Age Requirement",
        description: "21–58 years (salaried)",
        detail: "Eligible age range for salaried individuals",
      },
      {
        icon: Banknote,
        title: "Minimum Income",
        description: "₹20,000/month",
        detail: "Stable monthly income is required for eligibility",
      },
      {
        icon: Star,
        title: "Credit Score",
        description: "700+ preferred",
        detail: "Higher credit score increases approval chances",
      },
      {
        icon: TrendingUp,
        title: "Loan Amount",
        description: "₹50,000 – ₹40 lakhs",
        detail: "Transferable loan amount depends on your profile",
      },
    ],
    documents: [
      {
        icon: IdCard,
        title: "KYC Documents",
        items: ["PAN Card", "Aadhaar Card"],
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Receipt,
        title: "Bank Statements",
        items: ["Last 3–6 months' statements"],
        color: "from-purple-500 to-indigo-500",
      },
      {
        icon: ClipboardList,
        title: "Previous Loan Docs",
        items: ["Sanction Letter", "EMI Repayment Statement"],
        color: "from-yellow-500 to-amber-500",
      },
      {
        icon: FileText,
        title: "Income Proof",
        items: ["Salary Slips", "ITR"],
        color: "from-orange-500 to-red-500",
      },
      {
        icon: Image,
        title: "Photograph",
        items: ["Passport-size photo"],
        color: "from-pink-500 to-rose-500",
      },
      {
        icon: UploadCloud,
        title: "Paperless Process",
        items: ["100% digital – no physical paperwork"],
        color: "from-gray-500 to-slate-500",
      },
    ],
    howItWorksNote: "A smooth switch to better savings.",
    howItWorksSteps: [
      {
        title: "Apply & Share Existing Loan Details",
        description:
          "Fill out the form in 2 minutes and upload your EMI record, loan statement, and KYC documents.",
      },
      {
        title: "Get Better Offer with Optional Top-Up",
        description:
          "We offer reduced interest rates and top-up eligibility based on your profile and existing loan.",
      },
      {
        title: "Approve, Switch & Save",
        description:
          "Digitally sign the agreement, we repay your current lender, and you enjoy lower EMIs with us.",
      },
    ],
    features: [
      {
        icon: Percent,
        title: "Interest rate reduction up to 4%",
        description: "Lower your existing loan interest rate significantly",
      },
      {
        icon: Plus,
        title: "Top-up loan available",
        description: "Get extra funds for your personal or business needs",
      },
      {
        icon: Clock,
        title: "Flexible repayment tenure",
        description: "Choose repayment terms up to 5 years",
      },
      {
        icon: Plus,
        title: "Transfer from any lender",
        description: "Switch easily from any bank or NBFC",
      },
      {
        icon: ShieldCheck,
        title: "Zero foreclosure charges",
        description: "Enjoy free closure on floating-rate loans",
      },
      {
        icon: BadgeIndianRupee,
        title: "Reduce EMI, save more",
        description: "Lower EMIs help you save significantly in the long run",
      },
      {
        icon: Smartphone,
        title: "100% digital transfer process",
        description: "Quick, safe & paperless loan transfer experience",
      },
    ],
    testimonial: {
      name: "Sheetal P.",
      location: "Mumbai",
      initials: "SP",
      feedback:
        "Great experience! Their team helped me compare offers and choose the best one. Process was smooth and online.",
    },
  },

  project: {
    type: "Project Loan",
    subtitle: "Flexible Project Loan Solutions for Big Plans",
    description:
      "Project Loans offer tailored funding for infrastructure, industrial, and commercial ventures—ideal for entrepreneurs and developers—with expert financial structuring and personalized support for large-scale success.",
    emailPlaceholder: "Your Email Address",
    buttonText: "View Offers",
    impactNote: "No impact on your credit score when you check your rate!",
    why: "Finance real estate or infrastructure projects confidently.",
    images: [projectWhy, projectHow, projectEle],
    faq: [
      {
        question:
          "What’s the difference between a project loan and a business loan?",
        answer:
          "A project loan is typically long-term and linked to milestones, while a business loan is short-term and unsecured.",
      },
      {
        question: "Can I apply for a project loan as a new company?",
        answer:
          "Yes, if your promoters have relevant experience and the project plan is viable.",
      },
      {
        question: "How long does it take to get project loan approval?",
        answer: "With complete documentation, approvals may take 2 to 4 weeks.",
      },
      {
        question: "Can I get funding for an unfinished project?",
        answer:
          "Yes, we also support under-construction project loans subject to evaluation.",
      },
    ],
    reasons: [
      {
        title: "Expert-Led Financing",
        text: "Backed by decades of experience and dedicated project finance specialists for seamless execution.",
      },
      {
        title: "Customized Loan Structuring",
        text: "Tailored repayment plans linked to project milestones, including EMI and bullet repayment options.",
      },
      {
        title: "Large Loan Sanctions",
        text: "Avail high-value loans from ₹1 crore to ₹100+ crores through top banks, NBFCs, and consortiums.",
      },
    ],
    loanTypes: [
      {
        icon: Factory,
        title: "Manufacturing Plants & Factories",
        description:
          "Funding for setting up or expanding industrial and production facilities.",
        color: "from-yellow-500 to-amber-500",
        bgColor: "from-yellow-50 to-amber-50",
      },
      {
        icon: Building2,
        title: "Commercial Building Construction",
        description:
          "Loans for constructing office complexes, malls, and retail spaces.",
        color: "from-blue-500 to-indigo-500",
        bgColor: "from-blue-50 to-indigo-50",
      },
      {
        icon: Route,
        title: "Infrastructure Development",
        description: "Finance for roads, bridges, ports, and logistics parks.",
        color: "from-slate-500 to-gray-500",
        bgColor: "from-slate-50 to-gray-50",
      },
      {
        icon: Landmark,
        title: "Large-Scale Real Estate Projects",
        description:
          "Support for township, residential, and commercial real estate development.",
        color: "from-purple-500 to-fuchsia-500",
        bgColor: "from-purple-50 to-fuchsia-50",
      },
      {
        icon: Leaf,
        title: "Renewable & Green Energy Projects",
        description:
          "Loans for solar, wind, and eco-friendly power initiatives.",
        color: "from-green-500 to-emerald-500",
        bgColor: "from-green-50 to-emerald-50",
      },
      {
        icon: Microscope,
        title: "Healthcare, Education & IT Parks",
        description:
          "Finance for hospitals, schools, colleges, and tech campuses.",
        color: "from-pink-500 to-rose-500",
        bgColor: "from-pink-50 to-rose-50",
      },
    ],
    eligibilityNote: "For serious builders with a solid record.",
    eligibility: [
      {
        icon: Users,
        title: "Borrower Type",
        description: "Companies, LLPs, Developers, Trusts",
        detail: "Registered entities across sectors can apply",
      },
      {
        icon: Briefcase,
        title: "Experience",
        description: "Min. 2–3 years in sector",
        detail: "Business or promoters must have relevant experience",
      },
      {
        icon: Home,
        title: "Project Status",
        description: "Startup or under-construction",
        detail: "Applicable for new and ongoing projects",
      },
      {
        icon: Star,
        title: "Credit Score",
        description: "700+ preferred",
        detail: "Promoters with good credit history are preferred",
      },
      {
        icon: FileText,
        title: "Documentation",
        description: "Detailed report required",
        detail: "Project report and business plan are mandatory",
      },
    ],
    documents: [
      {
        icon: IdCard,
        title: "Company KYC",
        items: ["PAN", "GST Certificate", "Incorporation Certificate"],
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: ScrollText,
        title: "Project Report",
        items: ["Business Plan", "Financial Projections"],
        color: "from-purple-500 to-indigo-500",
      },
      {
        icon: FileText,
        title: "Promoter Financials",
        items: ["KYC", "ITR", "Net Worth Statement"],
        color: "from-orange-500 to-red-500",
      },
      {
        icon: Landmark,
        title: "Property Documents",
        items: ["Title Deed", "Government Approvals"],
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: Receipt,
        title: "Banking & Loans",
        items: ["Bank Statements", "Existing Loan Details"],
        color: "from-yellow-500 to-amber-500",
      },
      {
        icon: ClipboardList,
        title: "Cost & Contracts",
        items: ["Cost Estimation", "Contractor Agreements (if available)"],
        color: "from-pink-500 to-rose-500",
      },
    ],
    howItWorksNote: "Structured to suit complex project needs.",
    howItWorksSteps: [
      {
        title: "Submit Project Plan & Financials",
        description:
          "Share initial project summary, approvals, and company financials for feasibility review.",
      },
      {
        title: "Loan Structuring & Approval",
        description:
          "We conduct due diligence, propose custom terms, and finalize the agreement after approval.",
      },
      {
        title: "Phased Disbursal & Support",
        description:
          "Funds are released in stages based on project milestones, with ongoing monitoring and expert support.",
      },
    ],
    features: [
      {
        icon: BadgeIndianRupee,
        title: "High-value project funding",
        description: "Loan amounts from ₹50 lakhs to ₹100 crores+",
      },
      {
        icon: TrendingUp,
        title: "Milestone-based disbursement",
        description: "Funds released as per project progress",
      },
      {
        icon: Briefcase,
        title: "Diverse project financing",
        description:
          "Covers industrial, infrastructure, commercial, and real estate",
      },
      {
        icon: Percent,
        title: "Attractive interest rates",
        description: "Rates based on your credit and project scope",
      },
      {
        icon: Calendar,
        title: "Long-term repayment",
        description: "Flexible tenure up to 15–20 years",
      },
      {
        icon: FileText,
        title: "Project report assistance",
        description: "Support for preparing reports and appraisals",
      },
      {
        icon: RefreshCcw,
        title: "Syndication & consortium loans",
        description: "Multiple lending options for large projects",
      },
    ],
    testimonial: {
      name: "Karan D.",
      location: "Ahmedabad",
      initials: "KD",
      feedback:
        "We secured a project loan to kickstart our new manufacturing unit. The approval was quick, and funds were disbursed just in time to meet our deadlines.",
    },
  },
  msme: {
    type: "MSME Loan",
    subtitle: "Empowering Small Businesses with the Right MSME Loan",
    description:
      "Empower your MSME or startup with unsecured business loans—no collateral, quick approval, and flexible EMIs.",
    emailPlaceholder: "Your Email Address",
    buttonText: "View Offers",
    impactNote: "No impact on your credit score when you check your rate!",
    why: "Empower your business with fast, flexible funding.",
    images: [msmeWhy, msmeHow, msmeEle],
    faq: [
      {
        question: "What is an MSME Loan?",
        answer:
          "A loan tailored to the needs of small and medium-sized businesses.",
      },
      {
        question: "Who is eligible for an MSME Loan?",
        answer: "Registered MSMEs and small businesses with steady income.",
      },
      {
        question: "Are documents required?",
        answer: "Basic business proof, ID, and financial statements.",
      },
      {
        question: "What’s the loan limit?",
        answer: "Depends on turnover and business profile.",
      },
      {
        question: "Any subsidy options?",
        answer: "Government-linked schemes may be applicable.",
      },
    ],
    loanTypes: [
      {
        icon: TrendingUp,
        title: "Working Capital Loans",
        description:
          "Maintain smooth day-to-day operations, manage inventory, and pay vendors on time.",
        color: "from-blue-500 to-cyan-500",
        bgColor: "from-blue-50 to-cyan-50",
      },
      {
        icon: Settings,
        title: "Equipment & Machinery Loans",
        description:
          "Upgrade your tools or purchase new machines to boost productivity.",
        color: "from-green-500 to-emerald-500",
        bgColor: "from-green-50 to-emerald-50",
      },
      {
        icon: Building,
        title: "Business Expansion Loans",
        description:
          "Open new branches, launch new products, or enter untapped markets.",
        color: "from-purple-500 to-indigo-500",
        bgColor: "from-purple-50 to-indigo-50",
      },
      {
        icon: FileText,
        title: "Invoice Financing",
        description:
          "Get instant cash flow by converting unpaid invoices into working capital.",
        color: "from-orange-500 to-red-500",
        bgColor: "from-orange-50 to-red-50",
      },
      {
        icon: CreditCard,
        title: "Line of Credit",
        description:
          "Access funds when you need them with a revolving line of credit facility.",
        color: "from-pink-500 to-rose-500",
        bgColor: "from-pink-50 to-rose-50",
      },
    ],

    reasons: [
      {
        title: "No Collateral Required",
        text: "Ideal for small traders, startups, and service providers.",
      },
      {
        title: "Instant Online Approval",
        text: "Get disbursal within 24–48 hours.",
      },
      {
        title: "Flexible EMIs",
        text: "Tenure & EMIs suited to your business cash flow.",
      },
    ],
    eligibilityNote: "Quick approval based on your business and financials.",
    eligibility: [
      {
        icon: User,
        title: "Age Requirement",
        description: "21 to 60 years",
        detail: "Applicant must be within the eligible age bracket",
      },
      {
        icon: Flag,
        title: "Nationality",
        description: "Indian citizen",
        detail: "Applicant must be Indian with business based in India",
      },
      {
        icon: TrendingUp,
        title: "Business Turnover",
        description: "As per loan requirement",
        detail: "Turnover should match the requested loan size",
      },
      {
        icon: Star,
        title: "Credit Score",
        description: "650+ preferred",
        detail: "Good repayment history and creditworthiness",
      },
      {
        icon: CheckCircle,
        title: "MSME Registration",
        description: "Udyam/MSME Act registered",
        detail: "Valid MSME certificate required",
      },
    ],
    documents: [
      {
        icon: IdCard,
        title: "Identity Proof",
        items: ["PAN Card", "Aadhaar Card"],
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Landmark,
        title: "Business Proof",
        items: ["Udyam Certificate", "MSME Registration", "GST Certificate"],
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: FileText,
        title: "Income Documents",
        items: ["ITR of 2 years", "Profit & Loss Statement", "Balance Sheet"],
        color: "from-orange-500 to-red-500",
      },
      {
        icon: Receipt,
        title: "Bank Statements",
        items: ["Last 6 months' statements"],
        color: "from-purple-500 to-indigo-500",
      },
      {
        icon: ScrollText,
        title: "Business Plan",
        items: ["Brief business overview (if applicable)"],
        color: "from-yellow-500 to-amber-500",
      },
    ],
    howItWorksNote: "Quick and easy business loan process.",
    howItWorksSteps: [
      {
        title: "Apply Online with Business Details",
        description:
          "Fill in your business info and upload GST, ITR, or bank statements securely.",
      },
      {
        title: "Get Instant Eligibility Check",
        description:
          "Receive personalized loan offers based on your financials and credit profile.",
      },
      {
        title: "Quick Approval & Disbursal",
        description:
          "Accept the offer and get funds in 48–72 hours—no branch visit needed.",
      },
    ],
    testimonial: {
      name: "Neha J.",
      location: "Surat",
      initials: "NJ",
      feedback:
        "Thanks to their MSME loan support, I was able to expand my textile unit. The process was transparent and tailored to my business needs.",
    },
  },

  homeLoanTransfer: {
    type: "Home Loan Transfer",
    subtitle: "Switch and Save with a Hassle-Free Home Loan Transfer",
    description:
      "Home Loan Transfer service lets you seamlessly shift your existing loan to a better deal—saving more with lower interest rates, improved service, flexible options, and a fully digital, hassle-free process.",
    emailPlaceholder: "Your Email Address",
    buttonText: "View Offers",
    impactNote: "No impact on your credit score when you check your rate!",
    why: "Switch your existing home loan for better savings.",
    images: [hometWhy, hometHow, hometEle],
    faq: [
      {
        question: "Will my credit score improve after a home loan transfer?",
        answer:
          "Yes! Timely EMI payments with your new lender will improve your credit score further.",
      },
      {
        question: "Is it good to transfer my home loan after 3 years?",
        answer:
          "Yes, especially if you’re still in the first half of your tenure, where interest savings are higher.",
      },
      {
        question: "Do I have to pay any charges?",
        answer:
          "Some banks may charge a processing fee or legal valuation fee, but the overall savings often outweigh the costs.",
      },
      {
        question: "Can I get a top-up loan with the balance transfer?",
        answer:
          "Yes! Based on your eligibility, you can get a top-up loan without additional paperwork.",
      },
    ],
    reasons: [
      {
        title: "Lowest Transfer Rates",
        text: "Save big with balance transfer interest rates starting at just 8.40% p.a. and enjoy reduced EMIs.",
      },
      {
        title: "Top-Up Made Easy",
        text: "Add a top-up loan during transfer with zero hassle—perfect for renovation or other personal needs.",
      },
      {
        title: "Fast & Paperless Process",
        text: "Enjoy 100% digital processing (for eligible customers) with no hidden charges and expert guidance throughout.",
      },
    ],
    eligibilityNote: "Ensure your current loan is eligible for transfer.",
    eligibility: [
      {
        icon: ClipboardList,
        title: "Repayment Track",
        description: "Regular EMI payments",
        detail: "You must have a consistent repayment history",
      },
      {
        icon: Clock,
        title: "Minimum EMIs Paid",
        description: "At least 12 EMIs",
        detail: "You should have completed 12 EMIs on your existing loan",
      },
      {
        icon: Home,
        title: "Property Status",
        description: "Registered or under construction",
        detail: "The property must be legally registered",
      },
      {
        icon: Star,
        title: "Credit Score",
        description: "650+ preferred",
        detail: "A good credit score increases approval chances",
      },
    ],
    documents: [
      {
        icon: ClipboardList,
        title: "Existing Loan Details",
        items: ["Sanction Letter", "Repayment Track Record"],
        color: "from-yellow-500 to-amber-500",
      },
      {
        icon: Landmark,
        title: "Property Documents",
        items: ["Title Deed", "Construction Status Proof"],
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: IdCard,
        title: "KYC Documents",
        items: ["PAN Card", "Aadhaar Card", "Address Proof"],
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: FileText,
        title: "Income Proof",
        items: ["Salary Slips", "ITR"],
        color: "from-orange-500 to-red-500",
      },
      {
        icon: Receipt,
        title: "Bank Statements",
        items: ["Last 6–12 months’ bank statements"],
        color: "from-purple-500 to-indigo-500",
      },
    ],
    howItWorksNote: "A simple, quick home loan transfer process.",
    howItWorksSteps: [
      {
        title: "Check Savings & Apply Online",
        description:
          "Use our loan transfer calculator to estimate savings, then apply with basic loan and property details.",
      },
      {
        title: "Compare Offers & Upload Documents",
        description:
          "Choose the best rate, upload your EMI statement, KYC, and income documents for quick approval.",
      },
      {
        title: "Loan Transfer & Disbursal",
        description:
          "New lender clears your old loan and disburses the balance—start saving instantly with lower EMIs.",
      },
    ],
    features: [
      {
        icon: Percent,
        title: "Lower interest rates",
        description:
          "Even a 0.5% reduction can save you lakhs over the loan term",
      },
      {
        icon: ArrowDown,
        title: "Lower monthly EMIs",
        description: "Reduced interest leads to more affordable installments",
      },
      {
        icon: Plus,
        title: "Top-up loan facility",
        description:
          "Get extra funds for renovation, education, or emergencies",
      },
      {
        icon: Headset,
        title: "Better customer service",
        description:
          "Switch for faster support and improved digital experience",
      },
      {
        icon: Calendar,
        title: "Flexible tenure options",
        description: "Reduce or extend your loan term as per your need",
      },
    ],
    testimonial: {
      name: "Rahul S.",
      location: "Delhi",
      initials: "RS",
      feedback:
        "Transferring my home loan saved me over ₹4,500 per month. The process was smooth, and the team handled everything efficiently.",
    },
  },

  gold: {
    type: "Gold Loan",
    subtitle: "Smart Gold Loan Solutions for Every Financial Need",
    description:
      "Get quick funds by pledging your gold – minimal paperwork, quick disbursal, and secure processing.",
    emailPlaceholder: "Your Email Address",
    buttonText: "View Offers",
    impactNote: "No impact on your credit score when you check your rate!",
    why: "Get instant cash for your gold—without selling it.",
    images: [goldWhy, goldHow, goldEle],
    faq: [
      {
        question: "Is my gold safe with you?",
        answer:
          "Absolutely. Your gold is stored in secure vaults under CCTV surveillance and fully insured against theft or damage.",
      },
      {
        question: "How do you value my gold?",
        answer:
          "We use the current market price and verify gold purity using certified equipment. No hidden cuts.",
      },
      {
        question: "What if I miss a payment?",
        answer:
          "We provide flexible grace periods. However, if prolonged default happens, the gold may be auctioned — but only after multiple notices.",
      },
      {
        question: "Can I get a top-up loan on the same gold?",
        answer:
          "Yes, if gold value rises or you’ve repaid part of your loan, you can get a top-up.",
      },
      {
        question: "Is there a prepayment or foreclosure charge?",
        answer: "No. You can repay anytime without extra charges.",
      },
    ],
    reasons: [
      {
        title: "Instant Cash in 30 Minutes",
        text: "Fastest loan disbursal—walk in with your gold and walk out with cash within 30 minutes.",
      },
      {
        title: "Maximum Value for Your Gold",
        text: "Get up to ₹4,500 per gram based on purity and market rate, with complete transparency.",
      },
      {
        title: "Secure & Convenient Process",
        text: "Enjoy flexible repayment, digital tracking, SMS reminders, and doorstep services in select areas.",
      },
    ],
    eligibilityNote: "Quick approval with minimum paperwork.",
    eligibility: [
      {
        icon: User,
        title: "Nationality & Age",
        description: "Indian citizen, 18+ years",
        detail: "Applicants must be Indian and at least 18 years old",
      },
      {
        icon: Gem,
        title: "Gold Ownership",
        description: "22K or 24K jewellery",
        detail: "Must own gold ornaments eligible for pledge",
      },
      {
        icon: Zap,
        title: "Loan Purpose",
        description: "Urgent or short-term finance",
        detail: "No restriction on purpose – use as needed",
      },
      {
        icon: Users,
        title: "Who Can Apply",
        description: "Anyone – no income/job required",
        detail:
          "Ideal for housewives, farmers, salaried, self-employed, pensioners",
      },
    ],
    documents: [
      {
        icon: IdCard,
        title: "ID Proof",
        items: [
          "Aadhaar Card",
          "PAN Card",
          "Voter ID",
          "Passport",
          "Driving License",
        ],
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Home,
        title: "Address Proof",
        items: ["Aadhaar", "Utility Bill", "Rental Agreement", "Passport"],
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: Image,
        title: "Photograph",
        items: ["1 Passport-size photo"],
        color: "from-pink-500 to-rose-500",
      },
      {
        icon: ShieldCheck,
        title: "Additional Notes",
        items: ["No income proof or CIBIL score required"],
        color: "from-gray-500 to-slate-500",
      },
    ],
    howItWorksNote: "Easy, fast access to funds through your gold.",
    howItWorksSteps: [
      {
        title: "Walk-In or Apply Online",
        description:
          "Visit our branch or fill out the online form to initiate the process—home service available in select areas.",
      },
      {
        title: "Gold Evaluation & Documentation",
        description:
          "Your gold is tested for purity in your presence using non-destructive methods, and KYC documents are collected.",
      },
      {
        title: "Loan Offer & Instant Disbursal",
        description:
          "Based on valuation, we offer the eligible amount. Once accepted, funds are disbursed instantly via cash or bank transfer.",
      },
    ],
    features: [
      {
        icon: Clock,
        title: "Instant cash in 30 minutes",
        description:
          "Walk in with your gold, walk out with money in hand or account",
      },
      {
        icon: Percent,
        title: "Lowest interest rates",
        description: "Rates starting from just 0.83% per month (9.99% p.a.)",
      },
      {
        icon: Gem,
        title: "High loan-to-value",
        description: "Up to 75% of gold's value as per RBI guidelines",
      },
      {
        icon: Ban,
        title: "No income proof needed",
        description: "Gold is your only eligibility — no paperwork hassles",
      },
      {
        icon: ShieldCheck,
        title: "Safe & transparent process",
        description:
          "Certified testing, tamper-proof storage, 24/7 surveillance",
      },
      {
        icon: RefreshCcw,
        title: "Flexible repayment options",
        description: "EMIs, interest-only, or bullet payment — your choice",
      },
    ],
    testimonial: {
      name: "Meena V.",
      location: "Madurai",
      initials: "MV",
      feedback:
        "I needed urgent funds for a medical emergency. The gold loan was disbursed within an hour with minimal paperwork. Truly life-saving support!",
    },
  },
};

export default loanData;
