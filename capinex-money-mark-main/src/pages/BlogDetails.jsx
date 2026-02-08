import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"; // React Query
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { Mail } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import DOMPurify from "dompurify";
import { getAllBlogsApi } from "../api/resource"; // Assume this is your API function
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { id } = useParams(); // This is the id in the URL
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const limit = 20; // Set the limit for the number of blogs to fetch

  // Fetch the list of blogs using useQuery
  const { data, isLoading, isError } = useQuery({
    queryKey: ["BlogsTotal"],
    queryFn: () => getAllBlogsApi(1, limit),
  });

  const finalData = data?.data?.detail[0]?.blogs || [];

  // Find the blog post by matching the id with the permalink
  const post = finalData?.find((blog) => blog.permalink === id);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a1628]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Post not found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    }
  };

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content={post.category + ", blog, loan, financial advice"}
        />
        <meta name="author" content={post.author} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.bannerImageUrl} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@username" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.bannerImageUrl} />
        <title>{post.title}</title>
      </Helmet>

      <main>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-blue-900">
          <div className="absolute inset-0">
            <img
              src={post.bannerImageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
          </div>

          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
              <button
                onClick={() => navigate("/")}
                className="text-white hover:text-blue-200 font-medium flex items-center justify-center mb-6 mx-auto"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Blog
              </button>
              {/* <span className="inline-block bg-yellow-500 text-blue-900 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide mb-4">
                {post.category}
              </span> */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {post.title}
              </h1>
              <div className="flex items-center justify-center text-blue-100 space-x-4">
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime} min read</span>
                </div>
                <span>•</span>
                <span>
                  {formatDistanceToNow(new Date(post.updatedTime))} ago
                </span>
                {/* <span>•</span> */}
                {/* <span>By {post.author}</span> */}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#0a1628]">
          <div className="prose prose-lg max-w-none">
            <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-700">
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="font-medium text-white">{post.author}</h3>
                  <p className="text-gray-400 text-sm">{post.date}</p>
                </div>
              </div>
              <button
                onClick={handleShare}
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                aria-label="Share article"
              >
                <Share2 size={20} />
              </button>
            </div>

            <div className="text-gray-300 leading-relaxed space-y-6">
              <p className="text-xl text-gray-400 mb-8">{post.excerpt}</p>

              {/* Split content into paragraphs */}
              {/* {post.content.split('. ').map((paragraph, index) => (
                <p key={index}>{paragraph}.</p>
              ))} */}

              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.content), // Sanitize the HTML before rendering
                }}
              />

              {/* Loan-specific sections */}
              {post.category === "Business Loan" && (
                <>
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    Key Benefits of Business Loans
                  </h2>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      Flexible funding for business expansion and operations
                    </li>
                    <li>Competitive interest rates for qualified businesses</li>
                    <li>Quick approval and disbursement process</li>
                    <li>
                      Multiple repayment options to suit your business cash flow
                    </li>
                    <li>Tax benefits on interest payments</li>
                  </ul>
                </>
              )}

              {post.category === "Home Loan" && (
                <>
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    Understanding Home Loan Terms
                  </h2>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Fixed vs. variable interest rates</li>
                    <li>Loan tenure options and their impact</li>
                    <li>Pre-payment and foreclosure terms</li>
                    <li>Processing fees and other charges</li>
                    <li>Tax benefits under various sections</li>
                  </ul>
                </>
              )}

              {/* Call to Action */}
              <div className="bg-[#1a202c] p-6 rounded-lg mt-12 border border-gray-700">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  Ready to Apply for a {post.category} loan ?
                </h3>
                <p className="text-gray-300 mb-4">
                  Get started with your loan application today and receive a
                  response within 24 hours.
                </p>
                <button onClick={()=>navigate("/contact-us")} className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter */}
        <section className="py-16 bg-[#1a202c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Mail size={40} className="mx-auto text-cyan-400 mb-4" />
              <h2 className="text-3xl font-bold text-white mb-3">
                Stay Updated on Loan Opportunities
              </h2>
              <p className="text-gray-300 mb-8">
                Subscribe to our newsletter for the latest loan offers,
                financial advice, and market trends.
              </p>

              {isSubmitted ? (
                <div className="bg-green-900/30 border border-green-500 text-green-400 px-4 py-3 rounded">
                  Thank you for subscribing! We'll be in touch soon.
                </div>
              ) : (
                <form
                  onSubmit={handleEmailSubmit}
                  className="sm:flex justify-center"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-5 py-3 text-base text-white placeholder-gray-400 bg-[#0a1628] border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="mt-3 sm:mt-0 w-full sm:w-auto px-6 py-3 text-base font-medium text-[#0a1628] bg-cyan-400 rounded-r-md hover:bg-cyan-300 focus:outline-none"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <p className="mt-3 text-sm text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPost;
