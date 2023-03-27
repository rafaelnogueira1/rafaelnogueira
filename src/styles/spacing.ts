import { utilities } from './utilities';

const { sizes } = utilities;

type Operation = 'sum' | 'subtract' | 'multiply' | 'divide';

function stringToNumber(value: string | number): number {
	if (!value) return 0;

	if (typeof value === 'number') return value;

	const pattern = /\d+/g;
	const parsedValue = value.match(pattern);

	if (!parsedValue) return 0;

	return parseInt(parsedValue.join(), 10);
}

function calculateSize(
	primarySize: string | number,
	secondarySize: string | number,
	operation: Operation
): string {
	const primary = stringToNumber(primarySize);
	const secondary = stringToNumber(secondarySize);

	switch (operation) {
		case 'sum':
			return `${primary + secondary}px`;
		case 'subtract':
			return `${primary - secondary}px`;
		case 'divide':
			return `${primary / secondary}px`;
		case 'multiply':
			return `${primary * secondary}px`;

		default:
			return '0px';
	}
}

export const spacing = {
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
	articleBannerMarginBottom: sizes.md,
	articleTitleMarginBottom: sizes.sm,
	articleTitlePaddingBottom: sizes.md,
	articleMetaMarginBottom: sizes.sm,

	singleArticleContainerMarginHorizontal: calculateSize(sizes.xxl, 2, 'multiply'),
	singleArticleContainerMarginVertical: calculateSize(sizes.xl, sizes.xs, 'sum'),
	singleArticleHeaderMarginBottom: sizes.sm,
	singleArticleBannerMarginBottom: sizes.lg,
	singleArticleTextMarginTop: sizes.lg,
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
