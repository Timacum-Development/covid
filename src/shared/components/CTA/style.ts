import styled from 'styled-components';
import { color } from '../../styles';

export const OutlineCta = styled.a`
	padding: 15px 45px;
	border-radius: 46px;
	border: 2px solid ${color.darkerRed};
	color: ${color.darkerRed};
	font-weight: 500;
	line-height: 22px;
	transition: 0.25s ease-in-out;

	&:hover {
		border-radius: 0;
		background-color: ${color.darkerRed};
		color: ${color.white};
	}
`;

export const RedCta = styled.a`
	padding: 24px 57px 28px 66px;
	border-radius: 65px;
	background-color: ${color.darkerRed};
	color: ${color.white};
	text-transform: capitalize;
	font-weight: 700;
	line-height: 29px;
	transition: 0.25s ease-in-out;
	border: 1px solid transparent;

	&:hover {
		background-color: ${color.white};
		color: ${color.darkerRed};
		border: 1px solid ${color.darkerRed};
	}
`;

export const LightRed = styled.a`
	padding: 24px 57px 28px 66px;
	border-radius: 65px;
	background-color: rgba(250, 86, 82, 0.15);
	color: ${color.red};
	text-transform: capitalize;
	font-weight: 500;
`;
