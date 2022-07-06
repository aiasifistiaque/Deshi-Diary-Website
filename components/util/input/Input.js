import React from 'react';
import styles from './Input.module.css';

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
	textArea,
	optional,
	radio,
	onKeyDown,
	noSubmit,
	preSelect,
	noDefault,
}) => {
	if (textArea)
		<div className={styles.input}>
			{label && (
				<label>
					{label} {required && <span style={{ color: 'red' }}>*</span>}{' '}
					{optional && (
						<span
							style={{
								color: '#b1b1b1',
								fontWeight: 600,
							}}>{`(Optional)`}</span>
					)}
				</label>
			)}

			<input
				type={type ? type : password ? 'password' : 'text'}
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e.target.value)}
				onKeyPress={onKeyPress}
				required={required ? true : false}
			/>
		</div>;
	if (select)
		return (
			<div className={styles.input}>
				{label && (
					<label>
						{label} {required && <span style={{ color: 'red' }}>*</span>}
					</label>
				)}
				<select
					value={value}
					required={required ? true : false}
					onChange={e => {
						onChange(e.target.value);
					}}
					style={{ textTransform: 'capitalize' }}>
					{!noDefault ? (
						preSelect ? (
							<option disabled value={preSelect._id}>
								{preSelect.name}
							</option>
						) : (
							<option value='' selected={true} disabled>
								select your option
							</option>
						)
					) : null}

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
			{label && (
				<label>
					{label} {required && <span style={{ color: 'red' }}>*</span>}{' '}
					{optional && (
						<span
							style={{
								color: '#b1b1b1',
								fontWeight: 600,
							}}>{`(Optional)`}</span>
					)}
				</label>
			)}

			<input
				type={type ? type : password ? 'password' : 'text'}
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e.target.value)}
				onKeyPress={onKeyPress}
				required={required ? true : false}
				disabled={disabled ? true : false}
				min={min}
				style={{ paddingBottom: textArea ? 200 : 0 }}
			/>
		</div>
	);
};

export default Input;
