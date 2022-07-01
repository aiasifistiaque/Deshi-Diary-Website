import React from 'react';
import { Placeholder } from 'semantic-ui-react';
import styles from './NameCard.module.css';

const NameCard = ({ name, email, isLoading }) => {
	if (isLoading) return <PlaceHolder />;
	return (
		<div className={styles.container}>
			<h6>{name}</h6>
			<p>{email}</p>
		</div>
	);
};

const PlaceHolder = () => {
	return (
		<div className={styles.container}>
			<Placeholder>
				<Placeholder.Header>
					<Placeholder.Line />
					<Placeholder.Line />
				</Placeholder.Header>
			</Placeholder>
		</div>
	);
};

export default NameCard;
