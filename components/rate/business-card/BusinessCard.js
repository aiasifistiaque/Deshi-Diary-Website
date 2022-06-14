import Link from 'next/link';
import React from 'react';
import Rating from '../rating/Rating';
import styles from './BusinessCard.module.css';

const data = {
	name: 'Madchef Uttara',
	img: '/test/shop.png',
	address:
		'Plot 16, Sector 11, Gareeb-e-Nawaz Avenue, Uttara, Dhaka 1230, Bangladesh',
	website: 'https://thinkcrypt.io',
	rating: 3,
	category: 'Restaurant',
};

const BusinessCard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img src={data.img} alt='..' />
			</div>
			<div className={styles.description}>
				<div>
					<div className={styles.tag}>
						<p>{data.category}</p>
					</div>
				</div>
				<Link href='/b/1'>
					<h5>{data.name}</h5>
				</Link>
				<Rating rating={data.rating} size={14} />
				<p>{data.address}</p>
				<a href={data.website}>View Website</a>
			</div>
		</div>
	);
};

export default BusinessCard;
