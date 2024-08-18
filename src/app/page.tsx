import { getQuote, getQuoteIds } from '@/queries';
import { notFound } from 'next/navigation';
export const dynamic = 'force-dynamic';

export default async function Home() {
  const quoteIds = await getQuoteIds();
  const randomIndex = Math.floor(Math.random() * quoteIds.length);
  const randomQuoteId = quoteIds[randomIndex].friendlyId.current;

  const quoteResponse = await getQuote(randomQuoteId);
  if (!quoteResponse) {
    notFound();
  }

  const { quote, author } = quoteResponse;
  return (
    <main className='mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-8'>
      <div>
        <p className='mb-4 text-3xl italic'>&quot;{quote}&quot;</p>
        <p className='text-lg italic'>- {author}</p>
      </div>
    </main>
  );
}
