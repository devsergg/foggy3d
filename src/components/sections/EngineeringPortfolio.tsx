'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Wrench, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { EngineeringProject } from '@/types';
import { engineeringProjects } from '@/data/engineering-projects';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

export default function EngineeringPortfolio() {
  const [selectedProject, setSelectedProject] = useState<EngineeringProject | null>(null);

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'Coming Soon':
        return <Clock className="h-4 w-4" />;
      case 'Completed':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Wrench className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'Coming Soon':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-orange-100 text-orange-800 border-orange-200';
    }
  };

  return (
    <section id="engineering" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Engineering Solutions
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From automotive innovations to industrial solutions, we tackle complex engineering challenges 
            with precision 3D printing and creative problem-solving.
          </p>
        </div>

        {/* Featured Project Highlight */}
        {engineeringProjects.filter(p => p.featured).length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-2">
              <Wrench className="h-6 w-6 text-primary-500" />
              Featured Project
            </h3>
            {engineeringProjects
              .filter(project => project.featured)
              .map(project => (
                <div key={project.id} className="bg-white rounded-2xl border-2 border-neutral-200 p-8 shadow-lg">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Project Image */}
                    <div className="relative">
                      {project.id === 'eng-001' ? (
                        <div className="relative">
                          <PlaceholderImage 
                            title="Modular Roof Rail System"
                            subtitle="Custom spacers + Unistrut rails"
                            type="roof-rail"
                            className="w-full"
                          />
                          {project.status && (
                            <div className={`absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(project.status)}`}>
                              {getStatusIcon(project.status)}
                              {project.status}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="relative">
                          <div className="aspect-video bg-neutral-100 rounded-xl overflow-hidden">
                            <Image
                              src={project.images[0] || '/images/engineering-placeholder.jpg'}
                              alt={project.title}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {project.status && (
                            <div className={`absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(project.status)}`}>
                              {getStatusIcon(project.status)}
                              {project.status}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Project Details */}
                    <div>
                      <h4 className="text-3xl font-bold text-black mb-4">{project.title}</h4>
                      <p className="text-lg text-neutral-600 mb-6">{project.description}</p>
                      
                      {/* Key Benefits */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-black mb-3">Key Benefits:</h5>
                        <div className="space-y-2">
                          {project.solutions.slice(0, 3).map((solution, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-neutral-700">{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-black mb-3">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium border border-primary-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="bg-primary-500 text-black px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold flex items-center gap-2"
                      >
                        View Project Details
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        )}

        {/* All Projects Grid - Hidden for now */}
        {false && (
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">All Engineering Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {engineeringProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl border-2 border-neutral-200 hover:border-primary-400 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative aspect-video bg-neutral-100">
                    <Image
                      src={project.images[0] || '/images/engineering-placeholder.jpg'}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.status && (
                      <div className={`absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        {project.status}
                      </div>
                    )}
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-black mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Category */}
                    <div className="mb-4">
                      <span className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded text-sm font-medium capitalize">
                        {project.category}
                      </span>
                    </div>

                    {/* Technologies Preview */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span
                          key={index}
                          className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="text-neutral-500 text-xs px-2 py-1">
                          +{project.technologies.length - 2} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-primary-600 text-sm font-semibold group-hover:text-primary-700 transition-colors">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Have a Complex Engineering Challenge?
          </h3>
          <p className="text-lg text-neutral-800 mb-6 max-w-2xl mx-auto">
            Let's collaborate on your next innovative project. From concept to production, 
            we deliver engineered solutions that work.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-neutral-100 transition-colors font-semibold text-lg">
            Start Your Project
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-2">{selectedProject.title}</h3>
                  {selectedProject.status && (
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(selectedProject.status)}`}>
                      {getStatusIcon(selectedProject.status)}
                      {selectedProject.status}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-neutral-500 hover:text-neutral-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Project Images */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {selectedProject.images.map((image, index) => (
                  <div key={index} className="aspect-video bg-neutral-100 rounded-xl overflow-hidden">
                    <Image
                      src={image || '/images/engineering-placeholder.jpg'}
                      alt={`${selectedProject.title} ${index + 1}`}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <p className="text-lg text-neutral-600 mb-8">{selectedProject.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenges */}
                <div>
                  <h4 className="text-xl font-bold text-black mb-4">Challenges</h4>
                  <ul className="space-y-3">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="text-xl font-bold text-black mb-4">Solutions</h4>
                  <ul className="space-y-3">
                    {selectedProject.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-black mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg font-medium border border-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-primary-500 text-black px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold">
                  Discuss Similar Project
                </button>
                <button className="border-2 border-neutral-300 text-black px-6 py-3 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition-colors font-semibold">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 