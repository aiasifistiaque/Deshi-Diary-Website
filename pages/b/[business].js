import { useRouter } from 'next/router';
import React from 'react';
import Business from '../../components/pages/Business';

const Businesspage = () => {
	const router = useRouter();
	const { business } = router.query;
	return <Business query={business} />;
};

export default Businesspage;
