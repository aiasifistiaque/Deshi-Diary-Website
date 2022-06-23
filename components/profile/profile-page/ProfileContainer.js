import styles from './ProfilePage.module.css';

import React from 'react';
import NameCard from '../name-card/NameCard';
import PointsCard from '../points-card/PointsCard';
import Link from 'next/link';

const data = {
	name: 'John Doe',
	email: 'johndoe@gmail.com',
	image: '/test/u3.jpg',
	details: [
		{ type: 'reviews', value: 12 },
		{ type: 'badges', value: 10 },
		{ type: 'points', value: 162 },
	],
};

const options = [
	{ name: 'overview', href: '/profile/overview' },
	{ name: 'manage profile', href: '/profile/manage-profile' },
	{ name: 'reviews', href: '/profile/reviews' },
	{ name: 'activities', href: '/profile/activities' },
	{ name: 'badges', href: '/profile/badges' },
	{ name: 'settings', href: '/profile/settings' },
];

const ProfileContainer = ({ select, children, title }) => {
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

export default ProfileContainer;
