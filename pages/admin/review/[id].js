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
import { useGetCommentsAsAdminQuery } from '../../../store/services/adminService';
import {
	useGetAdminCommentsQuery,
	useGetCommentsQuery,
	useGetListingsByIdQuery,
	useGetRatingByIdQuery,
	useGetRatingsQuery,
} from '../../../store/services/apiService';

const Adminreview = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data, isError, error, isFetching, isLoading } =
		useGetRatingByIdQuery(id);
	return (
		<AdminPage selected='Reviews'>
			<ListPage isError={isError} error={error} title='Review Overview'>
				<DetailsTable isLoading={isFetching}>
					<AdminItem title='Reviewed By'>
						{data?.user?.name && data.user.name}
						{data?.user?._id && ` [${data.user._id}]`}
					</AdminItem>
					<AdminItem title='Rating'>{data?.rating && data.rating}</AdminItem>
					<AdminItem title='Review Of'>
						{data?.listing?.name && data.listing.name}
					</AdminItem>
					<AdminItem title='User Recommended'>
						{data?.recommend && data.recommend == 1 ? 'Yes' : 'No'}
					</AdminItem>
					<AdminItem title='Review Title'>
						{data?.title && data.title}
					</AdminItem>
					<AdminItem title='Review Details'>
						{data?.details && data.details}
					</AdminItem>
				</DetailsTable>
			</ListPage>
			<Comments id={id} />
		</AdminPage>
	);
};

const Comments = ({ id }) => {
	const [page, setPage] = useState(1);
	const { data, isError, error, isFetching, isLoading } =
		useGetAdminCommentsQuery({ page, id });
	return (
		<ListPage isError={isError} error={error} title='Comments'>
			<Table
				title='All Users'
				isLoading={isFetching}
				page={data?.page ? data.page : 1}
				totalPages={data?.totalPages ? data.totalPages : 1}
				setPage={e => setPage(e)}>
				<Row title>
					<Item title>Commented By</Item>
					<Item title>Comment</Item>
					<Item title>posted</Item>
				</Row>
				{!isLoading &&
					data?.doc &&
					data.doc.map((item, i) => (
						<Row key={i} i={i}>
							<Item>{item?.user?.name && item.user.name}</Item>
							<Item>{item?.details && item.details}</Item>

							<Item date>{item?.createdAt && item.createdAt}</Item>
						</Row>
					))}
			</Table>
		</ListPage>
	);
};

export default Adminreview;
