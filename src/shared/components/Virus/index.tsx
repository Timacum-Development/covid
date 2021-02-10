import React from 'react';
import { VirusImg } from './style';

const Virus = (props: any) => {
	const { virus, style } = props;
	return <VirusImg src={virus} style={style} />;
};

export default Virus;
