import React from 'react';
import Link from 'next/link';
import { useGetSearchQuery } from '../../../store/services/apiService';
import styles from './HomeSearch.module.css';

const SearchResult = ({ str }) => {
	const { data, isFetching, isError, error } = useGetSearchQuery(str);

	if (isFetching || isError || !data) return null;
	return (
		<>
			<div className={styles.title}>
				<h6>Popular Places</h6>
			</div>
			<div className={styles.items}>
				{data &&
					data?.doc &&
					data.doc.map(
						(item, i) =>
							i < 5 && (
								<Link href={`/b/${item._id}`}>
									<div className={styles.item} key={i}>
										<div
											className={styles.itemInner}
											style={{ ...(i === 4 && { borderBottom: 'none' }) }}>
											<div className={styles.image}>
												<img src='/icons/location-black.png' alt='loc' />
											</div>
											<div className={styles.text}>
												<h6>{item?.name && item.name}</h6>
												<p>{item?.city && item.city}</p>
											</div>
										</div>
									</div>
								</Link>
							)
					)}
			</div>
		</>
	);
};

export default SearchResult;
