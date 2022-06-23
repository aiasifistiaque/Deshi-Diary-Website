import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { TOKEN_NAME } from '../lib/constants';

const useAuth = () => {
	const [loading, setLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState();
	const [authToken, setAuthToken] = useState('');
	const router = useRouter();

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem(TOKEN_NAME));

		if (token != null) {
			setAuthToken(() => token);
			setIsLoggedIn(() => true);
		} else {
			setIsLoggedIn(() => false);
		}
		setLoading(() => false);
	}, []);

	return { loading, isLoggedIn, token: authToken };
};

export default useAuth;
