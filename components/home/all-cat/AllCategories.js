import Link from 'next/link';
import React from 'react';
import { useGetCategoriesQuery } from '../../../store/services/apiService';
import styles from './AllCategories.module.css';

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

const AllCategories = () => {
	const { data, isFetching, isError } = useGetCategoriesQuery();
	if (!data) return null;
	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				{data.doc.map((item, i) => (
					<Link key={i} href={`/search?category=${item.name}`}>
						<div className={styles.card}>
							<img src={item?.image ? item.image : '/icons/beauty.png'} />
							<p>{item.name}</p>
						</div>
					</Link>
				))}
			</div>
			{/* <ViewMore /> */}
		</div>
	);
};

export default AllCategories;
