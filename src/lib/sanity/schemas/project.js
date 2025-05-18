// Schema for projects in Sanity Studio
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'text',
      description: 'A more detailed description about the project'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'technologies',
      title: 'Technologies',
      description: 'Technologies and tools used in this project (e.g., React, Firebase, PHP)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of challenges faced during the project'
    },
    {
      name: 'solutions',
      title: 'Solutions',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of solutions implemented'
    },
    {
      name: 'link',
      title: 'Project Link',
      type: 'url',
      description: 'Link to live project website'
    },
    {
      name: 'repositoryLink',
      title: 'Repository Link',
      type: 'url',
      description: 'Link to project repository (GitHub, GitLab, etc.)'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark this project as featured',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}; 