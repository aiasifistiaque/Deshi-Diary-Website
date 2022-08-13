import React, { useState } from 'react';
import styles from './Review.module.css';
import * as lib from '../../../lib/constants';
import moment from 'moment';
import Rating from '../../rate/rating/Rating';
import Link from 'next/link';
import Replies from './Replies';

const ListingReview = ({ review, fill }) => {
	const [show, setShow] = useState(false);
	return (
		<div
			className={styles.container}
			style={{ ...(fill && { width: '100%' }) }}>
			<div className={styles.details}>
				<div className={styles.image}>
					<img
						src={
							review?.user?.image
								? review.user.image
								: lib.placeholders.profileImage
						}
						alt='*'
					/>
				</div>

				<div className={styles.text}>
					<Rating rating={review?.rating ? review.rating : 0} size={8} />
					<div className={styles.user}>
						<h6>{`"${review?.title && review.title}"`}</h6>
						<Link href={`/u/${review.user._id}`}>
							<p>{review.user?.name && review.user.name}</p>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.review}>
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

export default ListingReview;
