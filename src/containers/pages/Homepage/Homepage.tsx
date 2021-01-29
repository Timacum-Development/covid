import React from 'react';
import {
	Hero,
	HeroIntro,
	HeroImg,
	About,
	CoronaImg,
	AboutWrap,
	Contagion
} from './style';

// Assets
import HeroBg from '../../../assets/hero.png';
import Corona1 from '../../../assets/covid.png';

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
			<About>
				<CoronaImg src={Corona1} />
				<AboutWrap>
					<h6>What Is Covid-19</h6>
					<h2>Coronavirus</h2>
					<p className='corona-p'>
						Corona viruses are a type of virus. There are many different kinds,
						and some cause disease. A newly identified type has caused a recent
						outbreak of respiratory illness now called COVID-19.Lauren Sauer,
						M.S., the director of operations with the Johns Hopkins Office of
						Critical Event Preparedness and Response.
					</p>
					<CallToAction text='Learn more' />
				</AboutWrap>
			</About>
		</React.Fragment>
	);
};

export default Homepage;
