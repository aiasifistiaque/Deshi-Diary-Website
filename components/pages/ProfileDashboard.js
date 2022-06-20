import React from 'react';
import Page from '../nav/page/Page';
import ProfileContainer from '../profile/profile-page/ProfileContainer';
import { SectionItem } from '../util/section/Section';

const data = {
	name: 'John Doe',
	email: 'johndoe@gmail.com',
	phone: '01828392428',
	reviews: 12,
	points: 162,
	badges: 3,
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
};

const ProfileDashboard = () => {
	return (
		<Page>
			<ProfileContainer select='overview' title='Profile Overview'>
				<SectionItem title='Name'>{data.name}</SectionItem>
				<SectionItem title='Email'>{data.email}</SectionItem>
				<SectionItem title='Phone'>{data.phone}</SectionItem>
				<SectionItem title='Description'>{data.description}</SectionItem>
				<SectionItem title='Reviews'>{data.reviews}</SectionItem>
				<SectionItem title='Badges'>{data.badges}</SectionItem>
				<SectionItem title='Points'>{data.points}</SectionItem>
			</ProfileContainer>
		</Page>
	);
};

export default ProfileDashboard;
