import React from 'react';
import { InfoCard, InfoImg } from './style';

const Card = (props: any) => {
	const { infoIcon, title, text } = props;
	return (
		<InfoCard>
			<InfoImg src={infoIcon} />
			<h3>{title}</h3>
			<p className='card-p'>{text}</p>
		</InfoCard>
	);
};

export default Card;
