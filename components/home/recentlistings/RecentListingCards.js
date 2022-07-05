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

const RecentListingCards = () => {
	const { data, isError, error, isFetching } = useGetListingsQuery();
	if (isFetching || isError || !data) return null;
	return (
		<HomeSection title='Find the Best Listings at Your Area'>
			<CardContainer>
				{data?.doc &&
					data.doc.map(
						(item, i) =>
							i < 3 && (
								<ListingCard key={i}>
									<CardSection p={'16px 16px 0 16px'}>
										<CardTitle align='center'>
											{item?.category?.name && item.category.name}
										</CardTitle>
									</CardSection>

									<CardImage>
										{item?.images?.length > 0
											? item.images[0].src
											: lib.placeholders.image}
									</CardImage>

									<CardSection horizontal>
										<CardTitle>{item?.name && item.name}</CardTitle>
										<Rating rating={item?.rating ? item.rating : 0} />
									</CardSection>
									<CardSection horizontal>
										<CardText align='start' weight='500' size='1.4rem'>
											{item?.rating && item.rating}
										</CardText>
										<CardText
											align='center'
											weight='600'
											style={{
												borderLeft: '1px solid rgba(174,174,174,.5)',
												borderRight: '1px solid rgba(174,174,174,.5)',
												padding: '0 1px',
												minWidth: 120,
											}}>
											{item?.reviews && item.reviews} Reviews
										</CardText>
										<CardText
											align='end'
											weight='500'
											size='1.2rem'
											color={lib.colors.primary}>
											{item?.distance && item.distance}
										</CardText>
									</CardSection>
									<CardSection>
										<CardText align='start'>
											{item?.street && item.street}
											{item?.city && `, ${item.city}`}
											{item?.postCode && `, ${item.postCode}`}
										</CardText>
									</CardSection>
									<CardBottomButton href={`/b/${item._id}`}>
										Read More
									</CardBottomButton>
								</ListingCard>
							)
					)}
			</CardContainer>
		</HomeSection>
	);
};

export default RecentListingCards;
