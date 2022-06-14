import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './Navbar.module.css';
import { Dropdown } from 'semantic-ui-react';
import Button from '../../util/button/Button';

const Navbar = ({ landing }) => {
	return (
		<div className={landing ? styles.landing : styles.nav}>
			<div className={styles.left}>
				<Button small round secondary icon='add' href='/add-listing'>
					ADD A LISTING
				</Button>
			</div>

			{!landing && (
				<div className={styles.middle}>
					<Link href='/'>
						<img src='/logo.png' alt='Deshi Diary' />
					</Link>
				</div>
			)}

			<div className={styles.right}>
				<Button small round text href='/login'>
					Login
				</Button>
				<Button small round secondary href='/signup'>
					Sign Up
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
