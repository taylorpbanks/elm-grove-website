import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import logoNameLight from '../assets/logo-name-light.svg';
export function Footer() {
  return (
    <footer className="bg-deepTeal text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logoNameLight} alt="Elm Grove Renovations" className="h-10" />
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Crafting beautiful, lasting living spaces in Omaha since 2020. We believe
              in quality materials, honest work, and spaces that bring people
              together.
            </p>
            <div className="flex space-x-4">
              {/*<a
                href="#"
                className="text-cream/60 hover:text-lightLime transition-colors">

                <Facebook className="h-5 w-5" />
              </a>*/}
              {/* open in a new page */}
              <a
                href="https://www.instagram.com/elmgroverenovations/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-lightLime transition-colors">

                <Instagram className="h-5 w-5" />
              </a>
             {/*<a
                href="#"
                className="text-cream/60 hover:text-lightLime transition-colors">

                <Linkedin className="h-5 w-5" />
              </a>*/}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-lightLime">
              Explore
            </h4>
            <ul className="space-y-3 text-cream/70">
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-cream transition-colors">

                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-cream transition-colors">

                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cream transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cream transition-colors">

                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-lightLime">
              Services
            </h4>
            <ul className="space-y-3 text-cream/70">
              <li>Kitchen Remodels</li>
              <li>Bathroom Renovations</li>
              <li>Home Additions</li>
              <li>Basement Finishing</li>
              <li>Outdoor Living</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-lightLime">
              Contact
            </h4>
            <ul className="space-y-4 text-cream/70">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-goldenOlive mt-0.5 flex-shrink-0" />
                <span>
                  Omaha, NE
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-goldenOlive flex-shrink-0" />
                <span>(402) 917-3857</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-goldenOlive flex-shrink-0" />
                <span>jordan@elmgroverenovations.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-cream/40">
          <p>
            © {new Date().getFullYear()} Elm Grove Renovations. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0">Crafted with care in Omaha, Nebraska.</p>
        </div>
      </div>
    </footer>);

}