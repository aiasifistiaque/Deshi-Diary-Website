import React from 'react';
import styles from './NewAbout.module.css';
import { BsGlobe } from 'react-icons/bs';
import { GiFallingStar } from 'react-icons/gi';
import { FaSearchLocation, FaMapMarkedAlt } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';

const ICON_SIZE = 40;
const ICON_COLOR = 'teal';

const NewAbout = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				<Card
					icon={<BsGlobe size={ICON_SIZE} color={ICON_COLOR} />}
					title='Discover Places'>
					Select your location and search any specific category to see{' '}
					{`what's`} nearby.
				</Card>
				<Card
					icon={<GiFallingStar size={ICON_SIZE} color={ICON_COLOR} />}
					title='Leave a Review'>
					Write a review or rate a business that you recently visited.
				</Card>
				<Card
					icon={<FaSearchLocation size={ICON_SIZE} color={ICON_COLOR} />}
					title='Search Businesses'>
					Find a particular business {`you're`} looking for and see what others
					area saying.
				</Card>
				<Card
					icon={<FaMapMarkedAlt size={ICON_SIZE} color={ICON_COLOR} />}
					title='Add a Listing'>
					Add listings to a growing community of informed netizens!
				</Card>
			</div>
		</div>
	);
};

const Card = ({ icon, title, children }) => {
	return (
		<div className={styles.card}>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.details}>
				<h5>{title}</h5>
				<p>{children}</p>
			</div>
		</div>
	);
};

export default NewAbout;
