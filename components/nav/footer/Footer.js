import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';
import * as lib from '../../../lib/constants';

const Footer = () => {
	const date = new Date();

	const contactSection = (
		<>
			<Item>DeshiDiary</Item>
			<Item>Phone: </Item>
			<Item>Email: info@deshidiary.com</Item>
		</>
	);
	const categoriesSection = lib.footerCategories.map((item, i) => (
		<LinkItem href={`/search?category=${item}`} key={i}>
			{item}
		</LinkItem>
	));
	const navigationSection = (
		<>
			<LinkItem href='/'>Home</LinkItem>
			<LinkItem href='/search'>Search</LinkItem>
			<LinkItem href='/privacy-policy'>Privacy Policy</LinkItem>
			<LinkItem href='/about'>About Us</LinkItem>
		</>
	);
	const socialSection = (
		<>
			<LinkItem>Facebook</LinkItem>
			<LinkItem>Instagram</LinkItem>
			<LinkItem>Twitter</LinkItem>
		</>
	);
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.address}>{contactSection}</div>
				<div className={styles.links}>
					<Section title='Categories'>{categoriesSection}</Section>
					<Section title='Navigation'>{navigationSection}</Section>
					<Section title='Social'>{socialSection}</Section>
				</div>
			</div>
			<div className={styles.disclaimer}>
				<p>
					Copyright {date.getFullYear()}, DeshiDiary.com | ALL RIGHTS RESERVED
				</p>
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
