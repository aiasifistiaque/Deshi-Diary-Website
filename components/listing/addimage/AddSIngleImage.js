import React, { useRef, useState } from 'react';
import Button from '../../util/button/Button';
import styles from './AddImage.module.css';
import axios from 'axios';
import * as lib from '../../../lib/constants';
import { Placeholder } from 'semantic-ui-react';
import Label from '../../../admin-components/table/label/Label';

const AddSingleImage = ({ setImage, image, label, text }) => {
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
			console.log(data.Location);
			setImage({ src: data.Location });
			//setImages(x => [...x, { src: data.Location }]);
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
		<div className={styles.container} style={{ flexDirection: 'column' }}>
			{label && <Label>{label}</Label>}

			{loading ? (
				<Placeholder style={{ height: 100, width: 120 }}>
					<Placeholder.Image />
				</Placeholder>
			) : (
				image && (
					<div className={styles.subImages}>
						<img src={image.src} alt='..' />
					</div>
				)
			)}
			<input
				ref={imageRef}
				onChange={onSelectFile}
				hidden
				required
				type='file'
				accept='image/png, image/jpeg'></input>
			{!image && !loading ? (
				<div
					className={`${styles.addImage} ${styles.sub}`}
					onClick={() => imageRef.current.click()}>
					<img src='/icons/image.png' alt='..' />

					<a>{text ? text : 'Click to Add Image'}</a>
				</div>
			) : (
				<div style={{ marginBottom: '1rem' }}>
					<Button small secondary onClick={() => imageRef.current.click()}>
						Click to change
					</Button>
				</div>
			)}
		</div>
	);
};

export default AddSingleImage;
