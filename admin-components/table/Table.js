import React from 'react';
import moment from 'moment';
import styles from './Table.module.css';
import Link from 'next/link';
import { Placeholder } from 'semantic-ui-react';
import { Mr } from '../util/Margins';
import Button from '../../components/util/button/Button';

export const Table = ({
	children,
	loading,
	title,
	isLoading,
	w,
	page,
	totalPages,
	setPage,
	header,
	paginate,
}) => {
	return (
		<div className={styles.container} style={{ width: w || '100%' }}>
			{!isLoading ? (
				<div>
					{paginate != 'no' && (
						<div className={styles.paginate}>
							<div className={styles.title}>
								<p>
									Page {page} of {totalPages}
								</p>
							</div>

							<div className={styles.buttons}>
								<Button
									text
									onClick={() => {
										page > 0 && setPage(page - 1);
									}}>
									Prev
								</Button>
								<Mr size={16} />
								<Button
									text
									onClick={() => {
										page < totalPages && setPage(page + 1);
									}}>
									Next
								</Button>
							</div>
						</div>
					)}
					{children}
				</div>
			) : (
				<TablePlaceHolder />
			)}
		</div>
	);
};

export const Contain = ({ children }) => {
	return <div className={styles.contain}>{children}</div>;
};

export const Row = ({ children, href, title, i, key }) => {
	if (title) return <div className={styles.titleItems}>{children}</div>;
	if (href)
		return (
			<Link href={href}>
				<div className={styles.linkItems}>{children}</div>
			</Link>
		);
	return <div className={styles.items}>{children}</div>;
};

export const Item = ({
	children,
	title,
	date,
	email,
	flex,
	w,
	price,
	image,
	mw,
}) => {
	const itemStyle = {
		...(w && { minWidth: w }),
		...(mw && { maxWidth: mw }),
	};
	if (image)
		return (
			<div className={styles.image}>
				<img src={image} alt='/' />
			</div>
		);
	if (title)
		return (
			<div className={styles.titleItem} style={itemStyle}>
				<h6>{children}</h6>
			</div>
		);
	return (
		<div className={styles.item} style={itemStyle}>
			<p style={email ? { textTransform: 'lowercase' } : {}}>
				{price && 'BDT. '}
				{date ? moment(children).calendar() : children}
			</p>
		</div>
	);
};

export const CheckBoxItem = ({ style, onClick, children, checked }) => {
	return (
		<div className={styles.checkboxItem} style={style}>
			<div className={styles.innerItem} onClick={onClick}>
				{checked ? (
					<div className={styles.checked}>
						{checked && <img src='/icons/check-white.png' />}
					</div>
				) : (
					<div className={styles.checkbox} />
				)}
				<p>{children}</p>
			</div>
		</div>
	);
};

const TablePlaceHolder = () => {
	return (
		<Placeholder style={{ margin: 24 }}>
			<Placeholder.Header image>
				<Placeholder.Line />
				<Placeholder.Line />
			</Placeholder.Header>
			<Placeholder.Paragraph>
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
			</Placeholder.Paragraph>
			<Placeholder.Paragraph>
				<Placeholder.Line />
				<Placeholder.Line />
				<Placeholder.Line />
				<Placeholder.Line />
			</Placeholder.Paragraph>
		</Placeholder>
	);
};

export const UserTable = ({
	children,
	loading,
	title,
	isLoading,
	w,
	page,
	totalPages,
	setPage,
	header,
	paginate,
}) => {
	return (
		<div className={styles.userTable} style={{ width: w || '100%' }}>
			{!isLoading ? (
				<div>
					{children}
					{paginate != 'no' && (
						<div
							className={styles.paginate}
							style={{ border: 'none', marginTop: '2rem' }}>
							<div className={styles.title}>
								<p>
									Page {page} of {totalPages}
								</p>
							</div>

							<div className={styles.buttons}>
								<Button
									text
									onClick={() => {
										page > 0 && setPage(page - 1);
									}}>
									Prev
								</Button>
								<Mr size={16} />
								<Button
									text
									onClick={() => {
										page < totalPages && setPage(page + 1);
									}}>
									Next
								</Button>
							</div>
						</div>
					)}
				</div>
			) : (
				<TablePlaceHolder />
			)}
		</div>
	);
};

export const UserRow = ({ children, href, title, i, key, style }) => {
	if (title) return <div className={styles.userRow}>{children}</div>;
	if (href)
		return (
			<Link href={href}>
				<div className={styles.linkItems}>{children}</div>
			</Link>
		);
	return (
		<div className={styles.userRow} style={style}>
			{children}
		</div>
	);
};
