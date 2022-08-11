import React from 'react';
import styles from './BadgeSection.module.css';
import * as lib from '../../../lib/constants';

const BadgeSection = ({ data, text }) => {
	return (
		<div className={styles.container}>
			{data &&
				data.map((item, i) => (
					<div className={styles.item} key={i}>
						<div className={styles.image}>
							<img
								src={
									item?.badge?.image ? item.badge.image : lib.placeholders.badge
								}
								alt='x'
							/>
						</div>

						{text ? null : (
							<div className={styles.text}>
								<h6>{item.badge?.name && item.badge.name}</h6>
							</div>
						)}
					</div>
				))}
		</div>
	);
};

export default BadgeSection;
