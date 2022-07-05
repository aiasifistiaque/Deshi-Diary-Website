import React from 'react';
import Page from '../nav/page/Page';
import BadgeSection from '../profile/profile-badges/BadgeSection';
import UserContainer from '../profile/profile-page/UserContainer';

const data = [
	{ name: 'Badge 1', src: '/test/badge1.png' },
	{ name: 'Badge 2', src: '/test/badge2.png' },
	{ name: 'Badge 3', src: '/test/badge3.png' },
	{ name: 'Badge 4', src: '/test/badge4.png' },
];

const UserBadges = ({ doc }) => {
	return (
		<Page>
			<UserContainer select='badges' title='Received Badges' doc={doc}>
				<BadgeSection data={data} />
			</UserContainer>
		</Page>
	);
};

export default UserBadges;
