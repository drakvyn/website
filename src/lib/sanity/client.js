import { createClient } from '@sanity/client';

// Cliente de solo lectura para el frontend
export const client = createClient({
  projectId: '6704b0nj',
  dataset: 'production',
  useCdn: true, // Usar CDN para mejor rendimiento
  apiVersion: '2022-06-01',
  token: import.meta.env.VITE_SANITY_TOKEN // Token de solo lectura
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

// Helper function to fetch all projects
export async function getAllProjects() {
  const query = `*[_type == "project"] | order(publishedAt desc) {
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