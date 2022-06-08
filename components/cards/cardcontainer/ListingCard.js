import React from 'react';
import styles from './CardContainer.module.css';
import * as util from '../../../lib/functions';

const ListingCard = ({ children }) => {
	return <div className={styles.listingcard}>{children}</div>;
};

export const CardTitle = ({ children, align }) => {
	const alignItems = util.alignItems(align);

	const customClass = `${styles.cardTitle} ${alignItems}`;

	return (
		<div className={customClass}>
			<h6> {children}</h6>
		</div>
	);
};

export const CardText = ({ children, align, style, weight }) => {
	const alignItems = util.alignItems(align);

	const customClass = `${styles.cardTitle} ${alignItems}`;

	return (
		<div
			className={customClass}
			style={{ fontWeight: weight || 400, ...style }}>
			<p> {children}</p>
		</div>
	);
};

export const CardSection = ({ children, align, justify, horizontal, p }) => {
	const alignItems = util.alignItems(align);
	const justifyContent = util.justifyContent(justify);

	const customClass = `${styles.cardSection} ${alignItems}  ${justifyContent} 
    ${horizontal && styles.horizontal}`;

	return (
		<div className={customClass} style={{ padding: p || '8px `16px' }}>
			{children}
		</div>
	);
};

export const Rating = ({ children, align, rating, justify }) => {
	const alignItems = util.alignItems(align);
	const justifyContent = util.justifyContent(justify);

	const customClass = `${styles.rating} ${alignItems} ${justifyContent}`;

	return (
		<div className={customClass}>
			<img src='/icons/star-primary.png' alt='*' />
			<img src='/icons/star-primary.png' alt='*' />
			<img src='/icons/star-primary.png' alt='*' />
			<img src='/icons/star-primary.png' alt='*' />
			<img src='/icons/star-primary.png' alt='*' />
		</div>
	);
};

export const CardImage = ({ children, align, fill }) => {
	const alignItems = util.alignItems(align);

	const customClass = `${styles.cardImage} ${alignItems}`;

	return (
		<div className={customClass} style={{ padding: fill ? '16px 0' : 16 }}>
			<img src={children} alt='img' />
		</div>
	);
};

export const CardBottomButton = ({ children, align, fill }) => {
	const alignItems = util.alignItems(align);

	const customClass = `${styles.bottomButton} ${alignItems}`;

	return (
		<div className={customClass}>
			<p>{children}</p>
		</div>
	);
};

export default ListingCard;
