import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as gtag from '../lib/constants';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					{/* Global Site Tag (gtag.js) - Google Analytics */}

					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=G-VDERKV08GP`}
					/>

					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', G-VDERKV08GP, {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
					<meta property='title' content='Deshi Diary' />
					<meta property='og:title' content='Deshi Diary' key='ogtitle' />
					<link rel='icon' href='/favicon.ico' />
					<meta
						property='og:description'
						content='DeshiDiary is a local search and rating platform.

With the help of everyday netizens as well as dedicated contributors, we are compiling one of the more comprehensive business and service information databases in the country.

Whether you are looking for a restaurant to dine in, where the nearest pharmacy is, or in need of an electrician –our goal is to make Deshidiary.com an indispensable tool in your search.

We are striving to be that platform that people will turn to when they hear about a business in their neighborhood or before trying a new service.'
						key='ogdesc'
					/>
					<meta property='og:image' content='/og.svg' key='ogimage' />
					<meta
						property='og:site_name'
						content={'Deshi Diary'}
						key='ogsitename'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
