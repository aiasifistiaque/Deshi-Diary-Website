import React from 'react';
import styles from './NameCard.module.css';

const NameCard = ({ name, email }) => {
	return (
		<div className={styles.container}>
			<h6>{name}</h6>
			<p>{email}</p>
		</div>
	);
};

export default NameCard;
