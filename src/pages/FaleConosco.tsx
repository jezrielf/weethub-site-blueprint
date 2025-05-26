
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

const FaleConosco = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      info: "(11) 99999-9999",
      description: "Segunda a Sexta, 9h às 18h"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail",
      info: "contato@weethub.com",
      description: "Resposta em até 24h"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Endereço",
      info: "São Paulo, SP",
      description: "Brasil"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário",
      info: "9h às 18h",
      description: "Segunda a Sexta-feira"
    }
  ];

  const departments = [
    { value: "vendas", label: "Vendas - Novos Projetos" },
    { value: "suporte", label: "Suporte - Clientes Ativos" },
    { value: "financeiro", label: "Financeiro - Pagamentos" },
    { value: "diretoria", label: "Diretoria - Parcerias" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Formulário enviado!');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-weethub-yellow via-yellow-400 to-yellow-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Fale Conosco
              <br />
              <span className="text-gray-800">Estamos Aqui para Ajudar</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar 
              seu negócio digital. Nossa equipe está pronta para atendê-lo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-weethub-yellow group">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-weethub-yellow rounded-full w-fit group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-black mb-1">{info.info}</p>
                  <CardDescription className="text-gray-600">
                    {info.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-weethub-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <MessageCircle className="h-6 w-6 mr-3 text-weethub-yellow" />
                    Envie sua Mensagem
                  </CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input id="nome" placeholder="Seu nome completo" required />
                      </div>
                      <div>
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input id="telefone" placeholder="(11) 99999-9999" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="empresa">Empresa</Label>
                        <Input id="empresa" placeholder="Nome da sua empresa" />
                      </div>
                      <div>
                        <Label htmlFor="estado">Estado</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione seu estado" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sp">São Paulo</SelectItem>
                            <SelectItem value="rj">Rio de Janeiro</SelectItem>
                            <SelectItem value="mg">Minas Gerais</SelectItem>
                            <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                            <SelectItem value="pr">Paraná</SelectItem>
                            <SelectItem value="sc">Santa Catarina</SelectItem>
                            <SelectItem value="outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="departamento">Departamento</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o departamento" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.value} value={dept.value}>
                              {dept.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea 
                        id="mensagem" 
                        placeholder="Conte-nos mais sobre seu projeto e como podemos ajudar..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-weethub-yellow text-black hover:bg-weethub-yellow-dark">
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="bg-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Nossa Localização</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-weethub-yellow mx-auto mb-4" />
                      <p className="text-gray-600">São Paulo, SP - Brasil</p>
                      <p className="text-sm text-gray-500 mt-2">Mapa interativo em breve</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Siga-nos nas Redes Sociais</CardTitle>
                  <CardDescription>
                    Acompanhe nosso conteúdo e novidades
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-weethub-yellow rounded-full hover:bg-weethub-yellow-dark transition-colors">
                      <Facebook className="h-5 w-5 text-black" />
                    </a>
                    <a href="#" className="p-3 bg-weethub-yellow rounded-full hover:bg-weethub-yellow-dark transition-colors">
                      <Instagram className="h-5 w-5 text-black" />
                    </a>
                    <a href="#" className="p-3 bg-weethub-yellow rounded-full hover:bg-weethub-yellow-dark transition-colors">
                      <Linkedin className="h-5 w-5 text-black" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-black text-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Contato Rápido</CardTitle>
                  <CardDescription className="text-gray-300">
                    Precisa de uma resposta urgente?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a 
                      href="tel:11999999999" 
                      className="flex items-center p-3 bg-weethub-yellow rounded-lg text-black hover:bg-weethub-yellow-dark transition-colors"
                    >
                      <Phone className="h-5 w-5 mr-3" />
                      <span className="font-semibold">Ligar Agora</span>
                    </a>
                    <a 
                      href="https://wa.me/5511999999999" 
                      className="flex items-center p-3 border border-weethub-yellow rounded-lg text-weethub-yellow hover:bg-weethub-yellow hover:text-black transition-colors"
                    >
                      <MessageCircle className="h-5 w-5 mr-3" />
                      <span className="font-semibold">WhatsApp</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre respostas rápidas para as dúvidas mais comuns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-weethub-yellow transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Qual o prazo para desenvolvimento?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  O prazo varia conforme a complexidade do projeto. Lojas padrão ficam prontas em 15-30 dias, 
                  enquanto projetos personalizados podem levar de 45-90 dias.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-weethub-yellow transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Vocês oferecem suporte pós-entrega?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sim! Todos os nossos projetos incluem suporte técnico por um período específico, 
                  e oferecemos planos de manutenção contínua.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-weethub-yellow transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Como funciona o processo de pagamento?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Trabalhamos com pagamentos parcelados. Normalmente 50% no início do projeto 
                  e 50% na entrega, mas podemos negociar condições específicas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-weethub-yellow transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Fazem integração com ERPs?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sim, temos experiência em integrar lojas virtuais com diversos sistemas ERP 
                  e de gestão, garantindo sincronização de estoque e pedidos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FaleConosco;
