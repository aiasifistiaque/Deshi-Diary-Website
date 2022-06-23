import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import AuthSideImage from '../image/AuthSideImage';
import styles from './AuthConntainer.module.css';

const AuthContainer = ({ children }) => {
	const { loading, isLoggedIn } = useAuth();
	const router = useRouter();
	useEffect(() => {
		!loading && isLoggedIn && router.replace('/');
	}, [loading]);
	if (loading || isLoggedIn) return null;

	return (
		<div className={styles.container}>
			<AuthSideImage />
			{children}
		</div>
	);
};

export default AuthContainer;
