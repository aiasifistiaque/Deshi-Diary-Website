import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../util/button/Button';
import styles from './BusinnessName.module.css';
import useGetDistance from '../../../hooks/useGetDistance';
import AddImage from './AddImage';

const BusinessName = ({ id, name, open, rating, tags, data }) => {
	const { loggedIn, token } = useSelector(state => state.auth);
	const { distance } = useGetDistance(data?.geoLocation && data.geoLocation);
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h3>{name}</h3>
				<div className={styles.location}>
					<p>{distance} away</p>
				</div>
			</div>
			<div className={open ? styles.open : styles.closed}>
				{/* <p>{`lat: ${lat}, lng: ${lng}`}</p>
				<p>{getDistance({ lat, lng }, data.geoLocation)}</p> */}
			</div>
			<div className={styles.tags}>
				{tags.map((tag, i) => (
					<p key={i}>
						{tag}
						{i < tags.length - 1 && ','}
					</p>
				))}
			</div>
			<div className={styles.bottom}>
				<div className={styles.rating}>
					<img
						src={
							rating >= 1 ? '/icons/star-primary.png' : '/icons/star-blank.png'
						}
						alt='*'
					/>
					<img
						src={
							rating >= 2 ? '/icons/star-primary.png' : '/icons/star-blank.png'
						}
						alt='*'
					/>
					<img
						src={
							rating >= 3 ? '/icons/star-primary.png' : '/icons/star-blank.png'
						}
						alt='*'
					/>{' '}
					<img
						src={
							rating >= 4 ? '/icons/star-primary.png' : '/icons/star-blank.png'
						}
						alt='*'
					/>{' '}
					<img
						src={
							rating >= 5 ? '/icons/star-primary.png' : '/icons/star-blank.png'
						}
						alt='*'
					/>{' '}
				</div>
				{token ? (
					<>
						<AddImage id={id} />

						<Button small text href={`/rate/${id}`}>
							Write a review
						</Button>
					</>
				) : (
					<Button small text href={`/login`}>
						log in to write review
					</Button>
				)}
			</div>
		</div>
	);
};

export default BusinessName;
