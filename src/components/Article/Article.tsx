import { ArticleHeader } from '@components/ArticleHeader';
import { ArticleContent } from '@components/ArticleContent';
import { Container } from '@components/Container';
import { ArticleFeaturedImage } from '@components/FeaturedImage';
import { ArticleFooter } from '@components/ArticleFooter';

export default function Article() {
	return (
		<Container>
			<ArticleFeaturedImage src="/images/article/thomas-chizzali-K-ENC7LNABA-unsplash.jpg" alt="" />
			<ArticleHeader />
			<ArticleContent />
			<ArticleFooter />
		</Container>
	);
}
