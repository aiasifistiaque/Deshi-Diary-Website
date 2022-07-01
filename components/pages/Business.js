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
import Page from '../nav/page/Page';
import Container from '../util/container/Container';
import Section, {
	SectionItem,
	SectionList,
	SectionListContainer,
} from '../util/section/Section';

const Business = ({ query }) => {
	const { data, isFetching, isError } = useGetListingsByIdQuery(query);
	const ratings = useGetRatingsQuery(query);

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
				/>
			</Container>
			<Container>
				<ListingPhotos data={data.images} />
			</Container>
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
			<Section title='Rating Summary'>
				<RatingSummary data={data ? data : []} />
			</Section>
			{!ratings.isFetching && ratings.data && (
				<Section title='What Others are saying'>
					{ratings?.data?.doc.length > 0 &&
						ratings.data?.doc?.map(
							(review, i) =>
								i < 3 && <ListingReview fill key={i} review={review} />
						)}
					<ViewMore onClick={onClick} />
				</Section>
			)}
			<Section title='Similar Businesses'>
				<SimilarBusinesses />
			</Section>
		</Page>
	);
};

export default Business;
