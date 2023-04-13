import { PropsWithChildren } from 'react';
import * as S from './Title.styles';
import { TitleProps } from './Title.types';

export default function Title({ size, children }: PropsWithChildren<TitleProps>) {
	return <S.Title size={size}>{children}</S.Title>;
}
