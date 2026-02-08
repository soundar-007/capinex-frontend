import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Compass } from "lucide-react";
import {
  Award,
  Heart,
  UserCheck,
  ShieldCheck,
  Clock,
  Headphones,
  Lightbulb,
} from "lucide-react";
import { CheckCircle, ThumbsUp, Scale, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import aboutbg from "../assets/about/aboutbg.webp";

const AboutPage = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const sectionRef = useRef(null);
  const sectionRefTwo = useRef(null);
  const sectionRefThree = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements =
      sectionRefThree.current?.querySelectorAll(".animate-on-scroll");
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const founders = [
    {
      name: "Dr. M. Swamy",
      title: "Founder & Chairman",
      bio: "Founder of Capinex Moneymark and Tricorus Healthcare, with M.Pharm and Ph.D credentials. With 15+ years of experience, he is a visionary business leader, venture capitalist, and active philanthropist focused on financial and educational empowerment.",
    },
    {
      name: "Dr. Gundayya Swamy",
      title: "Co-Founder & CEO",
      bio: "A serial entrepreneur with a doctorate and over 20 years of cross-sector experience, he drives operational excellence, scalable growth, and strategic innovation. His leadership blends vision with execution, fostering a results-driven culture.",
    },
    {
      name: "Shantayya Swamy",
      title: "Co-Founder & COO",
      bio: "A finance graduate with over 15 years of industry experience, Shantayya is dedicated to customer satisfaction and performance optimization. His deep understanding of financial services, combined with a hands-on leadership style, ensures streamlined operations and consistently high service quality.",
    },
    {
      name: "Mrs. Premlatha Swamy",
      title: "Director & Strategic Leader",
      bio: "With over 15 years of experience, she leads strategic initiatives and community engagement, ensuring that Capinex grows with purpose and impact.",
    },
  ];

  const leaders = [
    {
      name: "Mr. Dhanesh C.K",
      title: "Vice President, Sales",
      bio: "With 19+ years in customer operations and BPO, he leads high-performance sales teams and customer experience initiatives.",
    },
    {
      name: "Mr. Arun Kumar Gopal",
      title: "General Manager (Operations)",
      bio: "A graduate of Anna University, Arun ensures smooth, efficient, and responsive operational workflows.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements =
      sectionRefTwo.current?.querySelectorAll(".animate-on-scroll");
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const differentiators = [
    {
      title: "Real Solutions for Real Needs",
      description: "Tools and services that support your financial goals",
      icon: <CheckCircle className="h-12 w-12 text-blue-700" />,
    },
    {
      title: "Beyond Credit Scores",
      description: "We assess more than just numbers",
      icon: <Scale className="h-12 w-12 text-blue-700" />,
    },
    {
      title: "Lifestyle-Aligned Support",
      description:
        "Judgment-free resources to help you make informed decisions",
      icon: <ThumbsUp className="h-12 w-12 text-blue-700" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const values = [
    {
      letter: "C",
      name: "Commitment to Excellence",
      icon: <Award className="h-10 w-10 text-white" />,
      color: "from-blue-600 to-blue-700",
    },
    {
      letter: "A",
      name: "Affordable Solutions",
      icon: <Heart className="h-10 w-10 text-white" />,
      color: "from-blue-700 to-blue-800",
    },
    {
      letter: "P",
      name: "Personalized Service",
      icon: <UserCheck className="h-10 w-10 text-white" />,
      color: "from-blue-800 to-blue-900",
    },
    {
      letter: "I",
      name: "Integrity in Every Transaction",
      icon: <ShieldCheck className="h-10 w-10 text-white" />,
      color: "from-blue-900 to-blue-800",
    },
    {
      letter: "T",
      name: "Trustworthiness",
      icon: <ShieldCheck className="h-10 w-10 text-white" />,
      color: "from-blue-800 to-blue-700",
    },
    {
      letter: "A",
      name: "Always-Available Support",
      icon: <Headphones className="h-10 w-10 text-white" />,
      color: "from-blue-700 to-blue-600",
    },
    {
      letter: "L",
      name: "Leading Financial Solutions",
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      color: "from-blue-600 to-blue-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            //  backgroundImage: `url(${aboutbg})`,
            backgroundImage:
              'url("https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Take the Next Step in Your{" "}
              <motion.span
                className="text-yellow-400"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Financial Journey
              </motion.span>
            </h1>
            <motion.p
              className="max-w-2xl mx-auto text-lg text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Capinex MoneyMark Finance Private Limited. Ltd. is one of India's
              fastest-growing financial distribution platforms. Officially
              registered in May 2023, we combine over 20 years of leadership
              expertise in lending, customer service, and financial consulting.
            </motion.p>
            <motion.p
              className="max-w-2xl mx-auto text-blue-100 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              We aim to provide financial support when and where you need
              it—with minimal paperwork, quick approvals, and complete
              transparency.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3 rounded-lg shadow-lg cursor-pointer"
                onClick={() => navigate("/loans/personal-loan")}
              >
                Discover Our Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact-us")}
                className="bg-transparent hover:bg-blue-700 text-white border border-white px-8 py-3 rounded-lg shadow-lg cursor-pointer"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section two */}
      <section className="py-20 bg-[#1a202c]" ref={ref}>
        <div
          className="absolute right-0 w-1/3 h-full opacity-5"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Our Vision & Mission
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-blue-700 mx-auto mb-6"
            />
            <motion.p
              variants={itemVariants}
              className="max-w-3xl mx-auto text-lg text-gray-300"
            >
              Driven by purpose and guided by strong principles, we strive to
              create a more inclusive financial landscape.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              className="bg-[#0a1628] border border-gray-700 p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400">Our Vision</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                To empower individuals and businesses with innovative,
                accessible, and ethical financial solutions that drive long-term
                prosperity and financial well-being.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-[#0a1628] border border-gray-700 p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <Compass className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400">
                  Our Mission
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <motion.li variants={itemVariants} className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <span>
                    <strong>Customer-Centric Approach</strong> – Tailored
                    financial products and services
                  </span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <span>
                    <strong>Financial Inclusion</strong> – Access for all,
                    including underserved communities
                  </span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <span>
                    <strong>Innovation & Technology</strong> – AI and digital
                    tools to enhance user experience
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section three */}

      <section className="py-20 bg-[#0a1628]" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Values: <span className="text-cyan-400">CAPITAL</span>
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Your Financial Needs, Met at the Speed of Now
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${value.color} p-6 rounded-xl shadow-lg text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-700`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">
                    <span className="text-yellow-300">{value.letter}</span> -{" "}
                    {value.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section four */}
      <section className="py-20 bg-[#1a202c] overflow-hidden" ref={sectionRefTwo}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Makes Us Different
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Our approach to finance is as unique as your needs
            </p>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-40"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-100 rounded-full opacity-40"></div>

            {/* Content */}
            <div className="relative bg-[#0a1628] border border-gray-700 rounded-3xl shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 clip-path-diagonal z-0"></div>

              <div className="relative z-10 p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {differentiators.map((item, index) => (
                    <div
                      key={index}
                      className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-[#1a202c] border border-gray-700 rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform"
                      style={{ transitionDelay: `${200 + index * 150}ms` }}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section five */}
      <section className="py-20 bg-[#1a202c]" ref={sectionRefThree}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Leadership
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              The experts behind Capinex MoneyMark Finance
            </p>
          </div>

          {/* Founders */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-cyan-400 mb-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              Founders & Directors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {founders.map((person, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-[#0a1628] border border-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:shadow-xl transition-shadow"
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="bg-gradient-to-r from-blue-700 to-blue-900 h-3"></div>
                  <div className="p-6">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-800 text-3xl font-bold">
                        {person.name.split(" ")[0][0]}
                        {person.name.split(" ")[1][0]}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-center text-white mb-1">
                      {person.name}
                    </h4>
                    <p className="text-cyan-400 text-center mb-4">
                      {person.title}
                    </p>
                    <p className="text-gray-300 text-sm">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaders */}
          <div>
            <h3 className="text-2xl font-bold text-center text-cyan-400 mb-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              Our Leaders
            </h3>
            <p className="text-center mb-10 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-gray-300">
              At Capinex, our leaders inspire with purpose, driving innovation,
              trust, and excellence in every step.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.map((person, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-[#0a1628] border border-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:shadow-xl transition-shadow"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-3"></div>
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-800 text-2xl font-bold">
                        {person.name.split(" ")[1][0]}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-center text-white mb-1">
                      {person.name}
                    </h4>
                    <p className="text-cyan-400 text-center mb-4">
                      {person.title}
                    </p>
                    <p className="text-gray-300 text-sm">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
