import Link from 'next/link';
import React from 'react';
import { useGetListingsByIdQuery } from '../../../store/services/apiService';
import Rating from '../rating/Rating';
import styles from './BusinessCard.module.css';
import * as lib from '../../../lib/constants';
import { Placeholder } from 'semantic-ui-react';

const BusinessCard = ({ query, home, size }) => {
	const { data, isLoading, isFetching, isError, error } =
		useGetListingsByIdQuery(query);

	const imagePlaceholer = (
		<Placeholder
			style={{
				height: size || 150,
				width: size || 150,
				borderRadius: 99,
			}}>
			<Placeholder.Image />
		</Placeholder>
	);

	const image = isFetching ? (
		imagePlaceholer
	) : (
		<img
			src={
				data?.images?.length > 0 ? data.images[0].src : lib.placeholders.image
			}
			alt='..'
		/>
	);

	const textPlaceholder = (
		<Placeholder>
			<Placeholder.Header>
				<Placeholder.Line />
				<Placeholder.Line />
				<Placeholder.Line />
			</Placeholder.Header>
			<Placeholder.Paragraph>
				<Placeholder.Line />
				<Placeholder.Line />
				<Placeholder.Line />
			</Placeholder.Paragraph>
		</Placeholder>
	);

	return (
		<div className={home ? styles.home : styles.container}>
			<div className={styles.image}>{image}</div>
			<div
				className={styles.description}
				style={{ display: isFetching ? 'block' : 'flex' }}>
				{isFetching || !data ? (
					textPlaceholder
				) : (
					<>
						<div>
							<div className={styles.tag}>
								<p>{data?.category?.name && data.category.name}</p>
							</div>
						</div>
						<Link href={`/b/${query}`}>
							<h5>{data?.name && data.name}</h5>
						</Link>
						<Rating rating={data?.rating && data.rating} size={14} />
						<p>{data?.address && data.address}</p>
						{data?.website && <a href={data?.website}>View Website</a>}
					</>
				)}
			</div>
		</div>
	);
};

export default BusinessCard;
