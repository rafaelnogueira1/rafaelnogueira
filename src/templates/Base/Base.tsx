import Header from '@components/Header';
import { Footer } from '@components/Footer';
import { Hero } from '@components/Hero';
import { PropsWithChildren } from 'react';

export default function Base({ children }: PropsWithChildren) {
	return (
		<>
			<Hero />
			<Header />
			{children}
			<Footer />
		</>
	);
}
