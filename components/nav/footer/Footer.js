import Link from 'next/link';
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
				<Section title='Categories'>
					<LinkItem href='/search?caregory=Hotels'>Hotels</LinkItem>
					<LinkItem href='/search?caregory=Restaurants'>Restaurants</LinkItem>
					<LinkItem href='/search?caregory=Professionals'>
						Professionals
					</LinkItem>
					<LinkItem href='/search?caregory=Pet Care'>Pet Care</LinkItem>
					<LinkItem href='/search?caregory=Gym'>Gym</LinkItem>
					<LinkItem href={`/search?caregory=Coffee & Tea`}>
						{'Coffee & Tea'}
					</LinkItem>
				</Section>
				<Section title='Navigation'>
					<LinkItem href='/'>Home</LinkItem>
					<LinkItem href='/search'>Search</LinkItem>
					<LinkItem href='/privacy-policy'>Privacy Policy</LinkItem>
					<LinkItem href='/about'>About Us</LinkItem>
				</Section>

				<Section title='Social'>
					<LinkItem>Facebook</LinkItem>
					<LinkItem>Instagram</LinkItem>
					<LinkItem>Twitter</LinkItem>
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

const Item = ({ children }) => {
	return (
		<div className={styles.item}>
			<p>{children}</p>
		</div>
	);
};

const LinkItem = ({ children, href }) => {
	return (
		<Link href={href ? href : '/'}>
			<div className={styles.item}>
				<a>{children}</a>
			</div>
		</Link>
	);
};

export default Footer;
