import { breakpoints, shapes, spacing, typography } from '@styles';
import styled, { keyframes } from 'styled-components';
import { Footer } from '@components/Footer/Footer.styles';

const logo = keyframes`
	0% {
		animation-timing-function: ease-in;
		opacity: 1;
		transform: translateX(30px);
	}

	24% {
		opacity: 1;
	}

	40% {
		animation-timing-function: ease-in;
		transform: translateX(26px);
	}

	65% {
		animation-timing-function: ease-in;
		transform: translateX(13px);
	}

	82% {
		animation-timing-function: ease-in;
		transform: translateX(6.5px);
	}

	93% {
		animation-timing-function: ease-in;
		transform: translateX(4px);
	}

	25%,
	55%,
	75%,
	87%,
	98% {
		animation-timing-function: ease-out;
		transform: translateX(0px);
	}

	100% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateX(0px);
	}
`;

export const Logo = styled.div`
	padding-right: ${spacing.xs};
	font-weight: 600;
	position: relative;

	a {
		color: ${({ theme }) => theme.colors.secondaryDark};
		font-family: ${typography.logoFontFamily};
		font-size: ${typography.logoFontSize};
		transition: all 0.15s ease-in;
		display: inline-flex;
		align-items: baseline;

		:hover {
			color: ${({ theme }) => theme.colors.primary};

			&::after {
				background: ${({ theme }) => theme.colors.secondary};
				animation: 2s ${logo} 0s 1 normal forwards;
			}
		}

		&::after {
			content: '';
			width: 5px;
			height: 5px;
			border-radius: ${shapes.borderRadiusXXl};
			display: block;
			background: ${({ theme }) => theme.colors.primary};
			margin-left: 1px;
		}
	}

	@media screen and (max-width: ${breakpoints.sm}) {
		${Footer} & {
			margin-bottom: ${spacing.sm};
		}
	}
`;
