import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '6704b0nj', // Your project ID
  dataset: 'production',
  useCdn: true, // Cache results from the CDN
  apiVersion: '2023-05-03', // Use the latest API version
});

// Helper function to fetch blog posts with pagination
export async function getBlogPosts(limit = 3, start = 0) {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) [${start}...${start + limit}] {
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
    categories[]
  }`;

  return await client.fetch(query);
}

// Helper function to fetch a single blog post by slug
export async function getBlogPostBySlug(slug) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
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
    body,
    categories[]
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
    challenges,
    solutions,
    link,
    publishedAt
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
    mainImage {
      asset->{
        _id,
        url
      }
    },
    tags,
    challenges,
    solutions,
    link,
    publishedAt
  }`;

  return await client.fetch(query, { slug });
} 