import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { expand, shrink } from '../../../../store/slices/toggledSlice';
import styles from './Toggle.module.css';

const Toggle = () => {
	const { toggled } = useSelector(state => state.toggle);
	const dispatch = useDispatch();
	return (
		<div
			className={styles.toggle}
			onClick={e => {
				e.stopPropagation();
				toggled ? dispatch(expand()) : dispatch(shrink());
			}}>
			<img
				src={
					toggled ? 'icons/cancel-light.png' : '/icons/toggle-pure-black.png'
				}
				alt='#'
			/>
		</div>
	);
};

export default Toggle;
