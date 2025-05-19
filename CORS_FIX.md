# Solución a problemas CORS con Sanity

## Cambios realizados

1. **Actualizado el cliente de Sanity** (`src/lib/sanity/client.js`)
   - Cambiado `useCdn` a `false` para asegurar datos frescos
   - Añadida configuración CORS explícita
   - Actualizada la forma de acceder al token usando la variable de entorno NEXT_PUBLIC_SANITY_TOKEN

2. **Ajustado el archivo de configuración de Astro** (`astro.config.mjs`)
   - Actualizada la referencia a la variable de entorno para usar NEXT_PUBLIC_SANITY_TOKEN

3. **Configurado CORS en Netlify** (`netlify.toml`)
   - Añadidos headers CORS para permitir peticiones cross-origin

4. **Creados archivos para configurar CORS en Sanity**
   - `sanity-studio/cors.json`: Dominios permitidos
   - `sanity-studio/update-cors.js`: Script para aplicar la configuración

## Pasos para aplicar los cambios

1. **Configurar la variable de entorno en Netlify**
   - Asegúrate de que `NEXT_PUBLIC_SANITY_TOKEN` esté configurada en Netlify
   - Valor: `skHsw6EPCQo7DBFRFD3DFetZ6I5BfOB8bBgcDebILWHRzNyD4JgQ7uL8nwajWkrOEkvs9IJjPeZMgqBB5`

2. **Aplicar la configuración CORS a Sanity**
   - En el entorno local, navega a la carpeta sanity-studio
   - Ejecuta: `node update-cors.js`
   - Alternativamente, usa el panel de administración de Sanity para configurar CORS

3. **Reconstruir y desplegar el sitio**
   - Ejecuta el despliegue en Netlify

4. **Verificar en producción**
   - Comprueba que los proyectos y blogs carguen correctamente
   - Revisa la consola del navegador para errores CORS

## Si siguen apareciendo problemas

1. **Accede a la configuración CORS de Sanity directamente**
   - Ve a https://manage.sanity.io/
   - Selecciona tu proyecto
   - Ve a API > CORS origins
   - Añade manualmente `https://new.jeanroa.dev` y selecciona "Allow credentials"

2. **Verifica los errores específicos**
   - Usa las herramientas de desarrollo del navegador para ver los errores exactos
   - Para cualquier error 400/401/403, revisa que el token tenga los permisos correctos 