import type { PageServerLoad } from './$types';
import { getSongList } from '../lib/server/songService';

export const load: PageServerLoad = () => {
  const { songs: allSongs } = getSongList();
  return { songs: allSongs.filter((song) => !song.hide) };
};

export const prerender = true;
