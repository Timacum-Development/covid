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
	WhatToDo,
	CirclesWrapLeft,
	CirclesWrapRight,
	MapWrap,
	MapReport,
	Chart,
	LiveWrap,
	LiveReportTitle,
	ArrowWrap,
	MapSearch,
	Search,
	Magnifier,
	ShowMap,
	ZoomIn,
	Arrows,
	RedArrow,
	GreyArrow
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
import Flag1 from '../../../assets/usa.png';
import Flag2 from '../../../assets/italy.png';
import Flag3 from '../../../assets/china.png';
import Flag4 from '../../../assets/spain.png';
import Flag5 from '../../../assets/germany.png';
import Flag6 from '../../../assets/iran.png';
import SearchImg from '../../../assets/magnifier.png';
import Covid1 from '../../../assets/covid-side-img.png';
import Covid2 from '../../../assets/green-covid-larger.png';
import Covid3 from '../../../assets/green-covid.png';
import Covid4 from '../../../assets/covid-red.png';
import Shape1 from '../../../assets/symptoms-shape.png';
import Shape2 from '../../../assets/symptoms-shape2.png';

// Components
import CallToAction from '../../../shared/components/CTA';
import Text from '../../../shared/components/Text';
import Card from '../../../shared/components/Card';
import Recommendation from '../../../shared/components/Recommendation';
import CircleInfo from '../../../shared/components/Circle';
import Report from '../../../shared/components/Reports';
import Virus from '../../../shared/components/Virus';

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

				<Virus
					virus={Covid1}
					style={{
						right: '-97px',
						bottom: '0px',
						width: '283px',
						height: '292px'
					}}
				/>
			</About>
			<Contagion>
				<Virus
					virus={Covid1}
					style={{
						right: '60px',
						top: '0px',
						width: '131px',
						height: '136px'
					}}
				/>
				<Text
					titleFirst='Covid-19'
					titleSecond='Contagion'
					text='Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type'
					styleText={{ maxWidth: '570px' }}
				/>
				<Virus
					virus={Covid1}
					style={{
						left: '100px',
						bottom: '0px',
						width: '254px',
						height: '259px',
						zIndex: '-100'
					}}
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
				<Virus
					virus={Shape1}
					style={{
						left: '91px',
						bottom: '200px'
					}}
				/>
				<SymptomsWrap>
					<CirclesWrapLeft>
						<CircleInfo text='Fever' />
						<CircleInfo text='Throat pain' />
						<CircleInfo text='Dypsnoea' />
					</CirclesWrapLeft>
					<GirlBg>
						<GirlImg src={Girl} />
					</GirlBg>
					<CirclesWrapRight>
						<CircleInfo text='Headache' />
						<CircleInfo text='Runny nose' />
						<CircleInfo text='Shaking chills' />
					</CirclesWrapRight>
				</SymptomsWrap>
				<Virus
					virus={Shape2}
					style={{
						right: '38px',
						bottom: '-80px'
					}}
				/>
			</Symptoms>
			<WhatToDo className='container2'>
				<Virus
					virus={Covid2}
					style={{
						left: '-136px',
						top: '25%',
						width: '277px',
						height: '287px',
						zIndex: '-1'
					}}
				/>
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
					styleTitle={{ marginBottom: '20px' }}
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
					styleTitle={{ marginBottom: '35px' }}
				/>
				<Virus
					virus={Covid3}
					style={{
						right: '32px',
						bottom: '500px',
						width: '128px',
						height: '131px'
					}}
				/>
				<Recommendation
					number='03'
					title='Use nose -  rag'
					text='Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively '
					infoIcon={Girl3}
					styleTxt={{ maxWidth: '652px', marginRight: '216px' }}
					style={{ margin: '0px 234px 0px 244px' }}
					styleTitle={{ marginBottom: '36px' }}
				/>
				<Virus
					virus={Covid4}
					style={{
						right: '-153px',
						bottom: '167px',
						width: '315px',
						height: '324px'
					}}
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
					styleTitle={{ marginBottom: '45px' }}
				/>
			</WhatToDo>
			<MapWrap className='container2'>
				<MapReport>
					<MapSearch>
						<ShowMap>
							<ZoomIn />
							<div className='line'></div>
							<div className='line-second'></div>
							<div className='line'></div>
							<Arrows>
								<RedArrow />
								<GreyArrow />
							</Arrows>
						</ShowMap>
						<Search>
							<Magnifier src={SearchImg} />
						</Search>
					</MapSearch>
					<Chart>
						<LiveWrap>
							<LiveReportTitle>Live reports</LiveReportTitle>
							<ArrowWrap>
								<i className='small-arrow left'></i>
								<i className='small-arrow right'></i>
							</ArrowWrap>
						</LiveWrap>
						<Report countryFlag={Flag1} country='USA' infoNum='100,392' />
						<Report countryFlag={Flag2} country='Italy' infoNum='86,498' />
						<Report
							countryFlag={Flag3}
							country='China'
							infoNum='81,340'
							arrowStyle={{
								borderLeft: '12px solid transparent',
								borderRight: '12px solid transparent',
								borderTop: '12px solid #128E5A',
								borderBottom: '0px'
							}}
						/>
						<Report countryFlag={Flag4} country='Spain' infoNum='64,059' />
						<Report countryFlag={Flag5} country='Germany' infoNum='50,871' />
						<Report countryFlag={Flag6} country='Iran' infoNum='32,332' />
					</Chart>
				</MapReport>
			</MapWrap>
		</React.Fragment>
	);
};

export default Homepage;
