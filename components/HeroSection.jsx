import React from 'react';

const HeroSection = ({ title, subtitle, bgImage, secondaryButtonText }) => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-4 overflow-hidden pt-20 pb-32">
      
      {/* Background Decorators - Círculos borrosos */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-10 animate-fade-in-up">
        {/* Etiqueta superior opcional */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 text-sm font-medium text-primary-foreground/80 mb-4">
          <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
          Bienvenido a la nueva era digital
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
          {title.split(' ').map((word, idx) => (
             <span key={idx} className={idx % 2 === 0 ? "text-gradient block sm:inline" : "block sm:inline"}>
               {word}{' '}
             </span>
          ))}
        </h1>
        
        <p className="text-lg sm:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#servicios"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-in-out bg-transparent border-0 rounded-full cursor-pointer"
          >
            {/* Borde animado del botón */}
            <span className="absolute inset-0 w-full h-full p-[2px] rounded-full bg-gradient-to-r from-primary via-secondary to-accent group-hover:scale-105 transition-transform duration-300"></span>
            {/* Fondo real del botón */}
            <span className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full bg-background group-hover:bg-opacity-0 transition-all duration-300"></span>
            
            <span className="relative flex items-center gap-2">
              Explorar Servicios
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>

          {secondaryButtonText && (
             <a
             href="#contacto"
             className="px-8 py-4 font-semibold text-foreground/80 hover:text-foreground transition-colors glass rounded-full hover:bg-white/10"
           >
             {secondaryButtonText}
           </a>
          )}
        </div>
      </div>
      
      {/* Separador inferior dinámico (Wave) - Puedes usar SVG o CSS puro */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
