import Link from 'next/link';

import { Container } from '@components/Container';
import { Logo } from '@components/Logo';

import * as S from './Header.styles';
import { NAVIGATION_LINKS } from '@shared/config';

export default function Header() {
	return (
		<S.Header>
			<Container>
				<S.Navigation>
					<Logo />
					<S.Menu>
						<ul>
							{NAVIGATION_LINKS.map(({ name, path }) => (
								<li key={name}>
									<Link href={path}>
										{name}
										<span />
									</Link>
								</li>
							))}
						</ul>
					</S.Menu>
				</S.Navigation>
			</Container>
		</S.Header>
	);
}
