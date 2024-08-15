import { defineField, defineType } from 'sanity';

export const quotes = defineType({
  name: 'quotes',
  title: 'Quotes',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      type: 'text',
    }),
    defineField({
      name: 'author',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
});
