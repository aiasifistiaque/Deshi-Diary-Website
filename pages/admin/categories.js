import React from 'react';
import { useState } from 'react';
import ListPage from '../../admin-components/listpage/ListPage';
import AdminPage from '../../admin-components/page/AdminPage';
import { Item, Row, Table } from '../../admin-components/table/Table';
import { useGetAllCategoriesAsAdminQuery } from '../../store/services/adminService';

const Admincategories = () => {
	const [page, setPage] = useState(1);

	const { data, isError, error, isFetching, isLoading } =
		useGetAllCategoriesAsAdminQuery({ page });
	return (
		<AdminPage selected='Categories'>
			<ListPage
				isError={isError}
				error={error}
				title='Categories'
				button='Add Category'
				href={`/add-category`}>
				<Table
					title='All Users'
					isLoading={isFetching}
					page={data?.page ? data.page : 1}
					totalPages={data?.totalPages ? data.totalPages : 1}
					setPage={e => setPage(e)}>
					<Row title>
						<Item title>Name</Item>
						<Item title>Image</Item>
					</Row>
					{!isLoading &&
						data?.doc &&
						data.doc.map((item, i) => (
							<Row key={i} i={i}>
								<Item>{item?.name && item.name}</Item>
								<Item>
									<Item image={item?.image && item.image} />
								</Item>
							</Row>
						))}
				</Table>
			</ListPage>
		</AdminPage>
	);
};

export default Admincategories;
