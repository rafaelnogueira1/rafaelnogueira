import Link from 'next/link';

import { Container } from '@components/Container';
import { Logo } from '@components/Logo';

import * as S from './Header.styles';

export default function Header() {
	return (
		<S.Header>
			<Container>
				<S.Navigation>
					<Logo />
					<S.Menu>
						<ul>
							<li>
								<Link href="/">
									Home
									<span />
								</Link>
							</li>
							<li>
								<Link href="/">
									Posts
									<span />
								</Link>
							</li>
						</ul>
					</S.Menu>
				</S.Navigation>
			</Container>
		</S.Header>
	);
}
