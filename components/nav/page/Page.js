import React from 'react';
import Head from 'next/head';
import styles from './Page.module.css';
import Navbar from '../header/Navbar';

const Page = ({ title, children, landing }) => {
	return (
		<div>
			<Head>
				<title>{title ? title : 'Deshi Diary'}</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
			</Head>

			<Navbar landing={landing} />
			<main className={styles.container}>{children}</main>
		</div>
	);
};

export default Page;
