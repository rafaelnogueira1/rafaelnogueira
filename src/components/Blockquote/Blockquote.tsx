import { PropsWithChildren } from 'react';

import * as S from './Blockquote.styles';

export default function Blockquote({ children }: PropsWithChildren) {
	return (
		<S.Conteiner>
			<S.Icon />
			{children}
		</S.Conteiner>
	);
}
