import React from 'react';
import styles from './Review.module.css';

const Review = ({ review }) => {
	return (
		<div className={styles.container}>
			<div className={styles.details}>
				<div className={styles.image}>
					<img src={review.user.img} alt='*' />
				</div>

				<div className={styles.text}>
					<div className={styles.stars}>
						<img src='/icons/star-secondary.png' alt='*' />
						<img src='/icons/star-secondary.png' alt='*' />
						<img src='/icons/star-secondary.png' alt='*' />
						<img src='/icons/star-secondary.png' alt='*' />
						<img src='/icons/star-secondary.png' alt='*' />
					</div>
					<div className={styles.user}>
						<h6>{`"${review.title}"`}</h6>
						<p>{review.user?.name && review.user.name}</p>
					</div>
				</div>
			</div>
			<div className={styles.review}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
		</div>
	);
};

export default Review;
