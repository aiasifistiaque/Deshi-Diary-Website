import React from 'react';
import styles from './ListingPhotos.module.css';

const ListingPhotos = ({ data }) => {
	return (
		<div className={styles.container}>
			{data && data.length > 0 && (
				<div className={styles.images}>
					<div className={styles.left}>
						<img src={data[0].src} alt='img' />
					</div>
					{data.length > 1 && (
						<div className={data.length > 2 ? styles.smallRight : styles.right}>
							<img src={data[1].src} alt='img' />
							{data.length > 2 && <img src={data[2].src} alt='img' />}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default ListingPhotos;
