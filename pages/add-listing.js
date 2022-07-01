import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AddListing from '../components/pages/AddListing';
import useAuth from '../hooks/useAuth';

const Addlistingpage = () => {
	const { isLoggedIn, loading } = useAuth();
	const router = useRouter();
	useEffect(() => {
		if (!loading) {
			if (!isLoggedIn) {
				router.push('/login');
			}
		}
	}, [loading]);

	if (!loading && isLoggedIn) return <AddListing />;
	return null;
};

export default Addlistingpage;
