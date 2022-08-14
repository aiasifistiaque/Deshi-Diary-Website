import React from 'react';

const AdminModalBody = ({ children, style }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 16,
				...style,
			}}>
			{children}
		</div>
	);
};

export default AdminModalBody;
