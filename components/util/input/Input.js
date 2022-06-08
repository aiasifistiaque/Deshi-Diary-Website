import React from 'react';
import styles from './Auth.module.css';

const Input = ({
	label,
	placeholder,
	value,
	onChange,
	password,
	required,
	type,
	onKeyPress,
	disabled,
	min,
	select,
	data,
	objectSelect,
	other,
}) => {
	if (select)
		return (
			<div className={styles.input}>
				<label>
					{label} {required && <span style={{ color: 'red' }}>*</span>}
				</label>
				<select
					value={value}
					required={required ? true : false}
					onChange={e => {
						onChange(e.target.value);
					}}
					style={{ textTransform: 'capitalize' }}>
					<option value='' selected disabled>
						select your option
					</option>

					{data.map((option, i) => (
						<option
							key={i}
							value={objectSelect ? JSON.stringify(option) : option._id}>
							{option.name}
						</option>
					))}
					{other && <option value='other'>other</option>}
				</select>
			</div>
		);
	return (
		<div className={styles.input}>
			<label>
				{label} {required && <span style={{ color: 'red' }}>*</span>}
			</label>
			<input
				type={type ? type : password ? 'password' : 'text'}
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e.target.value)}
				onKeyPress={onKeyPress}
				required={required ? true : false}
				disabled={disabled ? true : false}
				min={min}
			/>
		</div>
	);
};

export default Input;
