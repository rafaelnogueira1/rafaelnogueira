import { useCallback, useEffect, useState } from 'react';

export interface UseToggle {
	isEnable: boolean;
	enable: () => void;
	disable: () => void;
	toggle: () => void;
}

const useToggle = (value = false): UseToggle => {
	const [isEnable, setIsEnable] = useState(value);

	useEffect(() => {}, [isEnable]);

	const enable = useCallback(() => {
		setIsEnable(true);
	}, []);

	const disable = useCallback(() => {
		setIsEnable(false);
	}, []);

	const toggle = useCallback(() => {
		setIsEnable((prevState) => !prevState);
	}, []);

	return {
		isEnable,
		enable,
		disable,
		toggle,
	};
};

export default useToggle;
