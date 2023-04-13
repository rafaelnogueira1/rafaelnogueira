import Link from 'next/link';

import * as S from './Logo.styles';

export default function Logo() {
	return (
		<S.Logo>
			<Link href="/">Rafael Nogueira</Link>
		</S.Logo>
	);
}
