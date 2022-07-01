import Link from 'next/link';
import React, { useState } from 'react';
import { useGetActivitiesQuery } from '../../../store/services/apiService';
import ViewMore from '../morebutton/ViewMore';
import Review from '../review/Review';
import HomeSection from '../section/HomeSection';
import styles from './Activities.module.css';

const dat = [
	{
		user: 'Sajeeb Ahmed',
		type: 'photos',
		place: 'Sayeman Beach Resort',
		images: ['/test/r1.jpg', '/test/r2.jpg', '/test/r3.jpg'],
	},
	{
		user: 'Ayesha Aziz',
		type: 'review',
		place: 'Burger King',
		review: {
			user: {
				name: 'Ayesha Aziz',
				img: '/test/u1.jpg',
			},
			title: 'Great Place, Great Food!',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
			date: '2 days ago',
		},
	},
	{
		user: 'Asif Hossain',
		type: 'review',
		place: 'Gadget Tomorrow',
		images: ['/test/r4.jpg', '/test/r5.jpg'],
		review: {
			user: {
				name: 'Asif Hossain',
				img: '/test/u3.jpg',
			},
			date: '14 days ago',
			title: 'Great Place, Great Food!',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		},
	},
];

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
								<a>{item?.user?.name && item.user.name}</a>
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
								<Review review={item.rating} user={item.user} />
							)}
						</div>
					</div>
				))}
			</div>
			<ViewMore onClick={() => setData([...data, ...dat])} />
		</HomeSection>
	);
};

export default Activities;
