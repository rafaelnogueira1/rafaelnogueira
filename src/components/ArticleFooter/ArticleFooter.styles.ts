import { spacing, typography } from '@styles';
import styled from 'styled-components';
import NextLink from 'next/link';

export const Footer = styled.div`
	margin: ${spacing.md} ${spacing.articleContainerMarginHorizontal} 0;
`;

export const Link = styled(NextLink)`
	font-family: ${typography.articleTextFontFamily};
	font-size: ${typography.articleTextFontSize};
	line-height: ${typography.articleTitleLineHeight};
	color: ${({ theme }) => theme.colors.featuredText};
	font-weight: 700;
	padding-right: ${spacing.md};
	display: inline-flex;
	align-items: center;
	transition: all 0.15s ease-in;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};

		span {
			span {
				scale: 1.7;
				margin: 4px;
				background-color: ${({ theme }) => theme.colors.primary};

				&:nth-child(2) {
					scale: 2;
				}

				&:nth-child(3) {
					scale: 2.4;
				}

				&:nth-child(4) {
					scale: 2.7;
				}
			}

			i {
				scale: 1.3;
				margin: 1px;
				border-color: ${({ theme }) => theme.colors.primary};
			}
		}
	}
`;

export const Arrow = styled.span`
	display: flex;
	align-items: center;
	margin-left: ${spacing.xs};

	span,
	i {
		display: block;
		-o-transition: all 0.15s ease-in;
		-webkit-transition: all 0.15s ease-in;
		-moz-transition: all 0.15s ease-in;
		transition: all 0.15s ease-in;
	}

	span {
		width: 2px;
		height: 2px;
		margin-right: ${spacing.xxs};
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.border};
	}

	i {
		border: solid ${({ theme }) => theme.colors.border};
		border-width: 0 2px 2px 0;
		padding: 2px;
		margin-left: -2px;
		transform: rotate(-45deg);
	}
`;
