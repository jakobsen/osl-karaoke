import { getSong } from '$lib/server/songService';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const { slug } = params;
	const song = getSong(slug);
	if (!song) {
		throw error(404);
	}
	return { song };
};
