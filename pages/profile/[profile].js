import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import ProfileActivities from '../../components/pages/ProfileActivities';
import ProfileBadges from '../../components/pages/ProfileBadges';
import ProfileDashboard from '../../components/pages/ProfileDashboard';
import ProfileManage from '../../components/pages/ProfileManage';
import ProfileReviews from '../../components/pages/ProfileReviews';
import useAuth from '../../hooks/useAuth';

const Profilepage = () => {
	const router = useRouter();
	const { profile } = router.query;
	const { loading, isLoggedIn } = useAuth();

	useEffect(() => {
		if (!loading && !isLoggedIn) router.replace('/login');
	}, [loading]);

	if (isLoggedIn && profile == 'dasboard') return <ProfileDashboard />;
	else if (profile == 'manage-profile') return <ProfileManage />;
	else if (profile == 'activities') return <ProfileActivities />;
	else if (profile == 'reviews') return <ProfileReviews />;
	else if (profile == 'badges') return <ProfileBadges />;

	return <ProfileDashboard />;
};

export default Profilepage;
