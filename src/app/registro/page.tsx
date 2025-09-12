"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { LawyerRegistration, LEGAL_SPECIALTIES, ECUADOR_PROVINCES } from "@/types/lawyer";

export default function RegistroPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<LawyerRegistration>();

  const onSubmit = async (data: LawyerRegistration) => {
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Datos del registro:", { ...data, subspecialties: selectedSpecialties });
    setShowSuccess(true);
    setIsSubmitting(false);
  };

  const handleSpecialtyChange = (specialtyId: string, checked: boolean) => {
    if (checked) {
      setSelectedSpecialties([...selectedSpecialties, specialtyId]);
    } else {
      setSelectedSpecialties(selectedSpecialties.filter(id => id !== specialtyId));
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <CardTitle className="text-2xl text-green-600">¡Registro Exitoso!</CardTitle>
            <CardDescription>
              Tu solicitud ha sido enviada correctamente
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Hemos recibido tu registro y será revisado por nuestro equipo de verificación.
              Te contactaremos dentro de 2-3 días hábiles.
            </p>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <a href="/">Volver al Inicio</a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="/abogados">Ver Directorio</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Registro de Abogados
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Únete a nuestro directorio de profesionales y conecta con clientes que necesitan tus servicios
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Información Personal */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                👤 Información Personal
              </CardTitle>
              <CardDescription>
                Completa tus datos personales básicos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nombre Completo *</Label>
                  <Input
                    id="fullName"
                    {...register("fullName", { required: "El nombre completo es obligatorio" })}
                    placeholder="Dr. Juan Carlos Pérez"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cedula">Cédula de Identidad *</Label>
                  <Input
                    id="cedula"
                    {...register("cedula", { 
                      required: "La cédula es obligatoria",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "La cédula debe tener 10 dígitos"
                      }
                    })}
                    placeholder="1234567890"
                    maxLength={10}
                  />
                  {errors.cedula && (
                    <p className="text-sm text-red-600">{errors.cedula.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { required: "El correo es obligatorio" })}
                    placeholder="abogado@ejemplo.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    {...register("phone", { required: "El teléfono es obligatorio" })}
                    placeholder="+593 99 123 4567"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="province">Provincia *</Label>
                  <Select onValueChange={(value) => setValue("city", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu provincia" />
                    </SelectTrigger>
                    <SelectContent>
                      {ECUADOR_PROVINCES.map((province) => (
                        <SelectItem key={province} value={province}>
                          {province}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Input
                    id="address"
                    {...register("address")}
                    placeholder="Av. Amazonas y Naciones Unidas"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Información Profesional */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                ⚖️ Información Profesional
              </CardTitle>
              <CardDescription>
                Datos sobre tu ejercicio profesional
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="lawFirm">Estudio Jurídico / Firma</Label>
                  <Input
                    id="lawFirm"
                    {...register("lawFirm")}
                    placeholder="Bufete Pérez & Asociados"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="collegeRegistration">Número de Matrícula *</Label>
                  <Input
                    id="collegeRegistration"
                    {...register("collegeRegistration", { required: "El número de matrícula es obligatorio" })}
                    placeholder="12345"
                  />
                  {errors.collegeRegistration && (
                    <p className="text-sm text-red-600">{errors.collegeRegistration.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="primarySpecialty">Especialidad Principal *</Label>
                  <Select onValueChange={(value) => setValue("primarySpecialty", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu especialidad principal" />
                    </SelectTrigger>
                    <SelectContent>
                      {LEGAL_SPECIALTIES.map((specialty) => (
                        <SelectItem key={specialty.id} value={specialty.id}>
                          {specialty.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedinUrl">LinkedIn (opcional)</Label>
                  <Input
                    id="linkedinUrl"
                    {...register("linkedinUrl")}
                    placeholder="https://linkedin.com/in/tu-perfil"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="biography">Biografía Profesional *</Label>
                <Textarea
                  id="biography"
                  {...register("biography", { required: "La biografía es obligatoria" })}
                  placeholder="Describe tu experiencia, logros y enfoque profesional (máximo 300 palabras)..."
                  rows={5}
                  maxLength={300}
                />
                {errors.biography && (
                  <p className="text-sm text-red-600">{errors.biography.message}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Subespecialidades */}
          <Card>
            <CardHeader>
              <CardTitle>🎯 Subespecialidades</CardTitle>
              <CardDescription>
                Selecciona las áreas específicas en las que te especializas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {LEGAL_SPECIALTIES.map((specialty) => (
                  <div key={specialty.id} className="space-y-3">
                    <h4 className="font-medium text-blue-600">{specialty.name}</h4>
                    {specialty.subspecialties.map((subspecialty) => (
                      <div key={subspecialty} className="flex items-center space-x-2">
                        <Checkbox
                          id={subspecialty}
                          checked={selectedSpecialties.includes(subspecialty)}
                          onCheckedChange={(checked) => 
                            handleSpecialtyChange(subspecialty, checked as boolean)
                          }
                        />
                        <Label htmlFor={subspecialty} className="text-sm">
                          {subspecialty}
                        </Label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Archivos */}
          <Card>
            <CardHeader>
              <CardTitle>📄 Documentos</CardTitle>
              <CardDescription>
                Sube tu foto profesional y CV (opcional)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertDescription>
                  La foto profesional es obligatoria. Se recomienda una imagen formal en alta resolución.
                </AlertDescription>
              </Alert>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="photo">Foto Profesional * (JPG, PNG, max 5MB)</Label>
                  <Input
                    id="photo"
                    type="file"
                    accept="image/jpeg,image/png"
                    {...register("photo", { required: "La foto profesional es obligatoria" })}
                  />
                  {errors.photo && (
                    <p className="text-sm text-red-600">{errors.photo.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cv">Curriculum Vitae (PDF, max 10MB)</Label>
                  <Input
                    id="cv"
                    type="file"
                    accept=".pdf"
                    {...register("cv")}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Términos y Condiciones */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <Checkbox id="terms" required />
                <div className="space-y-2">
                  <Label htmlFor="terms" className="text-sm">
                    Acepto los{" "}
                    <a href="/terminos" className="text-blue-600 hover:underline">
                      términos y condiciones
                    </a>{" "}
                    y autorizo la verificación de mis credenciales profesionales.
                  </Label>
                  <p className="text-xs text-gray-500">
                    Tu registro será revisado manualmente antes de ser publicado. 
                    Nos reservamos el derecho de solicitar documentación adicional.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Botón de envío */}
          <div className="flex justify-center pb-8">
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full md:w-auto px-12 bg-gradient-to-r from-blue-600 to-blue-700"
            >
              {isSubmitting ? "Enviando..." : "📤 Enviar Registro"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}