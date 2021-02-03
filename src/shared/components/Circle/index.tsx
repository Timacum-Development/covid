import React from 'react';
import { LightCircleWrap, LightCircle, CircleText, RoundLine } from './style';

const CircleInfo = (props: any) => {
	const { text, styleCircle } = props;
	return (
		<LightCircleWrap>
			<RoundLine />
			<LightCircle>
				<CircleText>{text}</CircleText>
			</LightCircle>
		</LightCircleWrap>
	);
};

export default CircleInfo;
