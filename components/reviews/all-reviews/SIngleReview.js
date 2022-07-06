import React, { useState } from 'react';
import { useGetRatingByIdQuery } from '../../../store/services/apiService';
import ListingReview from '../../listing/listing-reviews/ListingReviews';
import Error from '../../util/error/Error';
import styles from './AllReviews.module.css';
import ReviewPlaceholder from './ReviewPlaceholder';

const AllReviews = ({ query }) => {
	const { data, isFetching, isError, error } = useGetRatingByIdQuery(query);

	return (
		<div className={styles.container}>
			<div className={styles.header} style={{ marginBottom: 16 }}>
				<h5>Review</h5>
			</div>

			<Error isError={isError}>{error}</Error>

			{isFetching ? (
				<>
					<ReviewPlaceholder />
				</>
			) : (
				data && <ListingReview fill review={data} />
			)}
		</div>
	);
};

export default AllReviews;
