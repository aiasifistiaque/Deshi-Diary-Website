import React from 'react';
import LargeScreen from '../util/large-screen/LargeScreen';
import SmallScreen from '../util/large-screen/SmallScreen';
import styles from './Styles.module.css';

const AboutHeading = () => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p>
					DeshiDiary is a local search and rating platform. With the help of
					everyday netizens as well as dedicated contributors, we are compiling
					one of the more comprehensive business and service information
					databases in the country
				</p>
			</div>

			<div className={styles.pictures}>
				<LargeScreen>
					<img src='/test/story-bg.png' alt='str' />
				</LargeScreen>
				<SmallScreen>
					<img src='/test/story-sm.png' alt='str' />
				</SmallScreen>
			</div>
			<div className={styles.story}>
				<h4>What is Deshi Diary?</h4>
				<p>DeshiDiary is a local search and rating platform.</p>
				<p>
					With the help of everyday netizens as well as dedicated contributors,
					we are compiling one of the more comprehensive business and service
					information databases in the country.
				</p>
				<p>
					Whether you are looking for a restaurant to dine in, where the nearest
					pharmacy is, or in need of an electrician –our goal is to make
					Deshidiary.com an indispensable tool in your search.
				</p>
				<p>
					We are striving to be that platform that people will turn to when they
					hear about a business in their neighborhood or before trying a new
					service.
				</p>
			</div>
		</div>
	);
};

export default AboutHeading;
