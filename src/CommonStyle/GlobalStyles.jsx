import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export const GlobalStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
		scroll-behavior: smooth;
	}

	body {
	
		margin: 0;
		font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", 
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;

		min-height: 100vh;
		font-size: ${theme.fontSizes.medium};
		font-style: normal;
		background-color: ${theme.colors.primaryLight};
		color: ${theme.colors.primaryDark};
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin-top: 0;
	}

	ul,
	ol {
		list-style: none;
		padding-left: 0;
		margin: 0;
	}

	button {
		padding: 0;
		border: none;
		font: inherit;
		color: inherit;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
			monospace;
	}
	[class="container"] {
		min-width: 280px;
		max-width: 345px;
		padding: 0 20px;
		margin: 0 auto;
	}
	@media screen and (min-width: 768px) {
		[class="container"] {
			max-width: 704px;
			padding: 0 32px;
		}
	}
	@media screen and (min-width: 1280px) {
		[class="container"] {
			max-width: 1216px;
			/* padding: 0 32px; */
		}
	}
`;
