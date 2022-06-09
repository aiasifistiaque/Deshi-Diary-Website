import Link from 'next/link';
import React from 'react';
import styles from './LoginContainer.module.css';

const LoginContainer = ({ children, title, subtitle, type }) => {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<div className={styles.title}>
					<h3>{title}</h3>
					{subtitle && <p>{subtitle}</p>}
				</div>
				<div className={styles.body}>{children}</div>
			</div>

			<div className={styles.footer}>
				{type != 'signup' ? (
					<p>
						Do not have an accout?
						<Link href='/signup'>
							<a>Sign Up</a>
						</Link>
					</p>
				) : (
					<p>
						Already have an account?{' '}
						<Link href='/login'>
							<a>Login</a>
						</Link>
					</p>
				)}
			</div>
		</div>
	);
};

export default LoginContainer;
