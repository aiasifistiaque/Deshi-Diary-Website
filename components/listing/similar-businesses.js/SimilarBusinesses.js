import React from 'react';
import * as lib from '../../../lib/constants';
import { useGetFilteredSearchQuery } from '../../../store/services/apiService';
import Rating from '../../rate/rating/Rating';
import styles from './SimilarBusinesses.module.css';
import Link from 'next/link';

const SimilarBusinesses = ({ id, listing }) => {
	const { data, isFetching, isLoading, isError } = useGetFilteredSearchQuery({
		category: id,
		perpage: 5,
	});

	return (
		<div className={styles.container}>
			{data?.doc?.map &&
				data.doc.map(
					(item, i) =>
						item._id != listing && (
							<Link key={i} href={`/b/${item._id}`}>
								<div className={styles.item}>
									<div className={styles.image}>
										<img
											src={
												item?.images?.length > 0
													? item.images[0].src
													: lib.placeholders.image
											}
											alt='i'
										/>
									</div>
									<div className={styles.description}>
										<h6>{item.name}</h6>
										<div className={styles.stars}>
											<Rating rating={item.rating} size={12} />
											<p>{item.reviews} Reviews</p>
										</div>
										<p>{item.phone}</p>
										<p>{item.street && item.street}</p>
										<p>
											{item.city ? item.city : item.division}{' '}
											{item.postCode && item.postCode}
										</p>
									</div>
								</div>
							</Link>
						)
				)}
		</div>
	);
};

export default SimilarBusinesses;
