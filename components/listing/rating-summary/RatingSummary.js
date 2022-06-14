import React from 'react';
import styles from './RatingSummary.module.css';

const RatingSummary = ({ data }) => {
	return (
		<div className={styles.container}>
			<div className={styles.details}>
				{data.ratings.map((item, i) => (
					<div className={styles.detail} key={i}>
						<div className={styles.title}>
							<h3>{item.star}</h3>
						</div>

						<div className={styles.box}>
							<div
								className={styles.coloredBox}
								style={{ width: `${(item.total / data.total) * 100}%` }}
							/>
						</div>
					</div>
				))}
			</div>
			<div className={styles.summary}>
				<h2>{data.rating}</h2>
				<Stars rating={data.rating} />
				<h6>{data.total} Reviews</h6>
			</div>
		</div>
	);
};

const Stars = ({ rating }) => {
	return (
		<div className={styles.rating}>
			<img
				src={
					rating >= 1 ? '/icons/star-secondary.png' : '/icons/star-blank.png'
				}
				alt='*'
			/>
			<img
				src={
					rating >= 2 ? '/icons/star-secondary.png' : '/icons/star-blank.png'
				}
				alt='*'
			/>
			<img
				src={
					rating >= 3 ? '/icons/star-secondary.png' : '/icons/star-blank.png'
				}
				alt='*'
			/>{' '}
			<img
				src={
					rating >= 4 ? '/icons/star-secondary.png' : '/icons/star-blank.png'
				}
				alt='*'
			/>{' '}
			<img
				src={
					rating >= 5 ? '/icons/star-secondary.png' : '/icons/star-blank.png'
				}
				alt='*'
			/>{' '}
		</div>
	);
};

export default RatingSummary;
