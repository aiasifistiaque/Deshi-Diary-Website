import React from 'react';
import Button from '../../buttons/Button';
import Error from '../../util/error-modal/Error';
import { DetailsPlaceholder } from '../Details';
import styles from '../Table.module.css';
import stl from './EditTable.module.css';

export const EditTable = ({
	children,
	loading,
	title,
	isLoading,
	ref,
	full,
	edit,
	editing,
	cancel,
	submit,
	result,
}) => {
	if (isLoading)
		return (
			<div
				className={styles.container}
				style={{
					padding: `${24}px ${32}px`,
				}}>
				<DetailsPlaceholder />
			</div>
		);

	return (
		<>
			{result && <Error isError={result.isError}>{result.error}</Error>}
			<div
				ref={ref}
				className={full ? styles.full : styles.container}
				style={{
					padding: `${24}px ${32}px`,
				}}>
				<div className={stl.header}>
					<h5>{title}</h5>
					{result.isLoading ? (
						<div>
							<Button secondary small color='primary'>
								Processing...
							</Button>
						</div>
					) : editing ? (
						<div>
							<Button secondary small color='primary' onClick={submit}>
								Save Changes
							</Button>
							<Button secondary small color='danger' onClick={cancel}>
								Cancel
							</Button>
						</div>
					) : (
						<div>
							<Button secondary small color='primary' onClick={edit}>
								Edit
							</Button>
						</div>
					)}
				</div>
				{!loading ? <div>{children}</div> : <h6>loading...</h6>}
			</div>
		</>
	);
};

export default EditTable;
