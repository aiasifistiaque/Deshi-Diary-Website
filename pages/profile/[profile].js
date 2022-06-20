import { useRouter } from 'next/router';
import React from 'react';
import ProfileActivities from '../../components/pages/ProfileActivities';
import ProfileDashboard from '../../components/pages/ProfileDashboard';
import ProfileManage from '../../components/pages/ProfileManage';
import ProfileReviews from '../../components/pages/ProfileReviews';

const Profilepage = () => {
	const router = useRouter();
	const { profile } = router.query;
	if (profile == 'dasboard') return <ProfileDashboard />;
	else if (profile == 'manage-profile') return <ProfileManage />;
	else if (profile == 'activities') return <ProfileActivities />;
	else if (profile == 'reviews') return <ProfileReviews />;

	return <ProfileDashboard />;
};

export default Profilepage;
