import { useRouter } from 'next/router';
import React from 'react';
import ReviewsPage from '../../components/pages/ReviewsPage';

const Reviewspage = () => {
	const router = useRouter();
	const { reviews } = router.query;
	return <ReviewsPage query={reviews} />;
};

export default Reviewspage;
