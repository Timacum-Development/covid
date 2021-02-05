import React from 'react';
import { SocialIcon } from './style';

const Social = (props: any) => {
	const { iconSocial } = props;
	return <SocialIcon src={iconSocial} />;
};

export default Social;
