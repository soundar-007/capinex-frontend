import React, { useState } from "react";
import { Mail, Phone, MessageCircle, Clock, MapPin, Send } from "lucide-react";
import { useParams } from "react-router-dom";
const ContactSection = () => {
  const { loanName } = useParams();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanAmount: "",
    message: "",
    loanType: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log('Form submitted:', formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userInfo: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        description: formData.message,
        loantype: loanName || "General Inquiry",
      },
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbzrpkD1SsLhfDH5qYj2XBSoDbjL6rxaJvk5C8VQS_qj9PA_CQ_GZddiEaWIBMuZ0YqV-A/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    setFormSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-xl text-gray-300">
            Got questions or need help with your application? We're here to
            assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold text-white mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Mail,
                  title: "Email Support",
                  content: "support@capinex.in",
                  description: "We'll respond within 24 hours",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 7349726454",
                  description: "Reach out to our support team anytime",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-[#1a202c] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-700"
                >
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-3 rounded-full">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {contact.title}
                    </h4>
                    <div className="text-cyan-400 font-medium mb-1">
                      {contact.content}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {contact.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-cyan-900/30 p-6 rounded-xl border border-cyan-800/50">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold text-white">
                  Business Hours
                </span>
              </div>
              <div className="text-gray-300">
                <div>Monday - Friday: 9:00 AM - 9:00 PM</div>
                <div>Saturday: 9:00 AM - 6:00 PM</div>
                <div>Sunday: 10:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <div className="bg-[#1a202c] p-8 rounded-2xl shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Inquiry
              </h3>

              {formSubmitted ? (
                <div className="bg-green-900/30 border border-green-500 rounded-xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/50 rounded-full mb-4">
                    <Send className="text-green-400 w-8 h-8" />
                  </div>
                  <div className="text-green-400 font-medium text-xl mb-2">
                    Thank you for reaching out!
                  </div>
                  <p className="text-green-300">
                    Our team will contact you shortly to discuss your
                    requirements.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#0a1628] border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#0a1628] border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0a1628] border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      required
                    />
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
                      className="w-full px-4 py-3 bg-[#0a1628] border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your loan requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
