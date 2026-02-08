import React, { useRef, useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";
import Slider from "react-slick";
import CardIcon from "../assets/detail/cardIcon.png";
import WomanImage from "../assets/about/woman.png";
import MotherAndBaby from "../assets/about/motherAndBaby.png";
import TableDiscussion from "../assets/about/tableDiscussion.png";
import RightImage from "../assets/about/MaskGroup.png";
import member1 from "../assets/about/member1.png";
import member2 from "../assets/about/member2.png";
import member3 from "../assets/about/member.png";
import FamilyImage from "../assets/about/family.png";
import AboutGirl from "../assets/about/aboutGirl.png";
import YellowBgWave from "../assets/detail/BgWave.png";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogsApi, getAllTestimonialsApi, getAllClientsApi } from "../api/resource";
import "./index.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";


const teamMembers = [
  {
    name: "Dr. M Swamy",
    position: "Founder",
    img: member1,
    bio: "Dr. M Swamy is an experienced professional with over 20 years of expertise in the industry. He is known for his vision and leadership skills, leading the company to great success.",
  },
  {
    name: "Mrs. Premalatha Swamy",
    position: "Co-Founder & Strategic Leader",
    img: member2,
    bio: "Mrs. Premalatha Swamy is a strategic visionary with a deep understanding of the business landscape. She focuses on long-term goals and fostering innovation within the company.",
  },
  {
    name: "Dr. Gundayya Swamy",
    position: "Chief Operating Officer (COO)",
    img: member3,
    bio: "Dr. Gundayya Swamy is a seasoned COO with extensive experience in managing operations. He ensures the smooth functioning of all departments and implements efficient strategies.",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  useInView(sectionRef, { threshold: 0.1 }); // still calling it in case you need it later, but not using it for animation
  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [logos, setLogos] = useState([]);
  const limit = 20;

  const logoQuery = useQuery({
    queryKey: ["LogosTotal"],
    queryFn: () => getAllClientsApi(1, limit),
  });

  const extractData = (query, key) => query?.data?.data?.detail?.[0]?.[key] || [];

   useEffect(() => {
      setLogos(extractData(logoQuery, "clients"));
    }, [logoQuery.data]);
  
  

    const handleBioClick = (member) => {
      setSelectedMember(selectedMember === member ? null : member);
    };
    
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };


  const features = [
    {
      id: 1,
      title: "Actionable solutions for real situations",
      description:
        "Our tools, products, and resources are designed to help empower you to take concrete steps toward your financial goals.",
    },
    {
      id: 2,
      title: "You are more than your credit score",
      description:
        "We see you as more than just one number—we strive to provide products and resources that could suit your goals, needs, and more.",
    },
    {
      id: 3,
      title: "Supporting your lifestyle, judgment-free",
      description:
        "We aim to provide you with resources to help you make the best decisions for you.",
    },
  ];

  return (
    <>
    <Helmet>
  <title>About Us | Capinex MoneyMark Finance Pvt. Ltd. | Empowering Your Financial Future</title>
  
  <meta
    name="description"
    content="Capinex MoneyMark Finance Pvt. Ltd. is a trusted financial platform offering instant personal loans, customer-centric services, and a vision to empower every Indian's financial journey."
  />
  <meta
    name="keywords"
    content="Capinex, MoneyMark, Capinex MoneyMark, Capinex Finance, Finance Company India, Personal Loans, Instant Loans, Easy Loans, Fast Disbursement, Financial Empowerment, Loan Services, About Capinex, Best Loan App, Fintech India, NBFC, Digital Loans"
  />
  <meta name="author" content="Capinex MoneyMark Team" />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />

  <meta property="og:title" content="About Capinex MoneyMark Finance Pvt. Ltd. | Your Trusted Financial Partner" />
  <meta
    property="og:description"
    content="Learn about Capinex MoneyMark's mission, leadership, and commitment to providing quick, reliable, and customer-focused loan services across India."
  />
  <meta property="og:url" content="https://yourdomain.com/about" />
  <meta property="og:image" content="https://yourdomain.com/assets/about-og-preview.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Capinex MoneyMark Finance Pvt. Ltd." />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Us | Capinex MoneyMark Finance Pvt. Ltd." />
  <meta
    name="twitter:description"
    content="Explore Capinex MoneyMark's mission to deliver fast personal loans and shape a financially inclusive India."
  />
  <meta name="twitter:image" content="https://yourdomain.com/assets/about-og-preview.jpg" />
  <meta name="twitter:site" content="@capinex" />
</Helmet>

      {/* section one */}
      <main className="overflow-hidden pt-20 pb-20 text-base font-medium tracking-tight text-black bg-white">
        <section className="flex flex-col items-center px-6 pt-24 pb-12 w-full relative">
          <img
            src={YellowBgWave}
            alt="Background decoration"
            className="object-cover absolute inset-0 w-full h-full max-w-full max-h-[70vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-full"
          />

          <article className="flex flex-col items-center relative z-10 mb-0 ml-3.5 max-w-full w-[640px] max-md:px-4 max-md:w-full">
            <div className="flex justify-center items-center mb-6">
              <h1 className="text-2xl font-bold relative">
                <span className="bg-[#FFDC82] px-1 absolute inset-0 w-[135px] -left-2 h-3 top-4 z-0 rounded-sm" />
                <span className="relative z-10 text-[#011835]">ABOUT US</span>
              </h1>
            </div>

            <h1 className="font-for-heading ml-3 text-5xl font-semibold tracking-tighter text-center leading-[56px] max-md:text-4xl max-md:leading-[48px] max-md:w-full">
              Take the next step in your financial journey
            </h1>

            <p className="mt-7 leading-7 text-center max-md:text-sm max-md:mt-5 max-md:px-4">
              Capinex MoneyMark Finance Pvt. Ltd. is one of India’s
              fastest-growing financial distribution platforms. Leveraging
              technology and advanced analytics, the company efficiently
              processes customer loan applications and facilitates fund
              disbursal into customer accounts within 48 hours — all with
              minimal documentation.
            </p>
          </article>
        </section>

        {/* section one cards */}
        <section className="w-full max-w-6xl mx-auto mt-3 px-4 relative z-20">
          <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 overflow-hidden">
            {/* Stat 1 */}
            <div className="flex-1 text-center p-10">
              <h3 className="text-2xl font-bold text-blue-950">$21B+</h3>
              <p className="mt-2 text-sm text-gray-500">In funding</p>
            </div>

            {/* Stat 2 */}
            <div className="flex-1 text-center p-10">
              <h3 className="text-2xl font-bold text-blue-950">1.1M</h3>
              <p className="mt-2 text-sm text-gray-500">Funded Loans</p>
            </div>

            {/* Stat 3 */}
            <div className="flex-1 text-center p-10">
              <h3 className="text-2xl font-bold text-blue-950">95%</h3>
              <p className="mt-2 text-sm text-gray-500">
                Consumer satisfaction
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex-1 text-center p-10">
              <h3 className="text-2xl font-bold text-blue-950">A+</h3>
              <p className="mt-2 text-sm text-gray-500">
                Better Business Bureau rating
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Section two */}
      <section className=" flex relative flex-col justify-center items-center mx-auto my-0 max-w-none h-[37px] w-[864px] max-md:px-5 max-md:py-0 max-md:w-full max-md:max-w-[991px] max-sm:px-4 max-sm:py-0 max-sm:max-w-screen-sm">
        <h1 className="font-for-heading mt-0 text-4xl font-bold tracking-tighter text-center leading-[56px] text-slate-900 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-10">
          What makes us different?
        </h1>
      </section>

      <section className="bg-white w-full max-w-6xl mx-auto py-12 px-6 md:px-16">
        <div className="max-w-7xl flex flex-col justify-center md:flex-row items-center gap-12">
          {/* Right Section - Image + Icon */}
          <div className="flex-1 relative w-full max-w-md md:max-w-sm sm:max-w-xs sm:px-4">
            <img
              src={WomanImage}
              alt="Happy family with baby"
              className="w-full rounded-lg shadow-lg sm:rounded-md family-with-baby mx-auto"
            />
          </div>

          {/* Left Section - Text */}
          <div className="flex-1 w-full max-w-md md:max-w-[48%] sm:max-w-full sm:px-4">
            <div className="space-y-0">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer border-l-4 pl-6 py-4 border-gray-300 hover:border-blue-900 hover:bg-blue-50 transition-all`}
                >
                  <h3 className="text-xl font-semibold text-gray-500 group-hover:text-[#031B4E] transition">
                    <span className="bg-[#FFDC82] w-10 h-6 p-1 mr-3 rounded-full text-sm font-medium inline-block text-center">
                      {index + 1}
                    </span>
                    {item.title}
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-gray-400 group-hover:text-[#1E3A8A] transition">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="text-center mb-10">
          <div className="relative inline-block">
            <span className="absolute inset-x-0 top-2.5 h-2 bg-[#F9D342] z-0 rounded-sm" />
            <h2 className="relative z-10 text-sm font-bold tracking-widest uppercase text-slate-900">
              Our Leadership
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 px-4">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      className="bg-[#FBF9F5] rounded-xl shadow-sm p-6 w-82 h-40 md:w-72 md:h-40 text-center relative"
    >
      <div className="mb-4 flex items-center gap-4 text-left">
        <img
          src={member.img}
          alt={member.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {member.name}
          </h3>
          <p className="text-sm text-slate-600">{member.position}</p>
        </div>
      </div>
      <button
        onClick={() => handleBioClick(member)}
        className="text-sm text-blue-800 font-medium underline hover:text-blue-600"
      >
        Read bio
      </button>

      {/* Show the bio with z-index */}
      {selectedMember === member && (
        <div
          className="mt-4 bg-gray-100 p-6 rounded-lg shadow-xl text-left text-sm text-slate-600 transition-all duration-300 z-10 relative"
        >
          <p>{member.bio}</p>
        </div>
      )}
    </div>
  ))}
</div>


      </section>

      {/* Bank Section */}
      <section className="flex flex-col bg-white rounded-3xl shadow-[3px_24px_53px_rgba(208,221,240,0.1)] mt-15">
        <div className="flex flex-col md:flex-row gap-5 justify-between self-center w-full max-w-[1132px] max-md:max-w-full">
          <header className="flex flex-col md:flex-row gap-10 md:gap-5 w-full">
            <h1 className="font-for-heading text-4xl font-bold leading-10 text-blue-950 w-full md:w-[260px] text-center md:text-left max-md:text-3xl">
              Major Banks And NBFCs
            </h1>
            <p className="flex-auto my-auto text-base font-medium leading-6 text-slate-600 text-center md:text-left max-md:text-sm">
              We're backed by leading investors from around
              <br />
              the globe, all of whom believe in our dream.
            </p>
          </header>
          <button onClick={()=>navigate("/contact-us")} className="w-[10px] mx-auto apply-partnership-button cursor-pointer self-start px-2 py-5 mt-4 md:mt-1.5 text-base font-bold tracking-tight text-center text-white rounded-xl bg-sky-950 md:w-auto">
            Apply for Partnership
          </button>
        </div>

        {/* bank image slider */}
        <div className="py-6 w-full max-w-[1132px] mx-auto overflow-hidden">
          <Slider {...settings}>
            {logos?.map((logo, index) => (
              <div key={index} className="px-1 sm:px-2 md:px-3 lg:px-4">
                <div className="flex items-center justify-center h-32 sm:h-40 md:h-48 lg:h-56">
                  <img
                    src={logo.logoUrl}
                    alt={logo.name}
                    className="object-contain h-full w-auto max-w-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section
        id="careers"
        style={{ backgroundColor: "#092951" }}
        className=" py-24 md:py-32 lg:py-28 text-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* Left image */}
            <div className="md:col-span-1">
              <div className="relative">
                <img
                  src={TableDiscussion}
                  alt="Business team meeting"
                  className="rounded-lg shadow-lg w-full object-cover"
                  style={{ aspectRatio: "3/4", objectPosition: "center" }}
                />
              </div>
            </div>

            {/* Center content */}
            <div className="md:col-span-3 text-center">
              <div className="relative inline-block mb-6">
                <span className="absolute inset-x-0 top-2 h-2  bg-[#2F609F] z-0 " />
                <h2 className=" color-[#FFF] relative z-10 text-sm font-bold tracking-widest uppercase  text-white">
                  Key Features
                </h2>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                Join our team of personal
                <br /> finance champions
              </h2>

              <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed text-lg mb-10">
                Headquartered in Bangalore India, our growing team is excited
                about making financial progress accessible for our customers.
              </p>

              <button
                style={{ backgroundColor: "#B8FF8D" }}
                className=" hover:bg-green-500 text-blue-900 font-medium px-8 py-3 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                See open positions
              </button>
            </div>

            {/* Right images */}
            <div className="md:col-span-1 space-y-4">
              <div className="relative mb-4">
                <img
                  src={RightImage}
                  alt="Office building"
                  className="rounded-lg shadow-lg w-full object-cover"
                  style={{ aspectRatio: "4/3", objectPosition: "center" }}
                />
              </div>
              {/* <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Business presentation"
                  className="rounded-lg shadow-lg w-full object-cover"
                  style={{ aspectRatio: "1/1", objectPosition: "center" }}
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
