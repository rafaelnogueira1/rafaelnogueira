import { AnimatedLink } from '@components/AnimatedLink';
import * as S from './ArticleFooter.styles';

export default function ArticleFooter() {
	return (
		<S.Footer>
			<AnimatedLink label="Continuar lendo" href="/article" direction="right" />
		</S.Footer>
	);
}
