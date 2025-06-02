'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  TrendingUp,
  Globe,
  Star,
  Calendar,
  Mail,
  Phone,
  Bot
} from "lucide-react"
import Link from "next/link"
import DemoForm from "@/components/DemoForm"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/chart-odoo-logo.png"
              alt="Chart Odoo Logo"
              className="h-10 w-auto"
            />
            <Badge variant="outline" className="ml-2 border-odoo-teal text-odoo-teal">
              Community Partner
            </Badge>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#modules" className="text-gray-700 hover:text-odoo-teal transition-colors">
              Módulos
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-odoo-teal transition-colors">
              Servicios
            </Link>
            <Link href="#network" className="text-gray-700 hover:text-odoo-teal transition-colors">
              Red de Aliados
            </Link>
            <Link href="#demo" className="text-gray-700 hover:text-odoo-teal transition-colors">
              Demo
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-odoo-secondary text-odoo-secondary hover:bg-odoo-secondary hover:text-white">
              Contacto
            </Button>
            <Link href="#demo">
              <Button className="bg-odoo-secondary hover:bg-purple-700 text-white">
                Demo a tu e-mail
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" style={{background: 'linear-gradient(135deg, #f7f7f7 0%, #e5cb9e 50%, #eaab41 100%)'}}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up hero-title">
              <span className="odoo-primary">Todo tu negocio en </span>
              <span className="font-caveat text-gradient text-6xl md:text-8xl hero-subtitle">una plataforma.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
              Simple, eficiente, ¡y con Inteligencia Artificial integrada!
            </p>

            <div className="flex justify-center items-center mb-12">
              <Link href="#demo">
                <Button size="lg" className="bg-odoo-secondary hover:bg-purple-700 text-white text-lg px-8 py-4">
                  Demo a tu e-mail
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Bot className="h-5 w-5 odoo-teal" />
              <span>Con Inteligencia Artificial • Sin tarjeta de crédito • Acceso instantáneo</span>
            </div>
          </div>
        </div>

        {/* Floating price badge */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <div className="transform rotate-12">
            <Card className="p-4 shadow-lg border-2 border-odoo-orange">
              <div className="text-center">
                <img
                  src="/chart-odoo-logo.png"
                  alt="Chart Odoo"
                  className="h-6 w-auto mx-auto mb-2 opacity-60"
                />
                <div className="font-caveat text-3xl font-bold odoo-primary">Solo implementación</div>
                <div className="text-sm text-gray-600">el software incluye IA</div>
                <div className="text-xs text-odoo-teal font-semibold">¡Que trabaje para ti!</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Badges */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🏆 Community Partner Oficial
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🌟 Miembro OCA
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🚀 Fábrica de Odoo
            </Badge>
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="odoo-primary">Potenciado por </span>
            <span className="font-caveat text-gradient text-5xl md:text-6xl">Inteligencia Artificial</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            La tecnología ya no debe ser un lujo, sino una necesidad para escalar al éxito empresarial.
            Dejamos que el sistema trabaje inteligentemente para ti.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow hover-lift">
              <CardContent className="text-center p-0">
                <div className="w-16 h-16 bg-odoo-teal rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementación Ágil</h3>
                <p className="text-gray-600">
                  Con IA, las empresas implementan el ERP de forma perfecta y rápida,
                  reduciendo tiempos y complejidad.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow hover-lift">
              <CardContent className="text-center p-0">
                <div className="w-16 h-16 bg-odoo-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Escalabilidad Inteligente</h3>
                <p className="text-gray-600">
                  Agentes de IA que ayudan a construir el presente y futuro de tu empresa,
                  escalando automáticamente.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow hover-lift">
              <CardContent className="text-center p-0">
                <div className="w-16 h-16 bg-odoo-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Soporte IA 24/7</h3>
                <p className="text-gray-600">
                  Agentes de apoyo inteligentes que te ayudan a vender,
                  construir y optimizar tu negocio continuamente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="odoo-primary">Módulos </span>
              <span className="font-caveat text-gradient text-5xl md:text-6xl">integrados</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Una vasta colección de aplicaciones empresariales a tu disposición.
              ¿Tienes algo que mejorar? Hay una app para eso.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Contabilidad", icon: "📊", color: "bg-blue-100" },
              { name: "Ventas", icon: "💰", color: "bg-green-100" },
              { name: "CRM", icon: "👥", color: "bg-purple-100" },
              { name: "Compras", icon: "🛒", color: "bg-orange-100" },
              { name: "Almacén", icon: "📦", color: "bg-indigo-100" },
              { name: "Manufactura", icon: "🏭", color: "bg-red-100" },
              { name: "RRHH", icon: "👨‍💼", color: "bg-pink-100" },
              { name: "Nóminas", icon: "💳", color: "bg-yellow-100" },
              { name: "Facturación", icon: "🧾", color: "bg-teal-100" },
              { name: "Inventarios RF", icon: "📡", color: "bg-cyan-100" },
              { name: "Reportes IA", icon: "🤖", color: "bg-emerald-100" },
              { name: "Servicios", icon: "🔧", color: "bg-violet-100" }
            ].map((module) => (
              <Card key={module.name} className="p-4 hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="text-center p-0">
                  <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{module.icon}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800">{module.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-odoo-teal text-odoo-teal hover:bg-odoo-teal hover:text-white">
              Ver Todos los Módulos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section id="network" className="py-20" style={{background: 'linear-gradient(135deg, #f7f7f7 0%, #e5cb9e 100%)'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-caveat text-gradient text-5xl md:text-6xl">Fábrica de Odoo</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Somos una gran red de aliados especializados en Latinoamérica y España.
            Te entregamos el código con Inteligencia Artificial y te mostramos cómo escalar tu empresa.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <CardContent className="text-center p-0">
                <Globe className="h-12 w-12 odoo-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Red Latinoamericana</h3>
                <p className="text-gray-600">
                  Presencia en múltiples países de Latinoamérica con soporte local especializado.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="text-center p-0">
                <Users className="h-12 w-12 odoo-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expertos Certificados</h3>
                <p className="text-gray-600">
                  Equipo de desarrolladores y consultores certificados en implementaciones Odoo.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="text-center p-0">
                <Star className="h-12 w-12 odoo-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Soporte Premium</h3>
                <p className="text-gray-600">
                  Te ayudamos a vender, construir y escalar. Solo pagas por la implementación.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="odoo-primary">Casos de </span>
              <span className="font-caveat text-gradient text-5xl md:text-6xl">éxito</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Empresas que se han transformado con Chart Odoo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover-lift">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    LG
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">La Gurvia SA de CV</h4>
                    <p className="text-sm text-gray-600">Empresa Manufacturera</p>
                    <p className="text-xs text-odoo-teal">🇲🇽 México</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Con Chart Odoo y la IA integrada, redujimos el tiempo de procesamiento de órdenes de 2 días a 2 horas.
                  El ROI fue inmediato y nuestro equipo está más productivo que nunca."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`gurvia-star-${i}`} className="h-4 w-4 fill-odoo-orange text-odoo-orange" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    GE
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Grupo Escato</h4>
                    <p className="text-sm text-gray-600">Corporativo Empresarial</p>
                    <p className="text-xs text-odoo-teal">🇲🇽 México</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "La implementación fue perfecta. El equipo de Chart Odoo entendió nuestras necesidades del Grupo Escato
                  y el soporte especializado ha sido excepcional. Hemos optimizado toda nuestra operación."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`escato-star-${i}`} className="h-4 w-4 fill-odoo-orange text-odoo-orange" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    V
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Vicente Viniegra</h4>
                    <p className="text-sm text-gray-600">Socio Director Aliado Odoo, Pridecta</p>
                    <p className="text-xs text-odoo-teal">🇪🇸 España</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Como Socio Director Aliado Odoo, puedo confirmar que Chart Odoo es excepcional.
                  Su expertise en IA y la calidad de implementación de Pridecta ha superado expectativas."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`vicente-star-${i}`} className="h-4 w-4 fill-odoo-orange text-odoo-orange" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              <strong>Más de 500+ empresas</strong> en LATAM y España confían en nosotros
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <span>🇲🇽 México</span>
              <span>•</span>
              <span>🇨🇴 Colombia</span>
              <span>•</span>
              <span>🇦🇷 Argentina</span>
              <span>•</span>
              <span>🇨🇱 Chile</span>
              <span>•</span>
              <span>🇪🇸 España</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Demo Section */}
      <section id="demo" className="py-20 bg-odoo-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-caveat text-6xl md:text-7xl text-odoo-orange">¡Pide una demo gratis</span>
            <br />
            <span className="text-white">con IA integrada!</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Danos la oportunidad de escalar en el éxito de tu negocio.
            Déjanos que el software haga lo suyo, inteligentemente y con astucia para ti.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Demo Form */}
            <DemoForm />

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contacto Directo</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 odoo-orange" />
                    <span className="text-lg">juancarlos@chart-e.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 odoo-orange" />
                    <span className="text-lg">+52 55 3362 9528</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">¿Por qué elegir Chart Odoo?</h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 odoo-orange flex-shrink-0" />
                    <span>Implementación con IA integrada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 odoo-orange flex-shrink-0" />
                    <span>Soporte en tu idioma y zona horaria</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 odoo-orange flex-shrink-0" />
                    <span>Red de aliados en LATAM y España</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 odoo-orange flex-shrink-0" />
                    <span>Solo pagas implementación, software incluido</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-odoo-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/chart-odoo-logo.png"
                  alt="Chart Odoo Logo"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-4">
                Fábrica de Odoo especializada en implementaciones con IA para empresas de Latinoamérica y España.
              </p>
              <div className="flex space-x-2">
                <Badge variant="outline" className="border-odoo-teal text-odoo-teal">
                  Community Partner
                </Badge>
                <Badge variant="outline" className="border-odoo-orange text-odoo-orange">
                  OCA Member
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#" className="hover:text-odoo-teal transition-colors">Implementación Odoo</Link></li>
                <li><Link href="#" className="hover:text-odoo-teal transition-colors">Consultoría ERP</Link></li>
                <li><Link href="#" className="hover:text-odoo-teal transition-colors">Desarrollo Personalizado</Link></li>
                <li><Link href="#" className="hover:text-odoo-teal transition-colors">Soporte y Mantenimiento</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Módulos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#" className="hover:text-odoo-teal transition-colors">Contabilidad</Link></li>
                <li><Link href="#" className="hover:text-odoo-teal transition-colors">Ventas y CRM</Link></li>
                <li><Link href="#" className="hover:text-odoo-teal transition-colors">Inventario</Link></li>
                <li><Link href="#" className="hover:text-odoo-teal transition-colors">Manufactura</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📧 juancarlos@chart-e.com</li>
                <li>📞 +52 55 3362 9528</li>
                <li>🌎 Latinoamérica & España</li>
                <li>🕒 Soporte 24/7 con IA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Chart Odoo. Todos los derechos reservados. Potenciado por Inteligencia Artificial.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
