import React from 'react';
import AuthSideImage from '../image/AuthSideImage';
import styles from './AuthConntainer.module.css';

const AuthContainer = ({ children }) => {
	return (
		<div className={styles.container}>
			<AuthSideImage />
			{children}
		</div>
	);
};

export default AuthContainer;
