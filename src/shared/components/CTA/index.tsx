import React from 'react';
import { OutlineCta, RedCta, LightRed } from './style';

const CallToAction = (props: any) => {
	const { text, outline, red } = props;
	return (
		<React.Fragment>
			{outline ? (
				<OutlineCta href='/'>{text}</OutlineCta>
			) : !outline && red ? (
				<RedCta href='/'>{text}</RedCta>
			) : (
				<LightRed href='/'>{text}</LightRed>
			)}
		</React.Fragment>
	);
};

export default CallToAction;
