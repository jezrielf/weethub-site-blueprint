import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ShoppingCart, BarChart3, Users, CheckCircle, ArrowRight, Target, Award, Rocket, Star } from 'lucide-react';
import { CasesSection } from '@/components/cases-section';
import { Spotlight } from '@/components/ui/spotlight';
import { FlipWords } from '@/components/ui/flip-words';
import { motion } from 'motion/react';
import HeroParallaxDemo from '@/components/hero-parallax-demo';
import TestimonialsDemo from '@/components/testimonials-demo';
import { SignupForm } from '@/components/ui/signup-form';
import { BackgroundLines } from '@/components/ui/background-lines';
import ClientsSection from '@/components/ClientsSection';
import PartnersSection from '@/components/PartnersSection';
const Index = () => {
  const words = ["Excelência", "Inovação", "Performance", "Resultados"];
  const services = [{
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Assessoria Completa",
    description: "Analisamos cada aspecto do seu negócio online, identificando oportunidades de melhoria e implementando estratégias eficazes baseadas em estudos de mercado.",
    link: "/assessoria"
  }, {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "Lojas Virtuais Premium",
    description: "Desenvolvemos lojas virtuais otimizadas e prontas para vender, integradas com as melhores plataformas do país.",
    link: "/loja-virtual"
  }, {
    icon: <Target className="h-8 w-8" />,
    title: "Consultoria de Vendas",
    description: "Oferecemos consultoria especializada para aprimorar suas estratégias de vendas online com métodos validados.",
    link: "/blog"
  }];
  const results = [{
    value: "112%",
    label: "Crescimento no faturamento em 30 dias"
  }, {
    value: "93%",
    label: "Aumento no número de pedidos"
  }, {
    value: "15%",
    label: "Incremento no ticket médio"
  }, {
    value: "R$50k+",
    label: "Projetos mensais de alto valor"
  }];
  const benefits = ["Mais de 20 anos de experiência no mercado digital", "Metodologia baseada em dados e performance", "Parcerias com as principais plataformas do mercado", "Resultados comprovados em projetos de alto valor", "Equipe especializada em BI, CRM, SEO e CRO", "Suporte completo do planejamento à execução"];
  return <Layout>
      {/* Hero Section with BackgroundLines, Spotlight and FlipWords */}
      <section className="relative min-h-screen overflow-hidden">
        <BackgroundLines className="min-h-screen bg-black/[0.96] text-white">
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#FFD700" />
          
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="text-center px-4 max-w-6xl mx-auto">
              <motion.h1 className="text-4xl md:text-7xl font-bold mb-6 text-white" initial={{
              opacity: 0,
              y: 50
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }}>
                Transformamos e-commerces com{" "}
                <FlipWords words={words} className="text-weethub-yellow" />
              </motion.h1>
              
              <motion.p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto" initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }}>
                Somos especialistas em e-commerce com mais de 25 anos de experiência, 
                transformando lojas virtuais em máquinas de vendas com resultados comprovados.
              </motion.p>
              
              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }}>
                <Button asChild size="lg" className="bg-weethub-yellow text-black hover:bg-yellow-500 text-lg px-8 py-6">
                  <Link to="/fale-conosco">
                    Acelerar meu E-commerce
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-weethub-yellow text-black hover:bg-weethub-yellow hover:text-black text-lg px-8 py-6">
                  <Link to="/cases">
                    Resultados da Weethub
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </BackgroundLines>
      </section>

      {/* Hero Parallax - Virtual Stores Showcase */}
      <section className="bg-black">
        <HeroParallaxDemo />
      </section>

      {/* Cases Section */}
      <CasesSection />

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-weethub-yellow to-yellow-600 text-[#ffd700]">
              Nossas Soluções Estratégicas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções completas para transformar sua presença digital
              e gerar resultados excepcionais em projetos de alto valor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-weethub-yellow transition-all duration-300 group h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-2 p-3 bg-weethub-yellow rounded-full w-fit group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-300 mb-6">
                      {service.description}
                    </CardDescription>
                    <Button asChild variant="outline" className="w-full border-weethub-yellow text-black hover:bg-weethub-yellow hover:text-black">
                      <Link to={service.link}>
                        Saiba Mais
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* Results Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-weethub-yellow/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-weethub-yellow to-yellow-600">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empresas que confiaram na Weethub alcançaram resultados significativos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => <motion.div key={index} className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-800 hover:border-weethub-yellow transition-colors backdrop-blur-sm" initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05
          }}>
                <div className="text-4xl font-bold text-weethub-yellow mb-2">{result.value}</div>
                <div className="text-gray-300">{result.label}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-weethub-yellow to-yellow-600">
                Metodologia Baseada em Dados e Performance
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Nossa abordagem é fundamentada em dados concretos e análise de performance. 
                Utilizamos ferramentas avançadas de BI, CRM, SEO, CRO e tráfego pago para 
                tomar decisões estratégicas que impulsionam o crescimento do seu e-commerce.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => <motion.div key={index} className="flex items-center space-x-3" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} viewport={{
                once: true
              }}>
                    <CheckCircle className="h-5 w-5 text-weethub-yellow flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>)}
              </div>
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-6" initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <motion.div className="text-center p-6 bg-gradient-to-br from-black to-gray-900 rounded-lg border border-gray-800 hover:border-weethub-yellow transition-colors" whileHover={{
              scale: 1.05
            }}>
                <Award className="h-8 w-8 text-weethub-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">Desde 2001</div>
                <div className="text-gray-400">Transformando empresas em histórias de sucesso </div>
              </motion.div>
              <motion.div className="text-center p-6 bg-gradient-to-br from-black to-gray-900 rounded-lg border border-gray-800 hover:border-weethub-yellow transition-colors" whileHover={{
              scale: 1.05
            }}>
                <Rocket className="h-8 w-8 text-weethub-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">2000+</div>
                <div className="text-gray-400">Projetos Entregues</div>
              </motion.div>
              <motion.div className="text-center p-6 bg-gradient-to-br from-black to-gray-900 rounded-lg border border-gray-800 hover:border-weethub-yellow transition-colors" whileHover={{
              scale: 1.05
            }}>
                <Users className="h-8 w-8 text-weethub-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400">Clientes Ativos</div>
              </motion.div>
              <motion.div className="text-center p-6 bg-gradient-to-br from-black to-gray-900 rounded-lg border border-gray-800 hover:border-weethub-yellow transition-colors" whileHover={{
              scale: 1.05
            }}>
                <Star className="h-8 w-8 text-weethub-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-gray-400">Satisfação</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Testimonials Section */}
      <TestimonialsDemo />

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-weethub-yellow to-yellow-600">
                Pronto para Transformar seu Negócio?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Entre em contato conosco e descubra como podemos levar seu e-commerce 
                ao próximo nível com nossa metodologia comprovada e mais de 25 anos de experiência.
              </p>
              <div className="space-y-4">
                {benefits.slice(0, 4).map((benefit, index) => <motion.div key={index} className="flex items-center space-x-3" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} viewport={{
                once: true
              }}>
                    <CheckCircle className="h-5 w-5 text-weethub-yellow flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>)}
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <SignupForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }}>
              <h3 className="text-xl font-bold mb-4 text-weethub-yellow">Endereço</h3>
              <p className="text-gray-300">
                Av. Cel. Júlio Ribeiro Gontijo, Nº 321<br />
                Bairro Esplanada, Divinópolis - MG
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} viewport={{
            once: true
          }}>
              <h3 className="text-xl font-bold mb-4 text-weethub-yellow">CNPJ</h3>
              <p className="text-gray-300">04.256.242/0001-00</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;