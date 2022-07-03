import React from 'react';
import { useState } from 'react';
import styles from './Replies.module.css';

const Replies = ({ dat }) => {
	const [data, setData] = useState(dat);
	return (
		<div className={styles.replies}>
			<h5>Replies</h5>

			{data &&
				data.map((item, i) => (
					<div className={styles.reply} key={i}>
						<div className={styles.details}>
							<div className={styles.image}>
								<img src={item.user.img} />
							</div>
							<div className={styles.usr}>
								<h6>{item.user.name}</h6>
								<p className={styles.date}>{item.date}</p>
								<div className={styles.text}>
									<p>{item.details}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			<div className={styles.more}>
				<a onClick={() => setData(x => [...x, ...dat])}>View More replies</a>
			</div>
		</div>
	);
};

export default Replies;
