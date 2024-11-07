import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-primary text-2xl font-bold">Dev<span className="text-white">.Junior</span></a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-primary transition-colors">Inicio</a>
            <a href="#about" className="text-white hover:text-primary transition-colors">Sobre mí</a>
            <a href="#projects" className="text-white hover:text-primary transition-colors">Proyectos</a>
            <a href="#skills" className="text-white hover:text-primary transition-colors">Habilidades</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">Contacto</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-primary transition-colors">Inicio</a>
              <a href="#about" className="text-white hover:text-primary transition-colors">Sobre mí</a>
              <a href="#projects" className="text-white hover:text-primary transition-colors">Proyectos</a>
              <a href="#skills" className="text-white hover:text-primary transition-colors">Habilidades</a>
              <a href="#contact" className="text-white hover:text-primary transition-colors">Contacto</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}