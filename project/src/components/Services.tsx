import React from 'react';
import { Building, Loader as Road, Guitar as Hospital, GraduationCap, Store, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building className="w-12 h-12" />,
      title: "Building Construction",
      description: "Complete construction services for residential, commercial, and institutional buildings with modern design and sustainable practices.",
      features: ["Government Buildings", "Educational Complexes", "Office Spaces", "Residential Projects"],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Road className="w-12 h-12" />,
      title: "Roads & Bridges",
      description: "Infrastructure development including road construction, bridge building, and transportation network enhancement projects.",
      features: ["Highway Construction", "Bridge Engineering", "Rural Connectivity", "Urban Infrastructure"],
      color: "from-green-600 to-green-700"
    },
    {
      icon: <Hospital className="w-12 h-12" />,
      title: "Healthcare Facilities",
      description: "Specialized construction of healthcare infrastructure including hospitals, PHCs, and medical facilities with modern amenities.",
      features: ["Primary Health Centers", "Medical Colleges", "Diagnostic Centers", "Emergency Facilities"],
      color: "from-red-600 to-red-700"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Educational Buildings",
      description: "Construction of educational infrastructure from primary schools to colleges, designed for modern learning environments.",
      features: ["KGBV Buildings", "Government Colleges", "Hostels & Dormitories", "Training Centers"],
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: "Commercial Infrastructure",
      description: "Development of commercial spaces including markets, shopping complexes, and business centers with modern facilities.",
      features: ["Rythu Bazars", "Commercial Complexes", "Storage Facilities", "Market Infrastructure"],
      color: "from-yellow-600 to-yellow-700"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Specialized Projects",
      description: "Custom construction solutions for unique requirements including industrial facilities and specialized government projects.",
      features: ["Industrial Buildings", "Warehouses", "Government Offices", "Custom Solutions"],
      color: "from-gray-600 to-gray-700"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive construction services tailored to meet diverse infrastructure needs 
              across government and private sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:scale-105 hover:rotate-1"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="p-8 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50 transition-all duration-500">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`h-2 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Construction Process</h2>
            <p className="text-xl text-gray-600">A systematic approach ensuring quality and timely delivery</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Planning & Design', description: 'Comprehensive project planning with detailed architectural and engineering designs' },
              { step: '02', title: 'Resource Allocation', description: 'Strategic resource planning and procurement of quality materials and skilled workforce' },
              { step: '03', title: 'Construction Execution', description: 'Systematic construction with regular quality checks and safety compliance' },
              { step: '04', title: 'Quality Assurance', description: 'Final inspection, testing, and handover with comprehensive documentation' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {process.title}
                </h3>
                
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Quality Standards & Safety
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                We adhere to the highest quality standards and safety protocols in all our construction projects. 
                Our commitment to excellence ensures every structure we build meets or exceeds industry standards.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'ISO 9001:2015 Certified', description: 'Quality management system certification ensuring consistent service delivery' },
                  { title: 'Safety Compliance', description: 'Strict adherence to safety protocols and regular training programs for all personnel' },
                  { title: 'Material Quality', description: 'Use of premium quality materials from certified suppliers and regular testing' },
                  { title: 'Skilled Workforce', description: 'Experienced professionals and continuous skill development programs' }
                ].map((standard, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{standard.title}</h3>
                      <p className="text-gray-600">{standard.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '100%', label: 'Quality Assurance' },
                { value: '0', label: 'Safety Incidents' },
                { value: '150+', label: 'Completed Projects' },
                { value: '23+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can bring your construction vision to life with our expertise and dedication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Our Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;