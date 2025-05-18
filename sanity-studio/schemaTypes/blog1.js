import {defineType, defineField, defineArrayMember} from 'sanity'

// Schema for blog posts in Sanity Studio
export default defineType({
  name: 'blog1',
  title: 'Blog',
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
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Texto corto',
      type: 'text',
      description: 'Un resumen breve del blog post',
      validation: Rule => Rule.max(300).required()
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
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}); 