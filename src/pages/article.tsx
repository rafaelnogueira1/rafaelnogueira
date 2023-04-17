import Base from '@templates/Base/Base';
import { ArticleContent } from '@components/ArticleContent';
import { SinglePostFeaturedImage } from '@components/FeaturedImage';
import { Container } from '@components/Container';
import { Author } from '@components/Author';
import { Tags } from '@components/Tags';
import { SinglePostHeader } from '@components/ArticleHeader';

export default function Article() {
	return (
		<Base>
			<Container>
				<SinglePostHeader />
				<SinglePostFeaturedImage
					src="/images/article/thomas-chizzali-K-ENC7LNABA-unsplash.jpg"
					alt=""
				/>
				<ArticleContent />
				<Tags />
				<Author />
			</Container>
		</Base>
	);
}
