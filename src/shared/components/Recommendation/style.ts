import styled from 'styled-components';
import { color } from '../../styles';

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
	padding: 10px;
`;

export const Number = styled.span`
	font-size: 2.75rem;
	color: ${color.red};
	text-transform: uppercase;
`;
