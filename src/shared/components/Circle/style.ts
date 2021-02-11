import styled from 'styled-components';
import { color } from '../../styles';

export const LightCircleWrap = styled.div`
	position: relative;
	margin-bottom: 80px;
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
	position: absolute;
	top: 10px;
	right: 0;
`;

export const RoundLine = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 3px solid ${color.lightRed};
	border-right: 3px solid white;
	border-bottom: 3px solid white;
	transform: rotate(140deg);
	right: -30px;
	bottom: 20px;
	position: relative;

	&:before {
		content: '';
		width: 3px;
		height: 40px;
		background-color: ${color.lightRed};
		position: absolute;
		transform: rotate(-140deg);
		bottom: 164px;
		left: 178px;
	}

	&:after {
		content: '';
		width: 14px;
		height: 14px;
		background-color: ${color.dotRed};
		border-radius: 50%;
		position: absolute;
		bottom: 195px;
		left: 187px;
	}
`;
