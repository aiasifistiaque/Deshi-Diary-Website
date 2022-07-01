import React from 'react';
import styles from './RatingSummary.module.css';

const RatingSummary = ({ data }) => {
	const ratingSummary = {
		rating: data?.rating ? data.rating : 0,
		total: data?.reviews ? data.reviews : 0,
		ratings: [
			{ total: data?.fiveStar ? data.fiveStar : 0, star: '5' },
			{ total: data?.fourStar ? data.fourStar : 0, star: '4' },
			{ total: data?.threeStar ? data.threeStar : 0, star: '3' },
			{ total: data?.twoStar ? data.twoStar : 0, star: '2' },
			{ total: data?.oneStar ? data.oneStar : 0, star: '1' },
		],
	};

	return (
		<div className={styles.container}>
			<div className={styles.details}>
				{ratingSummary?.ratings?.map((item, i) => (
					<div className={styles.detail} key={i}>
						<div className={styles.title}>
							<h3>{item.star}</h3>
						</div>

						<div className={styles.box}>
							<div
								className={styles.coloredBox}
								style={{
									width:
										item.total == 0
											? 0
											: `${(item.total / data.reviews) * 100}%`,
								}}
							/>
						</div>
					</div>
				))}
			</div>
			<div className={styles.summary}>
				<h2>{data?.rating && parseFloat(data.rating).toFixed(1)}</h2>
				<Stars rating={data?.rating && data.rating} />
				<h6>{data?.reviews && data.reviews} Reviews</h6>
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
