import React from 'react';
import styles from './ViewMore.module.css';

const ViewMore = ({ onClick }) => {
	return (
		<div className={styles.container}>
			<div className={styles.btn} onClick={onClick}>
				<p>View More</p>
				<img src='/icons/downarrow.png' />
			</div>
		</div>
	);
};

export default ViewMore;
