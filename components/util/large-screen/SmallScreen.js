import React from 'react';
import styles from './LargeScreen.module.css';

const SmallScreen = ({ children }) => {
	return <div className={styles.small}>{children}</div>;
};

export default SmallScreen;
