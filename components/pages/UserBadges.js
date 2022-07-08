import { useRouter } from 'next/router';
import React from 'react';
import { useGetUserBadgesQuery } from '../../store/services/apiService';
import Page from '../nav/page/Page';
import BadgeSection from '../profile/profile-badges/BadgeSection';
import UserContainer from '../profile/profile-page/UserContainer';
import Blank from '../util/blank/Blank';

const data = [
	{ name: 'Badge 1', src: '/test/badge1.png' },
	{ name: 'Badge 2', src: '/test/badge2.png' },
	{ name: 'Badge 3', src: '/test/badge3.png' },
	{ name: 'Badge 4', src: '/test/badge4.png' },
];

const UserBadges = ({ doc }) => {
	const router = useRouter();
	const { user } = router.query;
	const { data, isLoading, isFetching, error, isError } =
		useGetUserBadgesQuery(user);
	return (
		<Page>
			<UserContainer select='badges' title='Received Badges' doc={doc}>
				{data?.doc && data.doc.length > 0 ? (
					<BadgeSection data={data.doc} />
				) : (
					<Blank>No Badges Received Yet</Blank>
				)}
			</UserContainer>
		</Page>
	);
};

export default UserBadges;
