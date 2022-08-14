import React from 'react';
import { useState } from 'react';
import ListPage from '../../admin-components/listpage/ListPage';
import AdminPage from '../../admin-components/page/AdminPage';
import { Item, Row, Table } from '../../admin-components/table/Table';
import {
	useGetUsersAsAdminQuery,
	useGetUserSearchQuery,
} from '../../store/services/adminService';
import { Button, Input } from 'semantic-ui-react';

const Adminusers = () => {
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
		useGetUsersAsAdminQuery({ page });
	const userSearch = useGetUserSearchQuery(str);
	return (
		<AdminPage selected='Users'>
			<ListPage isError={isError} error={error} title='All Users'>
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
						<Item title>email</Item>
						<Item title>role</Item>
						<Item title>joined</Item>
					</Row>
					{option == 1 &&
						!userSearch.isLoading &&
						userSearch.data?.doc &&
						userSearch.data.doc.map((item, i) => (
							<Row key={i} i={i} href={`/admin/user/${item._id}`}>
								<Item>{item?.name && item.name}</Item>
								<Item email>{item?.email && item.email}</Item>
								<Item>{item?.role && item.role}</Item>
								<Item date>{item?.createdAt && item.createdAt}</Item>
							</Row>
						))}
					{option == 0 &&
						!isLoading &&
						data?.doc &&
						data.doc.map((item, i) => (
							<Row key={i} i={i} href={`/admin/user/${item._id}`}>
								<Item>{item?.name && item.name}</Item>
								<Item email>{item?.email && item.email}</Item>
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
