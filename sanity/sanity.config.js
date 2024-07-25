import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'heber-marketplace',

  projectId: 'fu26dzrt',
  dataset: 'heber_general_dataset',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
