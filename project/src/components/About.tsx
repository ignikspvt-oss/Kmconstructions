import React from 'react';
import { Target, Eye, Heart, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">About KM Constructions</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              A legacy of excellence in construction, built on trust, innovation, and unwavering commitment 
              to quality since 2001.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Special Class Contractor
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Building Excellence for Over Two Decades
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Established in 2001, KM Constructions has evolved into one of Telangana's most trusted 
                Special Class Contractors, specializing in government infrastructure projects and 
                private construction ventures.
              </p>
              
              <p className="text-lg text-gray-700 mb-8">
                Our journey began with a simple vision: to build structures that stand the test of time 
                while contributing to the development of our communities. Today, we proudly serve 
                multiple government departments, delivering projects that impact thousands of lives.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-700">Govt Departments</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white p-8 rounded-xl transform -rotate-3">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Specialization</h3>
                  <ul className="space-y-3">
                    {[
                      'Educational Buildings (KGBV, Colleges)',
                      'Government Office Complexes',
                      'Healthcare Facilities (PHCs, UPHCs)',
                      'Agricultural Infrastructure',
                      'Commercial & Residential Projects',
                      'Roads & Bridges Construction'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 text-center">
                To deliver exceptional construction services that exceed expectations, 
                contributing to infrastructure development while maintaining the highest 
                standards of quality, safety, and sustainability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-700 text-center">
                To be the most trusted construction partner in the region, known for innovation, 
                reliability, and our commitment to building structures that serve communities 
                for generations to come.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Our Values</h3>
              <p className="text-gray-700 text-center">
                Integrity, Excellence, Innovation, and Accountability form the cornerstone of our 
                operations. We believe in building not just structures, but lasting relationships 
                based on trust and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-blue-200">Milestones that define our growth</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-400"></div>
            
            <div className="space-y-16">
              {[
                { year: '2001', title: 'Foundation', description: 'KM Constructions established with a vision to serve the community' },
                { year: '2005', title: 'First Major Project', description: 'Completed first government building project, setting quality standards' },
                { year: '2010', title: 'Special Class Status', description: 'Achieved Special Class Contractor certification' },
                { year: '2015', title: 'Expansion', description: 'Expanded operations across multiple districts in Telangana' },
                { year: '2020', title: 'Modern Era', description: 'Adopted latest construction technologies and sustainability practices' },
                { year: '2024', title: 'Future Ready', description: 'Continuing to innovate and serve with 150+ completed projects' }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                      <div className="text-yellow-400 font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-white font-semibold text-xl mb-2">{milestone.title}</h3>
                      <p className="text-blue-200">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-blue-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managing Director Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">Meet the visionary behind KM Constructions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-blue-600 shadow-2xl mx-auto mb-6">
                  <img 
                    src="/images/Dad_patel.jpeg" 
                    alt="Kolagani Madhusudhan Patel - Managing Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-3 rounded-full">
                  <Award className="w-6 h-6 text-slate-900" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Kolagani Madhusudhan Patel</h3>
              <p className="text-lg text-blue-600 font-semibold mb-4">Managing Director</p>
              <p className="text-gray-600 max-w-md mx-auto">
                "Building trust through quality construction and serving the community with dedication since 2001."
              </p>
            </div>

            <div>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Leadership Philosophy</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Quality First:</strong> Never compromise on construction quality and safety standards
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Community Focus:</strong> Every project should contribute positively to society
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Innovation:</strong> Embrace modern construction technologies and sustainable practices
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Partnerships:</strong> Build lasting relationships with clients and government departments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals driving our success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: 'Kolagani Asrith Patel', role: 'Project Management', image: '/images/patel.jpeg' },
              { name: 'Kolagani Aryan Patel', role: 'Project Management', image: '/images/bro_patel.jpeg' }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
            
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications & Registrations</h2>
            <p className="text-xl text-gray-600">Recognized credentials that validate our expertise</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Special Class Contractor', org: 'Government of Telangana' },
              { name: 'ISO 9001:2015', org: 'Quality Management' },
              { name: 'TGEWIDC Registered', org: 'Education Infrastructure' },
              { name: 'PWD Approved', org: 'Public Works Department' }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;