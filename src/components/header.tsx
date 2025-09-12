"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚖️</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-blue-800">AbogadosEC</span>
              <span className="text-xs text-gray-600">Portal Jurídico Ecuador</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    Inicio
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Abogados
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <Link
                        href="/abogados"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent"
                      >
                        <div className="text-sm font-medium">Directorio General</div>
                        <p className="text-xs text-muted-foreground">
                          Busca en nuestro directorio completo de abogados verificados
                        </p>
                      </Link>
                      <Link
                        href="/abogados/destacados"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent"
                      >
                        <div className="text-sm font-medium">Abogados Destacados</div>
                        <p className="text-xs text-muted-foreground">
                          Profesionales con mayor valoración y experiencia
                        </p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/especialidades" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    Especialidades
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/sobre-nosotros" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    Sobre Nosotros
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contacto" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    Contacto
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link href="/abogados/buscar">Buscar Abogado</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              <Link href="/registro">Registro de Abogados</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Inicio
                </Link>
                <Link
                  href="/abogados"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Abogados
                </Link>
                <Link
                  href="/especialidades"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Especialidades
                </Link>
                <Link
                  href="/sobre-nosotros"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Sobre Nosotros
                </Link>
                <Link
                  href="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Contacto
                </Link>
                <div className="border-t pt-4 space-y-3">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/abogados/buscar" onClick={() => setIsOpen(false)}>
                      Buscar Abogado
                    </Link>
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700" asChild>
                    <Link href="/registro" onClick={() => setIsOpen(false)}>
                      Registro de Abogados
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}