import React, { useState } from 'react';
import styles from './TagsButton.module.css';

const TagsButton = ({
	label,
	placeholder,
	required,
	onKeyPress,
	disabled,
	values,
	setValues,
}) => {
	const [value, setValue] = useState();
	const spaceKey = e => {
		if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
			addItem();
		}
	};

	const addItem = () => {
		if (value && value.trim().length > 0) {
			const arr = [...values];
			arr.push(value.toLowerCase());
			setValues(arr);
			setValue('');
		}
	};
	return (
		<div className={styles.container}>
			{label && (
				<label>
					{label} {required && <span style={{ color: 'red' }}>*</span>}{' '}
					<div className={styles.input}>
						<input
							onKeyDown={spaceKey}
							type={'text'}
							placeholder={placeholder}
							value={value}
							onChange={e => setValue(e.target.value)}
							onKeyPress={onKeyPress}
							required={required ? true : false}
							disabled={disabled ? true : false}
						/>
						<div className={styles.button} onClick={addItem}>
							<img src='/icons/add-white.png' alt='+' />
						</div>
					</div>
				</label>
			)}
			<div className={styles.tags}>
				{values &&
					values.map((item, i) => (
						<div key={i} className={styles.tag}>
							<p>{item}</p>
							<div
								className={styles.cancel}
								onClick={() => setValues(values.filter(x => x != item))}>
								<img src='/icons/cancel-white.png' alt='x' />
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default TagsButton;
