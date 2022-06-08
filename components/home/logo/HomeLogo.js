import React from 'react';
import styles from './HomeLogo.module.css';

const HomeLogo = () => {
	return (
		<div className={styles.container}>
			<img src='/logo.png' alt='Deshi Diary' />
		</div>
	);
};

export default HomeLogo;
