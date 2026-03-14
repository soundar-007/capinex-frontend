import React from "react";
import {
  Mail,
  Users,
  Target,
  Briefcase,
  GraduationCap,
  Send,
  ArrowRight,
  MapPin,
  Clock,
  IndianRupee,
} from "lucide-react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { getPublishedJobsApi } from "../api/resource";
const Careers = () => {
  const { data: jobsData, isPending } = useQuery({
    queryKey: ["published-jobs"],
    queryFn: () => getPublishedJobsApi(1, 100),
  });

  const jobs = jobsData?.data?.detail[0]?.jobs || [];

  return (
    <>
    <Helmet>
  <title>Fintech Jobs at Capinex: Apply for Careers Now</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="description"
    content="Capinex offers career opportunities in fintech and digital lending. Be part of a purpose-driven team. Apply today and grow with us!"
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center  p-6 rounded-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#002060]">
              Join Us in Transforming Financial Services
            </h1>
            <p className="text-xl text-[#002060] font-medium max-w-3xl mx-auto">
              At Capinex, we're on a mission to revolutionize financial services and digital lending in India. Join our fintech team of passionate innovators making a difference.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-10 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1a202c] rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
              <div className="flex items-center space-x-6">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Users className="text-blue-900 w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">200+</div>
                  <div className="text-gray-300">Team Members</div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a202c] rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
              <div className="flex items-center space-x-6">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Target className="text-blue-900 w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">5+</div>
                  <div className="text-gray-300">Office Locations</div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a202c] rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
              <div className="flex items-center space-x-6">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Briefcase className="text-blue-900 w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">50+</div>
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
                Join Capinex careers for fintech jobs that value innovation, growth, and making a real impact in digital lending and finance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                  Are you passionate about fintech jobs and digital lending careers? Do you want to join Capinex careers and innovate in finance? Then Capinex is the right place for you.
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

        {/* Current Openings Section */}
        <section className="py-20 bg-[#1a202c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Current Openings
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Discover your next career move and join us in building the future of financial services.
              </p>
            </div>

            {isPending ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
              </div>
            ) : jobs.length === 0 ? (
              <div className="bg-[#0a1628] rounded-xl p-10 text-center border border-gray-700">
                <Briefcase className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Openings Right Now</h3>
                <p className="text-gray-400">
                  We don't have any specific open roles at the moment, but we are always looking for great talent. Feel free to send your resume!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobs.map((job) => (
                  <div
                    key={job._id}
                    className="bg-[#0a1628] rounded-2xl flex flex-col border border-gray-700 hover:border-cyan-500/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-cyan-900/20 transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-8 flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2">
                        {job.title}
                      </h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-300 font-medium">
                          <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-300 font-medium">
                          <Clock className="w-4 h-4 mr-3 text-cyan-400" />
                          {job.jobType}
                        </div>
                        {job.salary && (
                          <div className="flex items-center text-green-400 font-medium">
                            <IndianRupee className="w-4 h-4 mr-3" />
                            {job.salary}
                          </div>
                        )}
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Requirements Sneak Peek</h4>
                        <div 
                          className="text-gray-300 text-sm line-clamp-3 prose prose-invert max-w-none"
                          dangerouslySetInnerHTML={{ __html: job.requirements }}
                        />
                      </div>
                    </div>
                    
                    <div className="p-6 bg-[#111c30] border-t border-gray-700/50 mt-auto">
                      <a
                        href={`mailto:hr@capinex.in?subject=Application for ${job.title}`}
                        className="w-full flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 active:scale-95 text-white font-semibold rounded-xl transition-all duration-200"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Apply Now Section */}
        <section className="py-20 bg-[#0a1628]">
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
                  href="mailto:hr@capinex.in"
                  className="text-xl font-semibold hover:text-cyan-300 transition-colors"
                >
                  hr@capinex.in
                </a>
              </div>
            </div>

            <a
              href="mailto:hr@capinex.in"
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
