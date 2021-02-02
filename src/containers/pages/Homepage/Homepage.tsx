import React from 'react';
import {
	Hero,
	HeroIntro,
	HeroImg,
	About,
	CoronaImg,
	AboutWrap,
	Contagion,
	CardWrap,
	Symptoms,
	GirlBg,
	GirlImg,
	SymptomsWrap,
	WhatToDo
} from './style';

// Assets
import HeroBg from '../../../assets/hero.png';
import Corona1 from '../../../assets/covid.png';
import Card1 from '../../../assets/card1.png';
import Card2 from '../../../assets/card2.png';
import Card3 from '../../../assets/card3.png';
import Girl from '../../../assets/girl.png';
import Girl1 from '../../../assets/mask1.png';
import Girl2 from '../../../assets/mask2.png';
import Girl3 from '../../../assets/mask3.png';
import Girl4 from '../../../assets/mask4.png';

// Components
import CallToAction from '../../../shared/components/CTA';
import Text from '../../../shared/components/Text';
import Card from '../../../shared/components/Card';
import Recommendation from '../../../shared/components/Recommendation';

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
			<Contagion>
				<Text
					titleFirst='Covid-19'
					titleSecond='Contagion'
					text=''
					styleText={{ maxWidth: '570px' }}
				/>
				<CardWrap className='container'>
					<Card
						infoIcon={Card1}
						title='Air Transmission'
						text='Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify'
						styleCard={{ padding: '65px 53px 78px' }}
					/>
					<Card
						infoIcon={Card2}
						title='Human Contacts'
						text='Washing your hands is one of thesimplest ways you can protect'
						styleCard={{ padding: '22px 60px 74px' }}
					/>
					<Card
						infoIcon={Card3}
						title='Containted Objects'
						text='Use the tissue while sneezing,In this way, you can protect your droplets.'
						styleCard={{ padding: '58px 50px 75px' }}
					/>
				</CardWrap>
			</Contagion>
			<Symptoms>
				<Text
					titleFirst='Covid-19'
					titleSecond='Symptoms'
					text='Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory '
					styleText={{ maxWidth: '770px' }}
				/>
				<SymptomsWrap>
					<GirlBg>
						<GirlImg src={Girl} />
					</GirlBg>
				</SymptomsWrap>
			</Symptoms>
			<WhatToDo className='container2'>
				<Text
					titleFirst='Covid-19'
					titleSecond='What should we do'
					text='Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused '
					styleText={{ maxWidth: '770px' }}
				/>
				<Recommendation
					number='01'
					title='wear masks'
					text='Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively '
					infoIcon={Girl1}
					styleTxt={{ maxWidth: '647px', marginRight: '150px' }}
					style={{ margin: '0px 324px 0px 243px' }}
				/>
				<Recommendation
					number='02'
					title='Wash your hands'
					text='Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals '
					infoIcon={Girl2}
					style={{
						flexDirection: 'row-reverse',
						margin: '0px 369px 0px 227px'
					}}
					styleTxt={{ maxWidth: '611px' }}
					styleImg={{ marginRight: '148px' }}
				/>
				<Recommendation
					number='03'
					title='Use nose -  rag'
					text='Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively '
					infoIcon={Girl3}
					styleTxt={{ maxWidth: '652px', marginRight: '216px' }}
					style={{ margin: '0px 234px 0px 244px' }}
				/>
				<Recommendation
					number='04'
					title='Avoid contacts'
					text='Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic'
					infoIcon={Girl4}
					style={{
						flexDirection: 'row-reverse',
						margin: '0px 340px 0px 222px'
					}}
					styleTxt={{ maxWidth: '645px' }}
					styleImg={{ marginRight: '56px' }}
				/>
			</WhatToDo>
		</React.Fragment>
	);
};

export default Homepage;
