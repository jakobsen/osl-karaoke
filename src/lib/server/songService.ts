import fs from 'fs';
import matter from 'gray-matter';

const SONGS_DIR = './src/songs';

export function getSongList() {
	const fileNames = fs.readdirSync(SONGS_DIR);
	const songs = fileNames.map((fileName) => {
		const rawText = fs.readFileSync(`${SONGS_DIR}/${fileName}`).toString();
		const { data, content } = matter(rawText);
		return { data, content };
	});
	console.log({ songs });
	return { songs };
}
