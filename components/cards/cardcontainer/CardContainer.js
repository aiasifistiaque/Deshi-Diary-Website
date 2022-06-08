import React from 'react';
import styles from './CardContainer.module.css';

const CardContainer = ({ children, style }) => {
	return <div className={styles.container}>{children}</div>;
};

export default CardContainer;
