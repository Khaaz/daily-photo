// eslint-disable-next-line camelcase
import { Inter } from "next/font/google";

const inter = Inter( { subsets: ["latin"] } );

export const fonts = {
	heading: inter.style.fontFamily,
	body: inter.style.fontFamily,
};
