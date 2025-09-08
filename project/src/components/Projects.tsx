import React, { useState } from 'react';
import { Building, Users, MapPin, Calendar, Filter, Eye, X, Award, CheckCircle } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('completed');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const projectsData = {
    completed: [
      {
        id: 1,
        title: "KGBV Building at Jagtial",
        department: "TGEWIDC Department",
        location: "Jagtial District",
        year: "2023",
        status: "Completed",
        description: "Modern educational facility with state-of-the-art amenities for girl students",
        image: "https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=800",
        details: {
          keyFeatures: ["50 Rooms accommodation", "Modern dining facility", "Computer lab", "Library", "Sports facilities"],
          area: "15,000 sq ft",
          budget: "₹2.5 Crores",
          timeline: "18 months",
          certifications: ["Best Educational Infrastructure Award 2023"],
          projectImages: [
            "https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800"
          ]
        }
      },
      {
        id: 2,
        title: "MLA Camp Office Building at Korutla",
        department: "Roads & Building Department",
        location: "Jagtial District", 
        year: "2023",
        status: "Completed",
        description: "Contemporary office complex with modern administrative facilities",
        image: "https://images.pexels.com/photos/5816298/pexels-photo-5816298.jpeg?auto=compress&cs=tinysrgb&w=800",
        details: {
          keyFeatures: ["Administrative offices", "Conference halls", "Parking facility", "Modern interiors", "HVAC system"],
          area: "8,000 sq ft",
          budget: "₹1.8 Crores",
          timeline: "12 months",
          certifications: ["Quality Excellence Award"],
          projectImages: [
            "https://images.pexels.com/photos/5816298/pexels-photo-5816298.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=800"
          ]
        }
      },
      {
        id: 3,
        title: "5000MT Godown Building at Jagtial AMC",
        department: "Agriculture Marketing Department",
        location: "Jagtial District",
        year: "2023",
        status: "Completed", 
        description: "Large-scale storage facility with advanced preservation systems",
        image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
        details: {
          keyFeatures: ["Climate controlled storage", "Loading docks", "Office facility", "Security systems", "Fire safety"],
          area: "25,000 sq ft",
          budget: "₹3.2 Crores",
          timeline: "15 months",
          certifications: ["Best Infrastructure Development 2023"],
          projectImages: [
            "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1267360/pexels-photo-1267360.jpeg?auto=compress&cs=tinysrgb&w=800"
          ]
        }
      }
    ],
    ongoing: [
      {
        id: 7,
        title: "UPHC Building at Korutla",
        department: "Municipalities",
        location: "Jagtial District",
        year: "2024",
        status: "Ongoing",
        progress: 75,
        description: "Urban primary health center with modern medical equipment and facilities",
        image: "https://images.pexels.com/photos/5816301/pexels-photo-5816301.jpeg?auto=compress&cs=tinysrgb&w=800",
        details: {
          keyFeatures: ["Emergency ward", "OPD facility", "Laboratory", "Pharmacy", "Ambulance bay"],
          area: "12,000 sq ft",
          budget: "₹2.1 Crores",
          timeline: "14 months",
          certifications: [],
          projectImages: [
            "https://images.pexels.com/photos/5816301/pexels-photo-5816301.jpeg?auto=compress&cs=tinysrgb&w=800"
          ]
        }
      }
    ],
    upcoming: [
      {
        id: 10,
        title: "Development of Mango Market at Chelgal",
        department: "Agriculture Marketing Department",
        location: "Jagtial District",
        year: "2024",
        status: "Upcoming",
        description: "Specialized market facility for mango trading with cold storage",
        image: "https://images.pexels.com/photos/5816304/pexels-photo-5816304.jpeg?auto=compress&cs=tinysrgb&w=800",
        details: {
          keyFeatures: ["Cold storage facility", "Auction hall", "Loading area", "Office complex", "Parking"],
          area: "20,000 sq ft",
          budget: "₹2.8 Crores",
          timeline: "16 months",
          certifications: [],
          projectImages: [
            "https://images.pexels.com/photos/5816304/pexels-photo-5816304.jpeg?auto=compress&cs=tinysrgb&w=800"
          ]
        }
      }
    ]
  };

  const departments = [
    'all',
    'TGEWIDC Department',
    'Roads & Building Department', 
    'Panchayat Raj Department',
    'Agriculture Marketing Department',
    'Municipalities'
  ];

  const filteredProjects = selectedDepartment === 'all' 
    ? projectsData[activeTab as keyof typeof projectsData]
    : projectsData[activeTab as keyof typeof projectsData].filter(
        project => project.department === selectedDepartment
      );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Our Works</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Showcasing our portfolio of successful projects across government departments 
              and private sectors, building infrastructure that serves communities.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">140+</div>
              <div className="text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">12</div>
              <div className="text-gray-600">Ongoing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-gray-600">Upcoming</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 space-x-2">
            {['completed', 'ongoing', 'upcoming'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
              </button>
            ))}
          </div>

          {/* Department Filter */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {project.status === 'Ongoing' && 'progress' in project && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 rounded-full px-3 py-1">
                        <div className="flex items-center justify-between text-xs font-medium mb-1">
                          <span>Progress</span>
                          <span>{(project as any).progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(project as any).progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-sm text-blue-600 mb-2">
                    <Users className="w-4 h-4 mr-1" />
                    {project.department}
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>

                  <p className="text-gray-700 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <button 
                    onClick={() => openModal(project)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Projects Found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Project Highlights</h2>
            <p className="text-xl text-gray-600">Key achievements and milestones from our major projects</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Educational Excellence</h3>
              <p className="text-gray-700 mb-4">
                Built over 50+ educational facilities including KGBV buildings and government colleges 
                across multiple districts.
              </p>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Educational Projects</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Government Partnership</h3>
              <p className="text-gray-700 mb-4">
                Successful partnerships with 25+ government departments delivering critical 
                infrastructure projects.
              </p>
              <div className="text-3xl font-bold text-green-600">25+</div>
              <div className="text-gray-600">Govt Departments</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Timely Delivery</h3>
              <p className="text-gray-700 mb-4">
                Maintained 100% on-time project completion rate with zero compromise on quality 
                standards.
              </p>
              <div className="text-3xl font-bold text-yellow-600">100%</div>
              <div className="text-gray-600">On-time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can bring your construction vision to life with our proven expertise and dedication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Project Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {selectedProject.details.projectImages.map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>

                {/* Project Info Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Project Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="font-medium mr-2">Location:</span>
                        {selectedProject.location}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Users className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="font-medium mr-2">Department:</span>
                        {selectedProject.department}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="font-medium mr-2">Year:</span>
                        {selectedProject.year}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Building className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="font-medium mr-2">Area:</span>
                        {selectedProject.details.area}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Project Details</h3>
                    <div className="space-y-3">
                      <div className="text-gray-700">
                        <span className="font-medium">Budget:</span> {selectedProject.details.budget}
                      </div>
                      <div className="text-gray-700">
                        <span className="font-medium">Timeline:</span> {selectedProject.details.timeline}
                      </div>
                      <div className="text-gray-700">
                        <span className="font-medium">Status:</span> 
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${
                          selectedProject.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          selectedProject.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {selectedProject.status}
                        </span>
                      </div>
                      {(selectedProject as any).progress && (
                        <div className="text-gray-700">
                          <span className="font-medium">Progress:</span>
                          <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${(selectedProject as any).progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{(selectedProject as any).progress}%</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedProject.details.keyFeatures.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                {selectedProject.details.certifications.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Awards & Certifications</h3>
                    <div className="space-y-2">
                      {selectedProject.details.certifications.map((cert: string, index: number) => (
                        <div key={index} className="flex items-center text-gray-700">
                          <Award className="w-4 h-4 mr-2 text-yellow-600" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;