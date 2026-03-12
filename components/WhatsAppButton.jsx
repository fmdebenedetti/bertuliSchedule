import React from 'react';

const WhatsAppButton = ({ whatsapp, whatsappMessage }) => {
  if (!whatsapp) return null; // Fallback por si la config viene vacía

  const cleanPhone = whatsapp.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(whatsappMessage || "Hola!");
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center group">
      {/* Efecto Radar/Ping debajo del botón real */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:animate-none"></div>
      
      {/* Glow secundario (mas sutil, tipo neón) */}
       <div className="absolute inset-[-10px] rounded-full bg-[#25D366]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-full shadow-[0_4px_20px_0_rgba(37,211,102,0.5)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 ring-offset-2 ring-offset-background border border-white/20"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 fill-current filter drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.275-.927-3.541 0-3.867 3.15-7.017 7.018-7.017s7.015 3.15 7.015 7.017c0 3.867-3.15 7.017-7.015 7.017z"/>
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
