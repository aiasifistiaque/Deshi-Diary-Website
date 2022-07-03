import React, { useState } from 'react';
import styles from './Review.module.css';
import * as lib from '../../../lib/constants';
import moment from 'moment';
import Rating from '../../rate/rating/Rating';
import WriteComment from '../write-comment/WriteComment';
import {
	useAddCommentMutation,
	useGetCommentsQuery,
} from '../../../store/services/apiService';

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
							review?.user?.img
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
						<p>{review.user?.name && review.user.name}</p>
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

const Replies = ({ rating }) => {
	//const [data, setData] = useState(dat);
	const { data, isFetching, isError, error, isLoading } =
		useGetCommentsQuery(rating);
	if (isLoading || isError || !data) return null;
	return (
		<div className={styles.replies}>
			<h5>Replies</h5>
			<WriteComment rating={rating} />
			{!isError &&
			!isLoading &&
			data &&
			data?.totalDocs &&
			data.totalDocs > 0 ? (
				<>
					{data?.doc &&
						data.doc.map((item, i) => (
							<div className={styles.reply} key={i}>
								<div className={styles.details}>
									<div className={styles.image}>
										<img
											src={
												item?.user?.image
													? item.user.image
													: lib.placeholders.profileImage
											}
										/>
									</div>
									<div className={styles.usr}>
										<h6>{item?.user?.name && item.user.name}</h6>
										<p className={styles.date}>
											{item?.createdAt && moment(item.createdAt).calendar()}
										</p>
										<div className={styles.text}>
											<p>{item?.details && item.details}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					<div className={styles.more}>
						<a onClick={() => setData(x => [...x, ...dat])}>
							View More replies
						</a>
					</div>
				</>
			) : null}
		</div>
	);
};

export default ListingReview;
