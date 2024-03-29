import Link from 'next/link';
import React from 'react';
import styles from './HomeCategories.module.css';

const data = [
	{ name: 'Hotels', icon: 'hotels' },
	{ name: 'Home Services', icon: 'homeservices' },
	{ name: 'Restaurants', icon: 'restaurents' },
	{ name: 'Beauty & Spa', icon: 'beauty' },
	{ name: 'Professionals', icon: 'professionals' },
	{ name: 'Pet Care', icon: 'petcare' },
	{ name: 'Gym', icon: 'gym' },
	{ name: 'Coffee & Tea', icon: 'coffee' },
];

const HomeCategories = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h6>Categories</h6>
			</div>

			<div className={styles.cards}>
				{data.map((item, i) => (
					<Link key={i} href={`/search?category=${item.name}`}>
						<div className={styles.card}>
							<img src={`/icons/${item.icon}.png`} alt={item.name} />
							<p>{item.name}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default HomeCategories;
