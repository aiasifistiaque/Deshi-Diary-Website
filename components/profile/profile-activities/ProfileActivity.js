import React from 'react';
import styles from './ProfileActivities.module.css';

const ProfileActivity = ({ data, user }) => {
	return (
		<div className={styles.container}>
			{data.map((item, i) => (
				<div
					className={`${styles.item} ${i < data.length - 1 && styles.border}`}
					key={i}>
					<p>{`${user.name} ${item.details} ${item.place}`}</p>
					<div className={styles.date}>
						<p>{item.date && item.date}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProfileActivity;
