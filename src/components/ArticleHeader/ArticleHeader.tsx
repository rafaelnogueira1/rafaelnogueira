import Image from 'next/image';

import { Title } from '@components/Title';

import * as S from './ArticleHeader.styles';

export default function ArticleHeader() {
	return (
		<S.Header>
			<Title size={2} text="Business Partners Work at Modern Office" />
			<S.PostMetaContainer>
				<S.Avatar>
					<Image src="/images/author/author.jpeg" width={40} height={40} alt="author" />
				</S.Avatar>
				<S.InfoContainer>
					<S.Author>Rafael Nogueira</S.Author>
					<S.PostMeta>
						<S.Category>
							<span>Web Developer</span>
							<span>Design</span>
						</S.Category>
						<S.Date>10 de Abril, 2023</S.Date>
					</S.PostMeta>
				</S.InfoContainer>
			</S.PostMetaContainer>
		</S.Header>
	);
}
