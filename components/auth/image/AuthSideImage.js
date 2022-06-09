import React from 'react';
import styles from './AuthSideImage.module.css';

const AuthSideImage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img src='/auth.png' alt='alt' />
			</div>
			<div className={styles.text}>
				<h3>Discover Nearby Places. Rate Busineses. Stay Informed</h3>
			</div>
		</div>
	);
};

export default AuthSideImage;
