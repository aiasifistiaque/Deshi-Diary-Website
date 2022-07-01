import React from 'react';
import styles from './StarRate.module.css';

const StarRate = ({ rating, setRating, label, pointer }) => {
	const starPrimary = '/icons/star-primary.png';
	const starBlank = '/icons/star-blank.png';
	return (
		<div className={styles.rate}>
			<label>{label}</label>

			<div className={styles.stars}>
				<div className={styles.star} onClick={() => setRating(1)}>
					<img src={rating >= 1 ? starPrimary : starBlank} />
				</div>
				<div className={styles.star} onClick={() => setRating(2)}>
					<img src={rating >= 2 ? starPrimary : starBlank} />
				</div>
				<div className={styles.star} onClick={() => setRating(3)}>
					<img src={rating >= 3 ? starPrimary : starBlank} />
				</div>
				<div className={styles.star} onClick={() => setRating(4)}>
					<img src={rating >= 4 ? starPrimary : starBlank} />
				</div>
				<div className={styles.star} onClick={() => setRating(5)}>
					<img src={rating >= 5 ? starPrimary : starBlank} />
				</div>
				{pointer && (
					<div className={styles.label}>
						<p>Click to rate</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default StarRate;
