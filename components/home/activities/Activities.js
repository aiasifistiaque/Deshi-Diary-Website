import React, { useState } from 'react';
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
	const [data, setData] = useState(dat);
	return (
		<HomeSection title='Recent Activities'>
			<div className={styles.cards}>
				{data.map((item, i) => (
					<div className={styles.card} key={i}>
						<div className={styles.title}>
							<p>
								<a>{item?.user && item.user}</a>
								<span style={{ margin: '0 4px' }}>
									added new {item?.type && item.type} on
								</span>
								<a>{item.place && item.place}</a>
							</p>
						</div>
						<div className={styles.main}>
							{item.images && item.images.length > 0 && (
								<div className={styles.images}>
									<div className={styles.left}>
										<img src={item.images[0]} alt='img' />
									</div>
									{item.images.length > 1 && (
										<div
											className={
												item.images.length > 2
													? styles.smallRight
													: styles.right
											}>
											<img src={item.images[1]} alt='img' />
											{item.images.length > 2 && (
												<img src={item.images[2]} alt='img' />
											)}
										</div>
									)}
								</div>
							)}
							{item.review && <Review review={item.review} />}
						</div>
					</div>
				))}
			</div>
			<ViewMore onClick={() => setData([...data, ...dat])} />
		</HomeSection>
	);
};

export default Activities;
