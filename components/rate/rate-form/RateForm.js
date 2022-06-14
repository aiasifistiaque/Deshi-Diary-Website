import React, { useState } from 'react';
import { Radio } from 'semantic-ui-react';
import Button from '../../util/button/Button';
import Input from '../../util/input/Input';
import RadioButton from '../../util/radio/RadioButton';
import { SectionInput } from '../../util/section/Section';
import styles from './RateForm.module.css';
import StarRate from '../../util/star-rate/starRate.js';

const RateForm = () => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [date, setDate] = useState();
	const [recommend, setRecommend] = useState('Yes');
	const [rating, setRating] = useState(0);

	return (
		<div className={styles.container}>
			<SectionInput>
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
				/>
				<Input
					value={description}
					onChange={e => setDescription(e)}
					label='Your Review Details'
					textArea
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
				/>
				<div className={styles.submit}>
					<div className={styles.button}>
						<Button fill>Submit Review</Button>
					</div>
					<div className={styles.disclaimer}>
						<p>
							By clicking submit, I certify that this review is based on my own
							experience and is my genuine opinion of this restaurant, and that
							I have no personal or business relationship with this
							establishment.
						</p>
					</div>
				</div>
			</SectionInput>
		</div>
	);
};

export default RateForm;
