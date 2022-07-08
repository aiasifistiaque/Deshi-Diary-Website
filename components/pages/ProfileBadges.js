import React from 'react';
import { useGetUserBadgesQuery } from '../../store/services/apiService';
import Page from '../nav/page/Page';
import BadgeSection from '../profile/profile-badges/BadgeSection';
import ProfileContainer from '../profile/profile-page/ProfileContainer';

const data = [
	{ name: 'Badge 1', src: '/test/badge1.png' },
	{ name: 'Badge 2', src: '/test/badge2.png' },
	{ name: 'Badge 3', src: '/test/badge3.png' },
	{ name: 'Badge 4', src: '/test/badge4.png' },
	{ name: 'Badge 5', src: '/test/badge5.png' },
	{ name: 'Badge 6', src: '/test/badge6.png' },
	{ name: 'Badge 7', src: '/test/badge7.png' },
	{ name: 'Badge 8', src: '/test/badge8.png' },
	{ name: 'Badge 9', src: '/test/badge9.png' },
	{ name: 'Badge 10', src: '/test/badge10.png' },
];

const ProfileBadges = () => {
	const { data, isLoading, isFetching, error, isError } =
		useGetUserBadgesQuery('self');
	return (
		<Page>
			<ProfileContainer select='badges' title='Received Badges'>
				{data?.doc && <BadgeSection data={data.doc} />}
			</ProfileContainer>
		</Page>
	);
};

export default ProfileBadges;
