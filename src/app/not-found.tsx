import { redirect } from 'next/navigation';

export default function notFound() {
  return redirect('/');
}
