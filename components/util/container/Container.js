import React from 'react';
import styles from './Container.module.css';
import * as util from '../../../lib/functions';

const Container = ({
	children,
	style,
	fluid,
	color,
	bg,
	horizontal,
	shadow,
	round,
	rounded,
	curved,
	align,
	justify,
	width,
	radius,
}) => {
	const rad = curved
		? 'curved'
		: rounded
		? 'rounded'
		: round
		? 'round'
		: radius;

	const borderRadius = util.borderRadius(rad);
	const alignItems = util.alignItems(align);
	const justifyContent = util.justifyContent(justify);

	const contentWidth =
		width == 'fill' ? styles.fill : width == 'fit' ? styles.fit : '';

	const flexDirection = horizontal ? styles.horizontal : styles.row;

	const customClass = `${styles.container} ${fluid && styles.fluid}
	 ${flexDirection} ${shadow && styles.shadow} 
	 ${borderRadius} ${alignItems} ${justifyContent} ${contentWidth}`;
	return (
		<div
			className={customClass}
			style={{
				...(color && { color: color }),
				...(bg && { backgroundColor: bg }),
				...style,
			}}>
			{children}
		</div>
	);
};

export default Container;
