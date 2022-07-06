import React from 'react';
import { useState } from 'react';
import ListPage from '../../admin-components/listpage/ListPage';
import AdminPage from '../../admin-components/page/AdminPage';
import { Item, Row, Table } from '../../admin-components/table/Table';
import { useGetListingsAsAdminQuery } from '../../store/services/adminService';

const Adminlistings = () => {
	const [page, setPage] = useState(1);

	const { data, isError, error, isFetching, isLoading } =
		useGetListingsAsAdminQuery({ page });
	return (
		<AdminPage selected='Listings'>
			<ListPage isError={isError} error={error} title='Users'>
				<Table
					title='All Users'
					isLoading={isFetching}
					page={data?.page ? data.page : 1}
					totalPages={data?.totalPages ? data.totalPages : 1}
					setPage={e => setPage(e)}>
					<Row title>
						<Item title>Name</Item>
						<Item title>category</Item>
						<Item title>rating</Item>
						<Item title>reviews</Item>
					</Row>
					{!isLoading &&
						data?.doc &&
						data.doc.map((item, i) => (
							<Row key={i} i={i} href={`/admin/listing/${item?._id}`}>
								<Item>{item?.name && item.name}</Item>
								<Item>{item?.category?.name && item.category.name}</Item>
								<Item>{item?.rating && item.rating}</Item>
								<Item>{item?.reviews && item.reviews}</Item>
							</Row>
						))}
				</Table>
			</ListPage>
		</AdminPage>
	);
};

export default Adminlistings;
