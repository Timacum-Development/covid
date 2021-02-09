import styled from 'styled-components';
import { color } from '../../../shared/styles';

// Assets
import BgGirl from '../../../assets/bg-girl.png';
import Map from '../../../assets/world-map.png';

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
	margin-bottom: 217px;
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

export const WhatToDo = styled.section`
	position: relative;
`;

export const CirclesWrapLeft = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	left: 375px;
	top: 0;
	z-index: 1;
`;

export const CirclesWrapRight = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 375px;
	top: 0;
	z-index: 1;
`;

export const MapWrap = styled.section``;

export const MapReport = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 0 195px 0 185px;
	background: url(${Map}) no-repeat left;
	margin-bottom: 149px;
`;

export const Chart = styled.div`
	padding: 54px 55px 52px;
	background-color: ${color.white};
	box-shadow: 5px 10px 30px #a2a5b2;
`;

export const LiveWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 54px;
`;

export const LiveReportTitle = styled.h3`
	font-size: 3rem;
	color: ${color.green};
	text-transform: capitalize;
	margin-right: 51px;
`;

export const ArrowWrap = styled.div`
	display: flex;
	align-items: center;
	padding: 17px 16px;
	background-color: ${color.white};
	border-radius: 6px;
	box-shadow: 2px 2px 20px ${color.lightGrey};
	position: relative;

	&:before {
		content: '';
		width: 3px;
		height: 25px;
		background-color: rgba(222, 225, 237);
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const MapSearch = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 70%;
	max-width: 943px;
	margin-right: 36px;
`;

export const Search = styled.button`
	padding: 22px 24px;
	background-color: ${color.white};
	box-shadow: 5px 10px 30px ${color.lightGrey};
	border-radius: 4px;
	outline: none;
	border: none;
	cursor: pointer;
`;

export const Magnifier = styled.img`
	display: block;
	width: 29px;
	height: 29px;
`;

export const ShowMap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${color.white};
	border-radius: 5px;
	padding: 22px 29px;
	position: relative;
	left: 58px;
	box-shadow: 2px 2px 20px ${color.lightGrey};
`;

export const ZoomIn = styled.div`
	position: relative;
	padding: 12px;
	margin-bottom: 23px;
	cursor: pointer;

	&:before {
		content: '';
		width: 28px;
		height: 2px;
		position: absolute;
		left: 0;
		top: 50%;
		background-color: ${color.darkestGrey};
	}

	&:after {
		content: '';
		width: 2px;
		height: 28px;
		position: absolute;
		left: 50%;
		top: 0;
		background-color: ${color.darkestGrey};
		transform: rotate(180deg);
	}
`;

export const Arrows = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const RedArrow = styled.div`
	width: 0;
	height: 0;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-bottom: 23px solid ${color.arrowRed};
	margin-bottom: 2px;
	cursor: pointer;
`;

export const GreyArrow = styled.div`
	width: 0;
	height: 0;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-top: 23px solid ${color.lightGrey};
	cursor: pointer;
`;
