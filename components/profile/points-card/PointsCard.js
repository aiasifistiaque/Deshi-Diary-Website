import React from 'react';
import { Placeholder } from 'semantic-ui-react';
import styles from './PointsCard.module.css';

const PointsCard = ({ data, isLoading }) => {
	if (isLoading) return <PlaceHolder />;
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

const PlaceHolder = () => {
	return (
		<div style={{ width: '100%' }}>
			<Placeholder>
				<Placeholder.Header>
					<Placeholder.Line />
					<Placeholder.Line />
					<Placeholder.Line />
					<Placeholder.Line />
				</Placeholder.Header>
			</Placeholder>
		</div>
	);
};

export default PointsCard;
