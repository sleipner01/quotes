import quotesData from '@/quotes.json';

export const dynamic = 'force-dynamic'

function random<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

export default function Home() {
  const {quotes} = quotesData;
 const randomQuote = random(quotes) 
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
      <p className="italic text-3xl mb-4">&quot;{randomQuote.quote}&quot;</p>
      <p className="italic text-lg">- {randomQuote.author}</p>
      </div>
    </main>
  );
}
