import React from 'react';

const SobreMi = ({ title, description, imageUrl, imageAlt = "Nosotros" }) => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" id="sobre-nosotros">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Columna de Imagen Moderna */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] sm:aspect-square w-full max-w-md mx-auto z-10 
                            rounded-tl-[100px] rounded-br-[100px] rounded-tr-xl rounded-bl-xl 
                            overflow-hidden border border-white/10 ring-1 ring-white/5 
                            shadow-[0_0_50px_rgba(255,255,255,0.05)]
                            group">
              
              {/* Elementos decorativos detrás de la imagen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
              
              <img
                src={imageUrl}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                loading="lazy"
              />
            </div>
            
            {/* Blob de color animado detrás */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] 
                            bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-[80px] -z-10 animate-pulse">
            </div>
          </div>
          
          {/* Columna de Texto Glassmorphism */}
          <div className="w-full lg:w-1/2 space-y-8 glass p-8 sm:p-12 rounded-3xl border border-white/10 relative">
            
            {/* Pequeño acento decorativo en la esquina */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 filter blur-[40px] rounded-full -z-10"></div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              {title}
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            
            <div className="text-xl text-foreground/70 leading-relaxed font-light">
              <p>{description}</p>
            </div>
            
            {/* Estadísticas/Pills (opcionales pero dan toque moderno) */}
            <div className="pt-8 flex flex-wrap gap-4">
              {["Innovación", "Data-Driven", "Resultados"].map((tag, idx) => (
                <span key={idx} className="px-5 py-2 glass rounded-full text-sm font-medium text-foreground/80 border-white/5 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
