
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Smartphone, 
  Search, 
  CreditCard, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const LojaVirtual = () => {
  const plans = [
    {
      name: "Loja Virtual Padrão",
      price: "A partir de R$ 2.500",
      description: "Modelo validado com recursos necessários para iniciar um negócio digital.",
      features: [
        "Design responsivo",
        "Catálogo de produtos",
        "Carrinho de compras",
        "Integração com pagamentos",
        "SEO básico",
        "Suporte por 3 meses"
      ],
      recommended: false
    },
    {
      name: "Loja Virtual Master",
      price: "A partir de R$ 4.500",
      description: "Estrutura pré-planejada com elementos extras alinhados à proposta visual da marca.",
      features: [
        "Design personalizado",
        "Sistema de cupons",
        "Reviews de produtos",
        "Blog integrado",
        "SEO avançado",
        "Analytics integrado",
        "Suporte por 6 meses"
      ],
      recommended: true
    },
    {
      name: "Loja Virtual Personalizada",
      price: "Sob consulta",
      description: "Layout desenvolvido sob medida, ideal para marcas sólidas no mercado.",
      features: [
        "Design 100% personalizado",
        "Funcionalidades exclusivas",
        "Integrações customizadas",
        "Sistema de afiliados",
        "Multi-idiomas",
        "Suporte prioritário",
        "Treinamento da equipe"
      ],
      recommended: false
    }
  ];

  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Design Responsivo",
      description: "Lojas que funcionam perfeitamente em todos os dispositivos e telas."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Otimizado",
      description: "Estrutura otimizada para mecanismos de busca e melhor rankeamento."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Pagamentos Integrados",
      description: "Integração com principais gateways de pagamento do mercado."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança SSL",
      description: "Certificado de segurança e proteção completa dos dados."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Carregamento rápido e otimização para melhor experiência."
    },
    {
      icon: <Store className="h-8 w-8" />,
      title: "Gestão Completa",
      description: "Painel administrativo intuitivo para gerenciar toda a loja."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-weethub-yellow via-yellow-400 to-yellow-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Loja Virtual
              <br />
              <span className="text-gray-800">Completa e Profissional</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Soluções para construção de lojas virtuais com sistemas responsivos, 
              integração completa e otimização para mecanismos de busca.
            </p>
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
              <Link to="/fale-conosco">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Recursos e Funcionalidades
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todas as ferramentas necessárias para criar uma loja virtual 
              de sucesso e gerar vendas desde o primeiro dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-weethub-yellow group text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-weethub-yellow rounded-full w-fit group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-weethub-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nossos Planos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio e comece a vender online hoje mesmo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.recommended ? 'border-2 border-weethub-yellow scale-105' : 'border hover:border-weethub-yellow'
              }`}>
                {plan.recommended && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-weethub-yellow text-black">
                    <Star className="h-3 w-3 mr-1" />
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-weethub-yellow mt-2">{plan.price}</div>
                  <CardDescription className="mt-4">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-weethub-yellow flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className={`w-full ${
                    plan.recommended 
                      ? 'bg-weethub-yellow text-black hover:bg-weethub-yellow-dark' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}>
                    <Link to="/fale-conosco">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um processo simples e transparente para criar sua loja virtual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Briefing", description: "Entendemos suas necessidades e objetivos" },
              { step: "2", title: "Desenvolvimento", description: "Criamos sua loja com as melhores práticas" },
              { step: "3", title: "Testes", description: "Validamos todos os recursos e funcionalidades" },
              { step: "4", title: "Lançamento", description: "Sua loja entra no ar pronta para vender" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-weethub-yellow rounded-full w-16 h-16 flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para criar sua loja virtual?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado 
            para sua loja virtual profissional.
          </p>
          <Button asChild size="lg" className="bg-weethub-yellow text-black hover:bg-weethub-yellow-dark">
            <Link to="/fale-conosco">
              Falar com Especialista
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default LojaVirtual;
