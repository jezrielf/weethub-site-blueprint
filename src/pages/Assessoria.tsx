
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Target, 
  ShoppingBag, 
  TrendingUp, 
  Truck, 
  Code, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Assessoria = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Análise e Diagnóstico",
      description: "Avaliação completa das estruturas, mercado, concorrentes, produtos e clientes para identificar oportunidades de crescimento."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Gestão e Planejamento",
      description: "Compreensão dos pontos de atenção e direcionamento estratégico da empresa com acompanhamento especializado."
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Canais de Venda",
      description: "Alinhamento e preparação de diversos canais de venda para maximizar o alcance e conversões."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Tráfego",
      description: "Criação e gestão de audiência qualificada para os canais de venda através de estratégias integradas."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logística",
      description: "Alinhamento da estrutura de entrega, separação, controle e gerenciamento eficiente de estoque."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Desenvolvimento e Tecnologia",
      description: "Atenção aos detalhes da interface e elementos que constituem os códigos da loja para máxima performance."
    }
  ];

  const benefits = [
    "Análise 360° do seu negócio e mercado",
    "Estratégias personalizadas para seu segmento",
    "Acompanhamento contínuo de resultados",
    "Equipe multidisciplinar especializada",
    "Metodologia comprovada em centenas de projetos",
    "ROI garantido através de métricas claras"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-weethub-yellow via-yellow-400 to-yellow-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Assessoria Completa
              <br />
              <span className="text-gray-800">para E-commerce</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Análise e execução de estratégias eficazes com base em estudos de mercado 
              e análise de performance para acelerar o crescimento do seu negócio digital.
            </p>
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
              <Link to="/fale-conosco">
                Solicitar Assessoria
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nossos Pilares de Assessoria
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma abordagem completa e estratégica para transformar 
              seu e-commerce em uma máquina de vendas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-weethub-yellow group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-weethub-yellow rounded-full w-fit group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-weethub-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nossa Metodologia
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um processo estruturado e comprovado para garantir 
              resultados excepcionais em todas as etapas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Benefícios da Nossa Assessoria
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-weethub-yellow flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="bg-weethub-yellow text-black hover:bg-weethub-yellow-dark">
                  <Link to="/fale-conosco">
                    Agendar Consultoria Gratuita
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-black mb-6">Processo em 4 Etapas</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-weethub-yellow rounded-full w-8 h-8 flex items-center justify-center text-black font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-black">Análise Inicial</h5>
                    <p className="text-gray-600 text-sm">Diagnóstico completo do cenário atual</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-weethub-yellow rounded-full w-8 h-8 flex items-center justify-center text-black font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-black">Estratégia</h5>
                    <p className="text-gray-600 text-sm">Desenvolvimento do plano de ação personalizado</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-weethub-yellow rounded-full w-8 h-8 flex items-center justify-center text-black font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-black">Execução</h5>
                    <p className="text-gray-600 text-sm">Implementação das estratégias definidas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-weethub-yellow rounded-full w-8 h-8 flex items-center justify-center text-black font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h5 className="font-semibold text-black">Otimização</h5>
                    <p className="text-gray-600 text-sm">Monitoramento e ajustes contínuos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para acelerar seu e-commerce?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa assessoria completa vai transformar seu negócio digital 
            e gerar resultados mensuráveis em pouco tempo.
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

export default Assessoria;
