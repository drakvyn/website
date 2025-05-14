# Sanity Studio Setup for Portfolio Website

This guide will help you set up Sanity Studio to manage content for your portfolio website.

## Prerequisites

- Node.js (v14+)
- Your Sanity project has been created (Project ID: 6704b0nj)

## Setup Instructions

### 1. Install Sanity CLI

```bash
npm install -g @sanity/cli
```

### 2. Create a new directory for your Sanity Studio

```bash
mkdir portfolio-studio
cd portfolio-studio
```

### 3. Initialize a new Sanity project

```bash
sanity init
```

When prompted:
- Select "Create new project"
- Enter a project name (e.g., "Portfolio Content")
- Use the default dataset configuration
- Select "Clean project with no predefined schemas"

### 4. Copy the schema files

Copy the schema files from your frontend project:

- `src/lib/sanity/schemas/blogPost.js`
- `src/lib/sanity/schemas/project.js`

to your Sanity Studio project's `schemas` directory.

### 5. Update the schema.js file

Open the `schemas/schema.js` file in your Sanity Studio project and update it to:

```javascript
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import your schema types
import blogPost from './blogPost';
import project from './project';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blogPost,
    project
  ]),
});
```

### 6. Start Sanity Studio

```bash
sanity start
```

This will start the studio on http://localhost:3333

### 7. Deploy Sanity Studio (Optional)

To make your Sanity Studio accessible online:

```bash
sanity deploy
```

This will deploy your studio to a *.sanity.studio URL.

## Content Structure

### Blog Posts
The blog post schema includes:
- Title
- Slug 
- Published date
- Main image
- Excerpt
- Categories (as tags)
- Body content (rich text)

### Projects
The project schema includes:
- Title
- Slug
- Description
- Main image
- Tags
- Challenges
- Solutions
- Project link
- Published date
- Featured flag

## Using in your website

The website is already configured to connect to your Sanity project with the following details:

- Project ID: 6704b0nj
- Dataset: production

If you need to update your API configuration, you can modify the client setup in `src/lib/sanity/client.js`.

## Help and Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://www.sanity.io/exchange/community)
- [Sanity Slack Community](https://slack.sanity.io/) 