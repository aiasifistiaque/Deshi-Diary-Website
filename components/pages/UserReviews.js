import React from 'react';
import Page from '../nav/page/Page';
import UserContainer from '../profile/profile-page/UserContainer';
import AllReviews from '../reviews/all-reviews/AllReviews';

const data = [
	{
		user: {
			name: 'July Doe',
			img: '/test/u1.jpg',
		},
		date: '14 days ago',
		title: 'Great Place, Great Food!',
		comments: [],
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
	},

	{
		user: {
			name: 'July Doe',
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
			name: 'July Doe',
			img: '/test/u1.jpg',
		},
		date: '14 days ago',
		title: 'Great Place, Great Food!',
		comments: [],

		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
	},
];

const UserReviews = () => {
	return (
		<Page>
			<UserContainer select='reviews'>
				<AllReviews data={data} />
			</UserContainer>
		</Page>
	);
};

export default UserReviews;
