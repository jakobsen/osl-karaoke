import { getSong, getSongList } from '$lib/server/songService';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const { slug } = params;
  const song = getSong(slug);
  if (!song) {
    throw error(404);
  }
  return { song };
};

export const entries: EntryGenerator = () => {
  const { songs } = getSongList();
  return songs.map((song) => ({ slug: song.slug }));
};

export const prerender = true;
