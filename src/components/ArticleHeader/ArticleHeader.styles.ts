import { shapes, spacing, typography } from '@styles';
import styled from 'styled-components';

export const Header = styled.header`
	margin: 0 ${spacing.articleContainerMarginHorizontal};
`;

export const PostMetaContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const Avatar = styled.div`
	width: 40px;
	height: 40px;
	border-radius: ${shapes.borderRadiusXl};
	overflow: hidden;
`;

export const InfoContainer = styled.div`
	margin-left: ${spacing.xs};
`;

export const Author = styled.div`
	font-family: ${typography.authorTextFontFamily};
	font-size: ${typography.authorTextFontSize};
	font-weight: 700;
	color: ${({ theme }) => theme.colors.featuredText};
	text-transform: uppercase;
`;

export const PostMeta = styled.div`
	display: flex;
	margin-top: ${spacing.xxs};

	> * {
		font-family: ${typography.textFontFamily};
		font-size: ${typography.fontSize[1]};
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
