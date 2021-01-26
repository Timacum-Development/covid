import styled from 'styled-components';
import { color } from '../../styles';

export const LogoWrap = styled.div`
	display: flex;
	align-items: center;
`;

export const LogoImg = styled.img`
	display: block;
	width: 63px;
	height: 63px;
	margin-right: 14px;
`;

export const LogoText = styled.a`
	font-family: 'Red Hat Display', sans-serif;
	font-weight: 700;
	color: ${color.green};
	text-transform: uppercase;
`;
