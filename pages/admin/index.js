import React from 'react';
import AdminPage from '../../admin-components/page/AdminPage';
import { useGetKpiQuery } from '../../store/services/adminService';

const AdminOverview = () => {
	const { data, isFetching } = useGetKpiQuery();

	return (
		<AdminPage selected='Overview'>
			<CardContainer>
				{data &&
					data.map((item, i) => (
						<Card key={i} title={item.title}>
							{item.value}
						</Card>
					))}
			</CardContainer>
		</AdminPage>
	);
};

const Card = ({ children, title }) => {
	return (
		<div
			style={{
				border: '2px solid rgba(3,152,158,.1)',
				padding: '1rem 2rem',
				borderRadius: 16,
				backgroundColor: 'white',
			}}>
			<h4>{children}</h4>
			<p>{title}</p>
		</div>
	);
};

const CardContainer = ({ children }) => {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{children}</div>
	);
};

export default AdminOverview;
