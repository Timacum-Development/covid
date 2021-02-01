import styled from 'styled-components';
import { color } from '../../../shared/styles';

// Assets
import BgGirl from '../../../assets/bg-girl.png';

export const Hero = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	overflow: hidden;
	background: linear-gradient(to bottom, rgba(250, 86, 82, 0.15), transparent);
`;

export const HeroIntro = styled.div`
	max-width: 675px;
	position: relative;
	left: 243px;
	top: 100px;
`;

export const HeroImg = styled.img`
	display: block;
	position: relative;
	right: -190px;
	top: 55px;
`;

export const About = styled.section`
	display: flex;
`;

export const CoronaImg = styled.img`
	width: 40%;
	height: auto;
	margin-right: 165px;
`;

export const AboutWrap = styled.div`
	max-width: 848px;
	padding: 100px 0;
`;

export const Contagion = styled.section`
	position: relative;
	margin-bottom: 148px;
`;

export const CardWrap = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Symptoms = styled.section`
	position: relative;
	margin-bottom: 117px;
`;

export const SymptomsWrap = styled.div`
	position: relative;
`;

export const GirlBg = styled.div`
	background: url(${BgGirl}) no-repeat center;
	width: 100%;
	/* max-width: 710px; */
	height: 690px;
	margin: 0 auto;
	position: relative;
`;

export const GirlImg = styled.img`
	position: absolute;
	left: 50%;
	top: 40px;
	transform: translateX(-50%);
`;
