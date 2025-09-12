"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lawyer, Review } from "@/types/lawyer";

// Datos simulados - en producción vendrían de una API
const mockLawyer: Lawyer = {
  id: "1",
  fullName: "Dr. María Elena Rodríguez Vásquez",
  cedula: "1712345678",
  email: "maria.rodriguez@email.com",
  phone: "+593 99 123 4567",
  address: "Av. Amazonas 123, Edificio Torres del Norte, Piso 8",
  city: "Quito",
  province: "Pichincha",
  photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c2061bce-5319-4328-9e7d-9bb4798125ef.png",
  lawFirm: "Rodríguez & Asociados Abogados",
  lawFirmLogo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4ee78a5e-56db-4d10-87d9-050909c9f58b.png",
  collegeRegistration: "QUI-001-2020",
  primarySpecialty: "Derecho Penal",
  subspecialties: [
    "Delitos comunes",
    "Lavado de activos",
    "Delincuencia organizada",
    "Violencia intrafamiliar",
    "Delitos informáticos"
  ],
  biography: "Abogada especialista en Derecho Penal con más de 15 años de experiencia en la defensa de casos complejos. Magíster en Ciencias Penales y Criminológicas por la Universidad Central del Ecuador. Miembro activo del Colegio de Abogados de Pichincha y certificada en Mediación Penal. Ha manejado más de 500 casos exitosos, especializándose en delitos contra la administración pública, lavado de activos y defensa en procesos penales complejos. Reconocida por su ética profesional y dedicación a sus clientes.",
  isVerified: true,
  isActive: true,
  registrationDate: new Date("2020-01-15"),
  rating: 4.9,
  reviewCount: 47,
  reviews: [],
  whatsappNumber: "+593991234567",
  officePhone: "+593 2 345-6789",
  officeAddress: "Av. Amazonas 123, Edificio Torres del Norte, Piso 8, Oficina 801",
  linkedinUrl: "https://linkedin.com/in/maria-rodriguez-abogada",
  personalWebsite: "https://rodriguezabogados.com.ec"
};

const mockReviews: Review[] = [
  {
    id: "1",
    lawyerId: "1",
    clientName: "Carlos M.",
    rating: 5,
    comment: "Excelente profesional. Me ayudó con un caso penal muy complicado y logró una resolución favorable. Muy recomendada.",
    date: new Date("2024-01-15"),
    isVerified: true
  },
  {
    id: "2",
    lawyerId: "1",
    clientName: "Ana L.",
    rating: 5,
    comment: "Doctora muy preparada y comprometida con sus casos. Siempre estuvo disponible para responder mis dudas.",
    date: new Date("2024-02-20"),
    isVerified: true
  },
  {
    id: "3",
    lawyerId: "1",
    clientName: "Roberto S.",
    rating: 4,
    comment: "Buena atención y conocimiento del derecho penal. El proceso fue transparente y profesional.",
    date: new Date("2024-03-10"),
    isVerified: false
  }
];

// Abogados relacionados simulados
const relatedLawyers = [
  {
    id: "2",
    name: "Dr. Luis Moreno",
    specialty: "Derecho Penal",
    city: "Quito",
    rating: 4.8,
    photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd9168cb-d089-4c9a-9a93-0180fdb1b272.png"
  },
  {
    id: "3", 
    name: "Dra. Patricia Silva",
    specialty: "Derecho Penal",
    city: "Quito",
    rating: 4.7,
    photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d83e34aa-5c90-4044-888e-daf360941cb5.png"
  }
];

export default function LawyerProfilePage() {
  const params = useParams();
  const [lawyer, setLawyer] = useState<Lawyer | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: "",
    clientName: ""
  });

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setLawyer(mockLawyer);
      setReviews(mockReviews);
      setLoading(false);
    }, 1000);
  }, [params.id]);

  const handleSubmitReview = () => {
    if (newReview.comment.trim() && newReview.clientName.trim()) {
      const review: Review = {
        id: Date.now().toString(),
        lawyerId: lawyer!.id,
        clientName: newReview.clientName,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date(),
        isVerified: false
      };
      
      setReviews([review, ...reviews]);
      setNewReview({ rating: 5, comment: "", clientName: "" });
      
      // Mostrar mensaje de éxito
      alert("¡Gracias por tu reseña! Será revisada antes de publicarse.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando perfil...</p>
        </div>
      </div>
    );
  }

  if (!lawyer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Abogado no encontrado</h2>
          <p className="text-gray-600 mb-6">El perfil que buscas no existe o ha sido desactivado.</p>
          <Button asChild>
            <Link href="/abogados">Volver al Directorio</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con información básica */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Foto y info básica */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={lawyer.photo}
                      alt={lawyer.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-blue-800 mb-2">
                    {lawyer.fullName}
                  </h1>
                  {lawyer.isVerified && (
                    <div className="flex items-center justify-center mb-3">
                      <Badge className="bg-green-100 text-green-800">
                        ✓ Perfil Verificado
                      </Badge>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-yellow-500 text-lg">⭐</span>
                    <span className="font-semibold ml-1 mr-2">{lawyer.rating}</span>
                    <span className="text-gray-500">({lawyer.reviewCount} reseñas)</span>
                  </div>

                  <Badge variant="secondary" className="mb-4 text-base px-4 py-2">
                    {lawyer.primarySpecialty}
                  </Badge>

                  <div className="text-gray-600 space-y-1">
                    <p>{lawyer.city}, {lawyer.province}</p>
                    {lawyer.lawFirm && <p className="font-medium">{lawyer.lawFirm}</p>}
                    <p>Matrícula: {lawyer.collegeRegistration}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Información de contacto */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">📞 Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Contacto Directo</h4>
                      <div className="space-y-2 text-gray-600">
                        <p>📱 {lawyer.phone}</p>
                        <p>📧 {lawyer.email}</p>
                        {lawyer.whatsappNumber && (
                          <div>
                            <Button
                              asChild
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              <a
                                href={`https://wa.me/${lawyer.whatsappNumber.replace(/[^0-9]/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                💬 WhatsApp
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Oficina</h4>
                      <div className="space-y-2 text-gray-600">
                        {lawyer.officePhone && <p>☎️ {lawyer.officePhone}</p>}
                        <p>📍 {lawyer.officeAddress || lawyer.address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Enlaces profesionales */}
                  {(lawyer.linkedinUrl || lawyer.personalWebsite) && (
                    <div>
                      <h4 className="font-semibold mb-3">Enlaces Profesionales</h4>
                      <div className="flex flex-wrap gap-3">
                        {lawyer.linkedinUrl && (
                          <Button variant="outline" asChild>
                            <a href={lawyer.linkedinUrl} target="_blank" rel="noopener noreferrer">
                              💼 LinkedIn
                            </a>
                          </Button>
                        )}
                        {lawyer.personalWebsite && (
                          <Button variant="outline" asChild>
                            <a href={lawyer.personalWebsite} target="_blank" rel="noopener noreferrer">
                              🌐 Sitio Web
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Botón principal de contacto */}
                  <div className="pt-4">
                    <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700">
                      📞 Solicitar Consulta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal con tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Información</TabsTrigger>
            <TabsTrigger value="specialties">Especialidades</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas ({reviews.length})</TabsTrigger>
            <TabsTrigger value="related">Relacionados</TabsTrigger>
          </TabsList>

          {/* Tab: Información general */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>👨‍💼 Biografía Profesional</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {lawyer.biography}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Logo de la firma */}
                {lawyer.lawFirmLogo && (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <img
                        src={lawyer.lawFirmLogo}
                        alt={`Logo de ${lawyer.lawFirm}`}
                        className="max-h-20 mx-auto"
                      />
                    </CardContent>
                  </Card>
                )}

                {/* Estadísticas */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">📊 Estadísticas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Calificación:</span>
                      <div className="flex items-center">
                        <span className="font-semibold">{lawyer.rating}/5</span>
                        <span className="text-yellow-500 ml-1">⭐</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reseñas:</span>
                      <span className="font-semibold">{lawyer.reviewCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Miembro desde:</span>
                      <span className="font-semibold">
                        {lawyer.registrationDate.getFullYear()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Especialidades:</span>
                      <span className="font-semibold">{lawyer.subspecialties.length}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Tab: Especialidades */}
          <TabsContent value="specialties">
            <Card>
              <CardHeader>
                <CardTitle>🎯 Áreas de Especialización</CardTitle>
                <CardDescription>
                  Conoce las áreas específicas en las que {lawyer.fullName.split(" ")[1]} se especializa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-600 mb-3 text-lg">
                    Especialidad Principal
                  </h4>
                  <Badge variant="default" className="text-base px-4 py-2">
                    {lawyer.primarySpecialty}
                  </Badge>
                </div>

                <Separator className="my-6" />

                <div>
                  <h4 className="font-semibold text-blue-600 mb-4 text-lg">
                    Subespecialidades
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {lawyer.subspecialties.map((subspecialty, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-blue-50 rounded-lg"
                      >
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-gray-700">{subspecialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Reseñas */}
          <TabsContent value="reviews">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Lista de reseñas */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">💭 Reseñas de Clientes</h3>
                {reviews.length === 0 ? (
                  <Card className="p-6 text-center">
                    <p className="text-gray-500">
                      Aún no hay reseñas para este abogado.
                      ¡Sé el primero en compartir tu experiencia!
                    </p>
                  </Card>
                ) : (
                  reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="font-semibold text-blue-600">
                              {review.clientName.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <span className="font-semibold">{review.clientName}</span>
                                {review.isVerified && (
                                  <Badge variant="secondary" className="text-xs">
                                    Verificado
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center">
                                {Array.from({ length: review.rating }, (_, i) => (
                                  <span key={i} className="text-yellow-500">⭐</span>
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700 mb-2">{review.comment}</p>
                            <p className="text-sm text-gray-500">
                              {review.date.toLocaleDateString('es-EC')}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>

              {/* Formulario para nueva reseña */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>✍️ Deja tu Reseña</CardTitle>
                    <CardDescription>
                      Comparte tu experiencia con este profesional
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="clientName">Tu Nombre</Label>
                      <Input
                        id="clientName"
                        placeholder="Nombre completo"
                        value={newReview.clientName}
                        onChange={(e) => setNewReview({ ...newReview, clientName: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Calificación</Label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => setNewReview({ ...newReview, rating })}
                            className={`text-2xl ${
                              rating <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'
                            }`}
                          >
                            ⭐
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comment">Tu Reseña</Label>
                      <Textarea
                        id="comment"
                        placeholder="Comparte tu experiencia con este abogado..."
                        rows={4}
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      />
                    </div>

                    <Button onClick={handleSubmitReview} className="w-full">
                      Enviar Reseña
                    </Button>

                    <p className="text-xs text-gray-500">
                      Las reseñas son revisadas antes de publicarse para mantener la calidad del servicio.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Tab: Abogados relacionados */}
          <TabsContent value="related">
            <Card>
              <CardHeader>
                <CardTitle>👥 Abogados Relacionados</CardTitle>
                <CardDescription>
                  Otros profesionales especializados en {lawyer.primarySpecialty} en {lawyer.city}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedLawyers.map((relatedLawyer) => (
                    <Card key={relatedLawyer.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4 text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                          <img
                            src={relatedLawyer.photo}
                            alt={relatedLawyer.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-semibold text-blue-800 mb-1">
                          {relatedLawyer.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {relatedLawyer.specialty}
                        </p>
                        <p className="text-sm text-gray-500 mb-3">
                          {relatedLawyer.city}
                        </p>
                        <div className="flex items-center justify-center mb-3">
                          <span className="text-yellow-500">⭐</span>
                          <span className="font-semibold ml-1">{relatedLawyer.rating}</span>
                        </div>
                        <Button asChild size="sm" className="w-full">
                          <Link href={`/abogados/${relatedLawyer.id}`}>
                            Ver Perfil
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}