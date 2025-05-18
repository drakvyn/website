import {defineType, defineField, defineArrayMember} from 'sanity'

// Schema for projects in Sanity Studio
export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief summary of the project',
      validation: Rule => Rule.max(300).required()
    }),
    defineField({
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'text',
      description: 'A more detailed description about the project'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      description: 'Technologies and tools used in this project (e.g., React, Firebase, PHP)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of challenges faced during the project'
    }),
    defineField({
      name: 'solutions',
      title: 'Solutions',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of solutions implemented'
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block'
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true }
        }),
        defineArrayMember({
          type: 'code',
          title: 'Code Block',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'JavaScript', value: 'javascript' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'JSX', value: 'jsx' },
              { title: 'PHP', value: 'php' },
              { title: 'Python', value: 'python' },
              { title: 'Bash', value: 'bash' }
            ]
          }
        })
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'link',
      title: 'Project Link',
      type: 'url',
      description: 'Link to live project website'
    }),
    defineField({
      name: 'repositoryLink',
      title: 'Repository Link',
      type: 'url',
      description: 'Link to project repository (GitHub, GitLab, etc.)'
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}); 