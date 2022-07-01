import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../../util/button/Button';
import Input from '../../util/input/Input';
import RadioButton from '../../util/radio/RadioButton';
import { SectionInput } from '../../util/section/Section';
import styles from './RateForm.module.css';
import StarRate from '../../util/star-rate/StarRate.js';
import TextArea from '../../util/input/TextArea';
import { useAddRatingMutation } from '../../../store/services/apiService';

const RateForm = ({ query }) => {
	const [addRating, result] = useAddRatingMutation();
	const router = useRouter();
	//
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [date, setDate] = useState();
	const [recommend, setRecommend] = useState('Yes');
	const [rating, setRating] = useState(1);

	/**Functions */
	const onSubmit = e => {
		e.preventDefault();
		addRating({
			listing: query,
			date,
			recommend: 'Yes' ? 1 : 0,
			title,
			details: description,
			rating,
		});
	};

	/**useEffect hooks */
	useEffect(() => {
		const { isLoading, isSuccess } = result;
		if (!isLoading && isSuccess) {
			router.push(`/reviews/${query}`);
		}
	}, [result.isLoading]);

	return (
		<div className={styles.container}>
			<SectionInput>
				<form onSubmit={onSubmit}>
					<StarRate
						label='Your Overall Rating for this place'
						rating={rating}
						setRating={e => setRating(e)}
						pointer
					/>

					<Input
						value={title}
						onChange={e => setTitle(e)}
						label='Title'
						placeholder='Summarize your review in short'
						required
					/>
					<TextArea
						value={description}
						onChange={e => setDescription(e)}
						label='Your Review Details'
						placeholder='Enter your review details here'
						optional
					/>
					<Input
						value={date}
						onChange={e => setDate(e)}
						label='Date of your visit'
						placeholder='eg. 22Arp,2022'
					/>

					<RadioButton
						label='Do you recommend this place?'
						data={['Yes', 'No']}
						value={recommend}
						onChange={e => setRecommend(e)}
						required
					/>
					<div className={styles.submit}>
						<div className={styles.button}>
							<Button fill submit loading={result.isLoading}>
								Submit Review
							</Button>
						</div>
						<div className={styles.disclaimer}>
							<p>
								By clicking submit, I certify that this review is based on my
								own experience and is my genuine opinion of this restaurant, and
								that I have no personal or business relationship with this
								establishment.
							</p>
						</div>
					</div>
				</form>
			</SectionInput>
		</div>
	);
};

export default RateForm;
