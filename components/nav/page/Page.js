import React from 'react';
import Head from 'next/head';
import styles from './Page.module.css';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

const Page = ({ title, children, landing, auth }) => {
	return (
		<div>
			<Head>
				<title>{title ? title : 'Deshi Diary'}</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
			</Head>

			{!auth && <Navbar landing={landing} />}
			<main className={auth ? styles.auth : styles.container}>{children}</main>
			{!auth && <Footer />}
		</div>
	);
};

export default Page;
