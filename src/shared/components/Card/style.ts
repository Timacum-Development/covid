import styled from 'styled-components';
import { color } from '../../styles';

export const InfoCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 460px;
	box-shadow: 5px 10px 30px ${color.lightGrey};
	border-bottom: 6px solid transparent;
	transition: 0.25s ease-in-out;

	&:hover {
		border-bottom: 6px solid ${color.red};
	}
`;

export const InfoImg = styled.img`
	display: block;
	margin-bottom: 55px;
`;
