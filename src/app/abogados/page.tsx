"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Lawyer, SearchFilters, LEGAL_SPECIALTIES, ECUADOR_PROVINCES } from "@/types/lawyer";

// Datos simulados de abogados
const mockLawyers: Lawyer[] = [
  {
    id: "1",
    fullName: "Dr. María Elena Rodríguez",
    cedula: "1712345678",
    email: "maria.rodriguez@email.com",
    phone: "+593 99 123 4567",
    address: "Av. Amazonas 123",
    city: "Quito",
    province: "Pichincha",
    photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d31dbb95-c861-4784-b1ce-fcb657609bae.png",
    lawFirm: "Rodríguez & Asociados",
    collegeRegistration: "QUI-001",
    primarySpecialty: "Derecho Penal",
    subspecialties: ["Delitos comunes", "Lavado de activos"],
    biography: "Especialista en derecho penal con 15 años de experiencia...",
    isVerified: true,
    isActive: true,
    registrationDate: new Date("2020-01-15"),
    rating: 4.9,
    reviewCount: 47,
    reviews: [],
    whatsappNumber: "+593991234567"
  },
  {
    id: "2",
    fullName: "Dr. Carlos Alberto Mendoza",
    cedula: "0912345678",
    email: "carlos.mendoza@email.com",
    phone: "+593 98 765 4321",
    address: "Av. 9 de Octubre 456",
    city: "Guayaquil",
    province: "Guayas",
    photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93b1f9af-850c-4b17-926a-da057dd26b73.png",
    lawFirm: "Bufete Mendoza",
    collegeRegistration: "GYE-002",
    primarySpecialty: "Derecho Civil",
    subspecialties: ["Herencias y sucesiones", "Contratos civiles"],
    biography: "Abogado civilista con amplia experiencia en herencias...",
    isVerified: true,
    isActive: true,
    registrationDate: new Date("2019-03-20"),
    rating: 4.8,
    reviewCount: 32,
    reviews: [],
    whatsappNumber: "+593987654321"
  },
  {
    id: "3",
    fullName: "Dra. Ana Lucía Vásquez",
    cedula: "0112345678",
    email: "ana.vasquez@email.com",
    phone: "+593 97 888 9999",
    address: "Calle Larga 789",
    city: "Cuenca",
    province: "Azuay",
    photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a173e879-9284-4fbf-997b-66485d269606.png",
    lawFirm: "Vásquez Abogados",
    collegeRegistration: "CUE-003",
    primarySpecialty: "Derecho Laboral",
    subspecialties: ["Despidos intempestivos", "Contratos de trabajo"],
    biography: "Especialista en derecho laboral y seguridad social...",
    isVerified: true,
    isActive: true,
    registrationDate: new Date("2021-05-10"),
    rating: 4.9,
    reviewCount: 28,
    reviews: [],
    whatsappNumber: "+593978889999"
  },
  {
    id: "4",
    fullName: "Dr. Jorge Luis Morales",
    cedula: "1312345678",
    email: "jorge.morales@email.com",
    phone: "+593 96 777 8888",
    address: "Av. El Sol 321",
    city: "Loja",
    province: "Loja",
    photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3b64487c-9973-4a3b-9a92-e2fd2207c5c2.png",
    lawFirm: "Consultores Tributarios Morales",
    collegeRegistration: "LOJ-004",
    primarySpecialty: "Derecho Tributario",
    subspecialties: ["Defensa ante el SRI", "Planificación fiscal"],
    biography: "Contador y abogado especializado en temas tributarios...",
    isVerified: true,
    isActive: true,
    registrationDate: new Date("2018-08-25"),
    rating: 4.7,
    reviewCount: 51,
    reviews: [],
    whatsappNumber: "+593967778888"
  },
  {
    id: "5",
    fullName: "Dra. Patricia Jiménez",
    cedula: "1812345678",
    email: "patricia.jimenez@email.com",
    phone: "+593 95 666 7777",
    address: "Av. Los Shyris 654",
    city: "Quito",
    province: "Pichincha",
    photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/88584e33-165b-4e6b-b882-267b710331cb.png",
    lawFirm: "Centro de Mediación Familiar",
    collegeRegistration: "QUI-005",
    primarySpecialty: "Derecho de Familia",
    subspecialties: ["Divorcios", "Tenencia de menores", "Pensiones alimenticias"],
    biography: "Mediadora certificada especializada en derecho de familia...",
    isVerified: true,
    isActive: true,
    registrationDate: new Date("2020-11-12"),
    rating: 4.8,
    reviewCount: 39,
    reviews: [],
    whatsappNumber: "+593956667777"
  },
  {
    id: "6",
    fullName: "Dr. Roberto Silva",
    cedula: "0412345678",
    email: "roberto.silva@email.com",
    phone: "+593 94 555 6666",
    address: "Malecón 2000",
    city: "Guayaquil",
    province: "Guayas",
    photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3ef89c40-3cc9-4825-807a-12543ada5ee8.png",
    lawFirm: "Silva & Asociados",
    collegeRegistration: "GYE-006",
    primarySpecialty: "Derecho Constitucional",
    subspecialties: ["Acción de protección", "Habeas corpus"],
    biography: "Constitucionalista con experiencia en garantías jurisdiccionales...",
    isVerified: true,
    isActive: true,
    registrationDate: new Date("2017-02-28"),
    rating: 4.9,
    reviewCount: 44,
    reviews: [],
    whatsappNumber: "+593945556666"
  }
];

export default function AbogadosPage() {
  const [lawyers, setLawyers] = useState<Lawyer[]>(mockLawyers);
  const [filteredLawyers, setFilteredLawyers] = useState<Lawyer[]>(mockLawyers);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [currentPage, setCurrentPage] = useState(1);
  const lawyersPerPage = 9;

  useEffect(() => {
    let filtered = lawyers;

    // Filtrar por query
    if (filters.query) {
      filtered = filtered.filter(lawyer =>
        lawyer.fullName.toLowerCase().includes(filters.query!.toLowerCase()) ||
        lawyer.lawFirm?.toLowerCase().includes(filters.query!.toLowerCase()) ||
        lawyer.primarySpecialty.toLowerCase().includes(filters.query!.toLowerCase())
      );
    }

    // Filtrar por provincia
    if (filters.province) {
      filtered = filtered.filter(lawyer => lawyer.province === filters.province);
    }

    // Filtrar por especialidad
    if (filters.specialty) {
      filtered = filtered.filter(lawyer => lawyer.primarySpecialty === filters.specialty);
    }

    // Filtrar por verificación
    if (filters.verified !== undefined) {
      filtered = filtered.filter(lawyer => lawyer.isVerified === filters.verified);
    }

    // Filtrar por rating
    if (filters.rating) {
      filtered = filtered.filter(lawyer => lawyer.rating >= filters.rating!);
    }

    setFilteredLawyers(filtered);
    setCurrentPage(1);
  }, [filters, lawyers]);

  const indexOfLastLawyer = currentPage * lawyersPerPage;
  const indexOfFirstLawyer = indexOfLastLawyer - lawyersPerPage;
  const currentLawyers = filteredLawyers.slice(indexOfFirstLawyer, indexOfLastLawyer);
  const totalPages = Math.ceil(filteredLawyers.length / lawyersPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Directorio de Abogados
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Encuentra abogados verificados y especializados en todo Ecuador
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtros */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">🔍 Filtros de Búsqueda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Búsqueda por texto */}
                <div className="space-y-2">
                  <Label htmlFor="search">Buscar</Label>
                  <Input
                    id="search"
                    placeholder="Nombre, firma, especialidad..."
                    value={filters.query || ""}
                    onChange={(e) => setFilters({ ...filters, query: e.target.value })}
                  />
                </div>

                {/* Provincia */}
                <div className="space-y-2">
                  <Label>Provincia</Label>
                  <Select
                    value={filters.province || ""}
                    onValueChange={(value) => setFilters({ ...filters, province: value || undefined })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Todas las provincias" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Todas las provincias</SelectItem>
                      {ECUADOR_PROVINCES.map((province) => (
                        <SelectItem key={province} value={province}>
                          {province}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Especialidad */}
                <div className="space-y-2">
                  <Label>Especialidad</Label>
                  <Select
                    value={filters.specialty || ""}
                    onValueChange={(value) => setFilters({ ...filters, specialty: value || undefined })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Todas las especialidades" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Todas las especialidades</SelectItem>
                      {LEGAL_SPECIALTIES.map((specialty) => (
                        <SelectItem key={specialty.id} value={specialty.name}>
                          {specialty.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Rating mínimo */}
                <div className="space-y-2">
                  <Label>Calificación mínima</Label>
                  <Select
                    value={filters.rating?.toString() || ""}
                    onValueChange={(value) => setFilters({ ...filters, rating: value ? parseFloat(value) : undefined })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Cualquier calificación" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Cualquier calificación</SelectItem>
                      <SelectItem value="4.5">4.5+ estrellas</SelectItem>
                      <SelectItem value="4.0">4.0+ estrellas</SelectItem>
                      <SelectItem value="3.5">3.5+ estrellas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Solo verificados */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="verified"
                    checked={filters.verified || false}
                    onChange={(e) => setFilters({ ...filters, verified: e.target.checked || undefined })}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="verified" className="text-sm">
                    Solo abogados verificados
                  </Label>
                </div>

                {/* Limpiar filtros */}
                <Button
                  variant="outline"
                  onClick={() => {
                    setFilters({});
                    setCurrentPage(1);
                  }}
                  className="w-full"
                >
                  Limpiar Filtros
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Lista de abogados */}
          <div className="lg:col-span-3">
            {/* Estadísticas de búsqueda */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Mostrando {indexOfFirstLawyer + 1}-{Math.min(indexOfLastLawyer, filteredLawyers.length)} de {filteredLawyers.length} abogados
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Ordenar por:</span>
                <Select defaultValue="rating">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Mejor calificación</SelectItem>
                    <SelectItem value="reviews">Más reseñas</SelectItem>
                    <SelectItem value="name">Nombre A-Z</SelectItem>
                    <SelectItem value="recent">Más recientes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Cards de abogados */}
            {currentLawyers.length === 0 ? (
              <Card className="p-8 text-center">
                <div className="text-gray-500">
                  <span className="text-4xl block mb-4">🔍</span>
                  <h3 className="text-xl font-semibold mb-2">No se encontraron abogados</h3>
                  <p>Intenta ajustar tus filtros de búsqueda</p>
                </div>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentLawyers.map((lawyer) => (
                  <Card key={lawyer.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img
                            src={lawyer.photo}
                            alt={lawyer.fullName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-blue-800 line-clamp-1">
                            {lawyer.fullName}
                          </CardTitle>
                          <CardDescription className="space-y-1">
                            {lawyer.lawFirm && (
                              <div className="text-sm text-gray-600">{lawyer.lawFirm}</div>
                            )}
                            <div className="text-sm text-gray-500">
                              {lawyer.city}, {lawyer.province}
                            </div>
                          </CardDescription>
                        </div>
                        {lawyer.isVerified && (
                          <div className="text-green-500 text-lg" title="Perfil verificado">
                            ✓
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {lawyer.primarySpecialty}
                        </Badge>
                        <div className="text-sm text-gray-600">
                          {lawyer.subspecialties.slice(0, 2).join(", ")}
                          {lawyer.subspecialties.length > 2 && "..."}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-yellow-500">⭐</span>
                          <span className="font-semibold ml-1">{lawyer.rating}</span>
                          <span className="text-gray-500 text-sm ml-2">
                            ({lawyer.reviewCount} reseñas)
                          </span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button asChild className="flex-1">
                          <Link href={`/abogados/${lawyer.id}`}>
                            Ver Perfil
                          </Link>
                        </Button>
                        {lawyer.whatsappNumber && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="text-green-600 border-green-600 hover:bg-green-50"
                          >
                            <a
                              href={`https://wa.me/${lawyer.whatsappNumber.replace(/[^0-9]/g, "")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              💬
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  Anterior
                </Button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNumber = i + 1;
                  return (
                    <Button
                      key={pageNumber}
                      variant={currentPage === pageNumber ? "default" : "outline"}
                      onClick={() => setCurrentPage(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  );
                })}
                
                {totalPages > 5 && (
                  <>
                    <span className="px-2">...</span>
                    <Button
                      variant={currentPage === totalPages ? "default" : "outline"}
                      onClick={() => setCurrentPage(totalPages)}
                    >
                      {totalPages}
                    </Button>
                  </>
                )}

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}