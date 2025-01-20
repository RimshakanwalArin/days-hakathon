import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { categor } from './categories'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,categor],
}
