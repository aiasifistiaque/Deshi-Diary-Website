import React from 'react';
import AdminPage from '../../admin-components/page/AdminPage';
import { useGetUsersAsAdminQuery } from '../../store/services/adminService';

const Adminoverviewpage = () => {
	const { data, isError, error, isFetching, isLoading } =
		useGetUsersAsAdminQuery();
	return <AdminPage selected='Overview'>Overview</AdminPage>;
};

export default Adminoverviewpage;
