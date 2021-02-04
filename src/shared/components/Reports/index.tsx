import React from 'react';
import {
	CountryWrap,
	Country,
	Flag,
	CountryName,
	InfoNumbers,
	Numbers
} from './style';

const Report = (props: any) => {
	const { countryFlag, country, infoNum } = props;
	return (
		<CountryWrap>
			<Country>
				<Flag src={countryFlag} />
				<CountryName>{country}</CountryName>
			</Country>
			<InfoNumbers>
				<Numbers>{infoNum}</Numbers>
			</InfoNumbers>
		</CountryWrap>
	);
};

export default Report;
