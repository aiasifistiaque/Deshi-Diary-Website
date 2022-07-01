import React from 'react';
import styles from './LargeScreen.module.css';

const LargeScreen = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default LargeScreen;
