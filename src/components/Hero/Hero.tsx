import Image from 'next/image';
import { Social } from '@components/Social';
import * as S from './Hero.styles';

export default function Hero() {
	return (
		<S.Container>
			<S.ImageContainer>
				<Image src="/images/author/rafael-nogueira.jpeg" fill alt="rafael nogueira" />
			</S.ImageContainer>
			<S.SocialContainer>
				<Social />
			</S.SocialContainer>
		</S.Container>
	);
}
