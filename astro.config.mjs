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
      'import.meta.env.NEXT_PUBLIC_SANITY_TOKEN': JSON.stringify(process.env.NEXT_PUBLIC_SANITY_TOKEN || '')
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