import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../components/util/button/Button';

import styles from './ListPage.module.css';

const ListPage = ({
	children,
	title,
	button,
	onClick,
	href,
	excel,
	isError,
	error,
}) => {
	const router = useRouter();
	const url = `/admin/${href}`;
	if (isError && error && error?.status && error.status == 401)
		return (
			<div className={styles.unauthorized}>
				<img src='/icons/warning-red.png' />
				<h3>Warning: Unauthorized Access</h3>
				<p>
					Sorry, you do not have permission to access this page, please contact
					your administrator
				</p>
			</div>
		);
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h4>{title}</h4>
				<div>
					{excel && (
						<Button small outlined onClick={excel}>
							Export to excel
						</Button>
					)}
					{href && (
						<Link href={url}>
							<Button small secondary color='primary'>
								{button}
							</Button>
						</Link>
					)}
				</div>
			</div>
			<div>{children}</div>
		</div>
	);
};

export default ListPage;
