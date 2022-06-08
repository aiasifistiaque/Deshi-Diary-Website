import React from 'react';
import ViewMore from '../morebutton/ViewMore';
import styles from './HomeCategories.module.css';

const data = [
	{ name: 'Hotels', icon: 'hotels' },
	{ name: 'Home Services', icon: 'homeservices' },
	{ name: 'Restaurents', icon: 'restaurents' },
	{ name: 'Beauth & Spa', icon: 'beauty' },
	{ name: 'Professionals', icon: 'professionals' },
	{ name: 'Pet Care', icon: 'petcare' },
	{ name: 'Gym', icon: 'gym' },
	{ name: 'Coffee & Tea', icon: 'coffee' },
];

const HomeCategories = () => {
	return (
		<div className={styles.container}>
			<h6>Categories</h6>
			<div className={styles.cards}>
				{data.map((item, i) => (
					<div className={styles.card} key={i}>
						<img src={`/icons/${item.icon}.png`} alt={item.name} />
						<p>{item.name}</p>
					</div>
				))}
			</div>
			<ViewMore />
		</div>
	);
};

export default HomeCategories;
