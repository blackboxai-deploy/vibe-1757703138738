"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
}

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<ContactForm>();

  const contactCategories = [
    { value: "consulta-general", label: "Consulta General" },
    { value: "registro-abogado", label: "Registro de Abogado" },
    { value: "soporte-tecnico", label: "Soporte Técnico" },
    { value: "alianzas", label: "Alianzas Estratégicas" },
    { value: "prensa", label: "Prensa y Medios" },
    { value: "otros", label: "Otros" }
  ];

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Datos del contacto:", data);
    setShowSuccess(true);
    setIsSubmitting(false);
    reset();

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Contacto
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              ¿Tienes preguntas o necesitas ayuda? Estamos aquí para asistirte
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  📍 Oficina Principal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  <strong>Dirección:</strong><br />
                  Av. Amazonas N24-03 y Colón<br />
                  Edificio España, Piso 12<br />
                  Quito, Ecuador
                </p>
                <p className="text-gray-600">
                  <strong>Teléfono:</strong><br />
                  +593 2 345-6789
                </p>
                <p className="text-gray-600">
                  <strong>WhatsApp:</strong><br />
                  +593 99 876-5432
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong><br />
                  info@abogadosec.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  🕒 Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <Badge variant="secondary">8:00 - 18:00</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <Badge variant="secondary">9:00 - 13:00</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <Badge variant="outline">Cerrado</Badge>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Soporte en línea disponible 24/7
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  💬 Canales de Comunicación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Para Abogados:</h4>
                  <p className="text-sm text-gray-600">
                    📧 abogados@abogadosec.com<br />
                    📱 +593 99 123-4567 (WhatsApp)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Para Usuarios:</h4>
                  <p className="text-sm text-gray-600">
                    📧 usuarios@abogadosec.com<br />
                    📱 +593 99 765-4321 (WhatsApp)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Soporte Técnico:</h4>
                  <p className="text-sm text-gray-600">
                    📧 soporte@abogadosec.com<br />
                    📱 Chat en vivo disponible
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  🌐 Síguenos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    📘 Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    💼 LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    🐦 Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">💌 Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y te responderemos dentro de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showSuccess && (
                  <Alert className="mb-6 bg-green-50 border-green-200">
                    <AlertDescription className="text-green-800">
                      ✅ ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        {...register("name", { required: "El nombre es obligatorio" })}
                        placeholder="Tu nombre completo"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", { required: "El correo es obligatorio" })}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="+593 99 123 4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Categoría *</Label>
                      <Select onValueChange={(value) => setValue("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactCategories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto *</Label>
                    <Input
                      id="subject"
                      {...register("subject", { required: "El asunto es obligatorio" })}
                      placeholder="Asunto de tu consulta"
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "El mensaje es obligatorio" })}
                      placeholder="Describe tu consulta o pregunta..."
                      rows={6}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      📝 <strong>Nota:</strong> Al enviar este formulario, aceptas que procesemos 
                      tus datos personales para responder a tu consulta según nuestra 
                      <a href="/privacidad" className="underline hover:text-blue-600">
                        política de privacidad
                      </a>.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8"
                  >
                    {isSubmitting ? "Enviando..." : "📤 Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa (simulado) */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🗺️ Nuestra Ubicación</CardTitle>
              <CardDescription>
                Av. Amazonas N24-03 y Colón, Edificio España, Piso 12, Quito - Ecuador
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-lg font-semibold">Mapa Interactivo</p>
                  <p className="text-sm">
                    Aquí se integraría Google Maps con nuestra ubicación exacta
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline">
                  📍 Abrir en Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQs rápidas */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">❓ Preguntas Frecuentes</h2>
            <p className="text-gray-600">Respuestas rápidas a las consultas más comunes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo registro mi perfil?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Completa nuestro formulario de registro y envía la documentación requerida. 
                  El proceso toma 2-3 días hábiles.
                </p>
                <Button variant="outline" size="sm">
                  Ver Guía de Registro
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Hay costo por registrarse?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  El registro básico es completamente gratuito. Ofrecemos planes premium 
                  con funciones adicionales.
                </p>
                <Button variant="outline" size="sm">
                  Ver Planes
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo verifican los perfiles?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Validamos cédula, matrícula profesional, títulos académicos y experiencia 
                  con fuentes oficiales.
                </p>
                <Button variant="outline" size="sm">
                  Proceso Detallado
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}