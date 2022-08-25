import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Dropdown } from 'semantic-ui-react';
import Button from '../../util/button/Button';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/slices/authSlice';
import useAuth from '../../../hooks/useAuth';
import { useGetSelfQuery } from '../../../store/services/apiService';
import HeaderSearchBar from './search-bar/HeaderSearchBar';
import NavIcon from './nav-icon/NavIcon';
import LargeScreen from '../../util/large-screen/LargeScreen';
import SmallScreen from '../../util/large-screen/SmallScreen';
import Toggle from './toggle/Toggle';

const Navbar = ({ landing, focus, setFocus, auth }) => {
	const { isLoggedIn, loading } = useAuth();
	const dispatch = useDispatch();
	const { data, error, isLoading, isError } = useGetSelfQuery();
	const [search, setSearch] = useState(false);

	const profileDropDown = loading ? null : isLoggedIn ? (
		<div className={styles.logout}>
			<Dropdown
				multiple
				floating
				icon={null}
				text={<ProfileName isLoading={isLoading} data={data && data} />}>
				<Dropdown.Menu>
					<Link href='/profile/a'>
						<Dropdown.Item text={<p>View Profile</p>} />
					</Link>
					<Link href='/profile/manage-profile'>
						<Dropdown.Item text={<p>Settings</p>} />
					</Link>

					<Dropdown.Item
						text={<p>logout</p>}
						onClick={() => dispatch(logout())}
					/>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	) : (
		<>
			<Button small round text href='/login'>
				Login
			</Button>
			<Button small round secondary href='/signup'>
				Sign Up
			</Button>
		</>
	);

	return (
		<div
			className={landing ? styles.landing : styles.nav}
			style={{
				...(landing && { boxShadow: 'none' }),
				...(auth && { boxShadow: 'none', backgroundColor: 'transparent' }),
			}}>
			<div className={styles.left}>
				<Toggle />
				{!landing && (
					<LargeScreen>
						<HeaderSearchBar focus={focus} setFocus={e => setFocus(e)} />
					</LargeScreen>
				)}
				{search && (
					<SmallScreen>
						<HeaderSearchBar focus={focus} setFocus={e => setFocus(e)} />
					</SmallScreen>
				)}
			</div>

			{!search && (
				<div className={styles.middle}>
					<Link href='/'>
						<img src='/logo.png' alt='Deshi Diary' />
					</Link>
				</div>
			)}

			<div className={styles.right}>
				<LargeScreen>
					<NavIcon icon='add' href='/add-listing' />
				</LargeScreen>

				<SmallScreen>
					<NavIcon
						icon={search ? 'cancel' : 'search'}
						onClick={() => setSearch(!search)}
					/>
				</SmallScreen>
				<LargeScreen>
					<NavIcon icon='notification' href='/notifications' />
				</LargeScreen>

				<LargeScreen>{profileDropDown}</LargeScreen>
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

export default Navbar;
