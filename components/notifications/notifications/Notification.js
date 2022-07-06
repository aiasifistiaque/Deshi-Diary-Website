import React from 'react';
import styles from './Norification.module.css';
import moment from 'moment';
import { Placeholder } from 'semantic-ui-react';

export const Notification = ({ children, item }) => {
	return (
		<div className={styles.item}>
			<h6>{item.title}</h6>
			<div className={styles.details}>
				<p>{item.details}</p>
			</div>

			<div className={styles.date}>
				<p>{moment(item.createdAt).startOf('hour').fromNow()}</p>
			</div>
		</div>
	);
};

export const Notifications = ({
	children,
	data,
	isError,
	error,
	isFetching,
}) => {
	if (isFetching) return <PlaceHolder />;
	if (isError) return null;
	if (data && data.doc.length > 0)
		return <div className={styles.container}>{children}</div>;
	return (
		<div className={styles.item}>
			<p>No New Notifications</p>
		</div>
	);
};

const PlaceHolder = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<Placeholder>
					<Placeholder.Header>
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Header>
					<Placeholder.Paragraph>
						<Placeholder.Line />
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Paragraph>
				</Placeholder>
			</div>
			<div className={styles.item}>
				<Placeholder>
					<Placeholder.Header>
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Header>
					<Placeholder.Paragraph>
						<Placeholder.Line />
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Paragraph>
				</Placeholder>
			</div>
			<div className={styles.item}>
				<Placeholder>
					<Placeholder.Header>
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Header>
					<Placeholder.Paragraph>
						<Placeholder.Line />
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Paragraph>
				</Placeholder>
			</div>
		</div>
	);
};
