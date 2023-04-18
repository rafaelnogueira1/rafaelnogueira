import { breakpoints, spacing } from '@styles';
import styled from 'styled-components';

export const Footer = styled.div`
	margin: ${spacing.sm};

	@media screen and (min-width: ${breakpoints.md}) {
		margin: ${spacing.md} ${spacing.articleContainerMarginHorizontal} 0;
	}
`;
