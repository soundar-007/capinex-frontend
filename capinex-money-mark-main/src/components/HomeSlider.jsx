import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSlider.css";
import loan1 from "../assets/home/bg2.jpg";
import loan2 from "../assets/home/bg02.webp";
import loan3 from "../assets/about/aboutbg.webp";
import loan4 from "../assets/home/bg3.jpg";
import loan5 from "../assets/home/loan05.jpg";

const HomeSlider = () => {
  const navigate = useNavigate();

  const slides = [
    {
      image: loan1,
      title: "Trusted by 10,000+ customers",
      heading: "Your Financial Dreams Made Real",
      description:
        "Fast, secure, and transparent financial solutions. Get approved in 48 hours with minimal paperwork and competitive rates.",
      buttonText: "Learn More",
      link: "/about-us",
    },
    {
      image: loan2,
      title: "Trusted by 10,000+ customers",
      heading: "Your journey to the perfect loan starts here",
      description: "Get quick, easy access to funds when it matters most—whether it's an emergency, a dream, or a sudden need.",
      buttonText: "Explore Services",
      link: "/loans/personal-loan",
    },
    {
      image: loan3,
      title: "Trusted by 10,000+ customers",
      heading: "Business Loans in India – Fast Approval ",
      description: "Looking for a business loan in India? Unlock growth opportunities with our flexible and affordable business loan solutions.",
      buttonText: "Explore Services",
      link: "/loans/business-loan",
    },
    {
      image: loan4,
      title: "Trusted by 10,000+ customers",
      heading: "Home Loans Made Simple with Capinex ",
      description: "Looking to buy, build, or renovate your dream home? Capinex Home Loans offer a fast, stress-free, and 100% digital process.",
      buttonText: "Explore Services",
      link: "/loans/home-loan",
    },
    {
      image: loan5,
      title: "Trusted by 10,000+ customers",
      heading: "Drive Your Dream Car with Our Easy Car Loans",
      description: "Owning a car is no longer just a luxury — it’s a necessity. Whether you're buying your first car, upgrading to a better model.",
      buttonText: "Explore Services",
      link: "/loans/car-loan",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoSlideRef = useRef();

  const clonedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clonedSlides.length - 2 : prevIndex - 1
    );
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(autoSlideRef.current);
  }, []);

  useEffect(() => {
    let timeout;

    if (currentIndex === 0) {
      timeout = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(clonedSlides.length - 2);
      }, 1500);
    } else if (currentIndex === clonedSlides.length - 1) {
      timeout = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(1);
      }, 1500);
    } else {
      timeout = setTimeout(() => setIsAnimating(false), 1500);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, clonedSlides.length]);

  useEffect(() => {
    // Trigger zoom for the first image on load
    setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1500);
    }, 100);
  }, []);

  const handleManualSlide = (direction) => {
    resetAutoSlide();
    if (direction === "next") {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? "transform 1.5s ease-in-out" : "none",
        }}
      >
        {clonedSlides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              style={{
                transform: isAnimating ? "scale(1.1)" : "scale(1.2)",
                transition: "transform 1.5s ease-in-out",
              }}
            />
            <div className="carousel-content">
              <div className="carousel-content-wrapper">
                <p className="carousel-title">{slide.title}</p>
                <h2 className="carousel-heading">{slide.heading}</h2>
                <p className="carousel-description">{slide.description}</p>
                <button
                  className="carousel-button-action"
                  onClick={() => navigate(slide.link)}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-button prev"
        onClick={() => handleManualSlide("prev")}
        disabled={isAnimating}
      >
        &#10094;
      </button>
      <button
        className="carousel-button next"
        onClick={() => handleManualSlide("next")}
        disabled={isAnimating}
      >
        &#10095;
      </button>
    </div>
  );
};

export default HomeSlider;
