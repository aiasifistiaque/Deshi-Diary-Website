import React from 'react';
import styles from './SearchCotntainer.module.css';

const SearchContainer = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default SearchContainer;
