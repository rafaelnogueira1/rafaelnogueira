import { shapes, spacing } from '@styles';
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
	max-width: 100%;
	height: 400px;
	border-radius: ${shapes.borderRadiusSm};
	overflow: hidden;
	position: relative;
	margin-bottom: ${spacing.articleBannerMarginBottom};

	img {
		display: flex;
		object-fit: cover;
		object-position: bottom;
		animation: ${scale} 20s linear infinite alternate;
	}
`;

export const ContainerSinglePost = styled(Container)`
	margin-top: ${spacing.articleBannerMarginBottom};
`;
