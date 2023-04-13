import { ArticleContent } from '@components/ArticleContent';
import { SinglePostFeaturedImage } from '@components/FeaturedImage';
import ArticleHeader from '@components/ArticleHeader/ArticleHeader';
import { Container } from '@components/Container';
import Header from '@components/Header';
import { Author } from '@components/Author';
import { Tags } from '@components/Tags';

export default function Article() {
	return (
		<>
			<Header />
			<Container>
				<ArticleHeader />
				<SinglePostFeaturedImage
					src="/images/article/thomas-chizzali-K-ENC7LNABA-unsplash.jpg"
					alt=""
				/>
				<ArticleContent />
				<Tags />
				<Author />
			</Container>
		</>
	);
}
