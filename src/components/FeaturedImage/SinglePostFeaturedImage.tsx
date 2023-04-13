import Image, { ImageProps } from 'next/image';

import * as S from './FeaturedImage.styles';

export default function SinglePostFeaturedImage({ alt, ...rest }: ImageProps) {
	return (
		<S.ContainerSinglePost>
			<Image alt={alt} fill {...rest} />
		</S.ContainerSinglePost>
	);
}
