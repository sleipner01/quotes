import { getQuoteIds } from '@/queries';
import type { MetadataRoute } from 'next';

const URL = 'https://quotes.magnusbyrkjeland.no/';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const ids = await getQuoteIds();
  const routes = ids.map((id: { friendlyId: { current: string } }) => ({
    url: URL + id.friendlyId.current,
    lastModified: new Date(),
    changeFrequency: 'never',
    priority: 0.1,
  }));
  return [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    ...routes,
  ];
}
