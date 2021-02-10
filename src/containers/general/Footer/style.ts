import styled from 'styled-components';
import { color } from '../../../shared/styles';

export const FooterWrap = styled.footer`
	width: 100%;
	position: relative;
	overflow: hidden;
	background: linear-gradient(to bottom, transparent, ${color.lightestRed});
`;

export const Contact = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 790px;
	margin: 0 auto;
	margin-bottom: 143px;
`;

export const Question = styled.h2`
	font-size: 4rem;
	color: ${color.darkestGreen};
	margin-bottom: 62px;
	text-align: center;
`;

export const Email = styled.a`
	width: 100%;
	padding: 44px 0 44px 41px;
	background-color: ${color.white};
	color: ${color.darkGrey};
	border-radius: 57px;
	text-align: left;
	position: relative;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
`;

export const FooterInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 43px;
`;

export const SocialWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LinkWrap = styled.div`
	display: flex;
`;
