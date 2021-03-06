import React, { useState } from 'react';
import { Placeholder } from 'semantic-ui-react';
import { useGetRatingsQuery } from '../../../store/services/apiService';
import ListingReview from '../../listing/listing-reviews/ListingReviews';
import Error from '../../util/error/Error';
import Input from '../../util/input/Input';
import styles from './AllReviews.module.css';
import ReviewPlaceholder from './ReviewPlaceholder';

const filter = [
	{ name: 'Most Recent', _id: '-createdAt' },
	{ name: 'Oldest', _id: 'createdAt' },
	{ name: 'Trending', _id: '-comments' },
];

const AllReviews = ({ query }) => {
	const [sort, setSort] = useState(filter[0]._id);

	const { data, isFetching, isError, error } = useGetRatingsQuery({
		id: query,
		sort: sort,
	});

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h5>Reviews</h5>

				<div className={styles.select}>
					<h6>Filter By:</h6>
					<Input
						select
						noDefault
						//preSelect={sort}
						data={filter}
						onChange={e => setSort(e)}
					/>
				</div>
			</div>

			<Error isError={isError}>{error}</Error>

			{isFetching ? (
				<>
					<ReviewPlaceholder />
					<ReviewPlaceholder />
					<ReviewPlaceholder />
				</>
			) : (
				data &&
				data.doc.length > 0 &&
				data.doc.map((review, i) => (
					<ListingReview fill key={i} review={review} />
				))
			)}
		</div>
	);
};

export default AllReviews;
