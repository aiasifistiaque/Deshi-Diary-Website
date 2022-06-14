import React from 'react';
import Label from '../label/Label';
import styles from './Checkbox.module.css';

const Checkbox = ({ label, data }) => {
	return (
		<div className={styles.container}>
			{label && <Label>{label}</Label>}
			<div className={styles.items}>
				{data &&
					data.map((item, i) => (
						<div className={styles.item} key={i}>
							<div className={styles.box}></div>
							<div className={styles.text}>
								<p>{item}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Checkbox;
