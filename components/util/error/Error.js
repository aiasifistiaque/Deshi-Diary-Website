import React from 'react';
import styles from './Error.module.css';

const Error = ({ children, isError, title, isUninitialized, m, err }) => {
	if (err)
		return (
			<div>
				<div className={styles.container} style={{ margin: m || '1rem 0' }}>
					<p>{children}</p>
				</div>
			</div>
		);
	if (!isError || isUninitialized) return null;
	return (
		<div>
			<div className={styles.container} style={{ margin: m || '1rem 0' }}>
				<p>
					{children?.data?.message
						? JSON.stringify(children.data.message)
						: children?.data
						? JSON.stringify(children.data)
						: children
						? JSON.stringify(children)
						: 'Error'}
				</p>
			</div>
		</div>
	);
};

export default Error;
