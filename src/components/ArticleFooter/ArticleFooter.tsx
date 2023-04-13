import * as S from './ArticleFooter.styles';

export default function ArticleFooter() {
	return (
		<S.Footer>
			<S.Link href="/article">
				Continuar lendo
				<S.Arrow>
					<span />
					<span />
					<span />
					<span />
					<i />
				</S.Arrow>
			</S.Link>
		</S.Footer>
	);
}
