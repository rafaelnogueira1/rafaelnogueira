import Image, { ImageProps } from 'next/image';

import * as S from './ArticleFeaturedImage.styles';

export default function ArticleFeaturedImage({ alt, ...rest }: ImageProps) {
	return (
		<S.Container>
			<Image alt={alt} fill {...rest} />
		</S.Container>
	);
}
