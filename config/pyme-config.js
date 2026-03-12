// src/config/pyme-config.js

export const pymeConfig = {
    // 1. Identidad de Marca
    brand: {
        name: "Magia Mundana",
        tagline: "Eslogan o propuesta de valor corta",
        logoUrl: "/assets/logo.svg",
        favicon: "/favicon.ico",
        colors: {
            primary: "#8b5cf6", // Violet 500 (Base de neón)
            secondary: "#ec4899", // Pink 500
            accent: "#06b6d4", // Cyan 500
        },
    },

    // 2. Información de Contacto Directo
    contact: {
        whatsapp: "54911XXXXXXXX", // Formato internacional sin el +
        whatsappMessage: "Hola! Vengo desde la web y me gustaría consultar por...",
        email: "hola@pyme.com",
        phone: "+54 11 XXXX-XXXX",
        address: "Av. Principal 123, Ciudad",
        googleMapsLink: "https://goo.gl/maps/...",
    },

    // 3. Redes Sociales
    social: {
        instagram: "https://instagram.com/pyme",
        facebook: "https://facebook.com/pyme",
        linkedin: "", // Si queda vacío, el componente no se renderiza
    },

    // 4. Secciones de la Landing
    about: {
        title: "Sobre nosotros",
        description: "Contamos con más de 10 años de experiencia ofreciendo soluciones innovadoras. Nuestro compromiso es transformar la manera en que las empresas interactúan con el mundo digital, brindando herramientas de última generación con un enfoque centrado en los resultados.",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop", // Imagen de equipo/oficina moderna
    },

    // 5. Catálogo de Servicios / Productos (Integrado a Mercado Pago)
    services: [
        {
            id: 1,
            title: "Servicio Inicial",
            description: "Descripción breve de lo que incluye este servicio.",
            price: 5000,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop",
            mpLink: "https://mpago.la/XXXXX", // Link de pago generado en Mercado Pago
            highlighted: false,
        },
        {
            id: 2,
            title: "Pack Premium",
            description: "La solución completa para tu negocio.",
            price: 12000,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
            mpLink: "https://mpago.la/YYYYY",
            highlighted: true, // Para mostrar una card con diseño destacado
        },
    ],

    // 6. Horarios de Atención (Ideal para BertuliSchedule)
    schedule: {
        weekdays: "Lunes a Viernes de 09:00 a 18:00",
        saturdays: "09:00 a 13:00",
        sundays: "Cerrado",
    },

    // 7. Configuración de SEO Básica
    seo: {
        metaTitle: "Servicios Profesionales en [Ciudad] | Nombre Pyme",
        metaDescription: "Especialistas en [Rubro]. Reserva tu turno por WhatsApp o paga online.",
        keywords: "servicio, pyme, turnos, mercadopago",
    }
};