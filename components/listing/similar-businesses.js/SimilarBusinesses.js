import React from 'react';
import * as lib from '../../../lib/constants';
import styles from './SimilarBusinesses.module.css';

const data = [
	{
		title: 'Leisure',
		img: lib.placeholders.image,
		rating: 2.9,
		name: 'Flavors',
		reviews: 108,
		distance: '2.4km',
		address: 'Apt. 02, House 42, Road 84, Gulshan 2, Dhaka 1208',
	},
	{
		title: 'Restaurents',
		img: lib.placeholders.image,
		rating: 3.4,
		name: 'Panda Dumplings',
		reviews: 108,
		distance: '2.4km',
		address: 'Apt. 02, House 42, Road 84, Gulshan 2, Dhaka 1208',
	},
	{
		title: 'Hotel',
		img: lib.placeholders.image,
		rating: 4.5,
		name: 'Burger King',
		reviews: 108,
		distance: '2.4km',
		address: 'Apt. 02, House 42, Road 84, Gulshan 2, Dhaka 1208',
		phone: '+88 0182 8920 929',
	},
	{
		title: 'Leisure',
		img: lib.placeholders.image,
		rating: 2.9,
		name: 'Madchef Uttara',
		reviews: 108,
		distance: '2.4km',
		address: 'Apt. 02, House 42, Road 84, Gulshan 2, Dhaka 1208',
	},
];

const SimilarBusinesses = () => {
	return (
		<div className={styles.container}>
			{data.map((item, i) => (
				<div key={i} className={styles.item}>
					<div className={styles.image}>
						<img src={item.img} alt='i' />
					</div>
					<div className={styles.description}>
						<h6>{item.name}</h6>
						<div className={styles.stars}>
							<img
								src={`/icons/${
									item.rating >= 1 ? 'star-secondary' : 'star-blank'
								}.png`}
								alt='*'
							/>
							<img
								src={`/icons/${
									item.rating >= 2 ? 'star-secondary' : 'star-blank'
								}.png`}
								alt='*'
							/>
							<img
								src={`/icons/${
									item.rating >= 3 ? 'star-secondary' : 'star-blank'
								}.png`}
								alt='*'
							/>
							<img
								src={`/icons/${
									item.rating >= 4 ? 'star-secondary' : 'star-blank'
								}.png`}
								alt='*'
							/>
							<img
								src={`/icons/${
									item.rating >= 5 ? 'star-secondary' : 'star-blank'
								}.png`}
								alt='*'
							/>
							<p>{item.reviews} Reviews</p>
						</div>
						<p>{item.phone}</p>
						<p>{item.address}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default SimilarBusinesses;
