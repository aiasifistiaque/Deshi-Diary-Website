import Link from 'next/link';
import React, { useState } from 'react';
import { Placeholder } from 'semantic-ui-react';
import { useGetActivitiesQuery } from '../../../store/services/apiService';
import BusinessCard from '../../rate/business-card/BusinessCard';
import Review from '../review/Review';
import styles from './Activities.module.css';

const Activities = ({ page, setPage }) => {
	const { data, isFetching, isLoading, error, isError } =
		useGetActivitiesQuery(page);

	return (
		<div className={styles.cards}>
			{isFetching || isError ? (
				<PlaceHolder />
			) : (
				data?.doc?.map((item, i) => (
					<div className={styles.card} key={i}>
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
						<div className={styles.main}>
							{item.type == 'listing' &&
								item.listing?.images &&
								item.listing.images.length > 0 && (
									<div className={styles.images}>
										<div className={styles.left}>
											<img src={item.listing.images[0].src} alt='img' />
										</div>
										{item.listing.images.length > 1 && (
											<div
												className={
													item.listing.images.length > 2
														? styles.smallRight
														: styles.right
												}>
												<img src={item.listing.images[1].src} alt='img' />
												{item.listing.images.length > 2 && (
													<img src={item.listing.images[2].src} alt='img' />
												)}
											</div>
										)}
									</div>
								)}
							{item.type == 'review' && (
								<div className={styles.listingActivity}>
									<div className={styles.left}>
										<Review
											review={item.rating}
											listing={item.listing}
											user={item.user}
										/>
									</div>
								</div>
							)}
							<div className={styles.right}>
								<BusinessCard
									home
									query={item?.listing?._id && item.listing._id}
								/>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	);
};

const PlaceHolder = () => {
	return (
		<div style={{ margin: '2rem 0' }}>
			<Placeholder>
				<Placeholder.Header>
					<Placeholder.Line length='full' />
				</Placeholder.Header>

				<Placeholder.Header image>
					<Placeholder.Line length='medium' />
					<Placeholder.Line length='full' />
				</Placeholder.Header>
				<Placeholder.Paragraph>
					<Placeholder.Line length='full' />
					<Placeholder.Line length='medium' />
				</Placeholder.Paragraph>
				<Placeholder.Paragraph>
					<Placeholder.Line length='full' />
					<Placeholder.Line length='medium' />
					<Placeholder.Line length='full' />
					<Placeholder.Line length='medium' />
					<Placeholder.Line length='full' />
					<Placeholder.Line length='medium' />
				</Placeholder.Paragraph>
			</Placeholder>
		</div>
	);
};

export default Activities;
