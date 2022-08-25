import React from 'react';
import Page from '../components/nav/page/Page';
import styled from '@emotion/styled';
import Button from '../components/util/button/Button';

const Notfound = () => {
	return (
		<Page>
			<Container>
				<h1>404</h1>
				<h5>
					Ooops!
					<br />
					Page Not Found
				</h5>
				<p>
					This page does not exist or was removed!
					<br />
					We suggest you back to home
				</p>
				<div style={{ marginTop: 16 }}>
					<Button href='/'>Back to Home</Button>
				</div>
			</Container>
		</Page>
	);
};

const Container = styled.div({
	display: 'flex',
	marginTop: '4rem',
	flexDirection: 'column',
	gap: 4,
	textAlign: 'center',
});

export default Notfound;
