import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
	useGetListingsQuery,
	useGetSearchQuery,
	useGetTopSearchQuery,
} from '../../../store/services/apiService';
import styles from './HomeSearch.module.css';
import * as lib from '../../../lib/constants';

const InitialResult = ({
	str,
	locationSelect,
	setLocationSelect,
	setLocation,
	location,
}) => {
	const { data, isFetching, isError, error } = useGetTopSearchQuery(location);
	const search = useGetSearchQuery({ str, location });
	const [result, setResult] = useState(false);

	useEffect(() => {
		if (!str) {
			setResult(false);
		} else if (str == 'undefined' || str.length < 1) {
			setResult(false);
		} else if (search.data && search.data.doc) {
			setResult(true);
		}
	}, [str]);

	if (isFetching || isError || !data) return null;
	if (locationSelect)
		return (
			<>
				<div className={styles.title}>
					<h6>Choose Location</h6>
				</div>
				<div className={styles.items}>
					{lib.data.divisions.map((item, i) => (
						<LocationItem
							key={i}
							onClick={() => {
								setLocation(item);
								setLocationSelect(false);
							}}
							item={item}
							border={i < search.data.docsInPage - 1 ? true : false}
						/>
					))}
				</div>
			</>
		);
	return (
		<>
			<div className={styles.title}>
				{result ? (
					<h6>Results: {search?.data && search.data.docsInPage}</h6>
				) : (
					<h6>Popular Places</h6>
				)}
			</div>
			<div className={styles.items}>
				{result ? (
					search.data &&
					search.data.docsInPage &&
					search.data.docsInPage == 0 ? (
						<NotFound />
					) : (
						search.data?.doc &&
						search.data.doc.map((item, i) => (
							<Item
								item={item}
								key={i}
								border={
									i <
									(search?.data?.docsInPage ? search.data.docsInPage : 0) - 1
										? true
										: false
								}
							/>
						))
					)
				) : !isFetching && data?.doc && data.doc.length > 0 ? (
					data.doc.map((item, i) => (
						<Item
							item={item}
							key={i}
							i={i}
							border={
								i < (search?.data?.docsInPage ? search.data.docsInPage : 0) - 1
									? true
									: false
							}
						/>
					))
				) : (
					<NotFound />
				)}
			</div>
		</>
	);
};

const Item = ({ item, i, border }) => {
	return (
		<Link href={`/b/${item._id}`}>
			<div className={styles.item} key={i}>
				<div
					className={styles.itemInner}
					style={{ ...(!border && { borderBottom: 'none' }) }}>
					<div className={styles.image}>
						<img src='/icons/location-black.png' alt='loc' />
					</div>
					<div className={styles.text}>
						<h6>{item.name && item.name}</h6>
						<p>
							{item.city && item.city}, {item.division && item.division}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

const LocationItem = ({ item, i, border, onClick }) => {
	return (
		<div className={styles.item} key={i} onClick={onClick}>
			<div
				className={styles.itemInner}
				style={{ ...(!border && { borderBottom: 'none' }) }}>
				<div className={styles.image}>
					<img src='/icons/location-black.png' alt='loc' />
				</div>
				<div className={styles.text}>
					<h6>{item.name && item.name}</h6>
				</div>
			</div>
		</div>
	);
};

const NotFound = ({ item, i, border }) => {
	return (
		<div style={{ margin: '.5rem 1rem' }}>
			<p style={{ fontSize: 14 }}>No Results Found</p>
		</div>
	);
};

export default InitialResult;
