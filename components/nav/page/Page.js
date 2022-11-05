import React, { useState } from 'react';
import Head from 'next/head';
import styles from './Page.module.css';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { expand } from '../../../store/slices/toggledSlice';

const Page = ({ title, children, landing, auth, onPageClick, blur }) => {
	const [searchFocus, setSearchFocus] = useState(false);
	const [sidebar, setSidebar] = useState(false);
	const dispatch = useDispatch();
	const { toggled } = useSelector(state => state.toggle);
	return (
		<div
			style={{
				backgroundColor: auth ? 'white' : landing ? 'white' : '#f9f9f9',
			}}
			onClick={() => {
				dispatch(expand());
				setSearchFocus(false);
			}}>
			<Head>
				<title>{title ? title : 'DeshiDiary'}</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
			</Head>

			<Navbar
				auth={auth}
				landing={landing}
				focus={searchFocus}
				setFocus={e => setSearchFocus(e)}
				setSidebar={e => setSidebar(e)}
				sidebar={sidebar}
			/>

			<Sidebar barPressed={sidebar} />

			<main
				onClick={onPageClick}
				className={
					auth ? styles.auth : landing ? styles.landing : styles.container
				}
				style={{ paddingTop: auth ? 0 : '6rem' }}>
				{/* {blur && <div className={styles.blur} onClick={onPageClick} />} */}
				{/* {toggled && <div className={styles.overlay} />} */}

				{children}
			</main>
			{!auth && <Footer />}
		</div>
	);
};

export default Page;
