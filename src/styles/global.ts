import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';
import { typography } from './typography';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		font-size: 100%;
	}

	html {
		line-height: 1.15;
		-webkit-text-size-adjust: 100%;
	}

	body {
		-webkit-font-smoothing: antialiased;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
			"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
			sans-serif;
		-moz-osx-font-smoothing: grayscale;
		margin: 0;
		background: ${colors.white};
	}

	main {
		display: block;
	}

	hr {
		box-sizing: content-box;
		height: 0;
		overflow: visible;
	}

	pre {
		font-family: monospace, monospace;
		font-size: 1em;
	}

	b,
	strong {
		font-weight: bolder;
	}

	img {
		border-style: none;
		display: flex;
	}

	button,
	input,
	optgroup,
	select,
	textarea,
	p,
	a {
		margin: 0;
		color: ${colors.greyDarker};
		font-family: ${typography.textFontFamily};
		font-size: ${typography.textFontSize};
		line-height: ${typography.textLineHeight};
	}

	button {
		cursor: pointer;
	}

	label,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		padding: 0;
		color: ${colors.greyDarker};
		font-family: ${typography.titleFontFamily};
		line-height: ${typography.titleLineHeight};
		font-weight: bold;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	p {
		font-family: ${typography.articleTextFontFamily};
		font-size: ${typography.articleTextFontSize};
		line-height: ${typography.articleTitleLineHeight};
		color: ${({ theme }) => theme.colors.text};

		& + p {
			margin-top: 10px;
		}
}
`;

export default GlobalStyle;
