import React from 'react';

import * as S from './Tags.styles';
import Link from 'next/link';

export default function Tags() {
	return (
		<S.Container>
			<ul>
				<li>
					<Link href="">react</Link>
				</li>
				<li>
					<Link href="">javascript</Link>
				</li>
				<li>
					<Link href="">test</Link>
				</li>
			</ul>
		</S.Container>
	);
}
