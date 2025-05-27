
"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function TestimonialsDemo() {
  return (
    <div className="py-20 bg-black overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          O que nossos clientes dizem
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Depoimentos reais de empresas que transformaram seus negócios com a Weethub
        </p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "A Weethub transformou completamente nossa loja virtual. Em apenas 3 meses, nossas vendas aumentaram 200% e nossa conversão triplicou. A equipe é excepcional!",
    name: "Maria Silva",
    title: "CEO, Fashion Store Premium",
  },
  {
    quote: "Trabalhar com a Weethub foi a melhor decisão que tomamos. O suporte é incrível e os resultados superaram todas as nossas expectativas. Recomendo fortemente!",
    name: "João Santos",
    title: "Diretor Comercial, TechMart",
  },
  {
    quote: "A expertise da Weethub em e-commerce é impressionante. Eles não apenas criaram nossa loja, mas nos ensinaram como otimizar cada aspecto do negócio digital.",
    name: "Ana Costa",
    title: "Proprietária, Cosmética Natural",
  },
  {
    quote: "Desde que começamos a trabalhar com a Weethub, nosso faturamento mensal aumentou 300%. O ROI foi muito além do que esperávamos. Parceria de sucesso!",
    name: "Carlos Mendes",
    title: "Fundador, SportLife Online",
  },
  {
    quote: "A Weethub entende realmente do mercado digital. Sua metodologia baseada em dados nos ajudou a tomar decisões estratégicas que impulsionaram nosso crescimento.",
    name: "Fernanda Lima",
    title: "CMO, GourmetPlace",
  },
];
