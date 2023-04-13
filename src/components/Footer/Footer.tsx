import { Logo } from '@components/Logo';
import { Container } from '@components/Container';
import { Social } from '@components/Social';

import * as S from './Footer.styles';

export default function Footer() {
	return (
		<S.Footer>
			<Container>
				<div>
					<Logo />
					<Social />
				</div>
				<S.Credits>Copyright © 2023 Rafael N Silva</S.Credits>
			</Container>
		</S.Footer>
	);
}
