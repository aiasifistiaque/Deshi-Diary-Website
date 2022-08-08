import React, { useEffect, useState } from 'react';
import styles from './AllPhotos.module.css';
import { Image, Modal, Popup, Button, Placeholder } from 'semantic-ui-react';
import { useGetPhotosQuery } from '../../../store/services/apiService';

const AllPhotos = ({ id, images }) => {
	const [page, setPage] = useState(1);
	const [photos, setPhotos] = useState(images ? images : []);
	const [open, setOpen] = useState(false);
	const { data, isFetching, isLoading } = useGetPhotosQuery({
		page,
		id: id,
		perpage: 9999,
	});

	useEffect(() => {
		if (!isFetching && data && data.doc) {
			const arr = [...photos, ...data.doc];
			setPhotos(arr);
		}
	}, [page, isLoading]);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.button} onClick={() => setOpen(true)}>
					<h6>View All Photos</h6>
				</div>
			</div>
			<Modal
				size='large'
				open={open}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}>
				<Modal.Header>All Images</Modal.Header>
				<Modal.Content image>
					<div className={styles.items}>
						{photos.map((item, i) => (
							<div key={i} className={styles.item}>
								<img
									src={
										item?.src && item.src ? item.src : item?.image && item.image
									}
									alt='...'
								/>
							</div>
						))}
					</div>
				</Modal.Content>
			</Modal>
		</>
	);
};

export default AllPhotos;
