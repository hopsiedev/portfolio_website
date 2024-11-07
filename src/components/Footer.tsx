import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Juan Pérez. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}