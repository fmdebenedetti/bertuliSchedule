import React from 'react';

const ServiceCard = ({ title, description, price, image, mpLink, highlighted }) => (
  <div className={`relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 group
    ${highlighted 
      ? 'glass-card border-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.15)] ring-1 ring-primary/20' 
      : 'glass shadow-lg hover:shadow-xl hover:bg-white/[0.05]'}
  `}>
    
    {/* Imagen Decorativa del Servicio (opcional) */}
    {image && (
      <div className="h-48 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-60 mix-blend-luminosity hover:mix-blend-normal"
        />
      </div>
    )}

    {/* Etiqueta Destacado */}
    {highlighted && (
       <div className="absolute -top-3 -right-3 sm:top-4 sm:right-4 z-20 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent via-secondary to-primary text-white shadow-[0_0_15px_rgba(236,72,153,0.6)] border border-white/20 text-xs font-black uppercase tracking-widest bg-[length:200%_auto] animate-[border-glow_3s_linear_infinite]">
         ★ Popular
       </div>
    )}

    <div className={`p-8 flex flex-col flex-grow relative z-20 ${image ? '-mt-12' : ''}`}>
      <h3 className={`text-2xl font-bold mb-4 ${highlighted ? 'text-primary' : 'text-foreground'}`}>{title}</h3>
      <p className="text-foreground/60 mb-8 flex-grow leading-relaxed font-light">{description}</p>
      
      <div className="mt-auto space-y-6">
        <div className="flex items-baseline gap-2">
          {price > 0 && <span className="text-sm text-foreground/40 font-medium">Desde</span>}
          <span className="text-4xl font-extrabold text-white">
            {price === 0 ? 'Gratis' : `$${price.toLocaleString('es-AR')}`}
          </span>
        </div>
        
        <a
          href={mpLink || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center px-6 py-4 font-semibold rounded-xl text-center transition-all duration-300
            ${highlighted 
              ? 'bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' 
              : 'glass hover:bg-white/10 text-foreground'}
          `}
        >
          {price === 0 ? 'Consultar' : 'Contratar Ahora'}
        </a>
      </div>
    </div>
  </div>
);

const ServicesGrid = ({ services = [] }) => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative" id="servicios">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 inline-block">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-foreground/50 max-w-2xl mx-auto font-light">
            Soluciones diseñadas para escalar tu negocio en el entorno digital con tecnología de vanguardia.
          </p>
        </div>
        
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        ) : (
          <p className="text-center text-foreground/40 text-lg glass p-12 rounded-3xl">Próximamente estaremos publicando nuestros servicios.</p>
        )}
      </div>
      
      {/* Luz de fondo sutil para la sección completa */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background -z-10 pointer-events-none"></div>
    </section>
  );
};

export default ServicesGrid;
