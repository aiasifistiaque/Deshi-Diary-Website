import React from 'react';
import styles from './HomeSection.module.css';

const HomeSection = ({ title, children, style }) => {
	return (
		<div className={styles.container} style={style}>
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
