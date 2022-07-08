import React from 'react';
import styles from './Error.module.css';

const Success = ({ children, m }) => {
	return (
		<div>
			<div className={styles.success} style={{ margin: m || '1rem 0' }}>
				<p>{children}</p>
			</div>
		</div>
	);
};

export default Success;
