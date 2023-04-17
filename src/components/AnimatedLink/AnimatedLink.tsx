import React from 'react';

import * as S from './AnimatedLink.styles';

interface AnimatedLinkProps {
	label: string;
	direction: 'left' | 'right';
	href: string;
	className?: string;
}

export default function AnimatedLink({ label, href, direction, className }: AnimatedLinkProps) {
	return (
		<S.Link href={href} direction={direction} className={className}>
			{label}
			<S.Arrow direction={direction}>
				<span />
				<span />
				<span />
				<span />
				<i />
			</S.Arrow>
		</S.Link>
	);
}
