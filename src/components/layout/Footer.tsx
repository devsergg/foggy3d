import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/images/Foggy_logo.png"
                alt="Foggy3D Logo"
                width={150}
                height={75}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              Bridging creativity and functionality through precision 3D printing. 
              From artistic trinkets to custom engineering solutions, we bring your ideas to life.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-neutral-300">
                <MapPin className="h-5 w-5 text-primary-500" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <Mail className="h-5 w-5 text-primary-500" />
                <span>hello@foggy3d.com</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <Phone className="h-5 w-5 text-primary-500" />
                <span>(555) 123-PRINT</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-neutral-300 hover:text-primary-500 transition-colors">
                  Creative Collections
                </a>
              </li>
              <li>
                <a href="#engineering" className="text-neutral-300 hover:text-primary-500 transition-colors">
                  Engineering Projects
                </a>
              </li>
              <li>
                <a href="#process" className="text-neutral-300 hover:text-primary-500 transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-primary-500 transition-colors">
                  Custom Work
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-neutral-300">3D Printing</span>
              </li>
              <li>
                <span className="text-neutral-300">Custom Design</span>
              </li>
              <li>
                <span className="text-neutral-300">Prototyping</span>
              </li>
              <li>
                <span className="text-neutral-300">Engineering Solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Foggy3D. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-neutral-400 hover:text-primary-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-primary-500 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 