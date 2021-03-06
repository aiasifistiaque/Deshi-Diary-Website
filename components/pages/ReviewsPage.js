import React from 'react';
import Page from '../nav/page/Page';
import BusinessCard from '../rate/business-card/BusinessCard';
import AllReviews from '../reviews/all-reviews/AllReviews';
import Section from '../util/section/Section';

const ReviewsPage = ({ query }) => {
	return (
		<Page>
			<Section top>
				<BusinessCard query={query} />
			</Section>
			<Section>
				<AllReviews query={query} />
			</Section>
		</Page>
	);
};

export default ReviewsPage;
