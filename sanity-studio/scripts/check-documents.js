// Script para verificar documentos en Sanity
// Ejecutar con: sanity exec scripts/check-documents.js --with-user-token

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '6704b0nj',
  dataset: 'production',
  useCdn: false, // Necesitamos los datos frescos, no cacheados
  apiVersion: '2023-05-03',
})

// Consulta para obtener todos los documentos por tipo
async function checkDocuments() {
  try {
    // Verificar documentos de tipo "post"
    const posts = await client.fetch('*[_type == "post"]')
    console.log('\n--- Documentos de tipo "post" ---')
    console.log(`Encontrados: ${posts.length}`)
    if (posts.length > 0) {
      posts.forEach(post => {
        console.log(`- ${post.title} (ID: ${post._id})`)
      })
    }

    // Verificar documentos de tipo "blogPost"
    const blogPosts = await client.fetch('*[_type == "blogPost"]')
    console.log('\n--- Documentos de tipo "blogPost" ---')
    console.log(`Encontrados: ${blogPosts.length}`)
    if (blogPosts.length > 0) {
      blogPosts.forEach(post => {
        console.log(`- ${post.title} (ID: ${post._id})`)
      })
    }

    // Verificar documentos de tipo "project"
    const projects = await client.fetch('*[_type == "project"]')
    console.log('\n--- Documentos de tipo "project" ---')
    console.log(`Encontrados: ${projects.length}`)
    if (projects.length > 0) {
      projects.forEach(project => {
        console.log(`- ${project.title} (ID: ${project._id})`)
      })
    }

    // Mostrar todos los tipos de documento disponibles
    const types = await client.fetch('array::unique(*._type)')
    console.log('\n--- Todos los tipos de documento ---')
    console.log(types.join(', '))

  } catch (error) {
    console.error('Error al verificar documentos:', error)
  }
}

checkDocuments() 