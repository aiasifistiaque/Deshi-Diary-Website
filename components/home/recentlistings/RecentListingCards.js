import React from 'react';
import CardContainer from '../../cards/cardcontainer/CardContainer';
import ListingCard, {
	CardBottomButton,
	CardImage,
	CardSection,
	CardText,
	CardTitle,
} from '../../cards/cardcontainer/ListingCard';
import HomeSection from '../section/HomeSection';
import * as lib from '../../../lib/constants';
import { useGetListingsQuery } from '../../../store/services/apiService';
import Rating from '../../rate/rating/Rating';
import useGetDistance from '../../../hooks/useGetDistance';
import { Placeholder } from 'semantic-ui-react';

const RecentListingCards = () => {
	const { data, isError, error, isFetching } = useGetListingsQuery({
		sort: '-rating',
		perpage: 3,
	});

	const placeholder = (
		<CardContainer>
			<PlaceHolder />
			<PlaceHolder />
			<PlaceHolder />
		</CardContainer>
	);

	const listingList =
		data?.doc &&
		data.doc.map((item, i) => i < 3 && <Card item={item} key={i} />);

	return (
		<HomeSection title='Popular Listings'>
			<CardContainer>
				{isFetching || isError ? placeholder : listingList}
			</CardContainer>
		</HomeSection>
	);
};

const Card = ({ item }) => {
	const { distance } = useGetDistance(item?.geoLocation && item.geoLocation);

	const nameRating = (
		<>
			<CardTitle>{item?.name && item.name}</CardTitle>
			<Rating rating={item?.rating ? item.rating : 0} />
		</>
	);

	const reviewRatingDistance = (
		<>
			<CardText align='start' weight='500' size='1.5rem'>
				{item?.rating && item.rating == 0
					? 0.0
					: parseFloat(item.rating).toFixed(1)}
			</CardText>
			<CardText
				align='center'
				weight='600'
				style={{
					borderLeft: '1px solid rgba(174,174,174,.5)',
					borderRight: '1px solid rgba(174,174,174,.5)',
					padding: '0 1px',
					minWidth: 140,
				}}>
				{item?.reviews && item.reviews} Reviews
			</CardText>
			<CardText
				align='end'
				weight='500'
				size='1.2rem'
				color={lib.colors.primary}>
				{distance}
			</CardText>
		</>
	);

	return (
		<ListingCard>
			<CardSection p={'16px 16px 0 16px'}>
				<CardTitle align='center'>
					{item?.category?.name && item.category.name}
				</CardTitle>
			</CardSection>

			<CardImage>
				{item?.images?.length > 0 ? item.images[0].src : lib.placeholders.image}
			</CardImage>

			<CardSection horizontal>{nameRating}</CardSection>
			<CardSection horizontal>{reviewRatingDistance}</CardSection>
			<CardSection>
				<CardText align='start'>
					{item?.street && item.street}
					{item?.city && `, ${item.city}`}
					{item?.postCode && `, ${item.postCode}`}
				</CardText>
			</CardSection>
			<CardBottomButton href={`/b/${item._id}`}>Read More</CardBottomButton>
		</ListingCard>
	);
};

const PlaceHolder = () => {
	return (
		<ListingCard>
			<CardSection p={'16px 16px 0 16px'}>
				<CardTitle align='center'>
					<Placeholder>
						<Placeholder.Header>
							<Placeholder.Line />
						</Placeholder.Header>
					</Placeholder>
				</CardTitle>

				<CardSection>
					<Placeholder style={{ height: 150, width: 250 }}>
						<Placeholder.Image />
						<Placeholder.Header>
							<Placeholder.Line length='medium' />
							<Placeholder.Line length='full' />
							<Placeholder.Line length='medium' />
							<Placeholder.Line length='full' />
						</Placeholder.Header>
					</Placeholder>
				</CardSection>

				<CardSection>
					<Placeholder style={{ height: 100, width: 250 }}>
						<Placeholder.Header>
							<Placeholder.Line length='medium' />
							<Placeholder.Line length='full' />
							<Placeholder.Line length='medium' />
							<Placeholder.Line length='full' />
							<Placeholder.Line length='full' />
							<Placeholder.Line length='medium' />
							<Placeholder.Line length='full' />
						</Placeholder.Header>
					</Placeholder>
				</CardSection>
			</CardSection>
			<CardBottomButton></CardBottomButton>
		</ListingCard>
	);
};

export default RecentListingCards;
