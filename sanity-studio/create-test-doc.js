// // create-test-doc.js
// const { createClient } = require('@sanity/client');

// const client = createClient({
//   projectId: '6704b0nj',
//   dataset: 'production',
//   apiVersion: 'v2022-06-01',
//   useCdn: false,
//   token: process.env.SANITY_TOKEN // Necesario para escritura
// });

// async function createTestDocuments() {
//   try {
//     // Crear un blog de prueba
//     const blogDoc = {
//       _type: 'blog',
//       title: 'Blog de Prueba',
//       slug: { 
//         _type: 'slug',
//         current: 'blog-de-prueba' 
//       },
//       publishedAt: new Date().toISOString(),
//       excerpt: 'Este es un blog de prueba para verificar la funcionalidad.',
//       body: [
//         {
//           _type: 'block',
//           style: 'normal',
//           children: [
//             {
//               _type: 'span',
//               text: 'Contenido del blog de prueba.'
//             }
//           ]
//         }
//       ]
//     };

//     console.log('Intentando crear documento de blog...');
//     const blogResult = await client.create(blogDoc);
//     console.log('Blog creado:', blogResult);

//     // Crear un proyecto de prueba
//     const projectDoc = {
//       _type: 'project',
//       title: 'Proyecto de Prueba',
//       slug: { 
//         _type: 'slug',
//         current: 'proyecto-de-prueba' 
//       },
//       publishedAt: new Date().toISOString(),
//       excerpt: 'Este es un proyecto de prueba para verificar la funcionalidad.',
//       body: [
//         {
//           _type: 'block',
//           style: 'normal',
//           children: [
//             {
//               _type: 'span',
//               text: 'Contenido del proyecto de prueba.'
//             }
//           ]
//         }
//       ],
//       repoUrl: 'https://github.com/example/proyecto-prueba',
//       liveUrl: 'https://example.com/proyecto-prueba'
//     };

//     console.log('Intentando crear documento de proyecto...');
//     const projectResult = await client.create(projectDoc);
//     console.log('Proyecto creado:', projectResult);

//   } catch (error) {
//     console.error('Error al crear documentos:', error);
//     console.error('Mensaje:', error.message);
//     if (error.details) console.error('Detalles:', error.details);
//   }
// }

// createTestDocuments(); 