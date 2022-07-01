import styles from './ProfilePage.module.css';
import React, { useEffect } from 'react';
import NameCard from '../name-card/NameCard';
import PointsCard from '../points-card/PointsCard';
import Link from 'next/link';
import { useGetSelfQuery } from '../../../store/services/apiService';
import * as lib from '../../../lib/constants';
import { Placeholder } from 'semantic-ui-react';

// const data = {
// 	name: 'John Doe',
// 	email: 'johndoe@gmail.com',
// 	image: '/test/u3.jpg',
// 	details: [
// 		{ type: 'reviews', value: 12 },
// 		{ type: 'badges', value: 10 },
// 		{ type: 'points', value: 162 },
// 	],
// };

const options = [
	{ name: 'overview', href: '/profile/overview' },
	{ name: 'manage profile', href: '/profile/manage-profile' },
	{ name: 'reviews', href: '/profile/reviews' },
	{ name: 'activities', href: '/profile/activities' },
	{ name: 'badges', href: '/profile/badges' },
	{ name: 'settings', href: '/profile/settings' },
];

const ProfilePlaceholderContainer = ({ select, children, title }) => {
	return (
		<div className={styles.left}>
			<div className={styles.top}>
				<div className={styles.img}>
					<Placeholder style={{ height: 100, width: 100, borderRadius: 99 }}>
						<Placeholder.Image />
					</Placeholder>
				</div>
				<NameCard isLoading />
				<PointsCard isLoading />
			</div>
			<div className={styles.bottom}>
				{options.map((item, i) => (
					<div className={styles.placeholderOption} key={i}>
						<Placeholder key={i}>
							<Placeholder.Header>
								<Placeholder.Line />
							</Placeholder.Header>
						</Placeholder>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfilePlaceholderContainer;
