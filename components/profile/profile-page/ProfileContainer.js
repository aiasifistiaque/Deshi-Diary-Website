import styles from './ProfilePage.module.css';
import React, { useEffect } from 'react';
import NameCard from '../name-card/NameCard';
import PointsCard from '../points-card/PointsCard';
import Link from 'next/link';
import { useGetSelfQuery } from '../../../store/services/apiService';
import * as lib from '../../../lib/constants';
import ProfilePlaceholderContainer from './ProfileContainerPlaceHolder';

const options = [
	{ name: 'overview', href: '/profile/overview' },
	{ name: 'manage profile', href: '/profile/manage-profile' },
	{ name: 'reviews', href: '/profile/reviews' },
	{ name: 'activities', href: '/profile/activities' },
	{ name: 'badges', href: '/profile/badges' },
	{ name: 'settings', href: '/profile/settings' },
];

const ProfileContainer = ({ select, children, title }) => {
	const { data, isError, error, isLoading, isFetching } = useGetSelfQuery();

	const pointsData = [
		{ type: 'reviews', value: data?.reviews || 0 },
		{ type: 'badges', value: data?.badges || 0 },
		{ type: 'points', value: data?.points || 0 },
	];

	return (
		<div className={styles.container}>
			{isLoading || isError ? (
				<ProfilePlaceholderContainer />
			) : (
				<div className={styles.left}>
					<div className={styles.top}>
						<div className={styles.img}>
							<img
								src={data?.image ? data.image : lib.placeholders.profileImage}
							/>
						</div>
						<NameCard name={data.name} email={data.email} />
						<PointsCard data={pointsData} />
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
			)}

			<div className={styles.right}>
				{title && <h5>{title}</h5>}
				<div className={styles.children}> {children}</div>
			</div>
		</div>
	);
};

export default ProfileContainer;
