import React from 'react';
import { Code2, Brain, Coffee } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Sobre <span className="text-primary">Mí</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Soy un desarrollador junior apasionado por crear soluciones web innovadoras y funcionales. 
              Mi viaje en la programación comenzó hace 2 años y desde entonces no he parado de aprender 
              y mejorar mis habilidades.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Me especializo en desarrollo web full stack, con un fuerte énfasis en tecnologías modernas 
              como React, Node.js y TypeScript. Siempre estoy buscando nuevos desafíos y oportunidades 
              para crecer profesionalmente.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-black/50 p-6 rounded-lg border border-primary/20">
              <Code2 className="text-primary mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Desarrollo Web</h3>
              <p className="text-gray-400">Frontend y Backend con tecnologías modernas</p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-primary/20">
              <Brain className="text-primary mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Aprendizaje Continuo</h3>
              <p className="text-gray-400">Siempre actualizado con las últimas tecnologías</p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-primary/20">
              <Coffee className="text-primary mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Trabajo en Equipo</h3>
              <p className="text-gray-400">Colaboración efectiva y comunicación clara</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}