import React from 'react';
import styles from './Paginate.module.css';

const Paginate = ({ page, setPage, isLoading, isError, data }) => {
	if (isLoading || isError) return null;
	return (
		<div className={styles.container}>
			<div
				onClick={() => {
					page > 1 && setPage(page - 1);
				}}
				className={page < 2 ? styles.disabledLeft : styles.buttonLeft}>
				<p>Prev</p>
			</div>
			<div className={styles.middle}>
				<p>
					Page {page}/{data.totalPages}
				</p>
			</div>

			<div
				onClick={() => {
					page < data.totalPages && setPage(page + 1);
				}}
				className={
					page >= data.totalPages ? styles.disabledRight : styles.buttonRight
				}>
				<p>Next</p>
			</div>
		</div>
	);
};

export default Paginate;
