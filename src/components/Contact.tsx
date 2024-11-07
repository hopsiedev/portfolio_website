import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/95">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Contacta <span className="text-primary">Conmigo</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-gray-400">juan.perez@ejemplo.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-1">Teléfono</h3>
                <p className="text-gray-400">+34 600 000 000</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-1">Ubicación</h3>
                <p className="text-gray-400">Madrid, España</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Nombre"
                className="w-full px-4 py-3 bg-black/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-white"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-3 bg-black/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-white"
              />
            </div>
            <div>
              <textarea 
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-white resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <span>Enviar Mensaje</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}