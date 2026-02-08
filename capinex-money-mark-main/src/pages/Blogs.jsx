import React, { useState, useEffect } from "react";
import YellowBgWave from "../assets/detail/BgWave.png";
import BlogRightSideImage from "../assets/blogRightSideContainer.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NewsletterImage from "../assets/cardBlog.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HeaderImage from "../assets/blogs/Background.jpg";
import { getAllBlogsApi } from "../api/resource";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const sliderData = [
  {
    category: "Tech & Processes",
    title:
      "How we made Monnify the faster and better payment gateway in Nigeria",
    date: "February 25, 2025",
    author: "Daniel Ojinaka and Mayrose Agbalugo",
    image: "https://source.unsplash.com/800x600/?payment,technology",
  },
  {
    category: "Business & Growth",
    title: "Scaling Fintech: What We Learned Building for Millions",
    date: "March 14, 2025",
    author: "Chidi Nwosu",
    image: "https://source.unsplash.com/800x600/?finance,banking",
  },
  {
    category: "Infrastructure",
    title: "The Engine Behind Real-time Transactions at Scale",
    date: "April 5, 2025",
    author: "Adaora Nwachukwu",
    image: "https://source.unsplash.com/800x600/?server,datacenter",
  },
];

function App() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState(0);
  const item = sliderData[index];
  const [articles, setArticles] = useState([]);

  const limit = 20; // Set the limit for the number of blogs to fetch

  const prevSlide = () => {
    setIndex(index === 0 ? sliderData.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === sliderData.length - 1 ? 0 : index + 1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const payload = {
      email: email, // Or whatever variable you're using
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbw8lQQQd2cLwKEqbJFSK9t6UF4QOOaRYSZLU-c5HYOy95ToIVdAF43YxVFhZngg2HJb/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    setEmail(""); // Clear the email input after submission

    // alert('Application process would start here!');
  };

  const blogsQuery = useQuery({
    queryKey: ["BlogsTotal"],
    queryFn: () => getAllBlogsApi(1, limit),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    if (blogsQuery.data?.data?.detail?.[0]?.blogs) {
      setArticles(blogsQuery.data.data.detail[0].blogs);
    }
  }, [blogsQuery.data]);

  return (
    <>
      <Helmet>
        <title>Capinex Finance Blog | Tips on Loans, Credit, and Money Management</title>
        <meta
          name="title"
          content="Capinex Blog – Insights, Innovation & Growth Stories"
        />
        <meta
          name="description"
          content="Explore expert insights, innovations, and real-world stories from Capinex. Stay updated with our latest blogs covering technology, finance, infrastructure, and more."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/blogs" />
        <meta
          property="og:title"
          content="Capinex Blog – Insights, Innovation & Growth Stories"
        />
        <meta
          property="og:description"
          content="Explore expert insights, innovations, and real-world stories from Capinex."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/blog-og-image.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com/blogs" />
        <meta
          property="twitter:title"
          content="Capinex Blog – Insights, Innovation & Growth Stories"
        />
        <meta
          property="twitter:description"
          content="Explore expert insights, innovations, and real-world stories from Capinex."
        />
        <meta
          property="twitter:image"
          content="https://yourdomain.com/assets/blog-og-image.jpg"
        />
      </Helmet>

      <main className="overflow-hidden pb-20 text-base font-medium tracking-tight text-white bg-[#0a1628]">
        <section className="flex flex-col items-center px-6 pt-24 pb-12 w-full relative">
          <img
            src={YellowBgWave}
            alt="Background decoration"
            className="object-cover absolute inset-0 w-full h-full max-w-full max-h-[70vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-full"
          />

          <section className="flex relative flex-col pt-10 pb-12 w-full max-md:px-5">
            {/* <img
            src={YellowBgWave}
            alt="Background decoration"
            className="object-cover absolute inset-0 w-full h-full max-w-full max-h-[70vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-full"
          /> */}
            <div className="text-center mb-12 z-0">
              <h1 className="text-4xl font-bold text-cyan-400 mb-4">
                Capinex Blog
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We believe the financial industry needs innovation and our
                mission is to drive that change at scale. Dive into our stories
                and insights.
              </p>
            </div>

            {/* Hero Section */}
            <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-[#082340] text-white w-full max-w-7xl mx-auto shadow-lg">
              {/* Left Content */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-300 mb-2">{item.category}</p>
                  <span className="bg-yellow-300 text-black text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
                    Top Stories
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-4">
                    {item.date} &nbsp; by{" "}
                    <span className="text-white">{item.author}</span>
                  </p>
                </div>

                {/* Pagination & Arrows */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex space-x-1">
                    {sliderData.map((_, i) => (
                      <span
                        key={i}
                        className={`h-3 w-3 rounded-full ${
                          i === index ? "bg-white" : "bg-blue-300"
                        }`}
                      ></span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={prevSlide}
                      className="p-3 bg-white text-black rounded-full"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-3 bg-white text-black rounded-full"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="md:w-1/2">
                <img
                  src={HeaderImage}
                  alt="slider"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </section>
      </main>
      {/* Header */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Blog Header */}
        {/* Blog List Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
            {/* Left Section */}
            <div>
              <h2 className="text-2xl font-bold text-white">All Stories</h2>
              <p className="text-sm text-gray-400 mt-2">
                Everything you need to know, about{" "}
                <br className="hidden md:block" /> everything we do.
              </p>
            </div>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row w-full sm:w-auto"
            >
              <input
                type="search"
                placeholder="Search blogs..."
                className="px-4 py-2 border border-gray-600 bg-[#1a202c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-64 placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 py-2 mt-2 sm:mt-0 sm:ml-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
              >
                Search
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 w-full max-w-7xl mx-auto">
            {blogsQuery.isLoading && <p>Loading blogs...</p>}
            {blogsQuery.isError && <p>Error loading blogs</p>}
            {!blogsQuery.isLoading &&
              articles.map((article, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(article.permalink)}
                  className="bg-[#1a202c] rounded-md overflow-hidden shadow-sm cursor-pointer border border-gray-700"
                >
                  <img
                    src={article.bannerImageUrl}
                    alt={article.title}
                    className="w-full h-68 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-md font-semibold leading-tight">
                      {article.title}
                    </h2>
                    <div className="mt-2 text-sm text-gray-500 flex items-center justify-between">
                      <span>{article.readTime} min read</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-cyan-400 font-medium hover:text-cyan-300">
              Load more →
            </button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#092256] rounded-xl pt-8 pr-8 mt-16 pb-4 flex flex-col md:flex-row items-center gap-6">
          <div className="max-w-2xl mx-auto text-center md:text-left p-5">
            <h2 className="text-2xl font-bold text-white mb-4">
              Get more stories like this
            </h2>
            <p className="text-gray-400 mb-6">
              Sign up for our monthly newsletter to receive the latest insights
              from our engineering business leaders.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex max-w-md border border-gray-400 rounded-lg overflow-hidden"
            >
              <input
                type="email"
                placeholder="email"
                className="flex-1 px-4 py-2 text-white bg-transparent placeholder:text-gray-400 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="cursor-pointer px-6 py-2 font-bold text-[#FFF0C2] bg-blue-600 hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <img
              src={NewsletterImage}
              alt="Static Featured Background"
              className="w-50 h-50"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
