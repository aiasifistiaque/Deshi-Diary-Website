import React, { useEffect, useState } from 'react';
import {
	useAddCommentMutation,
	useGetSelfQuery,
} from '../../../store/services/apiService';
import Button from '../../util/button/Button';
import styles from './WriteComment.module.css';

const WriteComment = ({ rating }) => {
	const { data, error, isFetching, isError } = useGetSelfQuery();
	const [value, setValue] = useState();

	const [addComment, result] = useAddCommentMutation();

	const onEnterKeyPress = e => {
		if (e.keyCode === 13) {
			e.preventDefault(); // Ensure it is only this code that runs
			post();
		}
	};

	const post = () => {
		if (value && value != 'undefined' && value.length > 0) {
			addComment({ details: value, rating });
			setValue('');
		}
	};

	if (!data || isFetching || isError) return null;

	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img src={data?.image ? data.image : '/test/pp.png'} />
			</div>
			<div className={styles.details}>
				<input
					onKeyDown={onEnterKeyPress}
					placeholder='Write a comment...'
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<div>
					<Button
						small
						secondary
						onClick={post}
						loading={result.isLoading ? true : false}>
						Post
					</Button>
				</div>
			</div>
		</div>
	);
};

export default WriteComment;
