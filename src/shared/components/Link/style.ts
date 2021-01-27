import styled from 'styled-components';
import { color } from '../../styles';

export const GreenLink = styled.a`
	color: ${color.green};
	line-height: 22px;
	transition: 0.25s ease-in-out;
	position: relative;

	&:after {
		content: '';
		width: 6px;
		height: 6px;
		background-color: ${color.red};
		border-radius: 50%;
		position: absolute;
		bottom: -10px;
		left: 50%;
		transform: translateX(-50%);
		visibility: hidden;
		opacity: 0;
		transition: 0.25s ease-in-out;
	}

	&:hover {
		color: ${color.red};

		&:after {
			visibility: visible;
			opacity: 1;
		}
	}
`;
