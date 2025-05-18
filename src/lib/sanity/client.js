import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '6704b0nj', // Tu ID de proyecto
  dataset: 'production',
  useCdn: true, // Obtener resultados de la CDN
  apiVersion: 'v2022-06-01', // Usar la versión de API más reciente
  // Token hardcoded temporalmente para pruebas
  token: 'skHsw6EPCQo7DBFRFD3DFetZ6I5BfOB8bBgcDebILWHRzNyD4JgQ7uL8nwajWkrOEkvs9IJjPeZMgqBB5'
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
    mainImage {
      asset->{
        _id,
        url
      }
    },
    tags,
    technologies,
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