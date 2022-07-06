import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
	useGetListingsByIdQuery,
	useGetRatingsQuery,
} from '../../store/services/apiService';
import ViewMore from '../home/morebutton/ViewMore';
import BusinessName from '../listing/business-name/BusinessName';
import ListingPhotos from '../listing/listing-photos/ListingPhotos';
import ListingReview from '../listing/listing-reviews/ListingReviews';
import RatingSummary from '../listing/rating-summary/RatingSummary';
import SimilarBusinesses from '../listing/similar-businesses.js/SimilarBusinesses';
import ViewMap from '../map/add-map/ViewMap';
import Page from '../nav/page/Page';
import Container from '../util/container/Container';
import Section, {
	SectionInput,
	SectionItem,
	SectionList,
	SectionListContainer,
} from '../util/section/Section';

const Business = ({ query }) => {
	const { data, isFetching, isError } = useGetListingsByIdQuery(query);
	const ratings = useGetRatingsQuery({ id: query });

	//
	const [reviews, setReviews] = useState([]);
	const router = useRouter();
	const onClick = () => {
		let arr = reviews;
		router.push(`/reviews/${query}`);
	};

	if (isFetching || isError) return null;

	return (
		<Page>
			<Container>
				<BusinessName
					id={data?._id ? data._id : ''}
					name={data?.name && data.name}
					open={data?.open && data.open}
					rating={data?.rating && data.rating}
					tags={data?.tags && data.tags}
					data={data}
				/>
			</Container>
			<Container>
				<ListingPhotos data={data.images} />
			</Container>

			<ViewMap
				lat={data.geoLocation?.lat || 23.78}
				lng={data.geoLocation?.lng || 90.47}
				data={data}
			/>

			<Section title={`Info & Details`}>
				{data?.description && (
					<SectionItem title='General Info'>{data.description}</SectionItem>
				)}
				{data?.email && <SectionItem title='E-mail'>{data.email}</SectionItem>}
				{data?.phone && <SectionItem title='Phone'>{data.phone}</SectionItem>}
				{data?.services && (
					<SectionItem arr title='Services/Products'>
						{data.services}
					</SectionItem>
				)}
				{data?.tags && (
					<SectionItem arr title='Tags'>
						{data.tags}
					</SectionItem>
				)}
				{data?.payment && (
					<SectionItem arr title='Payment Method'>
						{data.payment}
					</SectionItem>
				)}
				{data?.category?.name && (
					<SectionItem title='Category'>{data?.category?.name}</SectionItem>
				)}
				{data?.website && (
					<SectionItem title='Webiste' href='https://thinkcrypt.io'>
						{data.website}
					</SectionItem>
				)}
			</Section>
			{data?.features?.length > 0 && (
				<Section title='Other Features'>
					<SectionListContainer>
						{data?.features &&
							data.features?.map((feature, i) => (
								<SectionList key={i} icon='feature'>
									{feature}
								</SectionList>
							))}
					</SectionListContainer>
				</Section>
			)}

			<Section title='Rating Summary'>
				<RatingSummary data={data ? data : []} />
			</Section>
			{!ratings.isFetching && ratings.data && (
				<Section title='What people are saying'>
					<SectionInput third>
						{ratings?.data?.doc.length > 0 &&
							ratings.data?.doc?.map(
								(review, i) =>
									i < 3 && <ListingReview fill key={i} review={review} />
							)}
					</SectionInput>

					<ViewMore onClick={onClick} />
				</Section>
			)}
			<Section title='Similar Businesses'>
				<SimilarBusinesses id={data?.category?._id && data.category._id} />
			</Section>
		</Page>
	);
};

export default Business;
