import styles from './ProfilePage.module.css';

import React, { useEffect } from 'react';
import NameCard from '../name-card/NameCard';
import PointsCard from '../points-card/PointsCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGetUserDataQuery } from '../../../store/services/apiService';
import ProfilePlaceholderContainer from './ProfileContainerPlaceHolder';
import * as lib from '../../../lib/constants';

const UserContainer = ({ select, children, title }) => {
	const router = useRouter();
	const { user } = router.query;
	const { data, isFetching, isError } = useGetUserDataQuery(user);

	const options = [
		{ name: 'overview', href: `/u/${user}?option=overview` },
		{ name: 'reviews', href: `/u/${user}?option=reviews` },
		{ name: 'badges', href: `/u/${user}?option=badges` },
	];

	return (
		<div className={styles.container}>
			{isFetching || isError ? (
				<ProfilePlaceholderContainer />
			) : (
				<>
					<div className={styles.left}>
						<div className={styles.top}>
							<div className={styles.img}>
								<img
									src={data?.image ? data.image : lib.placeholders.profileImage}
									alt='pp'
								/>
							</div>
							<NameCard
								name={data?.name && data.name}
								email={data?.email && data.email}
							/>
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
				</>
			)}
		</div>
	);
};

export default UserContainer;
