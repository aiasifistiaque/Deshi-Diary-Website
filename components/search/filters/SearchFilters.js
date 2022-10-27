import React from 'react';
import Button from '../../util/button/Button';
import Checkbox from '../../util/checkbox/Checkbox';
import Input from '../../util/input/Input';
import StarRate from '../../util/star-rate/StarRate';
import styles from './SearchFilters.module.css';
import * as lib from '../../../lib/constants';

const SearchFilters = ({
	setLocation,
	rating,
	setRating,
	show,
	setShow,
	features,
	setFeatures,
	query,
	setQuery,
	categories,
	setCategory,
	sort,
	setSort,
	category,
	onApplyFilters,
	total,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<h6>Result: {total} Listings Found</h6>
				<div className={styles.showMore} onClick={() => setShow(!show)}>
					<img src='/icons/more.png' alt='+' />
				</div>
			</div>
			{show && (
				<>
					<div className={styles.filters}>
						<Input
							label='Search Query'
							value={query}
							onChange={e => setQuery(e)}
						/>
						<Input
							label='Location'
							select
							data={lib.data.divisions}
							onChange={e => setLocation(e)}
						/>
						<Input
							label='Select Category'
							select
							data={categories}
							onChange={e => setCategory(e)}
							preSelect={category && category}
						/>
						<Input
							label='Sort By'
							select
							data={lib.data.sort}
							onChange={e => setSort(e)}
							preSelect={sort}
						/>
						<StarRate
							rating={rating}
							setRating={e => setRating(e)}
							label='Rating'
						/>
						<Checkbox
							values={features}
							setValues={e => setFeatures(e)}
							label='Features'
							data={['Dine in', 'Takeout', 'Parking', 'Air Conditioned']}
						/>
					</div>
					<Button fill small onClick={onApplyFilters}>
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
