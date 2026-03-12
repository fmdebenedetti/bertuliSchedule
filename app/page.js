import { pymeConfig as config } from '@/config/pyme-config';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import SobreMi from '@/components/SobreMi';
import WhatsAppButton from '@/components/WhatsAppButton';

/*
  Nota de Arquitectura:
  Esta página es el punto de entrada (Home). En lugar de usar data hardcodeada,
  lee las propiedades directamente desde el archivo `/config/pyme-config.js`.
  Esto permite usar este Boilerplate con cientos de clientes simplemente
  cambiando el config y corriendo un nuevo build/server.
*/

export default function Home() {
  
  return (
    <main className="min-h-screen selection:bg-primary/30 selection:text-white">
      
      {/* 
        Menú de Navegación "Glass" Superior muy minimalista
        Usando la marca que viene de la configuración
      */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {config.brand.logoUrl && (
              <img 
                src={config.brand.logoUrl} 
                alt={`${config.brand.name} Logo`} 
                className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
              />
            )}
            <span className="text-2xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              {config.brand.name}
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#sobre-nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a 
              href={config.social?.instagram || '#'} 
              target="_blank" 
              className="text-foreground hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-colors border border-white/10"
            >
              Instagram
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Dinámico alimentado del config */}
      <HeroSection 
        title={config.about.title || config.brand.name}
        subtitle={config.brand.tagline || config.seo.metaDescription}
        secondaryButtonText="Conocenos"
      />

      {/* Grid de Servicios con Glassmorphism conectado a config.services */}
      <ServicesGrid services={config.services} />

      {/* Sección Nosotros conectado a config.about */}
      <SobreMi 
        title="Nuestra Visión"
        description={config.about.description}
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
      />

      {/* Footer minimalista */}
      <footer className="w-full glass border-t border-white/5 py-12 text-center text-foreground/40 text-sm mt-32 space-y-4">
        {config.brand.name} © {new Date().getFullYear()}. Todos los derechos reservados.
        <br/>
        <span className="opacity-50">Desarrollado sobre Pack Pyme Boilerplate</span>
      </footer>

      {/* Botón Flotante alimentado del config de Contacto */}
      <WhatsAppButton 
        whatsapp={config.contact.whatsapp} 
        whatsappMessage={config.contact.whatsappMessage} 
      />
    </main>
  );
}
