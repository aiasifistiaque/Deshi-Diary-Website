import React from 'react';
import Page from '../nav/page/Page';
import BusinessCard from '../rate/business-card/BusinessCard';
import AllReviews from '../reviews/all-reviews/AllReviews';
import Section from '../util/section/Section';

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

const ReviewsPage = ({ query }) => {
	return (
		<Page>
			<Section top>
				<BusinessCard query={query} />
			</Section>
			<Section>
				<AllReviews data={data} query={query} />
			</Section>
		</Page>
	);
};

export default ReviewsPage;
