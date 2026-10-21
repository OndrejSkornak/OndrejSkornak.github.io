import { getCollection } from 'astro:content';

/** Published posts, newest first. Drafts show only in `npm run dev`. */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('sk-SK', { day: 'numeric', month: 'long', year: 'numeric' });
}
