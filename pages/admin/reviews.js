import React from 'react';
import { useState } from 'react';
import ListPage from '../../admin-components/listpage/ListPage';
import AdminPage from '../../admin-components/page/AdminPage';
import { Item, Row, Table } from '../../admin-components/table/Table';
import { useGetAllRatingsAsAdminQuery } from '../../store/services/adminService';

const Adminreviews = () => {
	const [page, setPage] = useState(1);
	const { data, isError, error, isFetching, isLoading } =
		useGetAllRatingsAsAdminQuery({ page });
	return (
		<AdminPage selected='Reviews'>
			<ListPage isError={isError} error={error} title='Reviews'>
				<Table
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
							<Row key={i} i={i} href={`/admin/review/${item._id}`}>
								<Item>{item?.listing?.name && item.listing.name}</Item>
								<Item>{item?.rating && item.rating}</Item>
								<Item>{item?.user?.name && item.user.name}</Item>
								<Item date>{item?.createdAt && item.createdAt}</Item>
							</Row>
						))}
				</Table>
			</ListPage>
		</AdminPage>
	);
};

export default Adminreviews;
