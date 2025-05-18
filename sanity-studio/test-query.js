const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '6704b0nj',
  dataset: 'production',
  apiVersion: 'v2022-06-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN  // Solo si es necesario para lectura
});

async function fetchData() {
  try {
    console.log('Conectando a Sanity con:', {
      projectId: client.config().projectId,
      dataset: client.config().dataset,
      apiVersion: client.config().apiVersion
    });

    // Probar consulta genérica primero
    const allDocs = await client.fetch('*[_type in ["blog", "project"]]');
    console.log('Total de documentos encontrados:', allDocs.length);
    
    if (allDocs.length > 0) {
      console.log('Tipos de documentos encontrados:', 
        [...new Set(allDocs.map(doc => doc._type))]);
    }

    // Probar consulta para blogs
    const blogs = await client.fetch('*[_type == "blog"]');
    console.log('Blogs encontrados:', blogs.length);
    
    if (blogs.length > 0) {
      console.log(JSON.stringify(blogs, null, 2));
    }

    // Probar consulta para proyectos
    const projects = await client.fetch('*[_type == "project"]');
    console.log('Proyectos encontrados:', projects.length);
    
    if (projects.length > 0) {
      console.log(JSON.stringify(projects, null, 2));
    }
  } catch (error) {
    console.error('Error al consultar Sanity:', error);
    console.error('Mensaje:', error.message);
    console.error('Detalles:', error.details || 'No hay detalles adicionales');
    console.error('Stack:', error.stack);
  }
}

fetchData(); 