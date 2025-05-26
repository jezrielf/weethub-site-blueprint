
"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";
import { FloatingCards, FloatingCard } from "./ui/floating-cards";
import { ParticlesBackground } from "./ui/particles-background";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { motion } from "motion/react";
import { Rocket, Target, Award, TrendingUp, Zap, Globe } from "lucide-react";

export const ModernEffectsDemo = () => {
  const typewriterWords = [
    { text: "inovação", className: "text-weethub-yellow" },
    { text: "excelência", className: "text-weethub-yellow" },
    { text: "resultados", className: "text-weethub-yellow" },
    { text: "sucesso", className: "text-weethub-yellow" },
  ];

  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-weethub-yellow" />,
      title: "Tecnologia Avançada",
      description: "Soluções de ponta para seu e-commerce",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Target className="h-8 w-8 text-weethub-yellow" />,
      title: "Foco em Resultados",
      description: "Estratégias baseadas em dados e performance",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Award className="h-8 w-8 text-weethub-yellow" />,
      title: "Qualidade Premium",
      description: "Padrão de excelência em todos os projetos",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-weethub-yellow" />,
      title: "Crescimento Sustentável",
      description: "Soluções que escalam com seu negócio",
      gradient: "from-pink-500/20 to-red-500/20"
    },
    {
      icon: <Zap className="h-8 w-8 text-weethub-yellow" />,
      title: "Performance Otimizada",
      description: "Velocidade e eficiência em cada detalhe",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: <Globe className="h-8 w-8 text-weethub-yellow" />,
      title: "Alcance Global",
      description: "Conectando seu negócio ao mundo",
      gradient: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <ParticlesBackground particleCount={40} />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-weethub-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>
      
      {/* Hero com Typewriter */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="px-4 py-2 bg-weethub-yellow/20 border border-weethub-yellow/30 rounded-full text-weethub-yellow text-sm font-medium">
              ✨ Transformação Digital
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transformamos ideias em{" "}
            <div className="mt-2">
              <TypewriterEffect words={typewriterWords} />
            </div>
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Criamos experiências digitais únicas que conectam sua marca aos seus clientes
            e impulsionam o crescimento do seu negócio
          </motion.p>
        </motion.div>

        {/* Text Reveal Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TextRevealCard
            text="E-commerce"
            revealText="Vendas que convertem"
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <TextRevealCard
            text="Marketing Digital"
            revealText="Resultados mensuráveis"
            className="transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Enhanced Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Nossos <span className="text-weethub-yellow">Diferenciais</span>
          </h2>
          <FloatingCards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FloatingCard key={index} delay={index * 0.15} className="group">
                <div className="text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
                  <div className="relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-gradient-to-r from-weethub-yellow/20 to-yellow-500/20 rounded-full backdrop-blur-sm border border-weethub-yellow/30">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-weethub-yellow transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </FloatingCards>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-weethub-yellow to-yellow-500 text-black font-bold rounded-full hover:from-yellow-500 hover:to-weethub-yellow transition-all duration-300 shadow-lg hover:shadow-weethub-yellow/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Descubra Nosso Potencial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
