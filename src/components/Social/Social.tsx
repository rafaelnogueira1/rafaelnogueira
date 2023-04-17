import * as S from './Social.styles';
import { SOCIAL_LINKS } from '@shared/config';

export default function Social() {
	return (
		<S.SocialContainer>
			{SOCIAL_LINKS.map(({ name, path, icon }) => (
				<a key={name} href={path} target="_blank" rel="noreferrer">
					{icon}
				</a>
			))}
		</S.SocialContainer>
	);
}
