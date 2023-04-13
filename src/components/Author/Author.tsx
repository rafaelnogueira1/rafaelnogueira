import Image from 'next/image';
import { Social } from '@components/Social';

import * as S from './Author.styles';

export default function Author() {
	return (
		<S.Container>
			<S.ImageContainer>
				<Image src="/images/author/rafael-nogueira.jpeg" fill alt="rafael nogueira" />
			</S.ImageContainer>
			<S.Main>
				<S.Header>
					<S.TitleMain>Rafael N. Silva</S.TitleMain>
					<Social />
				</S.Header>
				<S.Content>
					<p>
						The founder of A-Works, Inc, an Elite Author on Envato. The world leading market for
						WordPress themes and plugins.
					</p>
				</S.Content>
			</S.Main>
		</S.Container>
	);
}
