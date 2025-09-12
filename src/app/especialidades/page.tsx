"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { LEGAL_SPECIALTIES } from "@/types/lawyer";

export default function EspecialidadesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSpecialties = LEGAL_SPECIALTIES.filter(specialty =>
    specialty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    specialty.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    specialty.subspecialties.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Estadísticas simuladas por especialidad
  const specialtyStats = {
    'penal': { lawyers: 127, cases: 1245 },
    'civil': { lawyers: 143, cases: 2156 },
    'laboral': { lawyers: 98, cases: 897 },
    'familiar': { lawyers: 89, cases: 1345 },
    'constitucional': { lawyers: 45, cases: 234 },
    'tributario': { lawyers: 76, cases: 678 },
    'administrativo': { lawyers: 52, cases: 456 },
    'propiedad-intelectual': { lawyers: 23, cases: 123 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Especialidades Legales en Ecuador
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explora las diferentes áreas del derecho ecuatoriano y encuentra abogados especializados en cada materia
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Buscador */}
        <div className="max-w-md mx-auto mb-12">
          <Input
            placeholder="Buscar especialidades..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-center"
          />
        </div>

        {/* Grid de especialidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredSpecialties.map((specialty) => {
            const stats = specialtyStats[specialty.id as keyof typeof specialtyStats] || { lawyers: 0, cases: 0 };
            
            return (
              <Card key={specialty.id} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-colors">
                    <span className="text-3xl">⚖️</span>
                  </div>
                  <CardTitle className="text-xl text-blue-800 text-center group-hover:text-blue-600 transition-colors">
                    {specialty.name}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {specialty.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Estadísticas */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="font-bold text-blue-600">{stats.lawyers}</div>
                      <div className="text-xs text-gray-600">Abogados</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="font-bold text-green-600">{stats.cases}+</div>
                      <div className="text-xs text-gray-600">Casos</div>
                    </div>
                  </div>

                  {/* Subespecialidades principales */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-gray-700">
                      Áreas principales:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {specialty.subspecialties.slice(0, 3).map((sub, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {sub}
                        </Badge>
                      ))}
                      {specialty.subspecialties.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{specialty.subspecialties.length - 3} más
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="space-y-2 pt-4">
                    <Button asChild className="w-full">
                      <Link href={`/especialidades/${specialty.id}`}>
                        Ver Detalles
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/abogados?specialty=${encodeURIComponent(specialty.name)}`}>
                        🔍 Buscar Abogados
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Información adicional */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sistema Legal Ecuatoriano</h3>
              <p className="text-gray-600">
                Basado en el derecho civil con influencias del derecho constitucional moderno
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Abogados Verificados</h3>
              <p className="text-gray-600">
                Todos nuestros profesionales cuentan con matrícula vigente y verificación de credenciales
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Asesoría Personalizada</h3>
              <p className="text-gray-600">
                Conectamos directamente con especialistas según tu caso específico
              </p>
            </div>
          </div>
        </div>

        {/* Marco legal ecuatoriano */}
        <div className="bg-blue-900 text-white rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Marco Legal del Ecuador</h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              El sistema jurídico ecuatoriano se rige por la Constitución de 2008 y se estructura 
              en diferentes ramas especializadas del derecho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">2008</div>
              <div className="text-blue-100">Constitución vigente</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">24</div>
              <div className="text-blue-100">Provincias con cobertura</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">8</div>
              <div className="text-blue-100">Especialidades principales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-blue-100">Abogados registrados</div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">¿No encuentras tu especialidad?</h2>
          <p className="text-gray-600 mb-6">
            Contáctanos y te ayudaremos a encontrar el abogado ideal para tu caso específico
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contacto">
                📞 Contactar Asesor
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/abogados">
                👥 Ver Todos los Abogados
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}