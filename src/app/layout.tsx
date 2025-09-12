import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal de Abogados Ecuador - Encuentra tu Abogado Ideal",
  description: "Directorio completo de abogados verificados en Ecuador. Busca por especialidad, ciudad y contrata directamente a profesionales del derecho.",
  keywords: "abogados ecuador, directorio abogados, derecho penal, derecho civil, abogados quito, abogados guayaquil",
  authors: [{ name: "Portal de Abogados Ecuador" }],
  openGraph: {
    title: "Portal de Abogados Ecuador",
    description: "Encuentra y contrata abogados verificados en Ecuador",
    type: "website",
    locale: "es_EC",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}