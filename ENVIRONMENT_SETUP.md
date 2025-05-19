# Environment Variables Setup for Portfolio

This project requires certain environment variables to function correctly, especially for the Sanity CMS connection.

## Required Variables

| Variable | Description |
|----------|-------------|
| `SANITY_TOKEN` | Sanity API token for content access |
| `NEXT_PUBLIC_SANITY_TOKEN` | Public token for client-side queries |

## Local Development Setup

For local development, create a `.env` file in the project root with the following content:

```env
SANITY_TOKEN=your_sanity_token_here
NEXT_PUBLIC_SANITY_TOKEN=your_public_token_here
```

## Netlify Setup

1. Go to your site's settings in Netlify
2. Navigate to "Environment variables"
3. Add the `SANITY_TOKEN` variable with your Sanity token

## Getting the Sanity Token

1. Log in to [manage.sanity.io](https://manage.sanity.io/)
2. Go to your project settings
3. Navigate to "API" section
4. Create a new token with appropriate permissions

## Security Notes

- **Never** include tokens or secrets directly in source code
- Don't share your tokens on GitHub or other public repositories

## Configuración en Desarrollo Local

Para desarrollo local, crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
SANITY_TOKEN=tu_token_de_sanity
PUBLIC_SANITY_PROJECT_ID=6704b0nj
PUBLIC_SANITY_DATASET=production
```

## Configuración en Netlify

Para desplegar en Netlify, debes configurar las variables de entorno en la interfaz de Netlify:

1. Ve a tu proyecto en Netlify
2. Navega a **Site settings** > **Build & deploy** > **Environment**
3. Añade la variable `SANITY_TOKEN` con tu token de Sanity

## Obtención del Token de Sanity

Para obtener un token de Sanity:

1. Inicia sesión en [manage.sanity.io](https://manage.sanity.io/)
2. Selecciona tu proyecto
3. Ve a **API** > **Tokens**
4. Haz clic en **Add API token**
5. Dale un nombre (por ejemplo, "Portfolio Website")
6. Establece los permisos adecuados (generalmente "Viewer" es suficiente para solo lectura)
7. Haz clic en **Create** y copia el token generado

## Notas de Seguridad

- **Nunca** incluyas tokens o secrets directamente en el código fuente
- No compartas tus tokens en GitHub u otros repositorios públicos
- Considera usar tokens con permisos limitados cuando sea posible
- Para scripts que modifican datos, usa variables de entorno temporales:
  ```
  SANITY_TOKEN=tu_token node nombre-del-script.js
  ``` 