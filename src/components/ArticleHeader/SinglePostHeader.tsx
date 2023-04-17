import { Title } from '@components/Title';

import * as S from './ArticleHeader.styles';

export default function SinglePostHeader() {
	return (
		<S.Header>
			<S.AnimatedLink label="Voltar" href="/" direction="left" />
			<Title size={2}>Business Partners Work at Modern Office</Title>
		</S.Header>
	);
}
