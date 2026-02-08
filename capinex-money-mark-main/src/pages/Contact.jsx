import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
  User,
  Send,
  ExternalLink,
  Globe,
  Shield,
  Users,
  Briefcase,
} from "lucide-react";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    loanType: "",
  });


const handleFormSubmit = (e) => {
  e.preventDefault();

  const payload = {
    userInfo: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      description: formData.message,
      loantype: formData.loanType,
    },
  };

  fetch('https://script.google.com/macros/s/AKfycbzrpkD1SsLhfDH5qYj2XBSoDbjL6rxaJvk5C8VQS_qj9PA_CQ_GZddiEaWIBMuZ0YqV-A/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  setFormSubmitted(true);

  setFormData({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    message: '',
  });
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <>
      <Helmet>
        <title>Contact Us | Capinex MoneyMark Finance Pvt. Ltd.</title>
        <meta
          name="description"
          content="Get in touch with Capinex MoneyMark Finance Pvt. Ltd. for all your financial needs. We provide quick loan processing and expert guidance."
        />
        <meta
          name="keywords"
          content="contact, finance, loans, financial solutions, Capinex MoneyMark, customer service"
        />
        <meta name="author" content="Capinex MoneyMark Finance Pvt. Ltd." />
        <meta
          property="og:title"
          content="Contact Us | Capinex MoneyMark Finance Pvt. Ltd."
        />
        <meta
          property="og:description"
          content="Reach out to us for personalized financial services, expert advice, and quick loan approvals."
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        />
        <meta property="og:url" content="https://www.capinex.com/contact" />
        <meta
          name="twitter:title"
          content="Contact Us | Capinex MoneyMark Finance Pvt. Ltd."
        />
        <meta
          name="twitter:description"
          content="Get in touch with Capinex MoneyMark Finance Pvt. Ltd. for fast loan processing and expert financial solutions."
        />
        <meta
          name="twitter:image"
          content="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="min-h-screen mt-16 bg-[#0a1628]">
        {/* Hero Section */}
        <div className="relative bg-blue-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Start a Conversation
            </h1>
            {/* <p className="text-xl  text-blue-100 max-w-3xl mx-auto">
              Whether you're looking for financial solutions or have questions about our services, our team is here to help.
            </p> */}
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-10 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1a202c] rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Globe className="text-blue-900 w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">25+</div>
                  <div className="text-gray-300">Cities Served</div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a202c] rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="text-blue-900 w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">10K+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a202c] rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Briefcase className="text-blue-900 w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">
                    ₹500Cr+
                  </div>
                  <div className="text-gray-300">Loans Disbursed</div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a202c] rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Shield className="text-blue-900 w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">15+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content Section */}
            <div className="bg-[#1a202c] rounded-2xl shadow-lg p-8 border border-gray-700">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Capinex MoneyMark Finance Pvt. Ltd.
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We're dedicated to providing swift and reliable financial
                  solutions to empower your personal and business goals. Whether
                  you're seeking a loan or financial advice, our team is here to
                  help you achieve your financial objectives with tailored
                  solutions and expert guidance.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-[#0a1628] p-3 rounded-lg group-hover:bg-cyan-900/30 transition-colors">
                      <Clock className="text-blue-900 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        Business Hours
                      </h3>
                      <p className="text-gray-400">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-400">
                        Saturday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-[#0a1628] p-3 rounded-lg group-hover:bg-cyan-900/30 transition-colors">
                      <Phone className="text-blue-900 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        Phone
                      </h3>
                      <p className="text-gray-400">+91 7349726454 </p>
                      {/* <p className="text-gray-600">+91 (800) 987-6543</p> */}
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-[#0a1628] p-3 rounded-lg group-hover:bg-cyan-900/30 transition-colors">
                      <Mail className="text-blue-900 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        Email
                      </h3>
                      <p className="text-gray-400">HR_Recruitment@capinex.in</p>
                      <p className="text-gray-400">support@capinex.in</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-[#0a1628] p-3 rounded-lg group-hover:bg-cyan-900/30 transition-colors">
                      <MapPin className="text-blue-900 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        Location
                      </h3>
                      <p className="text-gray-400">
                        1710, Dr Rajkumar Rd, Prakash Nagar,
                        <br />
                        Rajajinagar, Bengaluru, Karnataka 560021
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Why Choose Us?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-[#0a1628] p-6 rounded-xl hover:bg-cyan-900/20 transition-colors border border-gray-700">
                    <h4 className="font-semibold text-cyan-400 mb-2">
                      Quick Processing
                    </h4>
                    <p className="text-sm text-gray-300">
                      Fast loan approval and disbursement process with minimal
                      documentation
                    </p>
                  </div>
                  <div className="bg-[#0a1628] p-6 rounded-xl hover:bg-cyan-900/20 transition-colors border border-gray-700">
                    <h4 className="font-semibold text-cyan-400 mb-2">
                      Competitive Rates
                    </h4>
                    <p className="text-sm text-gray-300">
                      Best-in-class interest rates customized to your profile
                    </p>
                  </div>
                  <div className="bg-[#0a1628] p-6 rounded-xl hover:bg-cyan-900/20 transition-colors border border-gray-700">
                    <h4 className="font-semibold text-cyan-400 mb-2">
                      Expert Guidance
                    </h4>
                    <p className="text-sm text-gray-300">
                      Professional financial advisory services at every step
                    </p>
                  </div>
                  <div className="bg-[#0a1628] p-6 rounded-xl hover:bg-cyan-900/20 transition-colors border border-gray-700">
                    <h4 className="font-semibold text-cyan-400 mb-2">
                      Transparent Process
                    </h4>
                    <p className="text-sm text-gray-300">
                      No hidden charges or processing fees, complete
                      transparency
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="bg-[#1a202c] rounded-2xl shadow-lg p-8 border border-gray-700 lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-300 mb-6">
                Fill out the form below and we'll get back to you shortly.
              </p>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Send className="text-green-600 w-8 h-8" />
                  </div>
                  <div className="text-green-800 font-medium text-xl mb-2">
                    Thank you for reaching out!
                  </div>
                  <p className="text-green-600">
                    Our team will contact you shortly to discuss your
                    requirements.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative group">
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors"
                        size={20}
                      />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-600 bg-[#0a1628] text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Select Loan Type *
                    </label>
                    <div className="relative group">
                      <Briefcase
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors"
                        size={20}
                      />
                      <select
                        name="loanType"
                        value={formData.loanType}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none bg-white"
                      >
                        <option value="">-- Select Loan Type --</option>
                        <option>Personal loan</option>
                        <option>Business loan</option>
                        <option>Home loan</option>
                        <option>Car loan</option>
                        <option>Business & Property Loans</option>
                        <option>Mortgage loan</option>
                        <option>Loan against property</option>
                        <option>Transfer personal loan</option>
                        <option>Project loans</option>
                        <option>MSME loans</option>
                        <option>Transfer home loan</option>
                        <option>Gold loan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative group">
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors"
                        size={20}
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-600 bg-[#0a1628] text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative group">
                      <Phone
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors"
                        size={20}
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-600 bg-[#0a1628] text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your loan requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer w-full inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white rounded-xl hover:bg-blue-800 transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <span className="mr-2">Send Message</span>
                    <Send
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our{" "}
                    <a
                      href="#"
                      className="text-blue-900 hover:text-blue-700 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-gray-600">
                We're conveniently located in the heart of Bengaluru's financial
                district.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.2093353273041!2d77.55651794188384!3d12.99339088247673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d31b81a3335%3A0xeccb769003694690!2sCapinex%20MoneyMark%20Finance%20Private%20Limited(Rajaji%20Nagar%20Branch)!5e0!3m2!1sen!2sin!4v1745814264543!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
