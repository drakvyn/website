// update-cors.js
const fs = require('fs');
const { execSync } = require('child_process');

// Leer la configuración CORS del archivo
const corsConfig = JSON.parse(fs.readFileSync('cors.json', 'utf8'));

// Convertir la configuración a un formato que sanity CLI pueda entender
const originsStr = corsConfig.origins.join(',');
const headersStr = corsConfig.headers.join(',');
const allowCredentials = corsConfig.allowCredentials ? 'true' : 'false';

// Comando para actualizar la configuración CORS
const command = `npx @sanity/cli cors add ${originsStr} --credentials=${allowCredentials} --headers=${headersStr}`;

try {
  console.log('Actualizando configuración CORS de Sanity...');
  console.log(`Ejecutando: ${command}`);
  execSync(command, { stdio: 'inherit' });
  console.log('Configuración CORS actualizada correctamente');
} catch (error) {
  console.error('Error al actualizar la configuración CORS:', error.message);
} 