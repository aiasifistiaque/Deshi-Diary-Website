import React from 'react';
import Button from '../../util/button/Button';
import styles from './BusinnessName.module.css';

const BusinessName = ({ id, name, open, rating, tags }) => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h3>{name}</h3>
				<div className={open ? styles.open : styles.closed}>
					<p>{open ? 'Open Now' : 'Closed Now'}</p>
				</div>
			</div>
			<div className={styles.tags}>
				{tags.map((tag, i) => (
					<p key={i}>
						{tag}
						{i < tags.length - 1 && ','}
					</p>
				))}
			</div>
			<div className={styles.bottom}>
				<div className={styles.rating}>
					<img
						src={
							rating >= 1 ? '/icons/star-primary.png' : '/icons/star-blank.png'
						}
						alt='*'
					/>
					<img
						src={
							rating >= 2 ? '/icons/star-primary.png' : '/icons/star-blank.png'
						}
						alt='*'
					/>
					<img
						src={
							rating >= 3 ? '/icons/star-primary.png' : '/icons/star-blank.png'
						}
						alt='*'
					/>{' '}
					<img
						src={
							rating >= 4 ? '/icons/star-primary.png' : '/icons/star-blank.png'
						}
						alt='*'
					/>{' '}
					<img
						src={
							rating >= 5 ? '/icons/star-primary.png' : '/icons/star-blank.png'
						}
						alt='*'
					/>{' '}
				</div>
				<Button small text>
					Write a review
				</Button>
			</div>
		</div>
	);
};

export default BusinessName;
