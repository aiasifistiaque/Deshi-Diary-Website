import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useGetActivitiesQuery } from '../../../store/services/apiService';
import styles from './ActivitiesCard.module.css';
import * as lib from '../../../lib/constants';
import Rating from '../../rate/rating/Rating';
import BusinessCard from '../../rate/business-card/BusinessCard';

const ActivitiesCard = ({ page, setPage }) => {
	const { data, isFetching, isLoading, error, isError } =
		useGetActivitiesQuery(page);

	const [visual, setVisual] = useState([]);
	const modular = 12 % 3;

	useEffect(() => {
		if (!isFetching && data && data.doc) {
			if (page == 1) {
				setVisual(data.doc);
			} else if (page > 1) {
				let arr = [...visual, ...data.doc];
				setVisual(arr);
			}
		}
		console.log(visual);
	}, [page, isFetching]);

	if (isLoading || isError || !data) return null;

	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				{/* <h1>{modular}</h1> */}

				<div className={styles.cardOne}>
					{visual &&
						visual.map(
							(item, i) => (i + 1) % 3 == 1 && <Cards item={item} key={i} />
						)}
				</div>
				<div className={styles.cardTwo}>
					{visual &&
						visual.map(
							(item, i) => (i + 1) % 3 == 2 && <Cards item={item} key={i} />
						)}
				</div>
				<div className={styles.cardThree}>
					{visual &&
						visual.map(
							(item, i) =>
								i % 3 != 0 && (i + 1) % 3 == 0 && <Cards item={item} key={i} />
						)}
				</div>
			</div>
		</div>
	);
};

const Cards = ({ item }) => {
	return (
		<div className={styles.card}>
			<div className={styles.title}>
				<p>
					<Link href={`/u/${item?.user?._id}`}>
						<a>{item?.user?.name && item.user.name}</a>
					</Link>
					<span style={{ margin: '0 4px' }}>
						added new {item?.type && item.type} on
					</span>
					<Link href={`/b/${item?.listing?._id && item.listing._id}`}>
						<a>{item?.listing?.name && item.listing.name}</a>
					</Link>
				</p>
			</div>
			{item.type == 'review' && (
				<Review review={item.rating} listing={item.listing} user={item.user} />
			)}

			{item.type == 'listing' && (
				<div className={styles.listingActivity}>
					<div className={styles.left}>
						<Listing listing={item.listing} user={item.user} />
					</div>
				</div>
			)}
		</div>
	);
};

const Listing = ({ listing, user }) => {
	return (
		<div className={styles.listing}>
			{listing?.images && listing.images.length > 0 && (
				<div className={styles.listingImage}>
					<img
						src={
							listing?.images?.length > 0
								? listing.images[0].src
								: lib.placeholders.image
						}
						alt='img'
					/>
				</div>
			)}
			<h6>{listing?.name && listing.name}</h6>
			<div className={styles.details}>
				<div className={styles.details}>
					<div className={styles.image}>
						<img
							src={user?.image ? user.image : lib.placeholders.profileImage}
							alt='*'
						/>
					</div>

					<div className={styles.text}>
						<Rating rating={0} />

						<div className={styles.user}>
							<Link href={`/u/${user?._id && user._id}`}>
								<p>{user?.name && user.name}</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<BusinessCard home query={listing?._id && listing._id} />
		</div>
	);
};

const Review = ({ review, user, listing }) => {
	return (
		<div className={styles.review}>
			<div className={styles.details}>
				<div className={styles.image}>
					<img
						src={user?.image ? user.image : lib.placeholders.profileImage}
						alt='*'
					/>
				</div>

				<div className={styles.text}>
					<Rating rating={review.rating} />

					<div className={styles.user}>
						<h6>{`"${review.title}"`}</h6>
						<Link href={`/u/${user._id}`}>
							<p>{user?.name && user.name}</p>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.rev}>
				<div className={styles.business}>
					<p>
						Review on{' '}
						<Link href={`/b/${listing._id}`}>
							<a>{listing?.name && listing.name}</a>
						</Link>
					</p>
				</div>

				<p>{review?.details && review.details}</p>
				<Link href={`/rating/${review._id}?listing=${listing._id}`}>
					<div className={styles.continue}>
						<p>Continue Reading</p>
					</div>
				</Link>
			</div>
		</div>
	);
};
export default ActivitiesCard;
