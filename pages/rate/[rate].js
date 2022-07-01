import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RatePage from '../../components/pages/RatePage';
import useAuth from '../../hooks/useAuth';

const Ratepage = () => {
	const router = useRouter();
	const { rate } = router.query;
	const { token } = useSelector(state => state.auth);
	useEffect(() => {
		if (!token) {
			router.replace('/login');
		}
	}, [token]);
	if (token) return <RatePage query={rate} />;
	return null;
};

export default Ratepage;
