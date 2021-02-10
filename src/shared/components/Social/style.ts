import styled, { keyframes } from 'styled-components';
import Social from '.';

export const SocialAnimation = keyframes`
	0% {
		transform: scale(1);
	}

	50% {
		transform: scale(1.2);
	}

	100% {
		transform: scale(1.2);
	}
`;

export const SocialIcon = styled.img`
	display: block;

	&:hover {
		animation: ${SocialAnimation} 0.25s ease-in-out forwards;
	}
`;
