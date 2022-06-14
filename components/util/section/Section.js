import React from 'react';
import styles from './Section.module.css';

const Section = ({ children, title }) => {
	return (
		<div className={styles.container}>
			{title && (
				<div className={styles.title}>
					<h3>{title}</h3>
				</div>
			)}
			{children}
		</div>
	);
};

export const SectionItem = ({ title, children, arr, href, icon }) => {
	return (
		<div className={styles.item}>
			{title && (
				<div className={styles.title}>
					<h6>{title}</h6>
				</div>
			)}

			<div className={styles.value}>
				{arr ? (
					children.map((item, i) => (
						<p key={i}>
							{item}
							{i < children.length - 1 && ', '}
						</p>
					))
				) : href ? (
					<a href={href}>{children}</a>
				) : (
					<p>
						{icon && <img src={`/icons/${icon}.png`} alt={'i'} />}
						{children}
					</p>
				)}
			</div>
		</div>
	);
};

export const SectionListContainer = ({ children }) => {
	return <div className={styles.lists}>{children}</div>;
};

export const SectionList = ({ children, icon }) => {
	return (
		<div className={styles.list}>
			{icon && <img src={`/icons/${icon}.png`} alt={'i'} />}
			<p>{children}</p>
		</div>
	);
};

export default Section;
