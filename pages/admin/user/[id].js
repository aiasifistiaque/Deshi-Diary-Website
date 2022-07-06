import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import ListPage from '../../../admin-components/listpage/ListPage';
import AdminPage from '../../../admin-components/page/AdminPage';
import {
	AdminItem,
	DetailsTable,
} from '../../../admin-components/table/Details';
import { Item, Row, Table } from '../../../admin-components/table/Table';
import { useGetUserByIdAsAdminQuery } from '../../../store/services/adminService';
import { useGetUserRatingsQuery } from '../../../store/services/apiService';

const Adminuser = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data, isError, error, isFetching, isLoading } =
		useGetUserByIdAsAdminQuery(id);
	return (
		<AdminPage selected='Users'>
			<ListPage isError={isError} error={error} title='User'>
				<DetailsTable isLoading={isFetching}>
					<AdminItem title='id'>{data?._id && data._id}</AdminItem>
					<AdminItem title='Name'>{data?.name && data.name}</AdminItem>
					<AdminItem title='Email'>{data?.email && data.email}</AdminItem>
					<AdminItem title='Role'>{data?.role && data.role}</AdminItem>
					<AdminItem title='Joined' date>
						{data?.createdAt && data.createdAt}
					</AdminItem>
				</DetailsTable>
			</ListPage>
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
