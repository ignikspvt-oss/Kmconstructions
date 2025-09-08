import React, { useState } from 'react';
import { X, ZoomIn, ExternalLink } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'all',
    'educational',
    'healthcare',
    'commercial',
    'government',
    'infrastructure'
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: 'educational',
      title: 'KGBV Building Construction',
      description: 'Modern educational facility under construction'
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/5816298/pexels-photo-5816298.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: 'government',
      title: 'MLA Camp Office Complex',
      description: 'Contemporary government office building'
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: 'commercial',
      title: 'Storage Facility Construction',
      description: '5000MT capacity godown facility'
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: 'healthcare',
      title: 'Primary Health Center',
      description: 'PHC building with modern medical facilities'
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: 'educational',
      title: 'Government College Building',
      description: 'Multi-story college complex'
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/5816300/pexels-photo-5816300.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: 'commercial',
      title: 'Rythu Bazar Market',
      description: 'Modern market facility for farmers'
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/5816301/pexels-photo-5816301.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: 'healthcare',
      title: 'Urban Health Center',
      description: 'UPHC building construction progress'
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/5816302/pexels-photo-5816302.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: 'commercial',
      title: 'Commercial Complex',
      description: 'Shopping and office complex'
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/5816303/pexels-photo-5816303.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: 'infrastructure',
      title: 'Bridge Construction',
      description: 'Connecting communities through infrastructure'
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/5816304/pexels-photo-5816304.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: 'commercial',
      title: 'Mango Market Development',
      description: 'Specialized agricultural market facility'
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/5816305/pexels-photo-5816305.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: 'educational',
      title: 'Teacher Training Center',
      description: 'Professional development facility'
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: 'infrastructure',
      title: 'Road Construction',
      description: 'Quality road infrastructure development'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Project Gallery</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Visual journey through our construction excellence - from groundbreaking to completion, 
              showcasing the quality and craftsmanship in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
                {category === 'all' && ' Projects'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    index % 7 === 0 ? 'h-96 md:h-full' : 'h-64'
                  }`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                  </div>
                  
                  <div className="absolute top-4 right-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <ZoomIn className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Images Found</h3>
              <p className="text-gray-500">Try selecting a different category to view images.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Gallery Statistics</h2>
            <p className="text-xl text-gray-600">Visual documentation of our construction excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700">Project Photos</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-700">Video Documentation</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl">
              <div className="text-4xl font-bold text-yellow-600 mb-2">25+</div>
              <div className="text-gray-700">Drone Footage</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-700">Before & After</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-4">
              <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-200 flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>View Full Size</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Want to See More?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Visit our project sites or schedule a tour to see our construction excellence in person.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Schedule Site Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;