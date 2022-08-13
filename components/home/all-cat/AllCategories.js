import Link from 'next/link';
import React from 'react';
import {
	useCategoriesCountQuery,
	useGetCategoriesQuery,
} from '../../../store/services/apiService';
import styles from './AllCategories.module.css';

const AllCategories = () => {
	const { data, isFetching, isError } = useGetCategoriesQuery();
	if (!data) return null;
	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				{data.doc.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</div>
		</div>
	);
};

const Item = ({ item }) => {
	const { data, isFetching, isError } = useCategoriesCountQuery(
		item?._id && item._id
	);
	return (
		<Link href={`/search?category=${item.name}`}>
			<div className={styles.card}>
				<img src={item?.image ? item.image : '/icons/beauty.png'} />
				<p>{item.name}</p>
				{data && <span>({data?.count && data.count})</span>}
			</div>
		</Link>
	);
};

export default AllCategories;
