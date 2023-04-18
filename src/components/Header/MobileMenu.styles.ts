import { breakpoints, spacing, typography, utilities } from '@styles';
import styled, { keyframes } from 'styled-components';

const menuMobile = keyframes`
	0% {
		right:-340px;
	}

	100% {
		right:0;
	}
`;

export const Container = styled.div`
	display: block;

	@media screen and (min-width: ${breakpoints.sm}) {
		display: none;
	}
`;

export const OpenButton = styled.button`
	background: transparent;
	border: none;
	margin: 0;
	color: ${({ theme }) => theme.colors.colors.greyDarker};
	font-size: ${typography.fontSize[7]};
	height: 35px;
`;

export const CloseButton = styled.button`
	background: transparent;
	border: none;
	margin: 0;
	color: ${({ theme }) => theme.colors.colors.white};
	font-size: calc(${typography.fontSize[7]} - ${typography.fontSize[1]});
	position: absolute;
	top: ${spacing.md};
	right: ${spacing.md};
`;

export const ContainerBackground = styled.div`
	position: fixed;
	background: ${({ theme }) => theme.colors.colors.greyDarker};
	opacity: 0.65;
	inset: 0;
	z-index: 1000;
	transition: transform 0.3s ease-out;
`;

export const Menu = styled.nav`
	background: ${({ theme }) => theme.colors.colors.greenDarker};
	opacity: 0.9;
	position: fixed;
	overflow: hidden;
	z-index: 1000;
	padding: ${spacing.md};
	width: 340px;
	height: 100%;
	top: 0;
	right: -340px;
	transition: transform 0.3s ease-out;

	ul {
		${utilities.cleanList}
		margin-top: ${spacing.xxl};
	}

	a {
		color: ${({ theme }) => theme.colors.colors.white};
		font-family: ${typography.fontFamily.secondary};
		font-size: ${typography.fontSize[6]};
		font-weight: 700;
		text-transform: uppercase;
		padding: ${spacing.sm} 0;
		display: inline-flex;
	}

	&.open {
		box-shadow: -1px 0 35px 7px rgba(0, 0, 0, 0.06);
		animation: ${menuMobile} 800ms ease-in-out 0s 1 normal both;
	}
`;
