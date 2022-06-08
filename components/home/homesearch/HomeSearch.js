import React from 'react';
import styles from './HomeSearch.module.css';

const HomeSearch = ({ value, onChange }) => {
	return (
		<div className={styles.container}>
			<div className={styles.area}>
				<img src='/icons/location.png' />
				<p>Dhaka</p>
			</div>
			<div className={styles.input}>
				<input
					type='text'
					placeholder='Search Here..eg Gyms, Locksmiths etc'
					value={value}
					onChange={e => onChange(e.target.value)}
					//onKeyPress={onKeyPress}
				/>
			</div>
			<div className={styles.btn}>
				<img src='/icons/search.png' />
			</div>
		</div>
	);
};

export default HomeSearch;
