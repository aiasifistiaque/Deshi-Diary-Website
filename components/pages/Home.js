import React, { useEffect, useState } from 'react';
import HomeCategories from '../home/homecat/HomeCategories';
import HomeSearch from '../home/homesearch/HomeSearch';
import Page from '../nav/page/Page';
import Container from '../util/container/Container';
import RecentListingCards from '../home/recentlistings/RecentListingCards';
import Activities from '../home/activities/Activities';
import HomeAbout from '../home/about/HomeAbout';
import HomeLogo from '../home/logo/HomeLogo';
import ViewMore from '../home/morebutton/ViewMore';
import HomeSection from '../home/section/HomeSection';
import ActivitiesCard from '../home/activities-card/ActivitiesCard';

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
					{Array.from(Array(page), (e, i) => {
						return <ActivitiesCard key={i} page={i + 1} />;
					})}

					<ViewMore onClick={() => setPage(page + 1)} />
				</HomeSection>
			</Container>
			<Container>
				<HomeAbout />
			</Container>
		</Page>
	);
};

export default Home;
