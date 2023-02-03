import type { PageServerLoad } from './$types';
import { getSongList } from '../lib/server/songService';

export const load: PageServerLoad = () => {
	return getSongList();
};

export const prerender = true;
