import React from 'react';

// Components
import Link from '../../shared/components/Link';

const Nav = () => {
	return (
		<div className='nav'>
			<ul>
				<li className='list'>
					<Link text='Overview' />
				</li>
				<li className='list'>
					<Link text='Contagion' />
				</li>
				<li className='list'>
					<Link text='Symptoms' />
				</li>
				<li className='list'>
					<Link text='Prevention' />
				</li>
			</ul>
		</div>
	);
};

export default Nav;
