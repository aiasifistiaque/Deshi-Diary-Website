import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { Button } from 'semantic-ui-react';
import ListBadges from '../../../admin-components/badges/ListBadges';
import ListPage from '../../../admin-components/listpage/ListPage';
import AdminPage from '../../../admin-components/page/AdminPage';
import {
	AdminItem,
	DetailsTable,
} from '../../../admin-components/table/Details';
import { Item, Row, Table } from '../../../admin-components/table/Table';
import {
	useGetUserByIdAsAdminQuery,
	useMakeAdminMutation,
} from '../../../store/services/adminService';
import { useGetUserRatingsQuery } from '../../../store/services/apiService';

const Adminuser = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data, isError, error, isFetching, isLoading } =
		useGetUserByIdAsAdminQuery(id);
	const [makeAdmin, result] = useMakeAdminMutation();

	const makeUserAdmin = () => {
		makeAdmin({
			id: data?._id && data._id,
			role: data?.role && data.role == 'user' ? 'admin' : 'user',
		});
	};

	return (
		<AdminPage selected='Users'>
			<ListPage isError={isError} error={error} title='User'>
				<DetailsTable isLoading={isFetching}>
					<AdminItem title='id'>{data?._id && data._id}</AdminItem>
					<AdminItem title='Name'>{data?.name && data.name}</AdminItem>
					<AdminItem title='Email'>{data?.email && data.email}</AdminItem>
					<AdminItem title='Role'>{data?.role && data.role}</AdminItem>
					<div style={{ margin: '1rem 0' }}>
						{result.isLoading ? (
							<Button>processing...</Button>
						) : (
							<Button onClick={makeUserAdmin}>
								Make {data?.role && data.role === 'user' ? 'admin' : 'user'}
							</Button>
						)}
					</div>

					<AdminItem title='Joined' date>
						{data?.createdAt && data.createdAt}
					</AdminItem>
				</DetailsTable>
			</ListPage>
			<ListBadges id={id} />
			{data && <UserReviews id={data._id} />}
		</AdminPage>
	);
};

const UserReviews = ({ id }) => {
	const [page, setPage] = useState(1);
	const { data, isError, error, isFetching, isLoading } =
		useGetUserRatingsQuery({ page, id });
	return (
		<ListPage isError={isError} error={error} title='Reviews'>
			<Table
				title='All Users'
				isLoading={isFetching}
				page={data?.page ? data.page : 1}
				totalPages={data?.totalPages ? data.totalPages : 1}
				setPage={e => setPage(e)}>
				<Row title>
					<Item title>Business Name</Item>
					<Item title>rating</Item>
					<Item title>user</Item>
					<Item title>posted</Item>
				</Row>
				{!isLoading &&
					data?.doc &&
					data.doc.map((item, i) => (
						<Row key={i} i={i}>
							<Item>{item?.listing?.name && item.listing.name}</Item>
							<Item>{item?.rating && item.rating}</Item>
							<Item>{item?.user?.name && item.user.name}</Item>
							<Item date>{item?.createdAt && item.createdAt}</Item>
						</Row>
					))}
			</Table>
		</ListPage>
	);
};

export default Adminuser;
