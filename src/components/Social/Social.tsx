import {
	RiInstagramFill,
	RiTwitterFill,
	RiGithubFill,
	RiMailFill,
	RiLinkedinFill,
} from 'react-icons/ri';

import * as S from './Social.styles';

export default function Social() {
	return (
		<S.SocialContainer>
			<a href="#">
				<RiInstagramFill />
			</a>
			<a href="#">
				<RiTwitterFill />
			</a>
			<a href="#">
				<RiGithubFill />
			</a>
			<a href="#">
				<RiLinkedinFill />
			</a>
			<a href="#">
				<RiMailFill />
			</a>
		</S.SocialContainer>
	);
}
