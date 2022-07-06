import React, { useState } from 'react';
import styles from './Review.module.css';
import * as lib from '../../../lib/constants';
import moment from 'moment';
import Rating from '../../rate/rating/Rating';
import Link from 'next/link';
import Replies from './Replies';

const UserListingReview = ({ review, fill }) => {
	const [show, setShow] = useState(false);
	return (
		<div
			className={styles.container}
			style={{ ...(fill && { width: '100%' }) }}>
			<div className={styles.details}>
				<div className={styles.image}>
					<img
						src={
							review?.listing?.images?.length > 0
								? review.listing.images[0].src
								: lib.placeholders.image
						}
						alt='*'
					/>
				</div>

				<div className={styles.text}>
					<div className={styles.profile}>
						<Link href={`/b/${review.listing._id}`}>
							<p>{review.listing?.name && review.listing.name}</p>
						</Link>
						<Rating rating={review?.rating ? review.rating : 0} size={10} />

						<h6>{`"${review?.title && review.title}"`}</h6>
					</div>
				</div>
			</div>
			<div className={styles.review}>
				<p style={{ fontSize: '1.05rem', marginTop: 12 }}>
					Reviewed by
					<Link href={`/u/${review.user._id}`}>
						<a>{review?.user?.name && review.user.name}</a>
					</Link>
				</p>
				<div className={styles.date}>
					<p>{moment(review.createdAt).calendar()}</p>
				</div>

				<p>{review?.details && review.details}</p>
			</div>
			{show ? (
				<>
					<div className={styles.comments}>
						<a onClick={() => setShow(false)}>Hide Replies</a>
					</div>
					<Replies rating={review?._id && review._id} />
				</>
			) : (
				<div className={styles.comments}>
					<a onClick={() => setShow(true)}>Write/View Replies</a>
				</div>
			)}
		</div>
	);
};

export default UserListingReview;
