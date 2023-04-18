import { breakpoints, spacing, typography, utilities } from '@styles';
import styled from 'styled-components';

export const Container = styled.div`
	padding-top: ${spacing.articleTextMarginTop};
	margin: 0 ${spacing.sm} ${spacing.xl};

	@media screen and (min-width: ${breakpoints.md}) {
		margin: 0 ${spacing.articleContainerMarginHorizontal} ${spacing.xxl};
	}
	ul {
		display: flex;
		${utilities.cleanList}
	}

	li + li {
		margin-left: ${spacing.sm};
	}

	a {
		font-family: ${typography.fontFamily.primary};
		font-size: ${typography.fontSize[3]};
		font-weight: 700;
		letter-spacing: 0.2rem;
		border-bottom: 1px dashed ${({ theme }) => theme.colors.border};
		padding-bottom: ${spacing.xxs};
		transition: all 0.5s;

		:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;
