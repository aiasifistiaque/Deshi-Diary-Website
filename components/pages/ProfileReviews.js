import React from 'react';
import Page from '../nav/page/Page';
import ProfileActivity from '../profile/profile-activities/ProfileActivity';
import ProfileContainer from '../profile/profile-page/ProfileContainer';
import AllReviews from '../reviews/all-reviews/AllReviews';

const data = [
	{
		user: {
			name: 'John Doe',
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
			name: 'John Doe',
			img: '/test/u3.jpg',
		},
		title: 'Great Place, Great Food!',
		comments: [],

		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		date: '2 days ago',
	},
	{
		user: {
			name: 'John Doe',
			img: '/test/u3.jpg',
		},
		date: '14 days ago',
		title: 'Great Place, Great Food!',
		comments: [],

		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
	},
];

const ProfileReviews = () => {
	return (
		<Page>
			<ProfileContainer select='reviews'>
				<AllReviews data={data} />
			</ProfileContainer>
		</Page>
	);
};

export default ProfileReviews;
