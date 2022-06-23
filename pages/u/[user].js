import { useRouter } from 'next/router';
import React from 'react';
import UserBadges from '../../components/pages/UserBadges';
import UserReviews from '../../components/pages/UserReviews';

const Userpage = () => {
	const router = useRouter();
	const { user } = router.query;
	if (user == 'reviews') return <UserReviews />;
	else if (user == 'badges') return <UserBadges />;

	return <UserReviews />;
};

export default Userpage;
