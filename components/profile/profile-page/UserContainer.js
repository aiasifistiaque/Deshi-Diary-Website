import styles from './ProfilePage.module.css';

import React from 'react';
import NameCard from '../name-card/NameCard';
import PointsCard from '../points-card/PointsCard';
import Link from 'next/link';

const data = {
	name: 'July Doe',
	email: 'julydoe@gmail.com',
	image: '/test/u1.jpg',
	details: [
		{ type: 'reviews', value: 5 },
		{ type: 'badges', value: 8 },
		{ type: 'points', value: 90 },
	],
};

const options = [
	{ name: 'reviews', href: '/u/reviews' },
	{ name: 'badges', href: '/u/badges' },
];

const UserContainer = ({ select, children, title }) => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.top}>
					<div className={styles.img}>
						<img src={data.image} alt='pp' />
					</div>
					<NameCard name={data.name} email={data.email} />
					<PointsCard data={data.details} />
				</div>
				<div className={styles.bottom}>
					{options.map((item, i) => (
						<Link href={item.href} key={i}>
							<div
								className={`${styles.option} ${
									select == item.name ? styles.selected : styles.notSelected
								}`}>
								<p>{item.name}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className={styles.right}>
				{title && <h5>{title}</h5>}
				<div className={styles.children}> {children}</div>
			</div>
		</div>
	);
};

export default UserContainer;
