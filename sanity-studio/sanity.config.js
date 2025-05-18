import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: '6704b0nj',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
