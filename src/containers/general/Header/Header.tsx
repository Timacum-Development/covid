import React from 'react';
import { HeaderWrap } from './style';

// Components
import Logo from '../../../shared/components/Logo';

const Header = () => {
	return (
		<HeaderWrap>
			<Logo text='Covid - 19' />
		</HeaderWrap>
	);
};

export default Header;
