import { shapes, spacing, typography } from '@styles';
import styled, { keyframes } from 'styled-components';

const scale = keyframes`
	0%{
		transform: scale(1);

	}
	100% {
		transform: scale(1.2);
	}
`;

export const Container = styled.div`
	display: flex;
	border-top: 1px solid ${({ theme }) => theme.colors.border};
	margin: ${spacing.articleTextMarginTop} ${spacing.articleContainerMarginHorizontal} 0;
	padding-top: ${spacing.articleTextMarginTop};
`;

export const ImageContainer = styled.div`
	min-width: 140px;
	height: 140px;
	position: relative;
	border-radius: ${shapes.borderRadiusXs};
	overflow: hidden;

	img {
		object-fit: cover;
		object-position: center;
		animation: ${scale} 5s linear infinite alternate;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Main = styled.div`
	width: 100%;
	padding-left: ${spacing.md};
`;

export const TitleMain = styled.h2`
	font-family: ${typography.fontFamily.secondary};
	font-size: ${typography.fontSize[5]};
	color: ${({ theme }) => theme.colors.featuredText};
`;

export const Content = styled.div`
	margin-top: ${spacing.md};

	p {
		font-size: ${typography.fontSize[3]};
	}
`;

export const SocialContainer = styled.div`
	a {
		& + a {
			margin-left: ${spacing.xs};
		}

		&:hover {
			svg {
				color: ${({ theme }) => theme.colors.primary};
			}
		}
	}

	svg {
		font-size: 1.1em;
		display: inline-flex;
		vertical-align: middle;
		color: ${({ theme }) => theme.colors.featuredText};
		transition: all 0.5s;
	}
`;
