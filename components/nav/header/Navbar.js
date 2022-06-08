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
				<Button small round secondary icon='add'>
					ADD A LISTING
				</Button>
			</div>

			<div className={styles.right}>
				<Button small round text>
					Login
				</Button>
				<Button small round secondary>
					Sign Up
				</Button>
			</div>
		</div>
	);
};

export default Navbar;