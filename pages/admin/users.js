import React from 'react';
import { useState } from 'react';
import ListPage from '../../admin-components/listpage/ListPage';
import AdminPage from '../../admin-components/page/AdminPage';
import { Item, Row, Table } from '../../admin-components/table/Table';
import { useGetUsersAsAdminQuery } from '../../store/services/adminService';

const Adminusers = () => {
	const [page, setPage] = useState(1);

	const { data, isError, error, isFetching, isLoading } =
		useGetUsersAsAdminQuery({ page });
	return (
		<AdminPage selected='Users'>
			<ListPage isError={isError} error={error} title='Users'>
				<Table
					title='All Users'
					isLoading={isFetching}
					page={data?.page ? data.page : 1}
					totalPages={data?.totalPages ? data.totalPages : 1}
					setPage={e => setPage(e)}>
					<Row title>
						<Item title>Name</Item>
						<Item title>email</Item>
						<Item title>role</Item>
						<Item title>joined</Item>
					</Row>
					{!isLoading &&
						data?.doc &&
						data.doc.map((item, i) => (
							<Row key={i} i={i}>
								<Item>{item?.name && item.name}</Item>
								<Item>{item?.email && item.email}</Item>
								<Item>{item?.role && item.role}</Item>
								<Item date>{item?.createdAt && item.createdAt}</Item>
							</Row>
						))}
				</Table>
			</ListPage>
		</AdminPage>
	);
};

export default Adminusers;
