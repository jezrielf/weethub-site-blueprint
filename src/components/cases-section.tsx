
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, TrendingUp, ExternalLink } from "lucide-react";

export const CasesSection = () => {
  const featuredCases = [
    {
      id: 1,
      title: "E-commerce Premium Moda",
      category: "Loja Virtual",
      description: "Desenvolvimento completo de loja virtual premium para marca de moda feminina.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      results: {
        revenue: "+250%",
        conversion: "+85%",
        period: "6 meses"
      },
      highlight: true
    },
    {
      id: 2,
      title: "App de Delivery Gourmet",
      category: "Aplicativo",
      description: "Aplicativo de delivery para restaurantes gourmet com sistema de pedidos em tempo real.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      results: {
        revenue: "+320%",
        conversion: "+110%",
        period: "4 meses"
      },
      highlight: false
    },
    {
      id: 3,
      title: "Fintech de Investimentos",
      category: "Financeiro",
      description: "Plataforma de investimentos com análise de risco e carteira diversificada.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      results: {
        revenue: "+400%",
        conversion: "+120%",
        period: "8 meses"
      },
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-weethub-yellow/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-weethub-yellow to-yellow-600">
            Cases de Sucesso
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios e geraram resultados excepcionais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredCases.map((case_, index) => (
            <motion.div
              key={case_.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={case_.highlight ? "lg:col-span-2" : ""}
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-weethub-yellow transition-all duration-300 group h-full overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={case_.image} 
                    alt={case_.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                      case_.highlight ? "h-64" : "h-48"
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-weethub-yellow text-black text-sm font-medium rounded-full">
                      {case_.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-weethub-yellow transition-colors">
                    {case_.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {case_.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-weethub-yellow">{case_.results.revenue}</div>
                      <div className="text-xs text-gray-400">Receita</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-weethub-yellow">{case_.results.conversion}</div>
                      <div className="text-xs text-gray-400">Conversão</div>
                    </div>
                  </div>
                  
                  <div className="text-center text-sm text-gray-400">
                    Resultados em {case_.results.period}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="bg-weethub-yellow text-black hover:bg-yellow-500 text-lg px-8 py-6">
            <Link to="/cases">
              Ver Todos os Cases
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
