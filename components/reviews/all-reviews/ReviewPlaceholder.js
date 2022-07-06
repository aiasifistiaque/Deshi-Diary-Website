import React from 'react';
import { Placeholder } from 'semantic-ui-react';
import styles from './AllReviews.module.css';

const ReviewPlaceholder = () => {
	return (
		<div className={styles.pl}>
			<Placeholder>
				<Placeholder.Header image>
					<Placeholder.Line length='short' />
					<Placeholder.Line length='medium' />
				</Placeholder.Header>
				<Placeholder.Paragraph>
					<Placeholder.Line />

					<Placeholder.Line />
					<Placeholder.Line />
					<Placeholder.Line />
				</Placeholder.Paragraph>
			</Placeholder>
		</div>
	);
};

export default ReviewPlaceholder;
