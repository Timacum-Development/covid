import React from 'react';
import {
	InfoWrap,
	InfoText,
	InfoGirl,
	InfoParagraph,
	Circle,
	Number
} from './style';

const Recommendation = (props: any) => {
	const {
		title,
		text,
		infoIcon,
		style,
		number,
		styleImg,
		styleTxt,
		styleTitle
	} = props;
	return (
		<React.Fragment>
			<InfoWrap style={style}>
				<InfoText style={styleTxt}>
					<Circle>
						<Number>{number}</Number>
					</Circle>
					<div>
						<h3 style={styleTitle}>{title}</h3>
						<InfoParagraph>{text}</InfoParagraph>
					</div>
				</InfoText>
				<InfoGirl src={infoIcon} style={styleImg} />
			</InfoWrap>
		</React.Fragment>
	);
};

export default Recommendation;
