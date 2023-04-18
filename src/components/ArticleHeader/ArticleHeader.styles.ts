import { breakpoints, spacing, typography } from '@styles';
import styled from 'styled-components';
import { AnimatedLink as AnimatedLinkComponent } from '@components/AnimatedLink';

export const Header = styled.header`
	margin: 0 ${spacing.sm};

	@media screen and (min-width: ${breakpoints.md}) {
		margin: 0 ${spacing.articleContainerMarginHorizontal};
	}
`;

export const PostMetaContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const Avatar = styled.div`
	display: flex;
	vertical-align: middle;

	svg {
		color: ${({ theme }) => theme.colors.colors.greyDarker};
	}
`;

export const PostMeta = styled.div`
	display: flex;
	margin-left: ${spacing.xs};

	> * {
		font-family: ${typography.textFontFamily};
		font-size: ${typography.fontSize[2]};
		color: ${({ theme }) => theme.colors.colors.grey};
		text-transform: uppercase;
	}
`;

export const Category = styled.div`
	display: flex;

	span + span {
		display: inline-flex;
		align-items: center;

		&::before {
			content: '';
			width: 6px;
			height: 1px;
			background: ${({ theme }) => theme.colors.colors.grey};
			display: inline-block;
			margin: 0 ${spacing.xxs};
		}
	}
`;

export const Date = styled.span`
	display: flex;
	align-items: baseline;

	&::before {
		content: '';
		width: 12px;
		height: 1px;
		background: ${({ theme }) => theme.colors.colors.grey};
		display: inline-block;
		margin: 0 ${spacing.xs};
	}
`;

export const AnimatedLink = styled(AnimatedLinkComponent)`
	margin-bottom: ${spacing.md};
`;
