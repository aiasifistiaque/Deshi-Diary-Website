import React from 'react';
import styles from './HomeSection.module.css';

const HomeSection = ({ title, children }) => {
	return (
		<div className={styles.container}>
			{title && (
				<div className={styles.title}>
					<h5>{title}</h5>
				</div>
			)}
			{children}
		</div>
	);
};

export default HomeSection;
