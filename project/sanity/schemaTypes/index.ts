import { type SchemaTypeDefinition } from 'sanity'
import { author } from './auther'
import { startup } from './startup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author,startup],
}
