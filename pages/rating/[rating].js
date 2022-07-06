import { useRouter } from 'next/router';
import React from 'react';
import ReviewsPage from '../../components/pages/ReviewsPage';
import SingleReviewPage from '../../components/pages/SingleReviewPage';

const Ratingspage = () => {
	const router = useRouter();
	const { rating, listing } = router.query;
	return <SingleReviewPage rating={rating} listing={listing} />;
};

export default Ratingspage;
