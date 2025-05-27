
import React from 'react';
import { motion } from 'motion/react';
import { InfiniteMovingLogos } from '@/components/ui/infinite-moving-logos';

const ClientsSection = () => {
  const clients = [
    { name: "TechCorp" },
    { name: "InnovaSoft" },
    { name: "DigitalPlus" },
    { name: "SmartSolutions" },
    { name: "CloudTech" },
    { name: "DataFlow" },
    { name: "WebMaster" },
    { name: "NextGen" },
    { name: "DevCorp" },
    { name: "CodeBase" },
    { name: "TechFlow" },
    { name: "DigitalWorks" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nossos <span className="text-weethub-yellow">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas que confiam na Weethub para transformar seus negócios digitais
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <InfiniteMovingLogos
            items={clients}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="py-4"
          />
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600">
            + de <span className="font-bold text-weethub-yellow">500 clientes</span> ativos 
            em diversos segmentos de mercado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
