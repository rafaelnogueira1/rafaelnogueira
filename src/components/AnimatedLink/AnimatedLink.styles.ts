import { spacing, typography } from '@styles';
import styled, { css } from 'styled-components';
import NextLink from 'next/link';

type Direction = 'left' | 'right';

export const Link = styled(NextLink)<{ direction: Direction }>`
	font-family: ${typography.articleTextFontFamily};
	font-size: ${typography.articleTextFontSize};
	line-height: ${typography.articleTitleLineHeight};
	color: ${({ theme }) => theme.colors.featuredText};
	font-weight: 700;
	padding-right: ${spacing.md};
	display: inline-flex;
	align-items: center;
	transition: all 0.15s ease-in;
	flex-direction: ${({ direction }) => (direction === 'right' ? 'row' : 'row-reverse')};

	&:hover {
		color: ${({ theme }) => theme.colors.primary};

		span {
			span {
				scale: 1.7;
				margin: 4px;
				background-color: ${({ theme }) => theme.colors.primary};

				&:nth-child(2) {
					scale: ${({ direction }) => (direction === 'right' ? 2 : 2.7)};
				}

				&:nth-child(3) {
					scale: 2.4;
				}

				&:nth-child(4) {
					scale: ${({ direction }) => (direction === 'right' ? 2.7 : 2)};
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

export const Arrow = styled.span<{ direction: Direction }>`
	display: flex;
	align-items: center;
	flex-direction: ${({ direction }) => (direction === 'right' ? 'row' : 'row-reverse')};

	${({ direction }) => {
		if (direction === 'right') {
			return css`
				margin-left: ${spacing.xs};
			`;
		}

		if (direction === 'left') {
			return css`
				margin-right: ${spacing.xs};
			`;
		}
	}}

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
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.border};

		${({ direction }) => {
			if (direction === 'right') {
				return css`
					margin-right: ${spacing.xxs};
				`;
			}

			if (direction === 'left') {
				return css`
					margin-left: ${spacing.xxs};
				`;
			}
		}}
	}

	i {
		border: solid ${({ theme }) => theme.colors.border};
		border-width: 0 2px 2px 0;
		padding: 2px;
		transform: ${({ direction }) => (direction === 'right' ? 'rotate(-45deg)' : 'rotate(135deg)')};

		${({ direction }) => {
			if (direction === 'right') {
				return css`
					margin-left: -2px;
				`;
			}

			if (direction === 'left') {
				return css`
					margin-right: -2px;
				`;
			}
		}}
	}
`;
