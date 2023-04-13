import Link from 'next/link';
import { RiCodeBoxFill } from 'react-icons/ri';

import { Title } from '@components/Title';

import * as S from './ArticleHeader.styles';

export default function ArticleHeader() {
	return (
		<S.Header>
			<Title size={2}>
				<Link href="/article">Business Partners Work at Modern Office</Link>
			</Title>
			<S.PostMetaContainer>
				<S.Avatar>
					<RiCodeBoxFill size={20} />
				</S.Avatar>

				<S.PostMeta>
					<S.Category>
						<span>Web Developer</span>
						<span>Design</span>
					</S.Category>
					<S.Date>10 de Abril, 2023</S.Date>
				</S.PostMeta>
			</S.PostMetaContainer>
		</S.Header>
	);
}
