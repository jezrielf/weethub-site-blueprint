
import React from 'react';
import { motion } from 'motion/react';
import { InfiniteMovingLogos } from '@/components/ui/infinite-moving-logos';

const PartnersSection = () => {
  const partners = [
    { name: "Shopify" },
    { name: "WooCommerce" },
    { name: "Magento" },
    { name: "Vtex" },
    { name: "Google" },
    { name: "Meta" },
    { name: "AWS" },
    { name: "Mercado Livre" },
    { name: "PagSeguro" },
    { name: "PayPal" },
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <InfiniteMovingLogos
            items={partners}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="py-4"
          />
        </motion.div>

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
