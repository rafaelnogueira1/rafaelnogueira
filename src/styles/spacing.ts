import { utilities } from './utilities';

type Operation = 'sum' | 'subtract' | 'multiply' | 'divide';
type NumberOrString = number | string;

const { sizes } = utilities;

function parseNumericValue(value: NumberOrString): number {
	if (!value) return 0;

	if (typeof value === 'number') return value;

	const pattern = /\d+/g;
	const parsedValue = value.match(pattern);

	if (!parsedValue || parsedValue.length === 0) return NaN;

	return parseInt(parsedValue.join(''), 10);
}

function calculateSize(
	primarySize: NumberOrString,
	secondarySize: NumberOrString,
	operation: Operation
): string {
	const primary = parseNumericValue(primarySize);
	const secondary = parseNumericValue(secondarySize);

	if (isNaN(primary) || isNaN(secondary)) {
		return '0px';
	}

	switch (operation) {
		case 'sum':
			return `${primary + secondary}px`;
		case 'subtract':
			return `${primary - secondary}px`;
		case 'divide':
			if (secondary === 0) {
				throw new Error('Cannot divide by zero.');
			}
			return `${primary / secondary}px`;
		case 'multiply':
			return `${primary * secondary}px`;
		default:
			return '0px';
	}
}

export const spacing = {
	xxs: sizes.xxs,
	xs: sizes.xs,
	sm: sizes.sm,
	md: sizes.md,
	lg: sizes.lg,
	xl: sizes.xl,
	xxl: sizes.xxl,

	center: '0 auto',
	paddingContainer: sizes.sm,
	marginContainer: calculateSize(sizes.xxl, 2, 'multiply'),
	headerPaddingVertical: sizes.md,
	headerContainerLogoMarginVertical: sizes.md,
	headerSocialMarginVertical: sizes.md,
	footerPaddingVertical: sizes.md,
	navPaddingVertical: sizes.xs,
	mainMarginVertical: sizes.lg,

	articleContainerMarginTop: sizes.xxl,
	articleContainerBodyMarginHorizontal: calculateSize(sizes.xxl, 2, 'multiply'),
	articleBannerMarginBottom: sizes.xl,
	articleTitleMarginBottom: sizes.md,
	articleTitlePaddingBottom: sizes.md,
	articleMetaMarginBottom: sizes.sm,
	articleTextMarginTop: sizes.lg,
	articleContainerMarginHorizontal: calculateSize(sizes.xxl, 2, 'multiply'),
	articleContainerMarginVertical: calculateSize(sizes.xl, sizes.xs, 'sum'),

	singleArticleHeaderMarginBottom: sizes.sm,
	singleArticleTitleSecondaryMargin: sizes.xxl,
	singleArticleTagMarginTop: sizes.lg,
	singleArticleTagMarginBottom: sizes.sm,
	singleArticleAuthorAvatarPaddingHorizonal: sizes.sm,
	singleArticleAuthorInfoPaddingHorizontal: sizes.sm,
	singleArticleAuthorTitleMarginBottom: sizes.sm,
	singleArticleAuthorSocialMarginTop: sizes.sm,
	postRelatedContainerMarginTop: sizes.lg,
	postRelatedBannerMarginHorizontal: sizes.xs,
	postRelatedTitleMarginBottom: sizes.sm,
	postRelatedTitlePaddingBottom: sizes.md,
	postRelatedMetaMarginBottom: sizes.sm,
	postRelatedControlMarginTop: sizes.sm,
};
