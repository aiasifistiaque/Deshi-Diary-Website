import React from 'react';
import Page from '../nav/page/Page';
import SearchFilters from '../search/filters/SearchFilters';
import SearchMain from '../search/main/SearchMain';
import SearchContainer from '../search/search-container/SearchContainer';

const SearchPage = () => {
	return (
		<Page>
			<SearchContainer>
				<SearchFilters />
				<SearchMain />
			</SearchContainer>
		</Page>
	);
};

export default SearchPage;
