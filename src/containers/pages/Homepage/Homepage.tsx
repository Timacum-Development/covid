import React from 'react';
import { Hero, HeroIntro, HeroImg } from './style';

// Assets
import HeroBg from '../../../assets/hero.png';
// Components
import CallToAction from '../../../shared/components/CTA';

const Homepage = () => {
	return (
		<React.Fragment>
			<Hero>
				<HeroIntro>
					<h5>COVID-19 Alert</h5>
					<h1>Stay at Home quarantine To stop Corona virus</h1>
					<p className='p-intro'>
						There is no specific medicine to prevent or treat coronavirus
						disease (COVID-19). People may need supportive care to .
					</p>
					<CallToAction red text='Let us help' />
				</HeroIntro>
				<HeroImg src={HeroBg} />
			</Hero>
		</React.Fragment>
	);
};

export default Homepage;
