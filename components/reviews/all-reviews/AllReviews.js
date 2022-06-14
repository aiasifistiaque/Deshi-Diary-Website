import React, { useState } from 'react';
import ListingReview from '../../listing/listing-reviews/ListingReviews';
import Input from '../../util/input/Input';
import styles from './AllReviews.module.css';

const data = [
	{
		user: {
			name: 'Asif Hossain',
			img: '/test/u3.jpg',
		},
		date: '14 days ago',
		title: 'Great Place, Great Food!',
		comments: [],
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
	},

	{
		user: {
			name: 'Ayesha Aziz',
			img: '/test/u1.jpg',
		},
		title: 'Great Place, Great Food!',
		comments: [],

		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		date: '2 days ago',
	},
	{
		user: {
			name: 'Asif Hossain',
			img: '/test/u2.jpg',
		},
		date: '14 days ago',
		title: 'Great Place, Great Food!',
		comments: [],

		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
	},
];

const filter = [
	{ name: 'Most Recent', _id: 'recent' },
	{ name: 'Most Trending', _id: 'trending' },
	{ name: 'Oldest', _id: 'oldest' },
];

const AllReviews = () => {
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

			{data.length > 0 &&
				data.map((review, i) => <ListingReview fill key={i} review={review} />)}
		</div>
	);
};

export default AllReviews;
