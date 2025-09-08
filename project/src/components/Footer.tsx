import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Award } from 'lucide-react';

interface FooterProps {
  setActiveSection?: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">KM Constructions</h3>
                  <p className="text-blue-300 text-sm">Since 2001</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Building trust and tomorrow through exceptional construction services. 
                Special Class Contractor serving government departments and private clients 
                across Telangana for over two decades.
              </p>

              <div className="flex items-center space-x-2 text-yellow-400 mb-4">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Special Class Contractor</span>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-700 p-3 rounded-lg hover:bg-blue-800 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-pink-600 p-3 rounded-lg hover:bg-pink-700 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Services', id: 'services' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Media Center', id: 'media' },
                  { name: 'Contact', id: 'contact' },
                  { name: 'About Us', id: 'about' }
                ].map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => setActiveSection && setActiveSection(link.id)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group text-left"
                    >
                      <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Our Services</h4>
              <ul className="space-y-4">
                {[
                  'Building Construction',
                  'Roads & Bridges',
                  'Healthcare Facilities',
                  'Educational Buildings',
                  'Commercial Infrastructure',
                  'Government Projects',
                  'Quality Assurance'
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                      <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Ganesh Nagar, Jagtial District<br />
                      Telangana, India - 505327
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <a href="tel:+9348489369" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                      +91 9348489369
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <div>
                    <a href="mailto:kmconstructionsjagtial@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                      kmconstructionsjagtial@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30">
                <h5 className="font-semibold text-blue-300 mb-2">Business Hours</h5>
                <p className="text-gray-300 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Certified & Registered</h4>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[
                'ISO 9001:2015',
                'Special Class Contractor',
                'TGEWIDC Registered',
                'PWD Approved',
                'Quality Assurance Certified'
              ].map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 KM Constructions. All rights reserved. Building Trust Since 2001.
            </div>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                Safety Standards
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;