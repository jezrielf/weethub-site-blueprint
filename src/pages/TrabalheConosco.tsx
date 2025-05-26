
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  TrendingUp,
  ArrowRight,
  Star,
  Coffee,
  Monitor,
  Zap
} from 'lucide-react';

const TrabalheConosco = () => {
  const jobs = [
    {
      title: "Desenvolvedor Frontend React",
      department: "Tecnologia",
      location: "São Paulo, SP",
      type: "CLT",
      level: "Pleno",
      salary: "R$ 8.000 - R$ 12.000",
      description: "Buscamos um desenvolvedor React experiente para criar interfaces incríveis para nossos clientes."
    },
    {
      title: "Especialista em Marketing Digital",
      department: "Marketing",
      location: "São Paulo, SP",
      type: "CLT",
      level: "Senior",
      salary: "R$ 10.000 - R$ 15.000",
      description: "Profissional experiente em campanhas de tráfego pago e estratégias de marketing para e-commerce."
    },
    {
      title: "Designer UX/UI",
      department: "Design",
      location: "Remoto",
      type: "CLT",
      level: "Pleno",
      salary: "R$ 7.000 - R$ 10.000",
      description: "Designer criativo para desenvolver experiências únicas e interfaces que convertem."
    },
    {
      title: "Analista de SEO",
      department: "Marketing",
      location: "São Paulo, SP",
      type: "CLT",
      level: "Júnior",
      salary: "R$ 4.000 - R$ 6.000",
      description: "Profissional para otimizar sites e lojas virtuais para mecanismos de busca."
    }
  ];

  const benefits = [
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Ambiente Descontraído",
      description: "Cultura colaborativa e ambiente de trabalho inspirador"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Crescimento Profissional",
      description: "Planos de carreira estruturados e mentoria"
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Trabalho Remoto",
      description: "Flexibilidade para trabalhar de onde estiver"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Benefícios Completos",
      description: "Plano de saúde, vale-refeição e muito mais"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Projetos Desafiadores",
      description: "Trabalhe em projetos inovadores e impactantes"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Equipe Talentosa",
      description: "Trabalhe com os melhores profissionais do mercado"
    }
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Desenvolvedora Frontend",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b6c2b734?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Na Weethub encontrei um ambiente que valoriza a criatividade e oferece desafios constantes. É incrível fazer parte de uma equipe tão talentosa."
    },
    {
      name: "Carlos Mendes",
      role: "Especialista em Marketing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "O que mais me impressiona aqui é como a empresa investe no desenvolvimento dos colaboradores. Cresci muito profissionalmente desde que cheguei."
    },
    {
      name: "Maria Costa",
      role: "Designer UX/UI",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "A Weethub me deu a liberdade para inovar e criar soluções que realmente fazem a diferença na vida dos usuários. É muito gratificante!"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-weethub-yellow via-yellow-400 to-yellow-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Trabalhe Conosco
              <br />
              <span className="text-gray-800">Faça Parte do Nosso Time</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Junte-se a uma equipe apaixonada por tecnologia e inovação. 
              Aqui você vai crescer, aprender e fazer a diferença no mundo digital.
            </p>
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
              <a href="#vagas">
                Ver Vagas Disponíveis
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nossa Cultura
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Acreditamos que pessoas felizes criam soluções incríveis. 
              Conheça alguns dos nossos valores e benefícios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-weethub-yellow group">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-weethub-yellow rounded-full w-fit group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-weethub-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              O que Nosso Time Diz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Depoimentos reais de quem faz parte da família Weethub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-weethub-yellow text-weethub-yellow" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="vagas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Vagas Disponíveis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre a oportunidade perfeita para dar o próximo passo na sua carreira.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-weethub-yellow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-black">{job.title}</h3>
                        <Badge className="bg-weethub-yellow text-black">{job.level}</Badge>
                        <Badge variant="outline">{job.department}</Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Button asChild className="w-full lg:w-auto bg-weethub-yellow text-black hover:bg-weethub-yellow-dark">
                        <Link to="/fale-conosco">
                          Candidatar-se
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Não encontrou a vaga ideal? Envie seu currículo mesmo assim!
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/fale-conosco">
                Enviar Currículo Espontâneo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-weethub-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Processo Seletivo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um processo transparente e respeitoso para conhecer melhor você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Candidatura", description: "Envie seu currículo e carta de apresentação" },
              { step: "2", title: "Triagem", description: "Análise do perfil e experiências relevantes" },
              { step: "3", title: "Entrevistas", description: "Bate-papo com o time e teste técnico" },
              { step: "4", title: "Feedback", description: "Retorno sobre o processo e próximos passos" }
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
            Pronto para Fazer Parte do Nosso Time?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos conversar sobre as oportunidades 
            disponíveis na Weethub.
          </p>
          <Button asChild size="lg" className="bg-weethub-yellow text-black hover:bg-weethub-yellow-dark">
            <Link to="/fale-conosco">
              Entrar em Contato
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default TrabalheConosco;
