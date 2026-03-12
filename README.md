Este repositorio contiene el "Pack Pyme" de Bertuli Solutions: un sistema modular de landing page y gestión de servicios optimizado para una implementación ultra rápida.

🚀 Características
Diseño Modular: Componentes en React/Next.js preparados para personalización de marca (Look & Feel).

Conversión Directa: Integración nativa con botones de pago de Mercado Pago.

Acción Inmediata: Botón flotante vinculado a WhatsApp para cierre de ventas directo.

Secciones Core: Home, Servicios, Sobre Mí y Contacto.

Optimización Mobile: Diseño responsive pensado para el usuario de smartphone.

🛠️ Configuración Rápida (Quick Start)
Para desplegar una nueva instancia, solo debes editar el archivo /src/config/pyme-config.js.

JavaScript
// Ejemplo de personalización rápida
export const pymeConfig = {
  brand: {
    name: "Nombre del Cliente",
    logo: "/assets/logo-cliente.png",
    themeColor: "#XXXXXX", // Color principal de la marca
  },
  integrations: {
    whatsapp: "54911XXXXXXXX",
    mercadoPagoToken: "MP_LINK_AQUÍ",
  }
};
📦 Despliegue (Deploy)
Este proyecto está configurado para desplegarse en Firebase Hosting.

Instalar dependencias: npm install

Generar Build: npm run build

Deploy a subdominio: firebase deploy --only hosting:demo

🛡️ Mantenimiento y Créditos
Desarrollado y mantenido por Bertuli Solutions. El logo oficial de la marca debe mantenerse en el footer como sello de calidad técnica.