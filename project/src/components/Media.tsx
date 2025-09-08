import React, { useState } from 'react';
import { Newspaper, Calendar, ExternalLink, PlayCircle, FileText, Award } from 'lucide-react';

const Media: React.FC = () => {
  const [activeTab, setActiveTab] = useState('press');

  const pressReleases = [
    {
      id: 1,
      title: "KM Construction Completes 150th Government Project",
      date: "March 15, 2024",
      source: "Construction Today",
      excerpt: "Special Class Contractor KM Construction reaches milestone with completion of KGBV building at Jagtial, showcasing two decades of excellence in government infrastructure projects.",
      image: "https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "achievement"
    },
    {
      id: 2,
      title: "Advanced Storage Facility Inaugurated at Jagtial AMC",
      date: "February 28, 2024",
      source: "Agricultural News Network",
      excerpt: "5000MT capacity godown facility with state-of-the-art preservation systems completed ahead of schedule, boosting agricultural storage infrastructure in the region.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "inauguration"
    },
    {
      id: 3,
      title: "MLA Camp Office Complex Sets New Standards",
      date: "January 20, 2024",
      source: "Government Buildings Quarterly",
      excerpt: "Contemporary office complex at Korutla demonstrates innovative design and sustainable construction practices, earning recognition from R&B Department officials.",
      image: "https://images.pexels.com/photos/5816298/pexels-photo-5816298.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "recognition"
    },
    {
      id: 4,
      title: "Healthcare Infrastructure Expansion in Rural Areas",
      date: "December 10, 2023",
      source: "Health Infrastructure Today",
      excerpt: "Completion of PHC building at Ambaripet brings modern healthcare facilities to rural communities, part of KM Construction's commitment to social development.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "social-impact"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Foundation Stone Laying Ceremony - Mango Market Development",
      date: "March 25, 2024",
      location: "Chelgal, Jagtial District",
      description: "Foundation stone laying ceremony for the development of mango market facility under Agriculture Marketing Department.",
      attendees: ["District Collector", "AMC Officials", "Local Representatives"],
      image: "https://images.pexels.com/photos/5816304/pexels-photo-5816304.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Inauguration of Teachers Training Centre",
      date: "February 15, 2024",
      location: "Jagtial District",
      description: "Official inauguration of the modern teachers training facility with advanced educational technology and professional development resources.",
      attendees: ["Education Minister", "District Officials", "Training Faculty"],
      image: "https://images.pexels.com/photos/5816305/pexels-photo-5816305.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Quality Excellence Award Ceremony",
      date: "January 30, 2024",
      location: "Hyderabad",
      description: "KM Construction honored with Special Recognition Award for outstanding contribution to government infrastructure development.",
      attendees: ["State Officials", "Construction Industry Leaders", "Government Representatives"],
      image: "https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const mediaKit = [
    {
      id: 1,
      title: "Company Profile 2024",
      type: "PDF",
      size: "2.5 MB",
      description: "Comprehensive company profile including projects, certifications, and capabilities",
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Project Portfolio",
      type: "PDF",
      size: "8.7 MB",
      description: "Detailed portfolio of completed and ongoing projects with technical specifications",
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Corporate Video 2024",
      type: "MP4",
      size: "45.2 MB",
      description: "Corporate presentation video showcasing our journey, projects, and capabilities",
      icon: <PlayCircle className="w-6 h-6" />
    },
    {
      id: 4,
      title: "High Resolution Logos",
      type: "ZIP",
      size: "1.2 MB",
      description: "Company logos in various formats and resolutions for media use",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Media Center</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Stay updated with our latest news, press releases, and media coverage. 
              Access our media kit and resources for journalists and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2">
            {[
              { id: 'press', label: 'Press Releases', icon: <Newspaper className="w-4 h-4" /> },
              { id: 'events', label: 'Events & Ceremonies', icon: <Calendar className="w-4 h-4" /> },
              { id: 'media-kit', label: 'Media Kit', icon: <FileText className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'press' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Press Releases</h2>
                <p className="text-xl text-gray-600">Latest news and announcements from KM Construction</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {pressReleases.map((article, index) => (
                  <article
                    key={article.id}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                      index === 0 ? 'lg:col-span-2' : ''
                    }`}
                  >
                    <div className={`grid ${index === 0 ? 'lg:grid-cols-2' : ''} gap-0`}>
                      <div className="relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className={`w-full object-cover ${index === 0 ? 'h-64 lg:h-full' : 'h-48'}`}
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            article.type === 'achievement' ? 'bg-green-100 text-green-800' :
                            article.type === 'inauguration' ? 'bg-blue-100 text-blue-800' :
                            article.type === 'recognition' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {article.type.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 lg:p-8">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                          <span className="mx-2">•</span>
                          <span className="text-blue-600">{article.source}</span>
                        </div>
                        
                        <h3 className={`font-bold text-slate-900 mb-4 hover:text-blue-600 transition-colors duration-300 cursor-pointer ${
                          index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                        }`}>
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {article.excerpt}
                        </p>
                        
                        <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group">
                          Read Full Article
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Events & Ceremonies</h2>
                <p className="text-xl text-gray-600">Milestones and celebrations in our journey</p>
              </div>

              <div className="space-y-8">
                {events.map((event, index) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    <div className="grid lg:grid-cols-3 gap-0">
                      <div className="relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                      
                      <div className="lg:col-span-2 p-8">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                          <div>
                            <div className="flex items-center text-sm text-blue-600 mb-2">
                              <Calendar className="w-4 h-4 mr-1" />
                              {event.date}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                              {event.title}
                            </h3>
                            <div className="text-gray-600 mb-4">📍 {event.location}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-900 mb-3">Key Attendees:</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.attendees.map((attendee, attendeeIndex) => (
                              <span
                                key={attendeeIndex}
                                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {attendee}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group">
                          View Event Gallery
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'media-kit' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Media Kit</h2>
                <p className="text-xl text-gray-600">Resources for journalists, partners, and stakeholders</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {mediaKit.map((resource) => (
                  <div
                    key={resource.id}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                        {resource.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-slate-900">{resource.title}</h3>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                            {resource.type}
                          </span>
                        </div>
                        
                        <p className="text-gray-700 mb-4">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{resource.size}</span>
                          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
                            <span>Download</span>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Information for Media */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Media Inquiries</h3>
                <p className="text-blue-100 mb-6">
                  For press inquiries, interviews, or additional information, please contact our media relations team.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <h4 className="font-semibold text-white mb-2">Press Contact</h4>
                    <p className="text-blue-100">press@kmconstruction.com</p>
                    <p className="text-blue-100">+91 9876543210</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <h4 className="font-semibold text-white mb-2">Partnership Inquiries</h4>
                    <p className="text-blue-100">partnerships@kmconstruction.com</p>
                    <p className="text-blue-100">+91 9876543211</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Honored for our commitment to excellence and quality</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                award: "Excellence in Government Projects",
                year: "2023",
                organization: "Construction Industry Association",
                description: "Recognized for outstanding performance in government infrastructure projects"
              },
              {
                award: "Quality Assurance Champion",
                year: "2023", 
                organization: "Telangana State Government",
                description: "Acknowledged for maintaining highest quality standards across all projects"
              },
              {
                award: "Special Class Contractor of the Year",
                year: "2022",
                organization: "Public Works Excellence Board",
                description: "Honor for consistent delivery and innovation in public infrastructure"
              }
            ].map((recognition, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-yellow-100"
              >
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{recognition.award}</h3>
                <div className="text-yellow-600 font-semibold mb-2">{recognition.year}</div>
                <div className="text-gray-600 text-sm mb-4">{recognition.organization}</div>
                <p className="text-gray-700">{recognition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;