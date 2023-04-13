import Header from '@components/Header';
import Article from '@components/Article';
import { Footer } from '@components/Footer';
import { Hero } from '@components/Hero';

export default function Home() {
	return (
		<>
			<Hero />
			<Header />
			<Article />
			<Article />
			<Footer />
		</>
	);
}
