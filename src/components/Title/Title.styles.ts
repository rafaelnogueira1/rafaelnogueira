import { spacing, typography } from '@styles';
import styled from 'styled-components';
import { TitleProps } from './Title.types';

type TitleStyleProps = Pick<TitleProps, 'size'>;

export const Title = styled('h1').attrs<TitleStyleProps>(({ size = 1 }) => ({
	as: `h${size}`,
}))<TitleStyleProps>`
	margin-bottom: ${spacing.articleTitleMarginBottom};
	font-weight: 700;
	color: ${({ theme }) => theme.colors.primaryTitle};
	font-family: ${typography.articleTitleFontFamily};
	font-size: ${typography.articleTitleFontSize};
	transition: all 0.15s;

	a {
		transition: all 0.15s;
		font-family: ${typography.articleTitleFontFamily};
		font-size: ${typography.articleTitleFontSize};
		color: ${({ theme }) => theme.colors.primaryTitle};

		:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;
