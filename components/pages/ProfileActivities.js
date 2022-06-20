import React from 'react';
import Page from '../nav/page/Page';
import ProfileActivity from '../profile/profile-activities/ProfileActivity';
import ProfileContainer from '../profile/profile-page/ProfileContainer';

const data = {
	name: 'John Doe',
	image: '/test/u3.jpg',
	email: 'johndoe@gmail.com',
	phone: '01828392428',
	reviews: 12,
	points: 162,
	badges: 3,
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
};

const dat = [
	{
		type: 'photos',
		details: 'posted photos of',
		place: 'Sayeman Beach Resort',
		images: ['/test/r1.jpg', '/test/r2.jpg', '/test/r3.jpg'],
		date: '2 days ago',
	},
	{
		type: 'review',
		details: 'posted a review on',
		place: 'Burger King',
		date: '4 days ago',

		review: {
			title: 'Great Place, Great Food!',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		},
	},
	{
		type: 'review',
		details: 'posted a review on',
		place: 'Gadget Tomorrow',
		images: ['/test/r4.jpg', '/test/r5.jpg'],
		date: '14 days ago',

		review: {
			title: 'Great Place, Great Food!',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		},
	},
	{
		type: 'review',
		details: 'posted a review on',
		place: 'Gadget Tomorrow',
		images: ['/test/r4.jpg', '/test/r5.jpg'],
		date: '22 days ago',

		review: {
			title: 'Great Place, Great Food!',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		},
	},
	{
		type: 'commented',
		details: 'commented on a post by',
		place: 'Jane Doe',
		images: ['/test/r4.jpg', '/test/r5.jpg'],
		date: '22 days ago',

		review: {
			date: '22 days ago',
			title: 'Great Place, Great Food!',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		},
	},
];

const ProfileActivities = () => {
	return (
		<Page>
			<ProfileContainer select='activities' title='Your Activities'>
				<ProfileActivity data={dat} user={data} />
			</ProfileContainer>
		</Page>
	);
};

export default ProfileActivities;
