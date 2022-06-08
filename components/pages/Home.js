import React, { useState } from 'react';
import HomeCategories from '../home/homecat/HomeCategories';
import HomeSearch from '../home/homesearch/HomeSearch';
import Page from '../nav/page/Page';
import Container from '../util/container/Container';
import Image from '../util/image/Image';
import RecentListingCards from '../home/recentlistings/RecentListingCards';
import Activities from '../home/activities/Activities';
import HomeAbout from '../home/about/HomeAbout';
import HomeLogo from '../home/logo/HomeLogo';

const Home = () => {
	const [search, setSearch] = useState();
	return (
		<Page landing>
			<Container align='center'>
				<HomeLogo />

				<HomeSearch value={search} onChange={e => setSearch(e)} />
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
