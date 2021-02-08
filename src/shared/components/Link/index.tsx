import React from 'react';
import { GreenLink } from './style';

const Link = (props: any) => {
	const { text, styleFooterTxt } = props;
	return (
		<GreenLink href='/' style={styleFooterTxt}>
			{text}
		</GreenLink>
	);
};

export default Link;
