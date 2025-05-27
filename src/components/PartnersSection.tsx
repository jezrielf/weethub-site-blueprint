
import React from 'react';
import { motion } from 'motion/react';

const PartnersSection = () => {
  const partners = [
    { name: "Shopify", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop" },
    { name: "WooCommerce", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop" },
    { name: "Magento", logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop" },
    { name: "Vtex", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=100&fit=crop" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=100&fit=crop" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nossos <span className="text-weethub-yellow">Parceiros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com as principais plataformas e tecnologias do mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-weethub-yellow/10 to-weethub-yellow/20 rounded-xl flex items-center justify-center group-hover:from-weethub-yellow/20 group-hover:to-weethub-yellow/30 transition-all">
                  <span className="text-3xl font-bold text-weethub-yellow">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-weethub-yellow transition-colors">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Parcerias Estratégicas
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mantemos parcerias oficiais com as principais plataformas de e-commerce 
              e ferramentas de marketing digital, garantindo sempre as melhores soluções 
              e suporte técnico especializado para nossos clientes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
