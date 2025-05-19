import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Cargar variables de entorno desde .env si existe
dotenv.config();

// Verificar si tenemos el token
if (!process.env.SANITY_TOKEN) {
  console.error('Error: No SANITY_TOKEN found in environment variables.');
  console.error('Please set SANITY_TOKEN environment variable before running this script.');
  console.error('Example: SANITY_TOKEN=your_token node add-technologies.js');
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

// List of common technologies to choose from
const techOptions = [
  'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 
  'MongoDB', 'Firebase', 'AWS', 'Next.js', 'Astro', 
  'PHP', 'Laravel', 'Vue.js', 'Angular', 'Tailwind CSS', 
  'Bootstrap', 'HTML', 'CSS', 'SASS', 'Material UI',
  'WordPress', 'Shopify', 'Wix', 'Webflow', 'Figma',
  'Adobe XD', 'Photoshop', 'Illustrator', 'Python', 'Django',
  'Ruby', 'Ruby on Rails', 'GraphQL', 'REST API', 'MySQL',
  'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Git'
];

// Function to add technologies to projects that don't have them
async function addTechnologiesToProjects() {
  try {
    console.log('Starting to add technologies to projects...');
    
    // Fetch all projects that don't have technologies field or where it's empty
    const projects = await client.fetch('*[_type == "project" && (!defined(technologies) || count(technologies) == 0)]{_id, title}');
    console.log(`Found ${projects.length} projects without technologies`);

    if (projects.length === 0) {
      console.log('No projects need updating. All projects already have technologies.');
      return;
    }

    // Process each project
    for (const project of projects) {
      console.log(`Adding technologies to project: ${project.title} (${project._id})`);
      
      // Randomly select 3-6 technologies for this project
      const techCount = Math.floor(Math.random() * 4) + 3; // 3 to 6 technologies
      const selectedTechs = [];
      
      for (let i = 0; i < techCount; i++) {
        const randomIndex = Math.floor(Math.random() * techOptions.length);
        const tech = techOptions[randomIndex];
        
        // Avoid duplicates
        if (!selectedTechs.includes(tech)) {
          selectedTechs.push(tech);
        }
      }
      
      console.log(`Selected technologies for ${project.title}:`, selectedTechs);
      
      // Update the document with new technologies
      await client
        .patch(project._id)
        .set({ technologies: selectedTechs })
        .commit()
        .then((updatedProject) => {
          console.log(`✅ Updated project: ${project.title}`);
        })
        .catch((err) => {
          console.error(`❌ Failed to update project ${project.title}:`, err.message);
        });
    }
    
    console.log('Finished adding technologies to projects');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the script
addTechnologiesToProjects(); 