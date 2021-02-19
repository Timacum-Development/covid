import styled from 'styled-components';
import { color } from '../../../shared/styles';

export const FooterWrap = styled.footer`
	width: 100%;
	position: relative;
	overflow: hidden;
	padding-top: 149px;
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

export const FormWrap = styled.div`
	width: 100%;
	position: relative;
`;
