import { getQuote, getQuoteIds } from '@/queries';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const quoteIds = await getQuoteIds();

  return quoteIds.map((quote: { friendlyId: { current: string } }) => ({
    quoteFriendlyId: quote.friendlyId.current,
  }));
}

export const revalidate = 86400; // revalidate at most every day
export default async function Quote({
  params,
}: {
  params: { quoteId: string };
}) {
  const quoteResponse = await getQuote(params.quoteId);
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
      <div className='mt-4'>
        <Link href='/' prefetch className='rounded-lg border border-white px-4 py-2'>
          Load new random quote...
        </Link>
      </div>
    </main>
  );
}
