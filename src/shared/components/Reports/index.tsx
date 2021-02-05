import React from 'react';
import {
	CountryWrap,
	Country,
	Flag,
	CountryName,
	InfoNumbers,
	Numbers,
	Arrow
} from './style';

const Report = (props: any) => {
	const { countryFlag, country, infoNum, arrowStyle } = props;
	return (
		<CountryWrap>
			<Country>
				<Flag src={countryFlag} />
				<CountryName>{country}</CountryName>
			</Country>
			<InfoNumbers>
				<Numbers>{infoNum}</Numbers>
				<Arrow style={arrowStyle} />
			</InfoNumbers>
		</CountryWrap>
	);
};

export default Report;
