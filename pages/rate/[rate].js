import { useRouter } from 'next/router';
import React from 'react';
import RatePage from '../../components/pages/RatePage';

const Ratepage = () => {
	const router = useRouter();
	const { rate } = router.query;
	return <RatePage query={rate} />;
};

export default Ratepage;
