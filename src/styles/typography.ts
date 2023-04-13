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
	1: '10px',
	2: '12px',
	3: '14px',
	4: '16px',
	5: '20px',
	6: '24px',
	7: '32px',
};

const lineHeight = {
	sm: '100%',
	md: '120%',
	lg: '140%',
	xl: '160%',
};

export const typography = {
	fontFamily,
	fontSize,
	lineHeight,
	logoFontFamily: fontFamily.secondary,
	logoFontSize: fontSize[5],
	titleFontFamily: fontFamily.secondary,
	titleLineHeight: lineHeight.md,
	textFontFamily: fontFamily.primary,
	textFontSize: fontSize[3],
	textLineHeight: lineHeight.lg,
	articleTitleFontFamily: fontFamily.secondary,
	articleTitleFontSize: fontSize[7],
	articleTitleLineHeight: lineHeight.xl,
	articleTextFontFamily: fontFamily.primary,
	articleTextFontSize: fontSize[4],
	articleTextLineHeight: lineHeight.md,
	authorTextFontFamily: fontFamily.primary,
	authorTextFontSize: fontSize[2],
	authorTextLineHeight: lineHeight.md,
};
