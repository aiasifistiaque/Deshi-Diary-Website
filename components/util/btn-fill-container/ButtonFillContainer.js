import React from 'react';
import styles from './ButtonFillContainer.module.css';

const ButtonFillContainer = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default ButtonFillContainer;
