
import React from 'react';
import { motion } from 'motion/react';

const ClientsSection = () => {
  const clients = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop" },
    { name: "InnovaSoft", logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop" },
    { name: "DigitalPlus", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop" },
    { name: "SmartSolutions", logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=100&fit=crop" },
    { name: "CloudTech", logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=100&fit=crop" },
    { name: "DataFlow", logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop" },
    { name: "WebMaster", logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop" },
    { name: "NextGen", logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=100&fit=crop" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-weethub-yellow/10 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-weethub-yellow/20 transition-colors">
                  <span className="text-2xl font-bold text-gray-600 group-hover:text-weethub-yellow">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600">
            + de <span className="font-bold text-weethub-yellow">300 clientes</span> ativos 
            em diversos segmentos de mercado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
