'use client';

import { useState } from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { processSteps } from '@/data/process-steps';

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Our Design & Print Process
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From initial concept to finished product, we guide you through every step of the journey 
            with professional expertise and clear communication.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 -translate-y-1/2 z-0">
                <div 
                  className="h-full bg-primary-500 transition-all duration-1000 ease-out"
                  style={{ width: `${((activeStep - 1) / (processSteps.length - 1)) * 100}%` }}
                />
              </div>

              {/* Step Circles */}
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="relative z-10 cursor-pointer"
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 border-4
                    ${step.id <= activeStep 
                      ? 'bg-primary-500 border-primary-600 text-black shadow-lg scale-110' 
                      : 'bg-white border-neutral-300 text-neutral-400 hover:border-primary-400'
                    }
                  `}>
                    {step.id <= activeStep ? (
                      step.id < activeStep ? <CheckCircle className="h-8 w-8" /> : step.icon
                    ) : (
                      step.id
                    )}
                  </div>
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
                    <h3 className={`font-bold text-sm whitespace-nowrap transition-colors ${
                      step.id === activeStep ? 'text-primary-600' : 'text-neutral-600'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  step.id === activeStep 
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-neutral-200 bg-white hover:border-primary-300'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 border-2
                  ${step.id <= activeStep 
                    ? 'bg-primary-500 border-primary-600 text-black' 
                    : 'bg-white border-neutral-300 text-neutral-400'
                  }
                `}>
                  {step.id <= activeStep ? (
                    step.id < activeStep ? <CheckCircle className="h-6 w-6" /> : step.icon
                  ) : (
                    step.id
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold transition-colors ${
                    step.id === activeStep ? 'text-primary-600' : 'text-neutral-800'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{step.description}</p>
                </div>
                {step.id === activeStep && (
                  <ChevronRight className="h-5 w-5 text-primary-600" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="bg-neutral-50 rounded-2xl p-8 border-2 border-neutral-200">
          {processSteps.map((step) => (
            step.id === activeStep && (
              <div key={step.id} className="space-y-6">
                {/* Step Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center text-3xl">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-primary-600 font-semibold mb-1">
                      Step {step.id} of {processSteps.length}
                    </div>
                    <h3 className="text-3xl font-bold text-black">{step.title}</h3>
                    <p className="text-lg text-neutral-600 mt-2">{step.description}</p>
                  </div>
                </div>

                {/* Step Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-black mb-4">What We Do:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-black mb-4">What You Can Expect:</h4>
                    <div className="space-y-3">
                      {step.id === 1 && (
                        <div className="space-y-2">
                          <p className="text-neutral-700">• Clear communication about project scope and feasibility</p>
                          <p className="text-neutral-700">• Honest timeline and cost estimates</p>
                          <p className="text-neutral-700">• Professional guidance on material and design choices</p>
                          <p className="text-neutral-700">• Flexible meeting options (call or in-person)</p>
                        </div>
                      )}
                      {step.id === 2 && (
                        <div className="space-y-2">
                          <p className="text-neutral-700">• Professional Fusion 360 CAD models</p>
                          <p className="text-neutral-700">• High-quality 3D renderings for visualization</p>
                          <p className="text-neutral-700">• Multiple design iterations until you're satisfied</p>
                          <p className="text-neutral-700">• Design optimized for 3D printing success</p>
                        </div>
                      )}
                      {step.id === 3 && (
                        <div className="space-y-2">
                          <p className="text-neutral-700">• Bambu Lab printer precision and reliability</p>
                          <p className="text-neutral-700">• Optimal material selection for your application</p>
                          <p className="text-neutral-700">• Real-time updates on printing progress</p>
                          <p className="text-neutral-700">• Quality monitoring throughout the process</p>
                        </div>
                      )}
                      {step.id === 4 && (
                        <div className="space-y-2">
                          <p className="text-neutral-700">• Professional finishing to your specifications</p>
                          <p className="text-neutral-700">• Thorough quality inspection before delivery</p>
                          <p className="text-neutral-700">• Convenient local pickup in SF Bay Area</p>
                          <p className="text-neutral-700">• Secure packaging for nationwide shipping</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
                  <button
                    onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                    disabled={activeStep === 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      activeStep === 1 
                        ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed' 
                        : 'bg-neutral-300 text-neutral-700 hover:bg-neutral-400'
                    }`}
                  >
                    ← Previous Step
                  </button>

                  <div className="flex gap-2">
                    {processSteps.map((step) => (
                      <button
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          step.id === activeStep ? 'bg-primary-500' : 'bg-neutral-300'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveStep(Math.min(processSteps.length, activeStep + 1))}
                    disabled={activeStep === processSteps.length}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      activeStep === processSteps.length 
                        ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed' 
                        : 'bg-primary-500 text-black hover:bg-primary-600'
                    }`}
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-black mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-neutral-800 mb-6 max-w-2xl mx-auto">
              Our streamlined process ensures quality results and clear communication every step of the way. 
              Let's bring your ideas to life!
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-neutral-100 transition-colors font-semibold text-lg"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 