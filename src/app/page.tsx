import { redirect } from 'next/navigation';
import { getQuoteIds } from '@/queries';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const quoteIds = await getQuoteIds();
  const randomIndex = Math.floor(Math.random() * quoteIds.length);
  const randomQuoteId = quoteIds[randomIndex].friendlyId.current;

  return redirect(`/${randomQuoteId}`);
}
