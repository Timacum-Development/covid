import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@font-face {
	font-family: 'gelion_regularregular';
	src: url('gelion-regular-webfont.woff2') format('woff2'),
		url('gelion-regular-webfont.woff') format('woff');
	font-weight: normal;
	font-style: normal;
	}

	@font-face {
	font-family: 'gelion_regularregular';
	src: url('gelion-regular-webfont.woff2') format('woff2'),
		url('gelion-regular-webfont.woff') format('woff');
	font-weight: medium;
	font-style: normal;
	}


	html, body, #root {
		height: 100%;
		margin: 0;
		font-family: 'Playfair Display', serif;
		box-sizing: border-box;
		font-size: 16px;
	}

	* {
		box-sizing: border-box;
	}

	body {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	main {
		flex: 1 0 auto;
		width: 100%;
	}

	p {
		margin: 0;
	}


	.App {
		display: flex;
		flex-wrap: wrap;
	}

	.container-fluid {
		width: 100%;
	}

	.container {
		max-width: 1280px;
		width: 100%;
		margin: 0 auto;
	}

	.container2 {
		max-width: 1680px;
		width: 100%;
		margin: 0 auto;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		text-align: left;
	}

	h1,
	h2,
	h4,
	h5,
	h6 {
		font-family: 'Red Hat Display', sans-serif;
	}
	
	h1 {
		font-size: 3.25rem;
		/* line-height: 139%; */
	}

	h2 {
		font-size: 3.125rem;
	}

	h3 {
		font-size: 2.9375rem;
		font-family: 'gelion_regularregular';
		font-weight: medium;
	}

	h4 {
		font-size: 2.25rem;
	}

	h5 {
		font-size: 2rem;
	}

	h6 {
		font-size: 1.8125rem;
	}

	p {
		font-size: 1.5rem;
		line-height: 2px;
	}

	a {
		display: inline-block;
		text-decoration: none;
		font-size: 1.125rem;
	}
`;
