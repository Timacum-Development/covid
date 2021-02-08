import React from 'react';
import {
	FooterWrap,
	Contact,
	Question,
	Email,
	FooterInfo,
	SocialWrap,
	LinkWrap
} from './style';

// Assets
import Icon1 from '../../../assets/facebook.png';
import Icon2 from '../../../assets/youtube.png';
import Icon3 from '../../../assets/vine.png';
import Icon4 from '../../../assets/twitter.png';

// Components
import Logo from '../../../shared/components/Logo';
import CallToAction from '../../../shared/components/CTA';
import Social from '../../../shared/components/Social';
import Link from '../../../shared/components/Link';

const Footer = () => {
	return (
		<FooterWrap>
			<div className='container'>
				<Contact>
					<Question>Have Question in mind? Let us help you</Question>
					<Email>
						snmonydemo@gmail.com
						<CallToAction
							red
							text='Send'
							styleRed={{
								position: 'absolute',
								right: '17px',
								top: '50%',
								transform: 'translateY(-50%)',
								padding: '26px 80px'
							}}
						/>
					</Email>
				</Contact>
				<FooterInfo>
					<Logo text='Covid-19' />
					<LinkWrap>
						<ul>
							<li className='list'>
								<Link
									text='Overview'
									styleFooterTxt={{ fontSize: '1.4375rem' }}
								/>
							</li>
							<li className='list'>
								<Link
									text='Symptoms'
									styleFooterTxt={{ fontSize: '1.4375rem' }}
								/>
							</li>
							<li className='list'>
								<Link
									text='Prevention'
									styleFooterTxt={{ fontSize: '1.4375rem' }}
								/>
							</li>
							<li className='list'>
								<Link
									text='Treatment'
									styleFooterTxt={{ fontSize: '1.4375rem' }}
								/>
							</li>
						</ul>
					</LinkWrap>
					<SocialWrap>
						<a href='' className='social-icon'>
							<Social iconSocial={Icon1} />
						</a>
						<a href='' className='social-icon'>
							<Social iconSocial={Icon2} />
						</a>
						<a href='' className='social-icon'>
							<Social iconSocial={Icon3} />
						</a>
						<a href='' className='social-icon'>
							<Social iconSocial={Icon4} />
						</a>
					</SocialWrap>
				</FooterInfo>
				<LinkWrap>
					<p className='small-footer'>
						2020 @ All rights reserved by pixelspark.co
					</p>
				</LinkWrap>
			</div>
		</FooterWrap>
	);
};

export default Footer;
