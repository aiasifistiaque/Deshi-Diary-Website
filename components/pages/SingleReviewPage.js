import React from 'react';
import Page from '../nav/page/Page';
import BusinessCard from '../rate/business-card/BusinessCard';
import SingleReview from '../reviews/all-reviews/SIngleReview';
import Section from '../util/section/Section';

const SingleReviewPage = ({ listing, rating }) => {
	return (
		<Page>
			<Section top>
				<BusinessCard query={listing} />
			</Section>
			<Section>
				<SingleReview query={rating} />
			</Section>
		</Page>
	);
};

export default SingleReviewPage;
