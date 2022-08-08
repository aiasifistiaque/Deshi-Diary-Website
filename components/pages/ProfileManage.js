import React, { useEffect, useState } from 'react';
import {
	useGetSelfQuery,
	useUpdateUserMutation,
} from '../../store/services/apiService';
import AddSingleImage from '../listing/addimage/AddSIngleImage';
import Page from '../nav/page/Page';
import ProfileContainer from '../profile/profile-page/ProfileContainer';
import ButtonFillContainer from '../util/btn-fill-container/ButtonFillContainer';
import Button from '../util/button/Button';
import Form from '../util/form/Form';
import Input from '../util/input/Input';

const ProfileManage = () => {
	const { data, isError, error, isLoading, isFetching } = useGetSelfQuery();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState();

	const [update, result] = useUpdateUserMutation();

	useEffect(() => {
		if (!isFetching && data && !isError) {
			setName(data?.name && data.name);
			setEmail(data?.email && data.email);
			setPhone(data?.phone && data.phone);
			setDescription(data?.description && data.description);
		}
	}, [isFetching]);

	const onUpdate = () => {
		update({
			name,
			phone,
			description,
			image: image?.src && image.src,
		});
	};

	return (
		<Page>
			<ProfileContainer select='manage profile' title='Manage Profile'>
				<Form>
					<AddSingleImage
						image={image}
						setImage={e => setImage(e)}
						text='Click to set new profile image'
					/>
					<Input label='Name' value={name} onChange={e => setName(e)} />
					<Input
						label='Email'
						value={email}
						onChange={e => setEmail(e)}
						disabled
					/>
					<Input label='Phone' value={phone} onChange={e => setPhone(e)} />
					<ButtonFillContainer>
						<Button fill onClick={onUpdate} loading={result.isLoading}>
							Update
						</Button>
					</ButtonFillContainer>
				</Form>
			</ProfileContainer>
		</Page>
	);
};

export default ProfileManage;
