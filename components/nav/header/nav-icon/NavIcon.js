import Link from 'next/link';
import React from 'react';
import styles from './NavIcon.module.css';

const NavIcon = ({ icon, href, onClick, type }) => {
	const theme = type ? type : 'light';

	if (href)
		return (
			<Link href={href}>
				<div className={styles.container}>
					<img src={`/icons/${icon}-${theme}.png`} alt={icon} />
				</div>
			</Link>
		);

	return (
		<div className={styles.container} onClick={onClick}>
			<img src={`/icons/${icon}-${theme}.png`} alt={icon} />
		</div>
	);
};

export default NavIcon;
