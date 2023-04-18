import { breakpoints, spacing } from '@styles';
import styled from 'styled-components';

export const Container = styled.article`
	margin: ${spacing.sm};

	@media screen and (min-width: ${breakpoints.md}) {
		margin: ${spacing.articleTextMarginTop} ${spacing.articleContainerMarginHorizontal} 0;
	}

	p {
		& + p {
			margin-top: ${spacing.md};
		}
	}
`;
