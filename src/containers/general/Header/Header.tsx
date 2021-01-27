import React from 'react';
import { HeaderWrap, NavCtaWrap } from './style';

// Components
import Nav from '../Nav';
import Logo from '../../../shared/components/Logo';
import CallToAction from '../../../shared/components/CTA';

const Header = () => {
	return (
		<HeaderWrap className='container'>
			<Logo text='Covid - 19' />
			<NavCtaWrap>
				<Nav />
				<CallToAction outline text='Contact' />
			</NavCtaWrap>
		</HeaderWrap>
	);
};

export default Header;
