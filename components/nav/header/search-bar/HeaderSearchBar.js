import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	useGetSearchQuery,
	useGetTopSearchQuery,
} from '../../../../store/services/apiService';
import { expand } from '../../../../store/slices/toggledSlice';

import styles from './HeaderSearchBar.module.css';

const HeaderSearchBar = ({ focus, setFocus }) => {
	const [str, setStr] = useState('');
	const inputRef = useRef(null);
	//const [focus, setFocus] = useState(false);

	//

	const inputClicked = () => {
		setFocus(true);
	};

	useEffect(() => {
		inputRef?.current?.addEventListener('focus', inputClicked);
		//inputRef?.current?.addEventListener('blur', outOfFocus);

		return () => {
			inputRef?.current?.removeEventListener('focus', inputClicked);
			//inputRef?.current?.removeEventListener('blur', outOfFocus);
		};
	}, []);

	const dispatch = useDispatch();
	const router = useRouter();

	const onSubmit = e => {
		e.preventDefault();
		if (str.length > 0) router.push(`/search?category=All&search=${str}`);
	};

	return (
		<div className={`${styles.container}`}>
			<div className={styles.navItems}>
				<form onSubmit={onSubmit}>
					<div
						className={focus ? styles.focused : styles.search}
						onClick={e => {
							dispatch(expand());
							e.stopPropagation();
						}}>
						<input
							ref={inputRef}
							value={str}
							onChange={e => setStr(e.target.value)}
							placeholder={'What are you looking for?'}
						/>

						<Results str={str} focus={focus} />
					</div>
				</form>
			</div>
		</div>
	);
};

const Results = ({ str, focus }) => {
	const { data, isFetching, isError, error } = useGetTopSearchQuery('All');

	const search = useGetSearchQuery({ str, location: 'All' });

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

	if (!focus) return null;

	return (
		<div className={styles.items}>
			<div className={styles.title}>
				{result ? <h6>Search Results</h6> : <h6>Popular Places</h6>}
			</div>

			{result ? (
				search?.data?.docsInPage == 0 ? (
					<NotFound />
				) : (
					search.data?.doc &&
					search.data.doc.map((item, i) => (
						<Item
							key={i}
							item={item}
							border={i < search.data.docsInPage - 1 ? true : false}
						/>
					))
				)
			) : !isFetching && data?.doc && data.doc.length > 0 ? (
				data.doc.map((item, i) => (
					<Item
						key={i}
						item={item}
						i={i}
						border={i < search.data.docsInPage - 1 ? true : false}
					/>
				))
			) : (
				<NotFound />
			)}
		</div>
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

const NotFound = ({ item, i, border }) => {
	return (
		<div style={{ margin: '.5rem 1rem' }}>
			<p style={{ fontSize: 14 }}>No Results Found</p>
		</div>
	);
};

export default HeaderSearchBar;
