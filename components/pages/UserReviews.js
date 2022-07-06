import { useRouter } from 'next/router';
import React from 'react';
import Page from '../nav/page/Page';
import UserContainer from '../profile/profile-page/UserContainer';
import ProfileReviews from '../reviews/all-reviews/ProfileReviews';

const UserReviews = ({ doc }) => {
	const router = useRouter();
	const { user } = router.query;
	return (
		<Page>
			<UserContainer select='reviews' doc={doc}>
				<ProfileReviews query={user} />
			</UserContainer>
		</Page>
	);
};

export default UserReviews;
