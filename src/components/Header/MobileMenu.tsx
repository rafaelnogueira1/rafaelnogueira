import Link from 'next/link';
import { RiCloseFill, RiMenuFill } from 'react-icons/ri';
import * as S from './MobileMenu.styles';
import { NAVIGATION_LINKS } from '@shared/config';
import useToggle from '@shared/hooks/useToggle';

export default function MobileMenu() {
	const menu = useToggle(false);

	return (
		<S.Container>
			<S.OpenButton onClick={menu.enable} type="button">
				<RiMenuFill />
			</S.OpenButton>
			{menu.isEnable ? <S.ContainerBackground /> : null}
			<S.Menu className={menu.isEnable ? 'open' : ''}>
				<S.CloseButton onClick={menu.disable}>
					<RiCloseFill />
				</S.CloseButton>
				<ul>
					{NAVIGATION_LINKS.map(({ name, path }) => (
						<li key={name}>
							<Link href={path}>{name}</Link>
						</li>
					))}
				</ul>
			</S.Menu>
		</S.Container>
	);
}
