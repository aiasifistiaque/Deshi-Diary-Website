import Link from 'next/link';
import React, { useState } from 'react';
import { useGetActivitiesQuery } from '../../../store/services/apiService';
import BusinessCard from '../../rate/business-card/BusinessCard';
import { SectionInput } from '../../util/section/Section';
import ViewMore from '../morebutton/ViewMore';
import Review from '../review/Review';
import HomeSection from '../section/HomeSection';
import styles from './Activities.module.css';

const Activities = () => {
	//const [data, setData] = useState(dat);
	const { data, isFetching, isLoading, error, isError } =
		useGetActivitiesQuery();

	if (isFetching || isError || !data) return null;
	return (
		<HomeSection title='Recent Activities'>
			<div className={styles.cards}>
				{data?.doc?.map((item, i) => (
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
				))}
			</div>
			<ViewMore onClick={() => setData([...data, ...dat])} />
		</HomeSection>
	);
};

export default Activities;
