import React from 'react';
import Label from '../label/Label';
import styles from './Checkbox.module.css';

const Checkbox = ({ label, data, values, setValues }) => {
	const onAdd = item => {
		let arr = values;
		const checked = isChecked(item);
		if (checked) {
			setValues(values.filter(x => x != item));
		} else {
			//arr.push(item);
			setValues(val => [...val, item]);
		}
	};
	const isChecked = item => {
		return values.includes(item);
	};
	return (
		<div className={styles.container}>
			{label && <Label>{label}</Label>}
			<div className={styles.items}>
				{data &&
					data.map((item, i) => (
						<div className={styles.item} key={i} onClick={() => onAdd(item)}>
							<div className={isChecked(item) ? styles.checked : styles.box}>
								{isChecked(item) && <img src='/icons/tick-white.png' alt='*' />}
							</div>
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
