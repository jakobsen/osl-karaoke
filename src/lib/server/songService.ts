import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';

const SONGS_DIR = './src/songs';

interface SongData {
  title: string;
  artist: string;
  slug: string;
  hide?: boolean;
}

export function getSongList() {
  const fileNames = fs.readdirSync(SONGS_DIR);
  const songs = fileNames.map((fileName) => {
    const rawText = fs.readFileSync(`${SONGS_DIR}/${fileName}`).toString();
    const { data } = matter(rawText);
    return { ...data } as SongData;
  });
  return { songs };
}

export function getSong(slug: string) {
  const fileNames = fs.readdirSync(SONGS_DIR);
  const songs = fileNames.map((fileName) => {
    const rawText = fs.readFileSync(`${SONGS_DIR}/${fileName}`).toString();
    const { content, data } = matter(rawText);
    return {
      content: marked.parse(content, { breaks: true }),
      title: data.title as string,
      artist: data.artist as string,
      slug: data.slug as string
    };
  });
  const song = songs.find((song) => song.slug == slug);
  return song;
}
