import * as S from './Title.styles';
import { TitleProps } from './Title.types';

export default function Title({ size, text }: TitleProps) {
	return <S.Title size={size}>{text}</S.Title>;
}
