import { spacing } from '@styles';
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
	text-align: center;
	padding: ${spacing.xxl};
`;

export const ImageContainer = styled.div`
	width: 140px;
	height: 140px;
	border-radius: 50%;
	position: relative;
	overflow: hidden;
	margin: 0 auto ${spacing.md};

	img {
		object-fit: cover;
		object-position: center;
		animation: ${scale} 10s linear infinite alternate;
	}
`;

export const SocialContainer = styled.div`
	a {
		& + a {
			margin-left: ${spacing.lg};
		}
	}
`;
