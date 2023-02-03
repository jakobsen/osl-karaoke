import fs from 'fs';

const SONGS_DIR = './src/songs';

export function getSongList() {
	return { songs: fs.readdirSync(SONGS_DIR) };
}
