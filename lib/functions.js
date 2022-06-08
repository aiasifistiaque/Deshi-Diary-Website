/**Style functions */
import styles from './stylesheet/Stylesheet.module.css';

export const borderRadius = query => {
	switch (query) {
		case 'curved':
			return styles.curved;
		case 'rounded':
			return styles.rounded;
		case 'round':
			return styles.round;
		default:
			'';
	}
};

export const alignItems = query => {
	switch (query) {
		case 'start':
			return styles.alignStart;
		case 'end':
			return styles.alignEnd;
		case 'center':
			return styles.alignCenter;
		default:
			return styles.alignStart;
	}
};

export const justifyContent = query => {
	switch (query) {
		case 'start':
			return styles.justifyStart;
		case 'end':
			return styles.justifyEnd;
		case 'center':
			return styles.justifyCenter;
		default:
			return styles.justifyStart;
	}
};
