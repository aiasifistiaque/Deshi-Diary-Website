import React from 'react';
import CardContainer from '../../cards/cardcontainer/CardContainer';
import ListingCard, {
	CardBottomButton,
	CardImage,
	CardSection,
	CardText,
	CardTitle,
	Rating,
} from '../../cards/cardcontainer/ListingCard';
import HomeSection from '../section/HomeSection';
import * as lib from '../../../lib/constants';

const data = [
	{
		title: 'Leisure',
		img: '/test/leisure.jpg',
		rating: 2.9,
		name: 'Fitness+ Gym',
		reviews: 108,
		distance: '2.4km',
		address: 'Apt. 02, House 42, Road 84, Gulshan 2, Dhaka 1208',
	},
	{
		title: 'Restaurents',
		img: '/test/restaurents.jpg',
		rating: 3.4,
		name: 'Panda Dumplings',
		reviews: 108,
		distance: '2.4km',
		address: 'Apt. 02, House 42, Road 84, Gulshan 2, Dhaka 1208',
	},
	{
		title: 'Hotel',
		img: '/test/hotels.jpg',
		rating: 4.5,
		name: 'Hotel Lakeshore',
		reviews: 108,
		distance: '2.4km',
		address: 'Apt. 02, House 42, Road 84, Gulshan 2, Dhaka 1208',
	},
];

const RecentListingCards = () => {
	return (
		<HomeSection title='Find the Best Listings at Your Area'>
			<CardContainer>
				{data.map((item, i) => (
					<ListingCard key={i}>
						<CardSection p={'16px 16px 0 16px'}>
							<CardTitle align='center'>{item?.title && item.title}</CardTitle>
						</CardSection>

						<CardImage>{item?.img && item.img}</CardImage>

						<CardSection horizontal>
							<CardTitle>{item?.name && item.name}</CardTitle>
							<Rating rating={item?.rating ? item.rating : 0} justify='end' />
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
									padding: '0 2px',
									minWidth: 150,
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
							<CardText align='start'>{item?.address && item.address}</CardText>
						</CardSection>
						<CardBottomButton>Read More</CardBottomButton>
					</ListingCard>
				))}
			</CardContainer>
		</HomeSection>
	);
};

export default RecentListingCards;
