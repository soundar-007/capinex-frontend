import React from "react";
import {
  Mail,
  Users,
  Target,
  Briefcase,
  GraduationCap,
  Send,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet";
const Careers = () => {
  return (
    <>
    <Helmet>
  <title>Careers at Capinex | Join Our Growing Fintech Team</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="description"
    content="Explore career opportunities at Capinex. Be part of an innovative finance company shaping the future of digital lending in India. Apply now!"
  />
  <meta
    name="keywords"
    content="Capinex careers, fintech jobs, job openings, digital lending careers, finance jobs, work at Capinex, join Capinex, Capinex team"
  />
</Helmet>
      <main className="mt-18 bg-[#0a1628]">
        {/* Hero Section */}
        <div className="relative bg-blue-900 py-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Us in Transforming Financial Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              At Capinex, we're on a mission to revolutionize the way financial
              services are delivered in India. Join our team of passionate
              innovators making a difference.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-10 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1a202c] rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="text-blue-900 w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">200+</div>
                  <div className="text-gray-300">Team Members</div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a202c] rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Target className="text-blue-900 w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">5+</div>
                  <div className="text-gray-300">Office Locations</div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a202c] rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Briefcase className="text-blue-900 w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">50+</div>
                  <div className="text-gray-300">Open Positions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work With Us Section */}
        <section className="py-20 bg-[#1a202c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Work with Us?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join a team that values innovation, growth, and making a real
                impact in the financial industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#0a1628] p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-blue-900 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Inclusive Work Culture
                </h3>
                <p className="text-gray-300">
                  We value diversity and foster an environment where every voice
                  is heard and respected.
                </p>
              </div>

              <div className="bg-[#0a1628] p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="text-blue-900 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Growth-Oriented Environment
                </h3>
                <p className="text-gray-300">
                  Continuous learning and development opportunities for career
                  advancement.
                </p>
              </div>

              <div className="bg-[#0a1628] p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-blue-900 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Purpose-Driven Work
                </h3>
                <p className="text-gray-300">
                  Be part of meaningful projects that make a real impact in
                  people's financial lives.
                </p>
              </div>

              <div className="bg-[#0a1628] p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-blue-900 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Collaborative Teams
                </h3>
                <p className="text-gray-300">
                  Work alongside experienced leaders and skilled professionals
                  who support your growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We're Looking For Section */}
        <section className="py-20 bg-[#0a1628]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Who We're Looking For
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Are you passionate about making a difference in the finance
                  industry? Do you have a drive to innovate, learn, and grow?
                  Then Capinex is the right place for you.
                </p>
                <ul className="space-y-4">
                  {[
                    "Innovative problem solvers",
                    "Team players with excellent communication skills",
                    "Self-motivated individuals with a growth mindset",
                    "Passionate about financial technology and innovation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <ArrowRight className="text-cyan-400 w-5 h-5 mr-2" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-xl shadow-lg">
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm">Open Positions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Now Section */}
        <section className="py-20 bg-[#1a202c]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Apply Now</h2>
            <p className="text-lg text-gray-300 mb-8">
              To explore current openings or express interest in future
              opportunities, send your resume to:
            </p>
            <div className="bg-[#0a1628] p-8 rounded-xl mb-8 border border-gray-700">
              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <Mail className="w-6 h-6" />
                <a
                  href="mailto:capinexhr06@gmail.com"
                  className="text-xl font-semibold hover:text-cyan-300 transition-colors"
                >
                  capinexhr06@gmail.com
                </a>
              </div>
            </div>

            <a
              href="mailto:capinexhr06@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <span className="mr-2">Send Your Resume</span>
              <Send
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <p className="mt-6 text-gray-400">
              Join us and take the next big step in your professional journey
              with Capinex!
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Careers;
