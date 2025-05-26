
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-weethub-yellow rounded-md flex items-center justify-center">
                <span className="text-black font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold">weethub</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transformando negócios através de soluções digitais inteligentes e estratégicas.
              Especialistas em e-commerce, marketing digital e desenvolvimento web.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-weethub-yellow transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-weethub-yellow transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-weethub-yellow transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/assessoria" className="text-gray-300 hover:text-weethub-yellow transition-colors">
                  Assessoria Completa
                </Link>
              </li>
              <li>
                <Link to="/loja-virtual" className="text-gray-300 hover:text-weethub-yellow transition-colors">
                  Loja Virtual
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" className="text-gray-300 hover:text-weethub-yellow transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-weethub-yellow transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-weethub-yellow" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-weethub-yellow" />
                <span className="text-gray-300">contato@weethub.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-weethub-yellow mt-1" />
                <span className="text-gray-300">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Weethub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
