import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import UserBadges from '../../components/pages/UserBadges';
import UserReviews from '../../components/pages/UserReviews';
import { useGetUserDataQuery } from '../../store/services/apiService';

const Userpage = () => {
	const router = useRouter();
	const { option, user } = router.query;
	const doc = useGetUserDataQuery(user);

	useEffect(() => {
		if (!doc.isFetching && doc.data) {
			doc?.data?.viewer &&
				doc.data.viewer == 'self' &&
				router.replace('/profile/overview');
		}
	}, [doc.isFetching]);

	if (option == 'reviews') return <UserReviews doc={doc} />;
	else if (option == 'badges') return <UserBadges doc={doc} />;

	return <UserReviews doc={doc} />;
};

export default Userpage;
