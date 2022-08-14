import { useRouter } from 'next/router';
import React from 'react';
import EditListing from '../../../components/pages/EditListing';

const Editlisting = () => {
	const router = useRouter();
	const { id } = router.query;
	return <EditListing id={id} />;
};

export default Editlisting;
