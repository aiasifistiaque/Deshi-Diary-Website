import React from 'react';
import styles from './Review.module.css';
import * as lib from '../../../lib/constants';
import Rating from '../../rate/rating/Rating';
import Link from 'next/link';

const Review = ({ review, user, listing }) => {
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

					<div className={styles.user}>
						<h6>{`"${review.title}"`}</h6>
						<Link href={`/u/${user._id}`}>
							<p>{user?.name && user.name}</p>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.review}>
				<div className={styles.business}>
					<p>
						Review on{' '}
						<Link href={`/b/${listing._id}`}>
							<a>{listing?.name && listing.name}</a>
						</Link>
					</p>
				</div>

				<p>{review?.details && review.details}</p>
				<Link href={`/rating/${review._id}?listing=${listing._id}`}>
					<div className={styles.continue}>
						<p>Continue Reading</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Review;
