import React from 'react';
import Page from '../nav/page/Page';
import BusinessCard from '../rate/business-card/BusinessCard';
import RateForm from '../rate/rate-form/RateForm';
import Section from '../util/section/Section';

const RatePage = ({ query }) => {
	return (
		<Page>
			<Section top>
				<BusinessCard />
			</Section>
			<Section subheading='Write a review about this place'>
				<RateForm />
			</Section>
		</Page>
	);
};

export default RatePage;
