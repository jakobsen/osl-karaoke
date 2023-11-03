import QRCode from 'qrcode';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
  const qrCodeString = await QRCode.toString(
    'https://osloschlagerlag.no?utm_source=live&utm_medium=qr+code&utm_campaign=vokalisten+er+syk+november',
    {
      type: 'svg',
      color: {
        dark: '7648a6'
      }
    }
  );
  return { qrCodeString };
};

export const prerender = true;
