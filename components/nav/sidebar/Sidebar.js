import React from 'react';
import styles from './Sidebar.module.css';
import { useSpring, animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import { expand } from '../../../store/slices/toggledSlice';
import { useRouter } from 'next/router';
import useAuth from '../../../hooks/useAuth';
import { logout } from '../../../store/slices/authSlice';
import SmallScreen from '../../util/large-screen/SmallScreen';

const Sidebar = () => {
	const { toggled } = useSelector(state => state.toggle);
	const dispatch = useDispatch();
	const springStyle = useSpring({
		opacity: toggled ? 1 : 0,
		opacity: !toggled ? 0 : 1,
		delay: 0,
	});
	return (
		<animated.div style={springStyle}>
			<div
				className={styles.container}
				onClick={e => e.stopPropagation()}
				style={{ display: toggled ? 'flex' : 'none' }}>
				<div className={styles.cancel} onClick={() => dispatch(expand())}>
					<img src='/icons/cancel-light.png' alt='X' />
				</div>
				<Items />
			</div>
		</animated.div>
	);
};

const Items = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { isLoggedIn, loading } = useAuth();

	return (
		<div className={styles.items}>
			{!loading && isLoggedIn ? (
				<Item
					onClick={() => {
						dispatch(expand());
						router.push('/profile/overview');
					}}>
					Profile
				</Item>
			) : (
				<>
					<Item
						onClick={() => {
							dispatch(expand());
							router.push('/login');
						}}>
						Login
					</Item>
					<Item
						onClick={() => {
							dispatch(expand());
							router.push('/signup');
						}}>
						Singup
					</Item>
				</>
			)}

			<Item
				onClick={() => {
					dispatch(expand());
					router.push('/');
				}}>
				Home
			</Item>

			<Item
				onClick={() => {
					dispatch(expand());
					router.push('/search');
				}}>
				Search
			</Item>

			{!loading && isLoggedIn && (
				<Item
					onClick={() => {
						dispatch(expand());
						router.push('/leadboard');
					}}>
					Leadboard
				</Item>
			)}
			{!loading && isLoggedIn && (
				<Item
					onClick={() => {
						dispatch(expand());
						router.push('/add-listing');
					}}>
					Add a Listing
				</Item>
			)}
			<SmallScreen>
				{!loading && isLoggedIn && (
					<Item
						onClick={() => {
							dispatch(expand());
							router.push('/notifications');
						}}>
						Notifications
					</Item>
				)}
			</SmallScreen>

			<Item
				onClick={() => {
					dispatch(expand());
					router.push('/about');
				}}>{`About us`}</Item>
			{!loading && isLoggedIn && (
				<Item onClick={() => dispatch(logout())}> Logout</Item>
			)}
		</div>
	);
};

const Item = ({ children, href, onClick }) => {
	return (
		<div className={styles.item} onClick={onClick}>
			<a>{children}</a>
		</div>
	);
};

export default Sidebar;
