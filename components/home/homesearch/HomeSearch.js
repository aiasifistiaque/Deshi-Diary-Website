import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import SlideDown from '../../transitions/slide-down/SlideDown';
import styles from './HomeSearch.module.css';
import InitialResult from './InitialResult';

const HomeSearch = ({ value, onChange, focus, setFocus }) => {
	const inputRef = useRef();
	const [location, setLocation] = useState({ name: 'Dhaka' });
	const [locationSelect, setLocationSelect] = useState(false);
	const inputClicked = () => {
		setFocus(true);
		//setSearchFocus(true);
		setLocationSelect(false);
	};
	const outOfFocus = () => {
		setFocus(false);
	};
	useEffect(() => {
		inputRef?.current?.addEventListener('focus', inputClicked);
		//inputRef?.current?.addEventListener('blur', outOfFocus);

		return () => {
			inputRef?.current?.removeEventListener('focus', inputClicked);
			//inputRef?.current?.removeEventListener('blur', outOfFocus);
		};
	}, []);

	return (
		<div
			className={`${styles.searched} ${focus && styles.focused}`}
			onClick={e => e.stopPropagation()}>
			<div className={styles.container}>
				<div
					onClick={() => {
						setFocus(true);
						setLocationSelect(true);
					}}
					className={styles.area}
					style={{
						...(focus && {
							backgroundColor: 'white',
							borderBottomLeftRadius: 0,
							borderTopLeftRadius: 8,
						}),
					}}>
					<img src='/icons/location.png' />
					<p>{location.name}</p>
				</div>
				<div className={styles.input}>
					<input
						ref={inputRef}
						type='text'
						placeholder='Search Here..eg Gyms, Locksmiths etc'
						value={value}
						onChange={e => onChange(e.target.value)}
					/>
				</div>
				<div
					className={styles.btn}
					style={{
						...(focus && {
							backgroundColor: 'white',
							borderBottomRightRadius: 0,
							borderTopRightRadius: 8,
						}),
					}}>
					<img src='/icons/search.png' />
				</div>
			</div>

			<SlideDown visible={focus}>
				<div className={styles.searchBox}>
					<InitialResult
						str={value}
						locationSelect={locationSelect}
						setLocationSelect={e => setLocationSelect(e)}
						setLocation={e => setLocation(e)}
						location={(location?.name && location.name) || 'Dhaka'}
					/>
				</div>
			</SlideDown>
		</div>
	);
};

export default HomeSearch;
