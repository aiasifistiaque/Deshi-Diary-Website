import React from 'react';
import styles from './Input.module.css';

const TextArea = ({
	label,
	placeholder,
	value,
	onChange,
	password,
	required,
	type,
	onKeyPress,
	disabled,
	optional,
}) => {
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

			<textarea
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e.target.value)}
				onKeyPress={onKeyPress}
				required={required ? true : false}
			/>
		</div>
	);
};

export default TextArea;
