import React, { useRef, useState } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { Image, Modal, Popup, Button, Placeholder } from 'semantic-ui-react';
import styles from './BusinnessName.module.css';
// import Button from '../../util/button/Button';
import * as lib from '../../../lib/constants';
import axios from 'axios';
import { useAddPhotoMutation } from '../../../store/services/apiService';

const AddImage = ({ id }) => {
	const [open, setOpen] = React.useState(false);
	const imageRef = useRef(null);
	const [image, setImage] = useState();
	const [addPhoto, result] = useAddPhotoMutation();

	const onSelectFile = async e => {
		console.log('file selected');
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

			console.log(data);
			setImage({ src: data.Location });

			if (data) {
				setLoading(false);
			}
		} catch (e) {
			console.log(e.message);
			setLoading(false);
		}
	};

	const onUpload = () => {
		if (!image || !image.src) return;
		addPhoto({ listing: id, image: image.src });
	};

	const [loading, setLoading] = useState(false);

	return (
		<>
			<div className={styles.reviewbutton} onClick={() => setOpen(true)}>
				<Popup
					content='Add Photo'
					trigger={
						<div className={styles.camera}>
							<AiOutlineCamera color='dodgerblue' />
						</div>
					}
				/>
			</div>

			<Modal
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				open={open}
				closeOnDimmerClick={false}>
				<Modal.Header>Upload image</Modal.Header>
				<Modal.Content image>
					{loading ? (
						<Placeholder style={{ height: 150, width: 150 }}>
							<Placeholder.Image square />
						</Placeholder>
					) : (
						<Image
							size='small'
							src={
								image
									? image.src
										? image.src
										: 'https://react.semantic-ui.com/images/wireframe/image-square.png'
									: 'https://react.semantic-ui.com/images/wireframe/image-square.png'
							}
							wrapped
						/>
					)}

					<Modal.Description>
						{result.isSuccess ? (
							<div>
								<h5>Image Uploaded Successfully</h5>
								<a
									onClick={() => imageRef.current.click()}
									style={{
										color: 'dodgerblue',
										fontSize: '1.5rem',
										fontWeight: '600',
									}}>
									Upload Another Image
								</a>
								<Button small onClick={() => setOpen(false)}>
									Close
								</Button>
							</div>
						) : (
							<a
								onClick={() => imageRef.current.click()}
								style={{
									color: 'dodgerblue',
									fontSize: '1.5rem',
									fontWeight: '600',
								}}>
								{image && image.src ? 'Change Image' : 'Choose Image'}
							</a>
						)}
					</Modal.Description>
					<input
						ref={imageRef}
						onChange={onSelectFile}
						hidden
						type='file'
						accept='image/png, image/jpeg'></input>
				</Modal.Content>
				{result.isLoading ? (
					<Modal.Actions>
						<Button small>Processing...</Button>
					</Modal.Actions>
				) : (
					<Modal.Actions>
						<Button
							small
							onClick={() => setOpen(false)}
							style={{ marginRight: 4 }}>
							Cancel
						</Button>

						<Button small onClick={onUpload}>
							Upload
						</Button>
					</Modal.Actions>
				)}
			</Modal>
		</>
	);
};

export default AddImage;
