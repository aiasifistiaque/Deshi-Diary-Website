import React from 'react';
import styles from './Blank.module.css';

const Blank = ({ children }) => {
	return (
		<div className={styles.container}>
			<h6>{children}</h6>
		</div>
	);
};

export default Blank;
