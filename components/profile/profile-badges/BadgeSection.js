import React from 'react';
import styles from './BadgeSection.module.css';

const BadgeSection = ({ data }) => {
	return (
		<div className={styles.container}>
			{data &&
				data.map((item, i) => (
					<div className={styles.item} key={i}>
						<div className={styles.image}>
							<img src={item.src} alt='x' />
						</div>
						<div className={styles.text}>
							<h6>{item.name}</h6>
						</div>
					</div>
				))}
		</div>
	);
};

export default BadgeSection;
