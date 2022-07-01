import Link from 'next/link';
import React from 'react';
import Rating from '../../rate/rating/Rating';
import styles from './SearchMain.module.css';
import * as lib from '../../../lib/constants';
import { Placeholder } from 'semantic-ui-react';

const SearchMain = ({ data, isLoading }) => {
	if (isLoading) return <LoadingPlaceholder />;
	return (
		<div className={styles.container}>
			{data &&
				data.map((item, i) => (
					<div key={i} className={styles.item}>
						<div className={styles.image}>
							<img
								src={
									item?.images?.length > 0
										? item.images[0].src
										: lib.placeholders.image
								}
								alt='..'
							/>
						</div>
						<div className={styles.text}>
							<div className={styles.category}>
								<p>{item.category?.name ? item.category.name : ''}</p>
							</div>

							<div className={styles.name}>
								<Link href={`/b/${item._id}`}>
									<h6>{item?.name && item.name}</h6>
								</Link>
							</div>

							<Rating size={14} rating={item.rating} />
							<div className={styles.address}>
								<p>{item.address && item.address}</p>
							</div>
							<div className={styles.tags}>
								{item.tags?.map((tag, i) => (
									<div className={styles.tag} key={i}>
										<p>{tag}</p>
									</div>
								))}
							</div>
							<div className={styles.a}>
								<div className={styles.aButton}>
									<a>View Reviews</a>
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

const LoadingPlaceholder = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.image}>
					<Placeholder style={{ height: 200, width: '100%' }}>
						<Placeholder.Image />
					</Placeholder>
				</div>
				<div className={styles.text} style={{ display: 'block' }}>
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
						</Placeholder.Paragraph>
					</Placeholder>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.image}>
					<Placeholder style={{ height: 200, width: '100%' }}>
						<Placeholder.Image />
					</Placeholder>
				</div>
				<div className={styles.text} style={{ display: 'block' }}>
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
						</Placeholder.Paragraph>
					</Placeholder>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.image}>
					<Placeholder style={{ height: 200, width: '100%' }}>
						<Placeholder.Image />
					</Placeholder>
				</div>
				<div className={styles.text} style={{ display: 'block' }}>
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
						</Placeholder.Paragraph>
					</Placeholder>
				</div>
			</div>
		</div>
	);
};

export default SearchMain;
