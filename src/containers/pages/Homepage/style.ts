import styled from 'styled-components';
import { color } from '../../../shared/styles';

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
	display: block;
	width: 771px;
	height: 722px;
	margin-right: 165px;
`;

export const AboutWrap = styled.div`
	max-width: 848px;
	padding: 100px 0;
`;

export const Contagion = styled.section``;

export const CardWrap = styled.div`
	display: flex;
	justify-content: space-between;
`;
