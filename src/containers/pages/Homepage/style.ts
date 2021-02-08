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
	width: 86px;
	background-color: ${color.white};
	border-radius: 6px;
`;

export const ArrowFirst = styled.div`
	border-left: 7px solid ${color.grey};
	/* border-right: 7px solid transparent;
	border-bottom: 7px solid ${color.grey}; */
`;

export const ArrowSecond = styled.div`
	border-top: 7px solid ${color.grey};
	/* border-bottom: 7px solid ${color.grey};
	border-left: 7px solid transparent; */
`;

export const MapSearch = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 70%;
	margin-right: 36px;
`;

export const Search = styled.button`
	padding: 22px 24px;
	background-color: ${color.white};
	box-shadow: 5px 10px 30px #a2a5b2;
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
	width: 85px;
	height: 223px;
	background-color: ${color.white};
	border-radius: 5px;
	border: 1px solid black;
	padding: 22px 30px;
	position: relative;
	left: 58px;
`;

export const ZoomIn = styled.div`
	position: relative;
	padding: 10px;
	margin-bottom: 23px;

	&:before {
		content: '';
		width: 28px;
		height: 1px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%);
		background-color: ${color.darkestGrey};
	}

	&:after {
		content: '';
		width: 1px;
		height: 28px;
		position: absolute;
		left: 50%;
		top: 0;
		background-color: ${color.darkestGrey};
		transform: rotate(180deg);
	}
`;
