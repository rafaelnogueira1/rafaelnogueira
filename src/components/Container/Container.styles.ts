import { utilities, spacing } from '@styles';
import styled from 'styled-components';

export const Container = styled.div`
	max-width: ${utilities.container};
	padding: ${spacing.paddingContainer};
	margin: ${spacing.center};

	& + div {
		margin-top: ${spacing.marginContainer};
	}
`;
