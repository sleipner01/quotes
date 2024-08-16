import { client } from "@/sanity/lib/client";

export async function getQuoteIds() {
  return await client.fetch('*[_type == "quotes"]{friendlyId}');
}

export async function getQuote(friendlyId: string) {
  return await client.fetch(`*[_type == "quotes" && friendlyId.current == "${friendlyId}"][0]{quote, author}`);
}

