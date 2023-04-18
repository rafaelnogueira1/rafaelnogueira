import { breakpoints, spacing } from '@styles';
import styled from 'styled-components';

export const SocialContainer = styled.div`
	@media screen and (min-width: ${breakpoints.sm}) {
		margin-top: ${spacing.xs};
	}

	a {
		& + a {
			margin-left: ${spacing.xs};
		}

		&:hover {
			svg {
				color: ${({ theme }) => theme.colors.primary};
			}
		}
	}

	svg {
		font-size: 1.4em;
		display: inline-flex;
		vertical-align: middle;
		color: ${({ theme }) => theme.colors.colors.greyDark};
		transition: all 0.5s;
	}
`;
