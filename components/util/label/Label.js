import React from 'react';
import styles from './Label.module.css';

const Label = ({ children }) => {
	return (
		<div className={styles.container}>
			<label>{children}</label>
		</div>
	);
};

export default Label;
