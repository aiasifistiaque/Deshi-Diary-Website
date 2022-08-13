import React from 'react';
import AboutHeading from '../components/about/AboutHeading';
import HomeSection from '../components/home/section/HomeSection';
import Page from '../components/nav/page/Page';
import Container from '../components/util/container/Container';

const Aboutpage = () => {
	return (
		<Page>
			<Container align='center'>
				<HomeSection title='Our Mission' style={{ marginTop: 16 }}>
					<AboutHeading />
				</HomeSection>
			</Container>
		</Page>
	);
};

export default Aboutpage;
