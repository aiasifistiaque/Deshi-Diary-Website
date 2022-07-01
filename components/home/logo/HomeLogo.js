import React from 'react';
import styles from './HomeLogo.module.css';
import { Image, Transition } from 'semantic-ui-react';
const animation = 'fade down';
const duration = 200;

const HomeLogo = ({ visible }) => {
	return (
		<div className={styles.container}>
			<Image centered size='large' src='/logo.png' className={styles.image} />
		</div>
	);
};

export default HomeLogo;
