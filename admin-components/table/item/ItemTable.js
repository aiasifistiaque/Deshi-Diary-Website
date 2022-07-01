import React from 'react';
import moment from 'moment';
import { Placeholder } from 'semantic-ui-react';
import styles from './ItemTable.module.css';

const ItemTable = ({ children, loading }) => {
	if (loading)
		return (
			<div className={styles.table}>
				<Loader />;
			</div>
		);

	return <div className={styles.table}>{children}</div>;
};

export const ItemTableRow = ({
	children,
	title,
	price,
	date,
	editing,
	number,
	onChange,
}) => {
	return (
		<div className={styles.row}>
			<div className={styles.title}>
				<h6>{title}</h6>
			</div>
			{editing ? (
				<div className={styles.editing}>
					<input
						value={children}
						onChange={e => onChange(e.target.value)}
						type={price || number ? 'number' : 'text'}
					/>
				</div>
			) : (
				<div className={styles.data}>
					<p>
						{price && 'Tk. '}
						{date ? moment(children).calendar() : children}
					</p>
				</div>
			)}
		</div>
	);
};

const Loader = () => {
	return (
		<ItemTableRow title={<TablePlaceHolder />}>
			<TablePlaceHolder />
		</ItemTableRow>
	);
};

const TablePlaceHolder = () => (
	<Placeholder>
		<Placeholder.Paragraph>
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Line />
		</Placeholder.Paragraph>
		<Placeholder.Paragraph>
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Line />
		</Placeholder.Paragraph>
		<Placeholder.Paragraph>
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Line />
		</Placeholder.Paragraph>
		<Placeholder.Paragraph>
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Line />
		</Placeholder.Paragraph>
		<Placeholder.Paragraph>
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Line />
		</Placeholder.Paragraph>
	</Placeholder>
);

export default ItemTable;
