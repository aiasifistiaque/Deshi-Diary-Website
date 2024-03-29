import React, { useEffect, useState } from 'react';
import HomeCategories from '../home/homecat/HomeCategories';
import HomeSearch from '../home/homesearch/HomeSearch';
import Page from '../nav/page/Page';
import Container from '../util/container/Container';
import RecentListingCards from '../home/recentlistings/RecentListingCards';
import HomeLogo from '../home/logo/HomeLogo';
import ViewMore from '../home/morebutton/ViewMore';
import HomeSection from '../home/section/HomeSection';
import ActivitiesCard from '../home/activities-card/ActivitiesCard';
import NewAbout from '../home/new-about/NewAbout';
import AllCategories from '../home/all-cat/AllCategories';

const Home = () => {
	const [search, setSearch] = useState();

	const [visible, setVisible] = useState(true);
	const [searchFocus, setSearchFocus] = useState(false);
	const [page, setPage] = useState(1);

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
				<HomeSection title='Recent Activities'>
					<ActivitiesCard page={page} />;
					<ViewMore onClick={() => setPage(page + 1)} />
				</HomeSection>
			</Container>
			<Container>
				<HomeSection title='How can I use DeshiDiary?'>
					<NewAbout />
				</HomeSection>
			</Container>
			<Container>
				<HomeSection title='Browse by Category'>
					<AllCategories />
				</HomeSection>
			</Container>
		</Page>
	);
};

export default Home;
