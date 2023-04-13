import { spacing, typography, utilities } from '@styles';
import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 ${spacing.articleContainerMarginHorizontal} ${spacing.xxl};
	padding-top: ${spacing.articleTextMarginTop};

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
