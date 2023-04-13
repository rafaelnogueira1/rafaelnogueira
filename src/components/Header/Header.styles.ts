import { utilities, shapes, spacing, typography } from '@styles';
import styled, { keyframes } from 'styled-components';

const menuBounce = keyframes`
	0% {
		transform: translateY(0);
		scale: 1;
	}

	100% {
		scale: 1.3;
		transform: translateY(15px);
	}
`;

export const Header = styled.header`
	border-top: 1px solid ${({ theme }) => theme.colors.secondaryLight};
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryLight};
	padding: ${spacing.xs};
	background: ${({ theme }) => theme.colors.colors.white};
	margin-bottom: ${spacing.xl};
`;

export const Navigation = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Menu = styled.nav`
	ul {
		${utilities.cleanList}
		display: flex;
	}

	a {
		color: ${({ theme }) => theme.colors.secondary};
		font-family: ${typography.textFontFamily};
		font-size: ${typography.textFontSize};
		text-transform: uppercase;
		padding: 0 ${spacing.xs};
		display: inline-flex;
		align-items: center;
		flex-direction: column;
		transition: all 0.15s ease-in;

		span {
			width: 5px;
			height: 5px;
			background-color: ${({ theme }) => theme.colors.colors.white};
			border-radius: ${shapes.borderRadiusXXl};
			display: block;
		}

		&:hover {
			color: ${({ theme }) => theme.colors.primary};

			span {
				background-color: ${({ theme }) => theme.colors.primary};
				animation: ${menuBounce} 1s infinite alternate;
			}
		}
	}
`;
