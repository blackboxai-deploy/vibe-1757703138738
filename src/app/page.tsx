"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LEGAL_SPECIALTIES, ECUADOR_PROVINCES } from "@/types/lawyer";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Abogados destacados simulados
  const featuredLawyers = [
    {
      id: "1",
      name: "Dr. María Elena Rodríguez",
      specialty: "Derecho Penal",
      city: "Quito",
      rating: 4.9,
      reviews: 47,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/39f08ab0-8858-4a10-bb10-84750a49d1e4.png"
    },
    {
      id: "2", 
      name: "Dr. Carlos Mendoza",
      specialty: "Derecho Civil",
      city: "Guayaquil",
      rating: 4.8,
      reviews: 32,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/debcbd4e-3656-4d63-87a7-a6d57f67e468.png"
    },
    {
      id: "3",
      name: "Dra. Ana Lucia Vásquez",
      specialty: "Derecho Laboral", 
      city: "Cuenca",
      rating: 4.9,
      reviews: 28,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/19638ea3-98d3-4843-bb4a-bd9b094a6775.png"
    }
  ];

  const handleSearch = () => {
    // Redirigir a página de búsqueda con parámetros
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedCity) params.set('city', selectedCity);
    
    window.location.href = `/abogados/buscar?${params.toString()}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Encuentra el Abogado 
                <span className="text-yellow-400"> Ideal</span> en Ecuador
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Directorio completo de abogados verificados y especializados. 
                Conectamos ciudadanos con profesionales del derecho certificados en todo el país.
              </p>
              
              {/* Buscador rápido */}
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Búsqueda Rápida</h3>
                <div className="space-y-4">
                  <Input
                    placeholder="Busca por nombre, especialidad o palabra clave..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="text-gray-800"
                  />
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="text-gray-800">
                      <SelectValue placeholder="Selecciona una provincia" />
                    </SelectTrigger>
                    <SelectContent>
                      {ECUADOR_PROVINCES.map((province) => (
                        <SelectItem key={province} value={province}>
                          {province}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button 
                    onClick={handleSearch}
                    size="lg" 
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold"
                  >
                    🔍 Buscar Abogado
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/41d1c7b0-980c-46cd-9cf4-faf31b1fe2f4.png"
                alt="Sistema de justicia ecuatoriano con balanza y juzgados modernos"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Abogados Registrados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-gray-600">Provincias Cubiertas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-gray-600">Especialidades Principales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Casos Exitosos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Principales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Especialidades Legales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encuentra abogados especializados en todas las áreas del derecho ecuatoriano
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {LEGAL_SPECIALTIES.slice(0, 8).map((specialty) => (
              <Link key={specialty.id} href={`/especialidades/${specialty.id}`}>
                <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-colors">
                      <span className="text-2xl">⚖️</span>
                    </div>
                    <CardTitle className="text-lg text-blue-800 group-hover:text-blue-600 transition-colors">
                      {specialty.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {specialty.subspecialties.length} subespecialidades
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/especialidades">
                Ver Todas las Especialidades
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Abogados Destacados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Abogados Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales con mayor valoración y experiencia comprobada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredLawyers.map((lawyer) => (
              <Card key={lawyer.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-blue-800">{lawyer.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mb-2">
                      {lawyer.specialty}
                    </Badge>
                    <div className="text-gray-600">{lawyer.city}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-yellow-500 text-lg">⭐</span>
                    <span className="font-semibold ml-1">{lawyer.rating}</span>
                    <span className="text-gray-500 ml-2">({lawyer.reviews} reseñas)</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/abogados/${lawyer.id}`}>
                      Ver Perfil Completo
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/abogados">
                Ver Todos los Abogados
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Eres Abogado?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a nuestro directorio y conecta con clientes que necesitan tus servicios profesionales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/registro">
                📝 Registrarme como Abogado
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/sobre-nosotros">
                Conoce Más Sobre Nosotros
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}