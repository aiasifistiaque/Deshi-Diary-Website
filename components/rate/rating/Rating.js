import React from 'react';
import styles from './Rating.module.css';

const Rating = ({ rating, primary, size }) => {
	const image = primary
		? '/icons/star-primary.png'
		: '/icons/star-secondary.png';
	const blank = '/icons/star-blank.png';

	return (
		<div className={styles.container}>
			<img
				src={rating >= 1 ? image : blank}
				alt='1'
				style={{ width: size ? size : 14 }}
			/>
			<img
				src={rating >= 2 ? image : blank}
				alt='2'
				style={{ width: size ? size : 14 }}
			/>
			<img
				src={rating >= 3 ? image : blank}
				alt='3'
				style={{ width: size ? size : 14 }}
			/>
			<img
				src={rating >= 4 ? image : blank}
				alt='4'
				style={{ width: size ? size : 14 }}
			/>
			<img
				src={rating >= 5 ? image : blank}
				alt='5'
				style={{ width: size ? size : 14 }}
			/>
		</div>
	);
};

export default Rating;
