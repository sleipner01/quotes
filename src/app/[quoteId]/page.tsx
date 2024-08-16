import { getQuote, getQuoteIds } from '@/queries';
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
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div>
        <p className='mb-4 text-3xl italic'>&quot;{quote}&quot;</p>
        <p className='text-lg italic'>- {author}</p>
      </div>
    </main>
  );
}
