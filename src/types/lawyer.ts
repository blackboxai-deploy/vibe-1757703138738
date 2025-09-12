export interface Lawyer {
  id: string;
  // Datos personales
  fullName: string;
  cedula: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  photo: string;
  
  // Información profesional
  lawFirm?: string;
  lawFirmLogo?: string;
  collegeRegistration: string; // Número de matrícula
  primarySpecialty: string;
  subspecialties: string[];
  biography: string;
  
  // Documentos
  cvUrl?: string;
  linkedinUrl?: string;
  personalWebsite?: string;
  
  // Contacto profesional
  officePhone?: string;
  whatsappNumber?: string;
  officeAddress?: string;
  
  // Estado y verificación
  isVerified: boolean;
  isActive: boolean;
  registrationDate: Date;
  
  // Valoraciones
  rating: number;
  reviewCount: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  lawyerId: string;
  clientName: string;
  rating: number;
  comment: string;
  date: Date;
  isVerified: boolean;
}

export interface LegalSpecialty {
  id: string;
  name: string;
  description: string;
  subspecialties: string[];
  icon?: string;
}

export interface LawyerRegistration {
  // Datos personales
  fullName: string;
  cedula: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  photo: File | null;
  
  // Información profesional
  lawFirm?: string;
  collegeRegistration: string;
  primarySpecialty: string;
  subspecialties: string[];
  biography: string;
  
  // Documentos opcionales
  cv: File | null;
  linkedinUrl?: string;
  personalWebsite?: string;
}

export interface SearchFilters {
  query?: string;
  city?: string;
  province?: string;
  specialty?: string;
  subspecialty?: string;
  rating?: number;
  verified?: boolean;
}

// Provincias de Ecuador
export const ECUADOR_PROVINCES = [
  'Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi',
  'El Oro', 'Esmeraldas', 'Galápagos', 'Guayas', 'Imbabura', 'Loja',
  'Los Ríos', 'Manabí', 'Morona Santiago', 'Napo', 'Orellana',
  'Pastaza', 'Pichincha', 'Santa Elena', 'Santo Domingo de los Tsáchilas',
  'Sucumbíos', 'Tungurahua', 'Zamora Chinchipe'
];

// Ciudades principales por provincia
export const MAJOR_CITIES = {
  'Pichincha': ['Quito', 'Cayambe', 'Machachi'],
  'Guayas': ['Guayaquil', 'Durán', 'Milagro', 'Daule'],
  'Azuay': ['Cuenca', 'Gualaceo', 'Paute'],
  'Manabí': ['Manta', 'Portoviejo', 'Bahía de Caráquez'],
  'El Oro': ['Machala', 'Pasaje', 'Huaquillas'],
  'Tungurahua': ['Ambato', 'Baños de Agua Santa'],
  'Imbabura': ['Ibarra', 'Otavalo', 'Cotacachi'],
  'Loja': ['Loja', 'Catamayo', 'Cariamanga'],
  'Esmeraldas': ['Esmeraldas', 'Atacames', 'Tonsupa'],
  'Los Ríos': ['Babahoyo', 'Quevedo', 'Ventanas']
};

// Especialidades legales del Ecuador
export const LEGAL_SPECIALTIES: LegalSpecialty[] = [
  {
    id: 'penal',
    name: 'Derecho Penal',
    description: 'Defensa en procesos penales y delitos',
    subspecialties: [
      'Delitos comunes',
      'Delincuencia organizada',
      'Lavado de activos',
      'Violencia intrafamiliar',
      'Delitos informáticos',
      'Narcotráfico',
      'Estafas y fraudes'
    ]
  },
  {
    id: 'civil',
    name: 'Derecho Civil',
    description: 'Contratos, herencias y responsabilidad civil',
    subspecialties: [
      'Herencias y sucesiones',
      'Contratos civiles',
      'Arrendamientos',
      'Daños y perjuicios',
      'Responsabilidad civil',
      'Propiedad horizontal',
      'Registro de la propiedad'
    ]
  },
  {
    id: 'laboral',
    name: 'Derecho Laboral',
    description: 'Relaciones laborales y seguridad social',
    subspecialties: [
      'Contratos de trabajo',
      'Despidos intempestivos',
      'Conflictos colectivos',
      'Seguridad social',
      'Acoso laboral',
      'Indemnizaciones',
      'Tercerización laboral'
    ]
  },
  {
    id: 'familiar',
    name: 'Derecho de Familia',
    description: 'Divorcios, tenencia y pensiones alimenticias',
    subspecialties: [
      'Divorcios',
      'Tenencia de menores',
      'Pensiones alimenticias',
      'Régimen de visitas',
      'Adopciones',
      'Violencia intrafamiliar',
      'Unión de hecho'
    ]
  },
  {
    id: 'constitucional',
    name: 'Derecho Constitucional',
    description: 'Garantías constitucionales y derechos fundamentales',
    subspecialties: [
      'Acción de protección',
      'Habeas corpus',
      'Habeas data',
      'Acción de acceso a la información',
      'Acción extraordinaria de protección',
      'Consultas populares',
      'Control constitucional'
    ]
  },
  {
    id: 'tributario',
    name: 'Derecho Tributario',
    description: 'Impuestos y relaciones con el SRI',
    subspecialties: [
      'Planificación fiscal',
      'Defensa ante el SRI',
      'Impuesto a la renta',
      'IVA',
      'Consultas tributarias',
      'Sanciones tributarias',
      'Procedimientos coactivos'
    ]
  },
  {
    id: 'administrativo',
    name: 'Derecho Administrativo',
    description: 'Relaciones con la administración pública',
    subspecialties: [
      'Contratación pública',
      'Sanciones administrativas',
      'Procedimientos administrativos',
      'Recursos administrativos',
      'Expropiaciones',
      'Licencias y permisos',
      'Función pública'
    ]
  },
  {
    id: 'propiedad-intelectual',
    name: 'Propiedad Intelectual',
    description: 'Marcas, patentes y derechos de autor',
    subspecialties: [
      'Registro de marcas',
      'Patentes de invención',
      'Derechos de autor',
      'Competencia desleal',
      'Transferencia de tecnología',
      'Nombres de dominio',
      'Piratería y falsificación'
    ]
  }
];