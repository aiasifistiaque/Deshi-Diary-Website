import React, { useState } from 'react';
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

const data = {
	_id: 1,
	name: 'Takeout Banani',
	open: true,
	tags: ['Cafe', 'Fast Food', 'Burgers'],
	rating: 4,
	ratingSummary: {
		rating: 4.3,
		total: 1299,
		ratings: [
			{ total: 500, star: '5' },
			{ total: 750, star: '4' },
			{ total: 100, star: '3' },
			{ total: 100, star: '2' },
			{ toatl: 50, star: '1' },
		],
	},
	images: [
		{ src: '/test/food1.jpg', alt: '1' },
		{ src: '/test/food2.jpg', alt: '2' },
		{ src: '/test/food3.jpg', alt: '3' },
		{ src: '/test/food4.jpg', alt: '4' },
		{ src: '/test/food5.jpg', alt: '5' },
		{ src: '/test/food6.jpg', alt: '6' },
		{ src: '/test/food7.jpg', alt: '7' },
	],
	details:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	email: 'takeout2410@gmail.com',
	website: 'https://takeoutbd.com',
	phone: ['+8801928387238', '+8801928387538'],
	services: ['Burgers', 'Wegdes', 'Fast Food', 'Mocktails'],
	payment: ['Credit Card', 'bKash', 'Cash'],
	category: 'Cafe',
	features: [
		'Dine-in',
		'Takeaway',
		'Air-conditioned',
		'Open-24/7',
		'Accepts Credit Card',
		'Digital Payment',
		'Covid Protection',
		'Offers Delivery',
		'Wifi',
		'Parking',
		'Smoking-zone',
		'Express-deliery',
	],
	reviews: [
		{
			user: {
				name: 'Asif Hossain',
				img: '/test/u3.jpg',
			},
			date: '14 days ago',
			title: 'Great Place, Great Food!',
			comments: [],
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		},

		{
			user: {
				name: 'Ayesha Aziz',
				img: '/test/u1.jpg',
			},
			title: 'Great Place, Great Food!',
			comments: [],

			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
			date: '2 days ago',
		},
		{
			user: {
				name: 'Asif Hossain',
				img: '/test/u2.jpg',
			},
			date: '14 days ago',
			title: 'Great Place, Great Food!',
			comments: [],

			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		},
	],
	similar: [],
};

const Business = ({ query }) => {
	const [reviews, setReviews] = useState(data.reviews);
	const onClick = () => {
		let arr = reviews;
		//arr = [...reviews, ...data.reviews];
		setReviews(x => [...x, ...data.reviews]);
	};
	return (
		<Page>
			<Container>
				<BusinessName
					id={data._id}
					name={data.name}
					open={data.open}
					rating={data.rating}
					tags={data.tags}
				/>
			</Container>
			<Container>
				<ListingPhotos data={data.images} />
			</Container>
			<Section title={`Info & Details`}>
				{data.details && (
					<SectionItem title='General Info'>{data.details}</SectionItem>
				)}
				{data.email && <SectionItem title='E-mail'>{data.email}</SectionItem>}
				{data.phone && (
					<SectionItem arr title='Phone'>
						{data.phone}
					</SectionItem>
				)}
				{data.services && (
					<SectionItem arr title='Services/Products'>
						{data.services}
					</SectionItem>
				)}
				{data.payment && (
					<SectionItem arr title='Payment Method'>
						{data.payment}
					</SectionItem>
				)}
				{data.category && (
					<SectionItem title='Category'>{data.category}</SectionItem>
				)}
				{data.website && (
					<SectionItem title='Webiste' href='https://thinkcrypt.io'>
						{data.website}
					</SectionItem>
				)}
			</Section>
			<Section title='Other Features'>
				<SectionListContainer>
					{data.features &&
						data.features.map((feature, i) => (
							<SectionList key={i} icon='feature'>
								{feature}
							</SectionList>
						))}
				</SectionListContainer>
			</Section>
			<Section title='Rating Summary'>
				<RatingSummary data={data.ratingSummary} />
			</Section>
			<Section title='What Others are saying'>
				{reviews.length > 0 &&
					reviews.map((review, i) => <ListingReview key={i} review={review} />)}
				<ViewMore onClick={onClick} />
			</Section>
			<Section title='Similar Businesses'>
				<SimilarBusinesses />
			</Section>
		</Page>
	);
};

export default Business;
