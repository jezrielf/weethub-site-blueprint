
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowRight,
  TrendingUp,
  ShoppingCart,
  Search,
  Target
} from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "Como Aumentar as Vendas do seu E-commerce em 2024",
    excerpt: "Estratégias comprovadas para otimizar sua loja virtual e aumentar as conversões significativamente.",
    author: "Equipe Weethub",
    date: "15 de Janeiro, 2024",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  };

  const posts = [
    {
      title: "SEO para E-commerce: Guia Completo 2024",
      excerpt: "Aprenda as melhores práticas de SEO específicas para lojas virtuais e aumente sua visibilidade.",
      author: "Ana Silva",
      date: "12 de Janeiro, 2024",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Tráfego Pago: Como Otimizar suas Campanhas",
      excerpt: "Dicas essenciais para melhorar o ROI das suas campanhas de Google Ads e Facebook Ads.",
      author: "Carlos Mendes",
      date: "10 de Janeiro, 2024",
      category: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "UX/UI: Design que Converte",
      excerpt: "Como criar interfaces que proporcionam uma experiência única e aumentam as vendas.",
      author: "Maria Costa",
      date: "8 de Janeiro, 2024",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Automação de Marketing: Guia Prático",
      excerpt: "Implemente fluxos automatizados para nutrir leads e aumentar as vendas do seu e-commerce.",
      author: "João Santos",
      date: "5 de Janeiro, 2024",
      category: "Automação",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Análise de Dados: KPIs Essenciais",
      excerpt: "Conheça as métricas mais importantes para acompanhar o desempenho do seu negócio digital.",
      author: "Paula Rodrigues",
      date: "3 de Janeiro, 2024",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Logística para E-commerce: Otimizando Entregas",
      excerpt: "Estratégias para melhorar a logística e reduzir custos de envio no seu e-commerce.",
      author: "Roberto Lima",
      date: "1 de Janeiro, 2024",
      category: "Logística",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const categories = [
    { name: "E-commerce", icon: <ShoppingCart className="h-4 w-4" />, count: 15 },
    { name: "SEO", icon: <Search className="h-4 w-4" />, count: 12 },
    { name: "Marketing Digital", icon: <Target className="h-4 w-4" />, count: 18 },
    { name: "Analytics", icon: <TrendingUp className="h-4 w-4" />, count: 8 }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-weethub-yellow via-yellow-400 to-yellow-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Blog da Weethub
              <br />
              <span className="text-gray-800">Conteúdo Especializado</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Artigos, dicas e estratégias sobre e-commerce, marketing digital, 
              SEO e muito mais para acelerar o crescimento do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Artigo em Destaque
            </h2>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="mb-4 bg-weethub-yellow text-black">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{featuredPost.date}</span>
                </div>
                <Button className="bg-weethub-yellow text-black hover:bg-weethub-yellow-dark">
                  Ler Artigo Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Posts Grid and Sidebar */}
      <section className="py-20 bg-weethub-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Posts Grid */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-black mb-8">Artigos Recentes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <Badge className="w-fit mb-2 bg-weethub-yellow text-black">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-lg font-bold hover:text-weethub-yellow transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Ler Mais
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Categorias</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-weethub-gray transition-colors cursor-pointer">
                        <div className="flex items-center space-x-3">
                          {category.icon}
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-black text-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Newsletter</CardTitle>
                  <CardDescription className="text-gray-300">
                    Receba nossos melhores conteúdos diretamente no seu e-mail.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Seu melhor e-mail"
                      className="w-full p-3 rounded-lg text-black"
                    />
                    <Button className="w-full bg-weethub-yellow text-black hover:bg-weethub-yellow-dark">
                      Inscrever-se
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Posts Populares</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {posts.slice(0, 3).map((post, index) => (
                      <div key={index} className="flex space-x-3 p-3 rounded-lg hover:bg-weethub-gray transition-colors cursor-pointer">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-medium text-sm text-black line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de Ajuda Especializada?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe de especialistas está pronta para transformar 
            seu negócio digital. Entre em contato conosco!
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

export default Blog;
