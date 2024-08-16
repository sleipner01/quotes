import { defineField, defineType } from 'sanity';
import {client} from '@/sanity/lib/client';

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
    defineField({
      name: 'friendlyId',
      type: 'slug',
      title: 'Friendly ID',
      description: 'If there is a conflict, wait for the CDN to propagate.',
      options: {
        source: async (doc) => {
          const lastDoc = await client.fetch(
            `*[_type == "quotes"] | order(friendlyId.current desc)[0]`
          );
          const lastId = lastDoc?.friendlyId?.current || '0';
          const newId = parseInt(lastId, 10) + 1;
          return newId.toString();
        },
        slugify: (input) => input,
      }
    }),
      ],
});
