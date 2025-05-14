import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name correctly in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create placeholder image data as a colored SVG
function createPlaceholderSVG(width, height, color, number) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${color}" />
    <text x="50%" y="50%" font-family="Arial" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle">Project ${number}</text>
  </svg>`;
}

// Create project placeholder images
function createPlaceholders() {
  const projectsDir = path.join(__dirname, 'public', 'projects');
  
  // Check if directory exists, create if not
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
    console.log(`Created directory: ${projectsDir}`);
  }
  
  // Generate three placeholder images with different colors
  const colors = ['#4C4CFF', '#FF4C4C', '#4CFF4C'];
  
  for (let i = 1; i <= 3; i++) {
    const svgContent = createPlaceholderSVG(800, 600, colors[i-1], i);
    const filePath = path.join(projectsDir, `project${i}.svg`);
    
    fs.writeFileSync(filePath, svgContent);
    console.log(`Created placeholder: ${filePath}`);
  }
  
  console.log('Placeholder creation complete!');
}

createPlaceholders(); 