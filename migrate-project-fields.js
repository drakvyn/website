import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Cargar variables de entorno desde .env si existe
dotenv.config();

// Verificar si tenemos el token
if (!process.env.SANITY_TOKEN) {
  console.error('Error: No SANITY_TOKEN found in environment variables.');
  console.error('Please set SANITY_TOKEN environment variable before running this script.');
  console.error('Example: SANITY_TOKEN=your_token node migrate-project-fields.js');
  process.exit(1);
}

// Create Sanity client with write permissions
const client = createClient({
  projectId: '6704b0nj',
  dataset: 'production',
  useCdn: false, // Must be false for mutations
  apiVersion: '2022-06-01',
  token: process.env.SANITY_TOKEN
});

// Function to migrate project fields
async function migrateProjects() {
  try {
    console.log('Starting project field migration...');
    
    // Fetch all projects
    const projects = await client.fetch('*[_type == "project"]{_id, title, repoUrl, liveUrl, excerpt}');
    console.log(`Found ${projects.length} projects to migrate`);

    // Process each project
    for (const project of projects) {
      console.log(`Migrating project: ${project.title} (${project._id})`);
      
      const updates = {};
      
      // Map repoUrl to repositoryLink if it exists
      if (project.repoUrl) {
        updates.repositoryLink = project.repoUrl;
        updates.repoUrl = null; // Remove old field
      }
      
      // Map liveUrl to link if it exists
      if (project.liveUrl) {
        updates.link = project.liveUrl;
        updates.liveUrl = null; // Remove old field
      }
      
      // Map excerpt to description if it exists
      if (project.excerpt) {
        updates.description = project.excerpt;
        updates.excerpt = null; // Remove old field
      }
      
      // Only update if we have changes to make
      if (Object.keys(updates).length > 0) {
        console.log(`Updating fields for ${project.title}:`, updates);
        
        // Update the document with patch
        await client
          .patch(project._id)
          .set(updates)
          .commit()
          .then((updatedProject) => {
            console.log(`✅ Updated project: ${updatedProject.title}`);
          })
          .catch((err) => {
            console.error(`❌ Failed to update project ${project.title}:`, err.message);
          });
      } else {
        console.log(`No changes needed for ${project.title}`);
      }
    }
    
    console.log('Migration completed');
  } catch (error) {
    console.error('Migration error:', error);
  }
}

// Run the migration
migrateProjects(); 