import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
	useGetCategoriesQuery,
	useGetCategoryByNameQuery,
	useGetListingsQuery,
} from '../../store/services/apiService';
import Page from '../nav/page/Page';
import SearchFilters from '../search/filters/SearchFilters';
import SearchMain from '../search/main/SearchMain';
import SearchContainer from '../search/search-container/SearchContainer';

const SearchPage = () => {
	const router = useRouter();

	const categoryData = useGetCategoryByNameQuery(router.query.category);
	const categories = useGetCategoriesQuery();

	const [locations, setLocations] = useState();
	const [rating, setRating] = useState();
	const [show, setShow] = useState(true);
	const [query, setQuery] = useState(router.query.search);
	const [features, setFeatures] = useState([]);
	const { data, isLoading, isFetching, isError, error } = useGetListingsQuery();
	const [category, setCategory] = useState();

	useEffect(() => {
		if (!categoryData.isFetching && !categoryData.isError) {
			setCategory(categoryData.data._id);
		}
	}, [categoryData.isFetching]);

	return (
		<Page>
			<SearchContainer>
				<SearchFilters
					locations={locations}
					setLocations={e => setLocations(e)}
					rating={rating}
					setRating={e => setRating(e)}
					show={show}
					setShow={e => setShow(e)}
					features={features}
					setFeatures={e => setFeatures(e)}
					query={query}
					setQuery={setQuery}
					setCategory={e => setCategory(e)}
					categories={
						!categories.isFetching && !categories.isError
							? categories.data.doc
							: []
					}
				/>

				<SearchMain data={data && data.doc} isLoading={isFetching} />
			</SearchContainer>
		</Page>
	);
};

export default SearchPage;
