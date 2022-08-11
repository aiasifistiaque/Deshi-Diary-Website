import styles from './ProfilePage.module.css';
import React, { useEffect, useState } from 'react';
import NameCard from '../name-card/NameCard';
import PointsCard from '../points-card/PointsCard';
import Link from 'next/link';
import {
	useGetLeadboardQuery,
	useGetRankQuery,
	useGetSelfQuery,
	useGetUserBadgesQuery,
} from '../../../store/services/apiService';
import * as lib from '../../../lib/constants';
import ProfilePlaceholderContainer from './ProfileContainerPlaceHolder';
import { contributorLevel } from '../../../lib/methods';
import ListPage from '../../../admin-components/listpage/ListPage';
import {
	Item,
	Row,
	Table,
	UserRow,
	UserTable,
} from '../../../admin-components/table/Table';
import BadgeSection from '../profile-badges/BadgeSection';

const LeadboardContainer = ({ select, children, title }) => {
	const { data, isError, error, isLoading, isFetching } = useGetSelfQuery();
	const badges = useGetUserBadgesQuery('self');
	const rank = useGetRankQuery();

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
						<NameCard
							name={data.name}
							email={data.email}
							level={contributorLevel(data?.points && data.points)}
						/>
						<PointsCard
							data={[
								{ type: 'rank', value: rank?.data?.rank || 0 },
								{ type: 'points', value: rank?.data?.points || 0 },
								{ type: 'reviews', value: rank?.data?.reviews || 0 },
							]}
						/>
					</div>

					<div className={styles.btm}>
						<h6>Received Badges</h6>
						<div className={styles.badges}>
							{badges && badges.data && badges.data.doc && (
								<BadgeSection data={badges?.data?.doc && badges.data.doc} />
							)}
						</div>
					</div>
				</div>
			)}

			<div className={styles.rightTwo}>
				{title && <h5>{title}</h5>}
				<div className={styles.bs}>
					<TableT />
				</div>
			</div>
		</div>
	);
};

const TableT = () => {
	const [page, setPage] = useState(1);
	const { data, isFetching, isError, error, isLoading } = useGetLeadboardQuery({
		page,
	});
	return (
		<ListPage isError={isError} error={error}>
			<UserTable
				title='All Users'
				isLoading={isFetching}
				page={data?.page ? data.page : 1}
				totalPages={data?.totalPages ? data.totalPages : 1}
				setPage={e => setPage(e)}>
				<UserRow title>
					<Item>Rank</Item>
					<Item>User</Item>
					<Item>Points</Item>
				</UserRow>
				{data &&
					data.doc &&
					data.doc.map((item, i) => (
						<UserRow
							key={i}
							style={{
								backgroundColor: i % 2 == 0 ? '#F9F9F9' : 'transparent',
							}}>
							<Item>{i + 1 + (page > 1 && (page - 1) * 10)}</Item>
							<Item>{item?.name && item.name}</Item>
							<Item>{item?.points && item.points}</Item>
						</UserRow>
					))}
			</UserTable>
		</ListPage>
	);
};

export default LeadboardContainer;
