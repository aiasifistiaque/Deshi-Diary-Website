import React, { useState } from 'react';
import { useGetRatingsQuery } from '../../../store/services/apiService';
import ListingReview from '../../listing/listing-reviews/ListingReviews';
import Error from '../../util/error/Error';
import Input from '../../util/input/Input';
import styles from './AllReviews.module.css';

const filter = [
	{ name: 'Most Recent', _id: 'recent' },
	{ name: 'Most Trending', _id: 'trending' },
	{ name: 'Oldest', _id: 'oldest' },
];

const AllReviews = ({ query, dat }) => {
	const { data, isFetching, isError, error } = useGetRatingsQuery(query);
	const [sort, setSort] = useState(filter[0]._id);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h5>{sort} Reviews</h5>

				<div className={styles.select}>
					<h6>Filter By:</h6>
					<Input select data={filter} onChange={e => setSort(e)} />
				</div>
			</div>

			<Error isError={isError}>{error}</Error>

			{data &&
				data.doc.length > 0 &&
				data.doc.map((review, i) => (
					<ListingReview fill key={i} review={review} />
				))}
		</div>
	);
};

export default AllReviews;
