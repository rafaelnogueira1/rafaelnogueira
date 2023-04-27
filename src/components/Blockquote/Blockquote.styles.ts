import styled from 'styled-components';
import { spacing, typography } from '@styles';
import { RiDoubleQuotesL } from 'react-icons/ri';

export const Conteiner = styled.blockquote`
	position: relative;
	margin: ${spacing.xl} 0;
	padding: 0;
	font-size: ${typography.fontSize[4]};
	line-height: ${typography.lineHeight.xl};
	color: ${({ theme }) => theme.colors.colors.greyDarker};
	font-family: ${typography.fontFamily.serif};
	font-weight: bold;
	font-style: italic;

	cite,
	pre,
	cite,
	footer {
		clear: both;
		display: block;
		font-size: ${typography.fontSize[3]};
		letter-spacing: -0.5px;
		margin: ${spacing.md} 0 0;
		line-height: ${typography.lineHeight.md};
		color: ${({ theme }) => theme.colors.colors.greyDarker};
		font-style: italic;
		font-weight: lighter;
		text-align: unset;
	}

	p {
		font-family: ${typography.fontFamily.serif};
		line-height: ${typography.lineHeight.xl};
		margin: ${spacing.sm} 0;
		position: relative;
	}
`;

export const Icon = styled(RiDoubleQuotesL)`
	position: absolute;
	left: -16px;
	top: -12px;
	font-size: 44px;
	color: ${({ theme }) => theme.colors.colors.greyLight};
`;
