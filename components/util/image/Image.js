import React from 'react';
import styles from './Image.module.css';

const Image = ({ src, alt, width }) => {
	return (
		<div className={styles.container}>
			<img src={src} alt={alt ? alt : 'img'} width={width || '100%'} />
		</div>
	);
};

export default Image;
