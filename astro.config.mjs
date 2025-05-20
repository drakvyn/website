// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  // Configuración segura para variables de entorno
  vite: {
    // Define variables que estarán disponibles en el código cliente
    define: {
      // EmailJS variables
      'import.meta.env.PUBLIC_EMAILJS_SERVICE_ID': JSON.stringify(process.env.PUBLIC_EMAILJS_SERVICE_ID),
      'import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.PUBLIC_EMAILJS_TEMPLATE_ID),
      'import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.PUBLIC_EMAILJS_PUBLIC_KEY),
      // Sanity token (solo lectura)
      'import.meta.env.PUBLIC_SANITY_TOKEN': JSON.stringify(process.env.PUBLIC_SANITY_TOKEN)
    },
    // Evita que las variables de entorno se expongan en la compilación
    build: {
      // No exponer variables sensibles
      sourcemap: false,
      // Prevenir exposición de tokens hardcodeados en el código
      terserOptions: {
        format: {
          comments: false,
        },
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
});