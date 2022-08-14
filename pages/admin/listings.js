import React from 'react';
import { useState } from 'react';
import ListPage from '../../admin-components/listpage/ListPage';
import AdminPage from '../../admin-components/page/AdminPage';
import { Item, Row, Table } from '../../admin-components/table/Table';
import {
	useGetListingsAsAdminQuery,
	useSearchListingQuery,
} from '../../store/services/adminService';
import { Button, Input } from 'semantic-ui-react';

const Adminlistings = () => {
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [str, setStr] = useState('');
	const [option, setOption] = useState(0);

	const onSearch = () => {
		if (search.length > 0) {
			setStr(search);
			setOption(1);
		}
	};

	const onReset = () => {
		setSearch('');
		setStr('');
		setOption(0);
	};

	const { data, isError, error, isFetching, isLoading } =
		useGetListingsAsAdminQuery({ page });
	const userSearch = useSearchListingQuery(str);

	return (
		<AdminPage selected='Listings'>
			<ListPage isError={isError} error={error} title='All Listings'>
				<Input
					// icon='search'
					value={search}
					onChange={e => setSearch(e.target.value)}
					placeholder='Search...'
					size='small'
					style={{ width: 220, marginRight: 8 }}
					action={{
						icon: 'search',
						onClick: onSearch,
					}}
				/>
				<Button size='small' onClick={onReset}>
					Reset
				</Button>
				<Table
					isLoading={option == 0 ? isFetching : userSearch.isFetching}
					page={option == 0 ? (data?.page ? data.page : 1) : 0}
					totalPages={option == 1 ? 0 : data?.totalPages ? data.totalPages : 1}
					setPage={e => setPage(e)}>
					<Row title>
						<Item title>Name</Item>
						<Item title>category</Item>
						<Item title>rating</Item>
						<Item title>reviews</Item>
					</Row>
					{option == 1 &&
						!userSearch.isLoading &&
						userSearch.data?.doc &&
						userSearch.data.doc.map((item, i) => (
							<Row key={i} i={i} href={`/admin/listing/${item?._id}`}>
								<Item>{item?.name && item.name}</Item>
								<Item>{item?.category?.name && item.category.name}</Item>
								<Item>{item?.rating && item.rating.toFixed(2)}</Item>
								<Item>{item?.reviews && item.reviews}</Item>
							</Row>
						))}
					{option == 0 &&
						!isLoading &&
						data?.doc &&
						data.doc.map((item, i) => (
							<Row key={i} i={i} href={`/admin/listing/${item?._id}`}>
								<Item>{item?.name && item.name}</Item>
								<Item>{item?.category?.name && item.category.name}</Item>
								<Item>{item?.rating && item.rating.toFixed(2)}</Item>
								<Item>{item?.reviews && item.reviews}</Item>
							</Row>
						))}
				</Table>
			</ListPage>
		</AdminPage>
	);
};

export default Adminlistings;
