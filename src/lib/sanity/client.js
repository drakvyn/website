import { createClient } from '@sanity/client';

// Definimos el token teniendo en cuenta el entorno (desarrollo o producción)
// Usar la variable de entorno que ya está configurada en Netlify
const SANITY_TOKEN = import.meta.env.NEXT_PUBLIC_SANITY_TOKEN || 'skHsw6EPCQo7DBFRFD3DFetZ6I5BfOB8bBgcDebILWHRzNyD4JgQ7uL8nwajWkrOEkvs9IJjPeZMgqBB5';

export const client = createClient({
  projectId: '6704b0nj', // Tu ID de proyecto
  dataset: 'production',
  useCdn: false, // Cambiado a false para siempre obtener los datos más recientes
  apiVersion: '2022-06-01', // Usar la versión de API más reciente
  token: SANITY_TOKEN,
  withCredentials: false, // Importante para CORS
  cors: true, // Habilitar CORS explícitamente
});

// Helper function to fetch blog posts with pagination
export async function getBlogPosts(limit = 3, start = 0) {
  const query = `*[_type == "blog"] | order(publishedAt desc) [${start}...${start + limit}] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      }
    }
  }`;

  return await client.fetch(query);
}

// Helper function to fetch a single blog post by slug
export async function getBlogPostBySlug(slug) {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      }
    },
    body
  }`;

  return await client.fetch(query, { slug });
}

// Helper function to fetch projects
export async function getProjects(limit = 6, start = 0) {
  const query = `*[_type == "project"] | order(publishedAt desc) [${start}...${start + limit}] {
    _id,
    title,
    slug,
    description,
    detailedDescription,
    mainImage {
      asset->{
        _id,
        url
      }
    },
    tags,
    technologies,
    challenges,
    solutions,
    publishedAt,
    link,
    repositoryLink
  }`;

  return await client.fetch(query);
}

// Helper function to fetch a single project by slug
export async function getProjectBySlug(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    detailedDescription,
    mainImage {
      asset->{
        _id,
        url
      }
    },
    body,
    tags,
    technologies,
    challenges,
    solutions,
    publishedAt,
    link,
    repositoryLink
  }`;

  return await client.fetch(query, { slug });
} 