import React from 'react';
import { LogoWrap, LogoImg, LogoText } from './style';

// Assets
import LogoCovid from '../../../assets/logo.png';

const Logo = (props: any) => {
	const { styleLogo, logoTxt, text } = props;
	return (
		<LogoWrap>
			<a href='/'>
				<LogoImg src={LogoCovid} style={styleLogo} />
			</a>
			<LogoText href='/' style={logoTxt}>
				{text}
			</LogoText>
		</LogoWrap>
	);
};

export default Logo;
