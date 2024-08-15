import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const quoteIds = await client.fetch('*[_type == "quotes"]{_id}');

  return quoteIds.map((quote: { _id: string }) => ({
    quoteId: quote._id,
  }));
}

export const revalidate = 3600 * 24; // revalidate at most every day

async function getQuote(id: string) {
  const quote = await client.fetch(`*[_type == "quotes" && _id == "${id}"]`);
  return quote[0];
}

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
