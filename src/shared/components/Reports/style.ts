import styled from 'styled-components';
import { color } from '../../styles';

export const CountryWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 39px;
`;

export const Country = styled.div`
	display: flex;
	align-items: center;
`;

export const InfoNumbers = styled.div`
	display: flex;
	align-items: center;
`;

export const Flag = styled.img`
	display: block;
	width: 45px;
	height: 35px;
	margin-right: 27px;
`;

export const CountryName = styled.p`
	font-size: 1.9375rem;
	color: ${color.darkerGreen};
`;

export const Numbers = styled.p`
	font-size: 1.5rem;
	color: ${color.green};
	margin-right: 21px;
`;
