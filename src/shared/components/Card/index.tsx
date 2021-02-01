import React from 'react';
import { InfoCard, InfoImg } from './style';

const Card = (props: any) => {
	const { infoIcon, title, text, styleCard } = props;
	return (
		<InfoCard style={styleCard}>
			<InfoImg src={infoIcon} />
			<h4>{title}</h4>
			<p className='card-p'>{text}</p>
		</InfoCard>
	);
};

export default Card;
