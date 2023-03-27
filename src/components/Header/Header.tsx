import Link from 'next/link';

import { Container } from '@components/Container';

import * as S from './Header.styles';

export default function Header() {
	return (
		<S.Header>
			<Container>
				<S.Navigation>
					<S.Logo>Rafael Nogueira</S.Logo>
					<S.Menu>
						<ul>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/">Posts</Link>
							</li>
						</ul>
					</S.Menu>
				</S.Navigation>
			</Container>
		</S.Header>
	);
}
