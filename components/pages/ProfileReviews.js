import React from 'react';
import Page from '../nav/page/Page';
import ProfileActivity from '../profile/profile-activities/ProfileActivity';
import ProfileContainer from '../profile/profile-page/ProfileContainer';
import ProfileReview from '../reviews/all-reviews/ProfileReviews';

const ProfileReviews = () => {
	return (
		<Page>
			<ProfileContainer select='reviews'>
				<ProfileReview query='self' />
			</ProfileContainer>
		</Page>
	);
};

export default ProfileReviews;
