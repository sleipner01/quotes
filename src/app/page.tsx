import quotesData from '@/quotes.json';

export const dynamic = 'force-dynamic';

function random<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

export default function Home() {
  const { quotes } = quotesData;
  const randomQuote = random(quotes);
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div>
        <p className='mb-4 text-3xl italic'>&quot;{randomQuote.quote}&quot;</p>
        <p className='text-lg italic'>- {randomQuote.author}</p>
      </div>
    </main>
  );
}
