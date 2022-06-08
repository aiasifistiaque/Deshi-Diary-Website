import React from 'react';
import styles from './HomeAbout.module.css';

const HomeAbout = () => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img src='/test/about.jpg' alt='about' />
			</div>
			<div className={styles.text}>
				<div className={styles.title}>
					<h5>Who We Are</h5>
				</div>
				<div className={styles.main}>
					<div className={styles.highlight}>
						<span>{`"`}</span>
						<h6>
							Deshidiary.com is a local search and ratings platform based in
							Bangladesh.
							<span>{`"`}</span>
						</h6>
					</div>
					<p>
						The main objective of the website is to help users connect with
						businesses, services and other places of interest within the country
						whilst providing a platform for them to rate and share their
						experiences. Deshidiary.com is a local search and ratings platform
						based in Bangladesh. The main objective of the website is to help
						users connect with businesses, services and other places of interest
						within the country whilst providing a platform for them{' '}
					</p>
				</div>
				<div className={styles.footer}>
					<div className={styles.btn}>
						<a>Learn More</a>
						<img src='/icons/arrow.png' alt='>' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeAbout;
