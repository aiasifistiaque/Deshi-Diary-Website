import React from 'react';
import styles from './Section.module.css';

const Section = ({ children, title, subheading, subtitle, top }) => {
	return (
		<div className={top ? styles.top : styles.container}>
			{title && (
				<div className={styles.title}>
					<h3>{title}</h3>
				</div>
			)}
			{subheading && (
				<div className={styles.title}>
					<h5>{subheading}</h5>
					{subtitle && <p>{subtitle}</p>}
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

export const SectionInput = ({ children, third }) => {
	return (
		<div className={third ? styles.sectionOneThird : styles.sectionInputs}>
			{children}
		</div>
	);
};
export default Section;
