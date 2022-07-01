import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Sidebar.module.css';
import { expand, shrink } from '../../store/slices/toggledSlice';

const Sidebar = ({ selected, store }) => {
	const { toggled } = useSelector(state => state.toggle);
	const dispatch = useDispatch();

	const Section = ({ children, title }) => {
		return (
			<div className={styles.section}>
				<div className={styles.sectionTitle}>
					<p>{!toggled ? title : '...'}</p>
				</div>
				<div>{children}</div>
			</div>
		);
	};

	const Item = ({ children, selected, onClick }) => {
		const style = selected == children ? { color: '#f5f5f5' } : {};
		const ico = children.toLowerCase();
		const icon =
			selected == children ? `/icons/${ico}-selected.png` : `/icons/${ico}.png`;
		return (
			<div className={styles.item} onClick={onClick}>
				<img src={icon} alt='ico' />
				{!toggled && <a style={style}>{children}</a>}
			</div>
		);
	};

	const url = `/admin`;

	return (
		<div className={!toggled ? styles.container : styles.toggle}>
			<div className={styles.logo}>
				<img
					src='/icons/toggle.png'
					onClick={() => {
						if (!toggled) {
							dispatch(shrink());
						} else {
							dispatch(expand());
						}
					}}
				/>
				{!toggled && (
					<Link href={`${url}`}>
						<h6>Deshi Diary</h6>
					</Link>
				)}
			</div>
			<div className={styles.items}>
				<Link href={`${url}/overview`}>
					<Item selected={selected}>Overview</Item>
				</Link>

				<Section title={'Sections'}>
					<Link href={`${url}/listings`}>
						<Item selected={selected}>Listings</Item>
					</Link>
					<Link href={`${url}/users`}>
						<Item selected={selected}>Users</Item>
					</Link>
					<Link href={`${url}/reviews`}>
						<Item selected={selected}>Reviews</Item>
					</Link>
					<Link href={`${url}/categories`}>
						<Item selected={selected}>Categories</Item>
					</Link>
					<Link href={`${url}/flags`}>
						<Item selected={selected}>Flags</Item>
					</Link>
				</Section>

				<Section title={'Settings'}>
					<Link href={`${url}/settings`}>
						<Item selected={selected}>Settings</Item>
					</Link>
					<Link href={`${url}/featured`}>
						<Item selected={selected}>Featured</Item>
					</Link>
				</Section>
			</div>
		</div>
	);
};

export default Sidebar;
