import React from 'react';
import Rating from '../../rate/rating/Rating';
import styles from './SearchMain.module.css';

const data = [
	{
		name: 'Madchef',
		address: '23 Gulshan Avenue, Sector 13, Block D, Gulshan, Dhaka',
		img: '/test/food3.jpg',
		category: 'restaurent',
		rating: 4,
		features: [
			'dinein',
			'take-away',
			'wifi',
			'air-conditioned',
			'delivery',
			'parkings',
			'wifi',
			'air-conditioned',
			'delivery',
			'parkings',
		],
	},
	{
		name: 'Madchef',
		address: '23 Gulshan Avenue, Sector 13, Block D, Gulshan, Dhaka',
		img: '/test/food2.jpg',
		category: 'restaurent',
		rating: 3,

		features: [
			'dinein',
			'take-away',
			'wifi',
			'air-conditioned',
			'delivery',
			'parkings',
			'wifi',
			'air-conditioned',
			'delivery',
			'parkings',
		],
	},
	{
		name: 'Madchef',
		address: '23 Gulshan Avenue, Sector 13, Block D, Gulshan, Dhaka',
		img: '/test/food1.jpg',
		category: 'restaurent',
		rating: 2,
		features: [
			'dinein',
			'take-away',
			'wifi',
			'air-conditioned',
			'delivery',
			'parkings',
			'wifi',
			'air-conditioned',
			'delivery',
			'parkings',
		],
	},
	{
		name: 'Madchef',
		address: '23 Gulshan Avenue, Sector 13, Block D, Gulshan, Dhaka',
		img: '/test/food4.jpg',
		category: 'restaurent',
		rating: 5,
		features: [
			'dinein',
			'take-away',
			'wifi',
			'air-conditioned',
			'delivery',
			'parkings',
			'wifi',
			'air-conditioned',
			'delivery',
			'parkings',
		],
	},
];

const SearchMain = () => {
	return (
		<div className={styles.container}>
			{data &&
				data.map((item, i) => (
					<div key={i} className={styles.item}>
						<div className={styles.image}>
							<img src={item.img} alt='..' />
						</div>
						<div className={styles.text}>
							<div className={styles.category}>
								<p>{item.category}</p>
							</div>
							<h6>{item.name}</h6>
							<Rating size={14} rating={item.rating} />
							<div className={styles.address}>
								<p>{item.address}</p>
							</div>
							<div className={styles.tags}>
								{item.features.map((tag, i) => (
									<div className={styles.tag} key={i}>
										<p>{tag}</p>
									</div>
								))}
							</div>
							<div className={styles.a}>
								<a>View Reviews</a>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default SearchMain;
