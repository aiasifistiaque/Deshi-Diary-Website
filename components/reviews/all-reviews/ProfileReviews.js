import React, { useState } from 'react';
import { useGetUserRatingsQuery } from '../../../store/services/apiService';
import UserListingReview from '../../listing/listing-reviews/UserListingReview';
import Error from '../../util/error/Error';
import Input from '../../util/input/Input';
import Paginate from '../../util/paginate/Paginate';
import styles from './AllReviews.module.css';
import ReviewPlaceholder from './ReviewPlaceholder';

const filter = [
	{ name: 'Most Recent', _id: '-createdAt' },
	{ name: 'Oldest', _id: 'createdAt' },
	{ name: 'Trending', _id: '-comments' },
];

const ProfileReviews = ({ query }) => {
	const [sort, setSort] = useState();
	const [page, setPage] = useState(1);
	const { data, isFetching, isError, error, isLoading } =
		useGetUserRatingsQuery({
			id: query,
			sort,
			page,
		});

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h5>Reviews</h5>
				<div className={styles.select}>
					<h6>Filter By:</h6>
					<Input
						noDefault={true}
						select
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
				</>
			) : (
				data &&
				data.doc.length > 0 &&
				data.doc.map((review, i) => (
					<UserListingReview fill key={i} review={review} />
				))
			)}
			<Paginate
				page={page}
				setPage={e => setPage(e)}
				isLoading={isLoading}
				isError={isError}
				data={data}
			/>
		</div>
	);
};

export default ProfileReviews;
