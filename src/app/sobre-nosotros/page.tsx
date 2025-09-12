import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function SobreNosotrosPage() {
  const teamMembers = [
    {
      name: "Dr. Alberto Montoya",
      position: "Director General",
      description: "Abogado con 20 años de experiencia en derecho corporativo y tecnología legal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dra. Carmen Valdez",
      position: "Directora de Verificación",
      description: "Especialista en validación de credenciales y control de calidad profesional",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9ff5ba1?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Ing. Roberto Martinez",
      position: "Director de Tecnología",
      description: "Experto en desarrollo de plataformas legales y sistemas de verificación",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: "🛡️",
      title: "Transparencia Total",
      description: "Verificamos cada perfil profesional y mantenemos estándares rigurosos de calidad"
    },
    {
      icon: "⚖️",
      title: "Ética Profesional",
      description: "Promovemos la práctica ética del derecho y la integridad en todos los servicios"
    },
    {
      icon: "🤝",
      title: "Acceso a la Justicia",
      description: "Facilitamos el acceso a servicios legales de calidad para todos los ecuatorianos"
    },
    {
      icon: "💡",
      title: "Innovación Legal",
      description: "Utilizamos tecnología para mejorar la conexión entre abogados y clientes"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Fundación",
      description: "Inicio del proyecto con la visión de digitalizar el acceso a servicios legales"
    },
    {
      year: "2021",
      title: "Primera Fase",
      description: "Lanzamiento del directorio con 50 abogados verificados en Quito y Guayaquil"
    },
    {
      year: "2022",
      title: "Expansión Nacional",
      description: "Cobertura ampliada a las 24 provincias del Ecuador"
    },
    {
      year: "2023",
      title: "Sistema de Verificación",
      description: "Implementación del sistema automatizado de verificación de credenciales"
    },
    {
      year: "2024",
      title: "Portal Integral",
      description: "Lanzamiento del portal completo con 500+ abogados y nuevas funcionalidades"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre AbogadosEC
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transformando el acceso a la justicia en Ecuador a través de la tecnología y la transparencia
            </p>
          </div>
        </div>
      </div>

      {/* Misión y Visión */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Democratizar el acceso a servicios legales de calidad en Ecuador, conectando 
                ciudadanos con abogados verificados y especializados a través de una plataforma 
                transparente, confiable y fácil de usar.
              </p>
              <p className="text-gray-600">
                Creemos que todos los ecuatorianos merecen acceso a representación legal 
                competente, independientemente de su ubicación geográfica o recursos económicos.
              </p>
            </div>
            
            <div>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔮</span>
              </div>
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Nuestra Visión</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ser la plataforma líder en Ecuador para servicios legales digitales, 
                reconocida por nuestra integridad, innovación y compromiso con la justicia.
              </p>
              <p className="text-gray-600">
                Aspiramos a crear un ecosistema legal digital que eleve los estándares 
                de la profesión jurídica y mejore el acceso a la justicia para todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario y definen nuestra cultura organizacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl text-blue-800">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Historia y Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              El camino que nos ha llevado a convertirnos en el portal jurídico líder de Ecuador
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {index !== milestones.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-20 bg-blue-200"></div>
                )}
                
                <div className="flex items-start space-x-6 mb-8">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesionales comprometidos con la excelencia y la innovación en el sector legal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-blue-800">{member.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mt-2">
                      {member.position}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Verificación */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Proceso de Verificación
              </h2>
              <p className="text-xl text-gray-600">
                Garantizamos la autenticidad y competencia de cada abogado registrado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Registro Inicial</h3>
                <p className="text-gray-600">
                  El abogado completa el formulario con información personal y profesional
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Verificación</h3>
                <p className="text-gray-600">
                  Validamos cédula, matrícula profesional y credenciales académicas
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Publicación</h3>
                <p className="text-gray-600">
                  Una vez verificado, el perfil se publica con la insignia de verificación
                </p>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">¿Eres abogado y quieres unirte?</h3>
              <p className="text-gray-600 mb-6">
                Únete a nuestra comunidad de profesionales verificados y amplía tu práctica legal
              </p>
              <Button asChild size="lg">
                <Link href="/registro">
                  📝 Registrarme como Abogado
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Impacto</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Números que reflejan nuestro compromiso con la justicia ecuatoriana
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-blue-100">Abogados Verificados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">5000+</div>
              <div className="text-blue-100">Consultas Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24</div>
              <div className="text-blue-100">Provincias Cubiertas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-blue-100">Satisfacción Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Tienes más preguntas?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y te brindaremos toda la información que necesitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contacto">
                📞 Contáctanos
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/abogados">
                🔍 Buscar Abogado
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}