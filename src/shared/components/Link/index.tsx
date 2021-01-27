import React from 'react';
import { GreenLink } from './style';

const Link = (props: any) => {
	const { text } = props;
	return <GreenLink href='/'>{text}</GreenLink>;
};

export default Link;
