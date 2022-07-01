import React, { useEffect, useState } from 'react';
import HomeCategories from '../home/homecat/HomeCategories';
import HomeSearch from '../home/homesearch/HomeSearch';
import Page from '../nav/page/Page';
import Container from '../util/container/Container';
import RecentListingCards from '../home/recentlistings/RecentListingCards';
import Activities from '../home/activities/Activities';
import HomeAbout from '../home/about/HomeAbout';
import HomeLogo from '../home/logo/HomeLogo';

const Home = () => {
	const [search, setSearch] = useState();

	const [visible, setVisible] = useState(true);
	const [searchFocus, setSearchFocus] = useState(false);

	useEffect(() => {
		search && search.length >= 0 ? setVisible(false) : setVisible(true);
	}, [search]);

	return (
		<Page landing onPageClick={() => setSearchFocus(false)} blur={searchFocus}>
			<Container align='center'>
				<HomeLogo visible={visible} />

				<HomeSearch
					onClick={null}
					value={search}
					onChange={e => setSearch(e)}
					focus={searchFocus}
					setFocus={e => setSearchFocus(e)}
				/>
				<HomeCategories />
			</Container>
			<Container>
				<RecentListingCards />
			</Container>
			<Container>
				<Activities />
			</Container>
			<Container>
				<HomeAbout />
			</Container>
		</Page>
	);
};

export default Home;
