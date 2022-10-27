import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
	useGetCategoriesQuery,
	useGetCategoryByNameQuery,
	useGetFilteredSearchQuery,
} from '../../store/services/apiService';
import Page from '../nav/page/Page';
import SearchFilters from '../search/filters/SearchFilters';
import SearchMain from '../search/main/SearchMain';
import SearchContainer from '../search/search-container/SearchContainer';
import * as lib from '../../lib/constants';

const SearchPage = () => {
	const router = useRouter();
	//
	const categoryData = useGetCategoryByNameQuery(router.query.category);
	const categories = useGetCategoriesQuery();

	const [query, setQuery] = useState(router.query.search);
	const [rating, setRating] = useState();
	const [show, setShow] = useState(true);
	const [features, setFeatures] = useState([]);
	const [location, setLocation] = useState();

	const [category, setCategory] = useState();
	const [sort, setSort] = useState(lib.data.sort[0]);

	const [filters, setFilters] = useState({ search: query });

	const [finalQuery, setFinalQuery] = useState();
	const [fianlCategory, setFinalCategory] = useState();
	const [finalSort, setFinalSort] = useState();
	const [finalLocation, setFinalLocation] = useState();
	const [finalRating, setFinalRating] = useState();
	const [page, setPage] = useState(1);

	const { data, isFetching, isError, isLoading } = useGetFilteredSearchQuery({
		search: finalQuery,
		category: fianlCategory,
		sort: finalSort,
		location: finalLocation,
		rating: finalRating,
		page,
	});

	//

	useEffect(() => {
		if (!categoryData.isFetching && categoryData.data) {
			setFinalCategory(categoryData.data._id);
		}
		if (categoryData?.isError) {
			console.log('error occured');
			categoryData?.error?.data?.message &&
				categoryData?.error?.data?.message == 'Category Not Found' &&
				setFinalCategory('62badfcafbc2dcda94c85b48');
		}
	}, [categoryData.isFetching]);

	const onApplyFilters = () => {
		setFinalCategory(category);
		setFinalLocation(location);
		setFinalQuery(query);
		setFinalSort(sort);
		setFinalRating(rating);
		setPage(1);
	};

	return (
		<Page>
			<SearchContainer>
				<SearchFilters
					total={!isLoading && data ? data.totalDocs : 0}
					onApplyFilters={onApplyFilters}
					setLocation={e => setLocation(e)}
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
					sort={sort}
					setSort={e => setSort(e)}
				/>

				<SearchMain
					data={data && data.doc}
					isLoading={isLoading}
					page={page}
					setPage={e => setPage(e)}
					isError={isError}
					isFetching={isFetching}
					doc={data && data}
				/>
			</SearchContainer>
		</Page>
	);
};

export default SearchPage;
