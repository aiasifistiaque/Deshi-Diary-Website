import { useState, useEffect, useCallback } from 'react';

//this hook triggers when the page scroll is initiated
export default function useScrolled() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [pageYOffset, setPageYOffset] = useState(0);
	const listener = () => {
		window.pageYOffset > 120 ? setIsScrolled(true) : setIsScrolled(false);
		setPageYOffset(window.pageYOffset);
	};

	const onScroll = () => {
		console.log(window);
		const { pageYOffset, scrollY } = window;
		console.log('yOffset', pageYOffset, 'scrollY', scrollY);
		setPageYOffset(window.pageYOffset);
		window.pageYOffset > 120 ? setIsScrolled(true) : setIsScrolled(false);
	};

	useEffect(() => {
		//if (typeof window == 'undefined') return;

		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', onScroll);
		}
		console.log(window);

		//console.log(window);
		//console.log(window.pageYOffset);
		return () => window.removeEventListener('scroll', onScroll);
	});
	return { isScrolled, pageYOffset };
}
