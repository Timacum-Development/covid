import styled, { keyframes } from 'styled-components';
import { color } from '../../styles';

export const GirlHover = keyframes`
	0%{
		transform: scale(1);
	}

	50%{
		transform: scale(1.1);
	}

	50%{
		transform: scale(1.05);
	}

	100%{
		transform: scale(1);
	}
`;

export const InfoWrap = styled.div`
	display: flex;
	align-items: center;
`;

export const InfoText = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const InfoGirl = styled.img`
	display: block;
	transition: animation 0.5s ease-out;

	&:hover {
		animation: ${GirlHover} 1s ease-in-out forwards;
	}
`;

export const InfoParagraph = styled.p`
	font-size: 1.125rem;
	text-align: left;
	text-transform: capitalize;
`;

export const Circle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 75px;
	height: 75px;
	border-radius: 50%;
	background-color: ${color.lightRed};
	margin-right: 45px;
	padding: 15px;
`;

export const Number = styled.span`
	font-size: 2.75rem;
	color: ${color.red};
	text-transform: uppercase;
`;
