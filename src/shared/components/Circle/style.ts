import styled from 'styled-components';
import { color } from '../../styles';

export const LightCircleWrap = styled.div`
	position: relative;
`;

export const CircleText = styled.p`
	font-size: 1.375rem;
	color: ${color.darkestRed};
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
	width: 220px;
	height: 220px;
	border-radius: 50%;
	border: 3px solid ${color.lightRed};
	border-right: 10px solid white;
	border-bottom: 10px solid white;
	transform: rotate(140deg);
	position: absolute;
	left: -50%;
	top: -40px;
`;
