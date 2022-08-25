import React from 'react';
import styles from './Norification.module.css';
import moment from 'moment';
import { Placeholder } from 'semantic-ui-react';
import Link from 'next/link';

export const Notifications = ({ children, data, isError, isFetching }) => {
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

export const Notification = ({ item }) => {
	return (
		<Link href={`/rating/${item.target.id}`}>
			<div className={styles.item}>
				<h6>{item.title}</h6>
				<div className={styles.details}>
					<p>{item.details}</p>
				</div>
				<div className={styles.date}>
					<p>{moment(item.createdAt).startOf('hour').fromNow()}</p>
				</div>
			</div>
		</Link>
	);
};

const PlaceHolder = () => {
	const pHolder = (
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
	);
	return (
		<div className={styles.container}>
			{pHolder}
			{pHolder}
			{pHolder}
		</div>
	);
};
