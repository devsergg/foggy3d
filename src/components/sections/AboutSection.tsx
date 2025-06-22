'use client';

import { Wrench, Heart, Lightbulb, Target, Users, MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            About Foggy3D
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Born in a San Francisco garage, driven by a passion for solving problems across industries and disciplines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Content */}
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">
              A Cross-Disciplinary Problem Solver
            </h3>
            <div className="space-y-6 text-lg text-neutral-700">
              <p>
                My journey into 3D printing began with a simple belief: <strong>every problem has a solution</strong>, 
                you just need to approach it from the right angle. My background spans automotive engineering, 
                woodworking, prototyping, and even software development for neuroscience research.
              </p>
              
              <p>
                This diverse experience isn&apos;t scattered expertise—it&apos;s my secret weapon. When a client brings me 
                a challenge, I can draw from automotive precision, woodworking craftsmanship, research methodology, 
                and digital innovation to create solutions others might miss.
              </p>
              
              <p>
                Whether it&apos;s engineering a cost-effective roof rail system that combines 3D printed spacers with 
                unistrut rails, or creating a custom jig that solves a unique manufacturing problem, 
                I bring a <strong>multi-industry perspective</strong> to every project.
              </p>
            </div>
          </div>

          {/* Visual/Stats */}
          <div className="bg-white rounded-2xl p-8 border-2 border-neutral-200 shadow-lg">
            <h4 className="text-2xl font-bold text-black mb-6 text-center">
              Why Cross-Disciplinary Matters
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Wrench className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h5 className="font-bold text-black mb-1">Automotive Precision</h5>
                  <p className="text-neutral-600 text-sm">Engineering mindset focused on durability, safety, and real-world performance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h5 className="font-bold text-black mb-1">Woodworking Craftsmanship</h5>
                  <p className="text-neutral-600 text-sm">Attention to detail, material understanding, and traditional making skills</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h5 className="font-bold text-black mb-1">Research Background</h5>
                  <p className="text-neutral-600 text-sm">Scientific approach to problem-solving and systematic iteration</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h5 className="font-bold text-black mb-1">3D Printing Innovation</h5>
                  <p className="text-neutral-600 text-sm">Modern prototyping capabilities with traditional engineering principles</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SF Story */}
        <div className="bg-white rounded-2xl p-8 border-2 border-neutral-200 shadow-lg mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary-500 p-4 rounded-xl">
              <Heart className="h-8 w-8 text-black" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black">The San Francisco Story</h3>
              <p className="text-lg text-neutral-600">Where it all began</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-neutral-700 mb-4">
                Foggy3D was born in a San Francisco garage workshop, surrounded by countless hours of tinkering, 
                designing, and problem-solving. There&apos;s something magical about SF&apos;s maker culture—the belief 
                that with enough creativity and determination, you can build anything.
              </p>
              
              <p className="text-lg text-neutral-700">
                The entrepreneurial spirit of this city inspired me to turn my passion for building and creating 
                into something more. Every foggy morning reminds me why I chose this path: to help others bring 
                their ideas to life, just like this city helped shape mine.
              </p>
            </div>
            
            <div className="bg-neutral-50 rounded-xl p-6">
              <h4 className="font-bold text-black mb-4">Why Local Matters</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Same-day consultations and pickups</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Understanding of local tech and startup needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Part of the SF maker and innovation community</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Supporting local entrepreneurs and creators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission & Approach */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-black mb-6">My Mission</h3>
          <p className="text-xl text-neutral-700 max-w-4xl mx-auto mb-8">
            To bridge the gap between <strong>creative vision</strong> and <strong>functional reality</strong>. 
            Whether you&apos;re an entrepreneur with a breakthrough idea, an engineer facing a unique challenge, 
            or someone who simply wants to create something beautiful—I&apos;m here to help you build it.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-bold text-black mb-2">Innovation First</h4>
              <p className="text-neutral-600">Every challenge is an opportunity to innovate and create something better.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-bold text-black mb-2">Quality Focus</h4>
              <p className="text-neutral-600">Attention to detail and commitment to excellence in every project.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-bold text-black mb-2">Collaborative Spirit</h4>
              <p className="text-neutral-600">Working together to turn your vision into reality, step by step.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-black mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-neutral-800 mb-6 max-w-2xl mx-auto">
              Let&apos;s combine your vision with my cross-disciplinary expertise to create solutions that work. 
              From garage workshop to your project—let&apos;s build it together.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-neutral-100 transition-colors font-semibold text-lg"
            >
              Start Our Collaboration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 