# Configuración de Variables de Entorno para el Portfolio

Este proyecto requiere ciertas variables de entorno para funcionar correctamente, especialmente para la conexión con Sanity CMS.

## Variables Requeridas

| Variable | Descripción |
|----------|-------------|
| `SANITY_TOKEN` | Token de acceso para Sanity CMS (con permisos de lectura) |

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