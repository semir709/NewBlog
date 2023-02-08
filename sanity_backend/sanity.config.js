import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'

console.log(schemaTypes)

export default defineConfig({
  name: 'default',
  title: 'selman_blog',

  projectId: 'fe7jgu41',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
