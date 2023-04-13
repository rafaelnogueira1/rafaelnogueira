import { spacing, typography } from '@styles';
import styled from 'styled-components';

export const Footer = styled.footer`
	padding: ${spacing.xs};
	background: ${({ theme }) => theme.colors.colors.white};
	margin-top: ${spacing.xxl};
	box-shadow: 0 15px 20px ${({ theme }) => theme.colors.shadow};
	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const Credits = styled.p`
	font-size: ${typography.fontSize[2]};
`;
