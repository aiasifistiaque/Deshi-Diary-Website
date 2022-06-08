import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.address}>
				<Section title='Contact Us'>
					<Item>Deshi Diary</Item>
					<Item>Phone: +88 01799 399555</Item>
					<Item>Email: info@deshidiary.com</Item>
				</Section>
			</div>
			<div className={styles.links}>
				<Section title='Navigation'>
					<Link>Home</Link>
					<Link>Search</Link>
					<Link>About Us</Link>
				</Section>
				<Section title='Legal'>
					<Link>Contact</Link>
					<Link>Privacy Policy</Link>
					<Link>Terms of use</Link>
				</Section>
				<Section title='Social'>
					<Link>Facebook</Link>
					<Link>Instagram</Link>
					<Link>Twitter</Link>
				</Section>
			</div>
		</div>
	);
};

const Section = ({ title, children }) => {
	return (
		<div className={styles.section}>
			<h6>{title}</h6>
			{children}
		</div>
	);
};

const Item = ({ title, children }) => {
	return (
		<div className={styles.item}>
			<p>{children}</p>
		</div>
	);
};

const Link = ({ title, children }) => {
	return (
		<div className={styles.item}>
			<a>{children}</a>
		</div>
	);
};

export default Footer;
