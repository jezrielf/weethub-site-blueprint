
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
  Globe,
  Award,
  Rocket,
  Star
} from 'lucide-react';
import { GoogleGeminiEffectDemo } from '@/components/google-gemini-effect-demo';

const Index = () => {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Assessoria Completa",
      description: "Analisamos cada aspecto do seu negócio online, identificando oportunidades de melhoria e implementando estratégias eficazes baseadas em estudos de mercado e análise de performance.",
      link: "/assessoria"
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Lojas Virtuais Personalizadas",
      description: "Desenvolvemos lojas virtuais otimizadas e prontas para vender, integradas com as melhores plataformas e servidores do país.",
      link: "/loja-virtual"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Consultoria de Vendas Online",
      description: "Oferecemos consultoria especializada para aprimorar suas estratégias de vendas online com métodos validados no mercado digital.",
      link: "/blog"
    }
  ];

  const results = [
    { value: "112%", label: "Crescimento no faturamento em 30 dias" },
    { value: "93%", label: "Aumento no número de pedidos" },
    { value: "15%", label: "Incremento no ticket médio" },
    { value: "R$50k+", label: "Projetos mensais de alto valor" }
  ];

  const benefits = [
    "Mais de 20 anos de experiência no mercado digital",
    "Metodologia baseada em dados e performance",
    "Parcerias com as principais plataformas do mercado",
    "Resultados comprovados em projetos de alto valor",
    "Equipe especializada em BI, CRM, SEO e CRO",
    "Suporte completo do planejamento à execução"
  ];

  const partners = [
    "Nuvemshop", "Google Ads", "Facebook Ads", "RD Station", "Mailchimp"
  ];

  return (
    <Layout>
      {/* Hero Section with Google Gemini Effect */}
      <section className="bg-black text-white relative overflow-hidden">
        <GoogleGeminiEffectDemo />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-weethub-yellow to-yellow-600">
              Nossas Soluções Estratégicas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções completas para transformar sua presença digital
              e gerar resultados excepcionais em projetos de alto valor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-weethub-yellow transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-weethub-yellow rounded-full w-fit group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300 mb-6">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full border-weethub-yellow text-weethub-yellow hover:bg-weethub-yellow hover:text-black">
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

      {/* Results Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-weethub-yellow to-yellow-600">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empresas que confiaram na Weethub alcançaram resultados significativos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-weethub-yellow transition-colors">
                <div className="text-4xl font-bold text-weethub-yellow mb-2">{result.value}</div>
                <div className="text-gray-300">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-weethub-yellow to-yellow-600">
                Metodologia Baseada em Dados e Performance
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Nossa abordagem é fundamentada em dados concretos e análise de performance. 
                Utilizamos ferramentas avançadas de BI, CRM, SEO, CRO e tráfego pago para 
                tomar decisões estratégicas que impulsionam o crescimento do seu e-commerce.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-weethub-yellow flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-black rounded-lg border border-gray-800">
                <Award className="h-8 w-8 text-weethub-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-gray-400">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-black rounded-lg border border-gray-800">
                <Rocket className="h-8 w-8 text-weethub-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400">Projetos Entregues</div>
              </div>
              <div className="text-center p-6 bg-black rounded-lg border border-gray-800">
                <Users className="h-8 w-8 text-weethub-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">300+</div>
                <div className="text-gray-400">Clientes Ativos</div>
              </div>
              <div className="text-center p-6 bg-black rounded-lg border border-gray-800">
                <Star className="h-8 w-8 text-weethub-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-gray-400">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-weethub-yellow to-yellow-600">
            Parcerias Estratégicas
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Somos parceiros das principais plataformas e ferramentas do mercado, 
            garantindo soluções integradas e eficientes para o seu negócio
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-900 px-6 py-3 rounded-lg border border-gray-800 hover:border-weethub-yellow transition-colors">
                <span className="text-gray-300 font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-weethub-yellow to-yellow-600 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para levar seu e-commerce ao próximo nível?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato com nossos especialistas e descubra como a Weethub 
            pode transformar seu negócio digital em uma história de sucesso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
              <Link to="/fale-conosco">
                Fale com Nossos Especialistas
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
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-weethub-yellow">Endereço</h3>
              <p className="text-gray-300">
                Av. Cel. Júlio Ribeiro Gontijo, Nº 321<br />
                Bairro Esplanada, Divinópolis - MG - Brasil
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-weethub-yellow">CNPJ</h3>
              <p className="text-gray-300">04.256.242/0001-00</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
