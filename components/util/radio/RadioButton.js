import React from 'react';
import styles from './Radio.module.css';

const RadioButton = ({ label, data, value, onChange }) => {
	return (
		<div className={styles.container}>
			{label && <label>{label}</label>}
			<div className={styles.options}>
				{data &&
					data.map((item, i) => (
						<div className={styles.option} key={i}>
							<div className={styles.select} onClick={() => onChange(item)}>
								{value == item && <div className={styles.selected} />}
							</div>
							<p>{item}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default RadioButton;
