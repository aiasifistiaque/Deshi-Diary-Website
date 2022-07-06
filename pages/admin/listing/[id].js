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
import {
	useGetListingsByIdQuery,
	useGetRatingsQuery,
} from '../../../store/services/apiService';

const Adminlisting = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data, isError, error, isFetching, isLoading } =
		useGetListingsByIdQuery(id);
	return (
		<AdminPage selected='Listings'>
			<ListPage isError={isError} error={error} title='Listing Overview'>
				<DetailsTable isLoading={isFetching}>
					<AdminItem title='id'>{data?._id && data._id}</AdminItem>
					<AdminItem title='Name'>{data?.name && data.name}</AdminItem>{' '}
					<AdminItem title='Category'>
						{data?.category?.name && data.category.name}
					</AdminItem>
					<AdminItem title='Description'>
						{data?.description && data.description}
					</AdminItem>
					<AdminItem title='Email'>{data?.email && data.email}</AdminItem>
					<AdminItem title='Phone'>{data?.phone && data.phone}</AdminItem>
					<AdminItem title='Website'>{data?.website && data.website}</AdminItem>
					<AdminItem title='Features'>
						{data?.features && JSON.stringify(data.features)}
					</AdminItem>
					<AdminItem title='Services'>
						{data?.features && JSON.stringify(data.services)}
					</AdminItem>
					<AdminItem title='Tags'>
						{data?.features && JSON.stringify(data.tags)}
					</AdminItem>
					<AdminItem title='Payment Options'>
						{data?.paymentOptions && JSON.stringify(data.paymentOptions)}
					</AdminItem>
					<AdminItem title='Street'>{data?.street && data.street}</AdminItem>
					<AdminItem title='Street'>{data?.city && data.city}</AdminItem>
					<AdminItem title='Division'>
						{data?.division && data.division}
					</AdminItem>
					<AdminItem title='Post Code'>
						{data?.postCode && data.postCode}
					</AdminItem>
					<AdminItem title='Date Added' date>
						{data?.createdAt && data.createdAt}
					</AdminItem>
				</DetailsTable>
			</ListPage>
			{data && <ListingReviews id={data._id} />}
		</AdminPage>
	);
};

const ListingReviews = ({ id }) => {
	const [page, setPage] = useState(1);
	const { data, isError, error, isFetching, isLoading } = useGetRatingsQuery({
		page,
		id,
	});
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

export default Adminlisting;
