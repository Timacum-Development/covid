import React from 'react';
import { LightCircleWrap, LightCircle, CircleText, RoundLine } from './style';

const CircleInfo = (props: any) => {
	const { text, styleLine } = props;
	return (
		<LightCircleWrap>
			<RoundLine style={styleLine} />
			<LightCircle>
				<CircleText>{text}</CircleText>
			</LightCircle>
		</LightCircleWrap>
	);
};

export default CircleInfo;
