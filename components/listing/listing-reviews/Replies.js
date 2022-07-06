import React from 'react';
import WriteComment from '../write-comment/WriteComment';
import {
	useAddCommentMutation,
	useGetCommentsQuery,
} from '../../../store/services/apiService';
import styles from './Review.module.css';
import * as lib from '../../../lib/constants';
import moment from 'moment';
import Link from 'next/link';
import { Placeholder, Segment } from 'semantic-ui-react';

const Replies = ({ rating }) => {
	const { data, isFetching, isError, error, isLoading } =
		useGetCommentsQuery(rating);
	return (
		<div className={styles.replies}>
			<h5>Replies</h5>
			<WriteComment rating={rating} />

			{isFetching ? (
				<>
					<PlaceHolder />
					<PlaceHolder />
				</>
			) : !isError && data && data?.totalDocs && data.totalDocs > 0 ? (
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
										<Link href={`/u/${item.user._id}`}>
											<h6>{item?.user?.name && item.user.name}</h6>
										</Link>
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

const PlaceHolder = () => {
	return (
		<div className={styles.replyPlaceholder}>
			<Placeholder>
				<Placeholder.Header image className={styles.pp}>
					<Placeholder.Line length='medium' />
					<Placeholder.Line length='full' />
				</Placeholder.Header>
			</Placeholder>
		</div>
	);
};

export default Replies;
