import React, { useState } from 'react';
import Button from '../../util/button/Button';
import Checkbox from '../../util/checkbox/Checkbox';
import Input from '../../util/input/Input';
import StarRate from '../../util/star-rate/StarRate';
import styles from './SearchFilters.module.css';

const locData = [
	{ name: 'dhaka', _id: 'dhaka' },
	{ name: 'cumilla', _id: 'cumilla' },
	{ name: 'sylhet', _id: 'sylhet' },
];

const SearchFilters = () => {
	const [locations, setLocations] = useState();
	const [rating, setRating] = useState();
	const [show, setShow] = useState(true);
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<h6>Result: 12 Listings Found</h6>
				<div className={styles.showMore} onClick={() => setShow(!show)}>
					<img src='/icons/more.png' alt='+' />
				</div>
			</div>
			{show && (
				<>
					<div className={styles.filters}>
						<Input
							label='Location'
							select
							data={locData}
							onChange={e => setLocations(e)}
						/>
						<Input
							label='Popularity'
							select
							data={locData}
							onChange={e => setLocations(e)}
						/>
						<StarRate
							rating={rating}
							setRating={e => setRating(e)}
							label='Rating'
						/>
						<Checkbox
							label='Features'
							data={['Dine in', 'Takeout', 'Parking', 'Air Conditioned']}
						/>
					</div>
					<Button fill small>
						Apply Filters
					</Button>
					<Button fill small secondary>
						Reset Filters
					</Button>
				</>
			)}
		</div>
	);
};

export default SearchFilters;
