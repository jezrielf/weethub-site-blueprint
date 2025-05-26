
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  Calendar
} from 'lucide-react';

const SobreNos = () => {
  const timeline = [
    {
      year: "2001",
      title: "Fundação da Onlinesites",
      description: "Início das atividades focado em desenvolvimento web e soluções digitais."
    },
    {
      year: "2010",
      title: "Expansão E-commerce",
      description: "Especialização em lojas virtuais e marketing digital para vendas online."
    },
    {
      year: "2015",
      title: "Consolidação no Mercado",
      description: "Mais de 200 projetos entregues e reconhecimento no setor."
    },
    {
      year: "2021",
      title: "Transformação em Weethub",
      description: "Rebranding completo e foco em soluções integradas de e-commerce."
    },
    {
      year: "2024",
      title: "Liderança Digital",
      description: "Mais de 500 projetos e posição de destaque no mercado brasileiro."
    }
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Colaboração",
      description: "Trabalhamos como uma extensão da sua equipe, sempre em parceria."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Orientação de Negócios",
      description: "Cada decisão é tomada pensando no crescimento do seu negócio."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Aceleração de Resultados",
      description: "Metodologias comprovadas para gerar resultados rápidos e sustentáveis."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Decisões Baseadas em Dados",
      description: "Utilizamos analytics e métricas para otimizar continuamente."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-weethub-yellow via-yellow-400 to-yellow-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Nossa História
              <br />
              <span className="text-gray-800">e Propósito</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Mais de 20 anos transformando negócios através de soluções digitais 
              inteligentes e estratégicas, sempre focados em resultados excepcionais.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-2 hover:border-weethub-yellow transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-weethub-yellow rounded-full w-fit">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Transformar negócios através de soluções digitais inovadoras, 
                  integrando conhecimentos técnicos e estratégicos para acelerar 
                  o crescimento de nossos clientes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-weethub-yellow transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-weethub-yellow rounded-full w-fit">
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Ser a principal referência em soluções digitais integradas, 
                  reconhecida pela excelência em resultados e pela capacidade 
                  de transformar desafios em oportunidades.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-weethub-yellow transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-weethub-yellow rounded-full w-fit">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Colaboração genuína, orientação para resultados, 
                  inovação constante e transparência em todas as nossas 
                  relações e processos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-weethub-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nossa Trajetória
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mais de duas décadas de evolução e crescimento no mercado digital.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-weethub-yellow"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <Calendar className="h-5 w-5 text-weethub-yellow mr-2" />
                          <span className="text-weethub-yellow font-bold text-lg">{item.year}</span>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-weethub-yellow rounded-full border-4 border-white shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam todas as nossas ações e decisões.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-weethub-yellow group">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-weethub-yellow rounded-full w-fit group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Números que Falam por Si
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Resultados concretos construídos ao longo de mais de duas décadas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-weethub-yellow mb-2">500+</div>
              <div className="text-gray-300">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-weethub-yellow mb-2">20+</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-weethub-yellow mb-2">300+</div>
              <div className="text-gray-300">Clientes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-weethub-yellow mb-2">98%</div>
              <div className="text-gray-300">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-weethub-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Quer fazer parte da nossa história?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos 
            transformar seu negócio digital juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-weethub-yellow text-black hover:bg-weethub-yellow-dark">
              <Link to="/fale-conosco">
                Fale Conosco
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/trabalhe-conosco">
                Trabalhe Conosco
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SobreNos;
