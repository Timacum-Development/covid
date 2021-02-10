import styled from 'styled-components';
import { color } from '../../styles';

export const LightCircleWrap = styled.div`
	position: relative;
	margin-bottom: 50px;
`;

export const CircleText = styled.p`
	font-size: 1.375rem;
	color: ${color.darkestRed};
	line-height: 25px;
	text-transform: uppercase;
	text-align: center;
	font-weight: 500;
`;

export const LightCircle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 141px;
	height: 141px;
	border-radius: 50%;
	background-color: ${color.lightRed};
	margin-bottom: 50px;
`;

export const RoundLine = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 3px solid ${color.lightRed};
	border-right: 10px solid white;
	border-bottom: 10px solid white;
	transform: rotate(140deg);
	position: absolute;
	right: -30px;
	bottom: 20px;
`;
