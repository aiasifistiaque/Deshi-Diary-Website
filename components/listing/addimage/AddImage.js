import React, { useRef, useState } from 'react';
import styles from './AddImage.module.css';
import axios from 'axios';
import * as lib from '../../../lib/constants';
import { Placeholder } from 'semantic-ui-react';

const AddImage = ({ setImages, images }) => {
	const imageRef = useRef();
	const [loading, setLoading] = useState(false);

	const onSelectFile = async e => {
		setLoading(true);
		if (!e.target.files || e.target.files.length === 0) {
			setLoading(false);
			return;
		}

		const formData = new FormData();
		formData.append('image', e.target.files[0]);

		try {
			const { data } = await axios.post(
				`${lib.api.backend}/api/upload`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);
			//setImage(data.Location);
			console.log(data);
			setImages(x => [...x, { src: data.Location }]);
			if (data) {
				setLoading(false);
			}
		} catch (e) {
			console.log(e.message);
			setLoading(false);
		}

		//	const objectUrl = URL.createObjectURL(e.target.files[0]);
	};

	return (
		<div className={styles.container}>
			{images &&
				images.map((item, i) => (
					<div className={styles.images} key={i}>
						<img src={item.src} alt='..' />
					</div>
				))}
			{loading && (
				<div className={styles.images}>
					<Placeholder style={{ height: '100%', width: '100%' }}>
						<Placeholder.Image />
					</Placeholder>
				</div>
			)}
			<div className={styles.addImage}>
				<input
					ref={imageRef}
					onChange={onSelectFile}
					hidden
					type='file'
					accept='image/png, image/jpeg'></input>
				<img src='/icons/image.png' alt='..' />

				<p>
					Add your desired images here{' '}
					<a onClick={() => imageRef.current.click()}>Click to Browse</a>
				</p>
			</div>
		</div>
	);
};

export default AddImage;
