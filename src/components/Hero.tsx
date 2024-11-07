import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-primary/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hola, soy <span className="text-primary">Juan Pérez</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Desarrollador Full Stack Junior
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full transition-colors">
              Contáctame
            </a>
            <a href="#projects" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-colors">
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </a>
    </section>
  );
}