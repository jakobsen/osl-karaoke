import QRCode from 'qrcode';
import type { PageServerLoad } from './$types';
import { getSongList } from '../lib/server/songService';

export const load: PageServerLoad = async () => {
  const { songs: allSongs } = getSongList();
  const signupLink =
    'https://docs.google.com/forms/d/e/1FAIpQLScSG4X3kBP6ZTuypuN98d3dE3C7yKDBn5iiEsBNqrPnYPeHWA/viewform';
  const qrCodeString = await QRCode.toString(signupLink, {
    type: 'svg',
    color: {
      dark: '7648a6'
    }
  });
  return {
    songs: allSongs.filter((song) => !song.hide),
    signupLink,
    qrCodeString
  };
};

export const prerender = true;
