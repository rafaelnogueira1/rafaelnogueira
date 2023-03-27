import { utilities, shapes, spacing, typography } from '@styles';
import styled from 'styled-components';

export const Header = styled.header`
	border-top: 1px solid ${({ theme }) => theme.colors.secondaryLight};
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryLight};
	padding: ${spacing.xs};
`;

export const Navigation = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Logo = styled.div`
	color: ${({ theme }) => theme.colors.secondaryDark};
	font-family: ${typography.logoFontFamily};
	font-size: ${typography.logoFontSize};
	padding-right: ${spacing.xs};
	font-weight: 600;
	position: relative;

	&::after {
		content: '';
		width: 5px;
		height: 5px;
		border-radius: ${shapes.borderRadiusXXl};
		display: block;
		background: ${({ theme }) => theme.colors.primary};
		position: absolute;
		right: 0;
		bottom: 4px;
	}
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
		padding: ${spacing.xs};

		&:hover {
			color: ${({ theme }) => theme.colors.secondaryDark};
		}
	}
`;
