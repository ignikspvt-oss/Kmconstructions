import React, { useState, useEffect } from 'react';
import { Award, Users, Calendar, Building, ArrowRight, Star } from 'lucide-react';

const Homepage: React.FC = () => {
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    ongoing: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targetValues = { years: 23, projects: 150, clients: 25, ongoing: 12 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          years: Math.floor(targetValues.years * progress),
          projects: Math.floor(targetValues.projects * progress),
          clients: Math.floor(targetValues.clients * progress),
          ongoing: Math.floor(targetValues.ongoing * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targetValues);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-lg transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Award className="w-4 h-4 mr-2" />
                Special Class Contractor
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  KM Constructions
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-blue-200 mb-8 font-light">
                Building Trust. Building Tomorrow.
              </p>
              
              <p className="text-lg text-gray-300 mb-12 max-w-2xl">
                With over two decades of excellence, we've been partnering with government departments 
                and private clients to build infrastructure that shapes communities and drives progress.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  <span className="flex items-center justify-center">
                    Explore Our Works
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </button>
                <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300">
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <Calendar className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{counters.years}+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <Building className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{counters.projects}+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{counters.clients}+</div>
                <div className="text-gray-300">Government Departments</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{counters.ongoing}+</div>
                <div className="text-gray-300">Ongoing Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted By Leading Organizations</h2>
            <p className="text-xl text-gray-600">Building partnerships with government departments and institutions across Telangana</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'TGEWIDC Department',
              'Panchayat Raj Department', 
              'R&B Department',
              'Agriculture Marketing',
              'Public Health Department',
              'Municipalities'
            ].map((dept, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-blue-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm">{dept}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Carousel */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Updates</h2>
            <p className="text-xl text-gray-600">Recent milestones and project completions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "KGBV Building Completed at Jagtial",
                date: "March 2024",
                description: "Successfully completed modern educational facility with state-of-the-art amenities"
              },
              {
                title: "5000MT Godown Project Delivered",
                date: "February 2024", 
                description: "Advanced storage facility completed ahead of schedule for Agriculture Marketing Department"
              },
              {
                title: "MLA Camp Office Inauguration",
                date: "January 2024",
                description: "Modern office complex inaugurated at Korutla, featuring contemporary design and facilities"
              }
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 font-semibold text-sm mb-2">{news.date}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{news.title}</h3>
                <p className="text-gray-600 mb-6">{news.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;