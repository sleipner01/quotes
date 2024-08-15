import { client } from '@/sanity/lib/client';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const quoteIds = await client.fetch('*[_type == "quotes"]{_id}');

  const randomIndex = Math.floor(Math.random() * quoteIds.length);
  const randomQuoteId = quoteIds[randomIndex]._id;

  return redirect(`/${randomQuoteId}`);
}
