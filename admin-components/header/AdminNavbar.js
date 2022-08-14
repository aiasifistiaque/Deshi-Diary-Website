import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';
import { Dropdown } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import useAuth from '../../hooks/useAuth';
import { useGetSelfQuery } from '../../store/services/apiService';

const AdminNavbar = ({ landing }) => {
	const { isLoggedIn, loading } = useAuth();
	const dispatch = useDispatch();
	const { data, error, isLoading, isError } = useGetSelfQuery();
	return (
		<div className={landing ? styles.landing : styles.nav}>
			<div className={styles.left}></div>

			{!landing && (
				<div className={styles.middle}>
					<Link href='/'>
						<img src='/logo.png' alt='Deshi Diary' />
					</Link>
				</div>
			)}

			<div className={styles.right}>
				{loading ? null : isLoggedIn ? (
					<div className={styles.logout}>
						<Dropdown
							multiple
							floating
							icon={null}
							text={<ProfileName isLoading={isLoading} data={data && data} />}>
							<Dropdown.Menu>
								<Link href='/'>
									<Dropdown.Item text={<p>Back Home</p>} />
								</Link>

								<Dropdown.Item
									text={<p>logout</p>}
									onClick={() => dispatch(logout())}
								/>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

const ProfileName = ({ isLoading, data }) => {
	if (isLoading || !data) return null;
	return (
		<div className={styles.profile}>
			<img src={data?.image ? data.image : '/test/pp.png'} />
			<div className={styles.icon}>
				<p>{data?.name && data.name}</p>
				<img src={'/icons/dropdown.png'} />
			</div>
		</div>
	);
};

export default AdminNavbar;
