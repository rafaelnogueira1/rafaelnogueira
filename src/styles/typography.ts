import { Roboto, Poppins } from 'next/font/google';

const roboto = Roboto({
	weight: ['400', '500'],
	subsets: ['latin'],
});

const poppins = Poppins({
	weight: ['100', '200', '400', '500'],
	subsets: ['latin'],
});

const fontFamily = {
	primary: `${roboto.style.fontFamily}, sans-serif`,
	secondary: `${poppins.style.fontFamily}, sans-serif`,
};

const fontSize = {
	1: '12px',
	2: '14px',
	3: '16px',
	4: '20px',
	5: '24px',
	6: '32px',
};

const lineHeight = {
	sm: '100%',
	md: '120%',
	lg: '140%',
};

export const typography = {
	...fontFamily,
	...fontSize,
	...lineHeight,
	logoFontFamily: fontFamily.secondary,
	logoFontSize: fontSize[4],
	titleFontFamily: fontFamily.secondary,
	titleLineHeight: lineHeight.md,
	textFontFamily: fontFamily.primary,
	textFontSize: fontSize[2],
	textLineHeight: lineHeight.md,
	articleTitleFontFamily: fontFamily.secondary,
	articleTitleFontSize: fontSize[5],
	articleTitleLineHeight: lineHeight.md,
	articleTextFontFamily: fontFamily.secondary,
	articleTextFontSize: fontSize[2],
	articleTextLineHeight: lineHeight.md,
};
