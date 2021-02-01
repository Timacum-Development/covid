import React from 'react';
import { TextWrap, TitleWrap } from './style';

const Text = (props: any) => {
	const { titleFirst, titleSecond, text, styleText } = props;
	return (
		<TextWrap>
			<TitleWrap>
				<h6>{titleFirst}</h6>
				<h2>{titleSecond}</h2>
			</TitleWrap>
			<p style={styleText} className='p-text'>
				{text}
			</p>
		</TextWrap>
	);
};

export default Text;
