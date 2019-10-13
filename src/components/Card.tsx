import * as React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Card(props) {
	const { avatar } = props;
	const avatarMarkup = avatar && <img src={avatar} alt="" className="avatar" />;
	return (
		<div className="card">
			{avatarMarkup}
			<h2>Josh Baker</h2>
			<p>Developer @ Shopify</p>
			<i>April 2016 - present</i>

			<p>San Francisco, CA</p>

			<div className="footer">
				<SocialIcon bgColor="#ffffff" fgColor="#212b36" url="https://twitter.com/joshlbaker_" />
				<SocialIcon bgColor="#ffffff" fgColor="#212b36" url="https://www.linkedin.com/in/joshlbaker/" />
				<SocialIcon bgColor="#ffffff" fgColor="#212b36" url="https://github.com/joshlbaker" />
				<SocialIcon bgColor="#ffffff" fgColor="#212b36" url="https://www.instagram.com/boshjakerr/" />
			</div>
		</div>
	);
}
