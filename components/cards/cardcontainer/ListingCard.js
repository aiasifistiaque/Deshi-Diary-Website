import React from 'react';
import styles from './CardContainer.module.css';
import * as util from '../../../lib/functions';
import Link from 'next/link';

const ListingCard = ({ children, p }) => {
	return (
		<div className={styles.listingcard} style={{ padding: p || 0 }}>
			{children}
		</div>
	);
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

export const CardText = ({ children, align, style, weight, size, color }) => {
	const alignItems = util.alignItems(align);

	const customClass = `${styles.cardTitle} ${alignItems}`;

	return (
		<div className={customClass} style={{ ...style }}>
			<p
				style={{
					fontWeight: weight || '400',
					fontSize: size || '1rem',
					color: color || '#424242',
				}}>
				{children}
			</p>
		</div>
	);
};

export const CardSection = ({
	children,
	align,
	justify,
	horizontal,
	p,
	style,
}) => {
	const alignItems = util.alignItems(align);
	const justifyContent = util.justifyContent(justify);

	const customClass = `${styles.cardSection} ${alignItems} ${justifyContent} 
    ${horizontal && styles.horizontal}`;

	return (
		<div
			className={customClass}
			style={{ padding: p || '8px `16px', ...style }}>
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
		<div
			className={customClass}
			style={{ padding: fill ? '16px 0' : '16px 24px' }}>
			<img src={children} alt='img' />
		</div>
	);
};

export const CardBottomButton = ({ children, align, fill, href }) => {
	const customClass = `${styles.bottomButton}`;

	if (href)
		return (
			<Link href={href}>
				<div className={styles.bottomButton}>
					<div className={styles.btn}>
						<p>{children}</p>
					</div>
				</div>
			</Link>
		);

	return (
		<div className={customClass}>
			<p>{children}</p>
		</div>
	);
};

export default ListingCard;
