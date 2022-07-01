import React from 'react';
import styles from './Review.module.css';
import * as lib from '../../../lib/constants';
import Rating from '../../rate/rating/Rating';

const Review = ({ review, user }) => {
	return (
		<div className={styles.container}>
			<div className={styles.details}>
				<div className={styles.image}>
					<img
						src={user?.image ? user.image : lib.placeholders.profileImage}
						alt='*'
					/>
				</div>

				<div className={styles.text}>
					<Rating rating={review.rating} />
					{/* <div className={styles.stars}>
						<img src='/icons/star-secondary.png' alt='*' />
						<img src='/icons/star-secondary.png' alt='*' />
						<img src='/icons/star-secondary.png' alt='*' />
						<img src='/icons/star-secondary.png' alt='*' />
						<img src='/icons/star-secondary.png' alt='*' />
					</div> */}
					<div className={styles.user}>
						<h6>{`"${review.title}"`}</h6>
						<p>{user?.name && user.name}</p>
					</div>
				</div>
			</div>
			<div className={styles.review}>
				<p>{review?.details && review.details}</p>
			</div>
		</div>
	);
};

export default Review;
