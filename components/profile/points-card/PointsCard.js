import React from 'react';
import styles from './PointsCard.module.css';

const PointsCard = ({ data }) => {
	return (
		<div className={styles.container}>
			{data &&
				data.map((item, i) => (
					<div className={styles.item} key={i}>
						<div className={styles.itemInside}>
							<div
								className={`${styles.type} ${
									i < data.length - 1 && styles.border
								}`}>
								<h6>{item.type}</h6>
							</div>
							<div className={styles.value}>
								<p>{item.value}</p>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default PointsCard;
