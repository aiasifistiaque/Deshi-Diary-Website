import Link from 'next/link';
import React from 'react';
import { useGetActivitiesQuery } from '../../../store/services/apiService';
import styles from './ActivitiesCard.module.css';
import * as lib from '../../../lib/constants';
import Rating from '../../rate/rating/Rating';
import BusinessCard from '../../rate/business-card/BusinessCard';

const ActivitiesCard = ({ page, setPage }) => {
	const { data, isFetching, isLoading, error, isError } =
		useGetActivitiesQuery(page);

	if (isFetching || isError || !data) return null;

	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				<div className={styles.cardOne}>
					{data?.doc &&
						data.doc.map(
							(item, i) => i % 3 == 0 && <Cards item={item} key={i} />
						)}
				</div>
				<div className={styles.cardTwo}>
					{data?.doc &&
						data.doc.map(
							(item, i) => (i + 1) % 3 == 0 && <Cards item={item} key={i} />
						)}
				</div>
				<div className={styles.cardThree}>
					{data?.doc &&
						data.doc.map(
							(item, i) =>
								i % 3 != 0 && (i + 1) % 3 != 0 && <Cards item={item} key={i} />
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
					<Link href={`/b/${item.listing._id}`}>
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
