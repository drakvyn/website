import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Cargar variables de entorno desde .env si existe
dotenv.config();

// Verificar si tenemos el token
if (!process.env.SANITY_TOKEN) {
  console.error('Warning: No SANITY_TOKEN found in environment variables.');
  console.error('Some operations may fail if they require authentication.');
}

// Create Sanity client
const client = createClient({
  projectId: '6704b0nj',
  dataset: 'production',
  useCdn: false, // Set to false for real-time data
  apiVersion: '2022-06-01',
  token: process.env.SANITY_TOKEN || ''
});

// Fetch all projects
async function fetchProjects() {
  try {
    console.log('Fetching projects from Sanity...');
    
    // Raw query to see all projects regardless of schema
    const allProjects = await client.fetch('*[_type == "project"]{_id, title, _updatedAt, _createdAt, ...}');
    console.log('Total projects found:', allProjects.length);
    
    if (allProjects.length > 0) {
      console.log('First project raw data:');
      console.log(JSON.stringify(allProjects[0], null, 2));
    } else {
      console.log('No projects found in database.');
    }
    
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
}

fetchProjects(); 