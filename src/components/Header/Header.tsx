import Link from 'next/link';

import { Container } from '@components/Container';
import { Logo } from '@components/Logo';
import { NAVIGATION_LINKS } from '@shared/config';
import MobileMenu from './MobileMenu';

import * as S from './Header.styles';

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
					<MobileMenu />
				</S.Navigation>
			</Container>
		</S.Header>
	);
}
