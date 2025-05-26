
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, TrendingUp, ShoppingCart, Users } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      id: 1,
      title: "E-commerce Premium Moda",
      category: "Loja Virtual",
      description: "Desenvolvimento completo de loja virtual premium para marca de moda feminina com integração de pagamentos e gestão de estoque.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      results: {
        revenue: "+250%",
        conversion: "+85%",
        traffic: "+150%"
      },
      technologies: ["Shopify", "Google Ads", "Facebook Ads", "Mailchimp"],
      link: "#"
    },
    {
      id: 2,
      title: "Marketplace B2B Industrial",
      category: "Plataforma",
      description: "Criação de marketplace B2B para equipamentos industriais com sistema de cotações e gestão de fornecedores.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      results: {
        revenue: "+180%",
        conversion: "+92%",
        traffic: "+200%"
      },
      technologies: ["Custom Platform", "CRM Integration", "API Rest", "Analytics"],
      link: "#"
    },
    {
      id: 3,
      title: "App de Delivery Gourmet",
      category: "Aplicativo",
      description: "Desenvolvimento de aplicativo de delivery para restaurantes gourmet com sistema de pedidos em tempo real.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      results: {
        revenue: "+320%",
        conversion: "+110%",
        traffic: "+280%"
      },
      technologies: ["React Native", "Node.js", "PostgreSQL", "Payment Gateway"],
      link: "#"
    },
    {
      id: 4,
      title: "Portal Educacional Online",
      category: "Educação",
      description: "Plataforma completa de ensino online com sistema de videoaulas, exercícios interativos e acompanhamento de progresso.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      results: {
        revenue: "+190%",
        conversion: "+75%",
        traffic: "+160%"
      },
      technologies: ["LMS Custom", "Video Streaming", "Gamification", "Analytics"],
      link: "#"
    },
    {
      id: 5,
      title: "Sistema de Gestão Hospitalar",
      category: "Saúde",
      description: "Sistema completo de gestão hospitalar com prontuário eletrônico, agendamentos e controle de estoque médico.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      results: {
        revenue: "+150%",
        conversion: "+95%",
        traffic: "+120%"
      },
      technologies: ["Custom System", "Database Security", "LGPD Compliance", "Integration"],
      link: "#"
    },
    {
      id: 6,
      title: "Fintech de Investimentos",
      category: "Financeiro",
      description: "Plataforma de investimentos com análise de risco, carteira diversificada e relatórios automáticos para investidores.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      results: {
        revenue: "+400%",
        conversion: "+120%",
        traffic: "+350%"
      },
      technologies: ["Blockchain", "AI Analytics", "Security", "Real-time Data"],
      link: "#"
    }
  ];

  const categories = ["Todos", "Loja Virtual", "Plataforma", "Aplicativo", "Educação", "Saúde", "Financeiro"];
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");

  const filteredCases = selectedCategory === "Todos" 
    ? cases 
    : cases.filter(case_ => case_.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-weethub-yellow to-yellow-600">
              Nossos Cases de Sucesso
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Conheça os projetos que transformaram negócios e geraram resultados excepcionais
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-weethub-yellow text-black hover:bg-yellow-500"
                    : "border-weethub-yellow text-weethub-yellow hover:bg-weethub-yellow hover:text-black"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((case_, index) => (
              <motion.div
                key={case_.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-weethub-yellow transition-all duration-300 group h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={case_.image} 
                      alt={case_.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-weethub-yellow text-black text-sm font-medium rounded-full">
                        {case_.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-weethub-yellow transition-colors">
                      {case_.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {case_.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-weethub-yellow">{case_.results.revenue}</div>
                        <div className="text-xs text-gray-400">Receita</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-weethub-yellow">{case_.results.conversion}</div>
                        <div className="text-xs text-gray-400">Conversão</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-weethub-yellow">{case_.results.traffic}</div>
                        <div className="text-xs text-gray-400">Tráfego</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="text-sm font-medium text-gray-300 mb-2">Tecnologias:</div>
                      <div className="flex flex-wrap gap-2">
                        {case_.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="w-full bg-transparent border-weethub-yellow text-weethub-yellow hover:bg-weethub-yellow hover:text-black">
                      <Link to={case_.link}>
                        Ver Detalhes
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-weethub-yellow to-yellow-600 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para ser nosso próximo case de sucesso?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Vamos conversar sobre como podemos transformar seu negócio digital
            </p>
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6">
              <Link to="/fale-conosco">
                Iniciar Projeto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Cases;
