
"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";
import { FloatingCards, FloatingCard } from "./ui/floating-cards";
import { ParticlesBackground } from "./ui/particles-background";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { motion } from "motion/react";
import { Rocket, Target, Award, TrendingUp } from "lucide-react";

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
      description: "Soluções de ponta para seu e-commerce"
    },
    {
      icon: <Target className="h-8 w-8 text-weethub-yellow" />,
      title: "Foco em Resultados",
      description: "Estratégias baseadas em dados e performance"
    },
    {
      icon: <Award className="h-8 w-8 text-weethub-yellow" />,
      title: "Qualidade Premium",
      description: "Padrão de excelência em todos os projetos"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-weethub-yellow" />,
      title: "Crescimento Sustentável",
      description: "Soluções que escalam com seu negócio"
    }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <ParticlesBackground particleCount={30} />
      
      {/* Hero com Typewriter */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transformamos ideias em{" "}
            <TypewriterEffect words={typewriterWords} />
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Criamos experiências digitais únicas que conectam sua marca aos seus clientes
          </p>
        </motion.div>

        {/* Text Reveal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <TextRevealCard
            text="E-commerce"
            revealText="Vendas que convertem"
          />
          <TextRevealCard
            text="Marketing Digital"
            revealText="Resultados mensuráveis"
          />
        </div>

        {/* Floating Cards */}
        <FloatingCards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FloatingCard key={index} delay={index * 0.2}>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            </FloatingCard>
          ))}
        </FloatingCards>
      </div>
    </section>
  );
};
