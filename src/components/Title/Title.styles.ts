import { spacing, typography } from '@styles';
import styled from 'styled-components';
import { TitleProps } from './Title.types';

type TitleStyleProps = Pick<TitleProps, 'size'>;

export const Title = styled('h1').attrs<TitleStyleProps>(({ size = 1 }) => ({
	as: `h${size}`,
}))<TitleStyleProps>`
	font-family: ${typography.articleTitleFontFamily};
	font-size: ${typography.articleTitleFontSize};
	font-weight: 700;
	color: ${({ theme }) => theme.colors.primaryTitle};
	margin-bottom: ${spacing.articleTitleMarginBottom};
`;
