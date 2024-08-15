import { type SchemaTypeDefinition } from 'sanity';
import { quotes } from './quotes';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [quotes],
};
