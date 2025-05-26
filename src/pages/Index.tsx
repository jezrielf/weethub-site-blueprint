
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Target,
  TrendingUp,
  Globe
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Assessoria Completa",
      description: "Análise e execução de estratégias eficazes baseadas em estudos de mercado e performance.",
      link: "/assessoria"
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Loja Virtual",
      description: "Soluções completas para e-commerce com sistemas responsivos e otimizados para conversão.",
      link: "/loja-virtual"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Marketing Digital",
      description: "Estratégias integradas de marketing para aumentar sua presença online e gerar resultados.",
      link: "/blog"
    }
  ];

  const benefits = [
    "Mais de 20 anos de experiência no mercado digital",
    "Equipe especializada em e-commerce e marketing",
    "Metodologia comprovada para acelerar resultados",
    "Suporte completo do planejamento à execução"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-weethub-yellow via-yellow-400 to-yellow-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Transforme seu negócio
              <br />
              <span className="text-gray-800">no mundo digital</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Soluções completas em e-commerce, marketing digital e desenvolvimento web 
              para acelerar o crescimento da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
                <Link to="/fale-conosco">
                  Fale Conosco
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                <Link to="/sobre-nos">
                  Conheça Nossa História
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para transformar sua presença digital
              e acelerar o crescimento do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-weethub-yellow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-weethub-yellow rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link}>
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-weethub-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Por que escolher a Weethub?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa experiência e metodologia comprovada garantem resultados 
                excepcionais para nossos clientes.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-weethub-yellow flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <TrendingUp className="h-8 w-8 text-weethub-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-black">500+</div>
                <div className="text-gray-600">Projetos Entregues</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Users className="h-8 w-8 text-weethub-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-black">20+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Globe className="h-8 w-8 text-weethub-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-black">300+</div>
                <div className="text-gray-600">Clientes Ativos</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Zap className="h-8 w-8 text-weethub-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-black">98%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos acelerar 
            o crescimento da sua empresa no mundo digital.
          </p>
          <Button asChild size="lg" className="bg-weethub-yellow text-black hover:bg-weethub-yellow-dark">
            <Link to="/fale-conosco">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
