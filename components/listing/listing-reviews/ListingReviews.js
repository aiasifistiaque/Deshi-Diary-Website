import React, { useState } from 'react';
import styles from './Review.module.css';

const dat = [
	{
		user: {
			name: 'Asif Hossain',
			img: '/test/u3.jpg',
		},
		date: '14 days ago',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	},

	{
		user: {
			name: 'Ayesha Aziz',
			img: '/test/u1.jpg',
		},
		title: 'Great Place, Great Food!',
		comments: [],
		details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		date: '2 days ago',
	},
	{
		user: {
			name: 'Asif Hossain',
			img: '/test/u2.jpg',
		},
		date: '14 days ago',
		title: 'Great Place, Great Food!',
		comments: [],
		details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	},
];

const ListingReview = ({ review, fill }) => {
	const [show, setShow] = useState(false);
	return (
		<div
			className={styles.container}
			style={{ ...(fill && { width: '100%' }) }}>
			<div className={styles.details}>
				<div className={styles.image}>
					<img src={review.user.img} alt='*' />
				</div>

				<div className={styles.text}>
					<div className={styles.stars}>
						<img src='/icons/star-secondary.png' alt='*' />
						<img src='/icons/star-secondary.png' alt='*' />
						<img src='/icons/star-secondary.png' alt='*' />
						<img src='/icons/star-secondary.png' alt='*' />
						<img src='/icons/star-secondary.png' alt='*' />
					</div>
					<div className={styles.user}>
						<h6>{`"${review.title}"`}</h6>
						<p>{review.user?.name && review.user.name}</p>
					</div>
				</div>
			</div>
			<div className={styles.review}>
				<div className={styles.date}>
					<p>{review.date}</p>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			{show ? (
				<Replies />
			) : (
				<div className={styles.comments}>
					<a onClick={() => setShow(true)}>View Replies</a>
				</div>
			)}
		</div>
	);
};

const Replies = () => {
	const [data, setData] = useState(dat);
	return (
		<div className={styles.replies}>
			<h5>Replies</h5>
			{data &&
				data.map((item, i) => (
					<div className={styles.reply} key={i}>
						<div className={styles.details}>
							<div className={styles.image}>
								<img src={item.user.img} />
							</div>
							<div className={styles.usr}>
								<h6>{item.user.name}</h6>
								<p className={styles.date}>{item.date}</p>
								<div className={styles.text}>
									<p>{item.details}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			<div className={styles.more}>
				<a onClick={() => setData(x => [...x, ...dat])}>View More replies</a>
			</div>
		</div>
	);
};

export default ListingReview;
