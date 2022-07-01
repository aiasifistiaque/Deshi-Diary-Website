import React, { useEffect, useState } from 'react';
import { useGetSelfQuery } from '../../store/services/apiService';
import Page from '../nav/page/Page';
import ProfileContainer from '../profile/profile-page/ProfileContainer';
import ButtonFillContainer from '../util/btn-fill-container/ButtonFillContainer';
import Button from '../util/button/Button';
import Form from '../util/form/Form';
import Input from '../util/input/Input';

const data = {
	name: 'John Doe',
	email: 'johndoe@gmail.com',
	phone: '01828392428',
	reviews: 12,
	points: 162,
	badges: 3,
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
};

const ProfileManage = () => {
	const { data, isError, error, isLoading, isFetching } = useGetSelfQuery();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		if (!isFetching && data && !isError) {
			setName(data?.name && data.name);
			setEmail(data?.email && data.email);
			setPhone(data?.phone && data.phone);
			setDescription(data?.description && data.description);
		}
	}, [isFetching]);

	return (
		<Page>
			<ProfileContainer select='manage profile' title='Manage Profile'>
				<Form>
					<Input label='Name' value={name} onChange={e => setName(e)} />
					<Input
						label='Email'
						value={email}
						onChange={e => setEmail(e)}
						disabled
					/>
					<Input label='Phone' value={phone} onChange={e => setPhone(e)} />
					<ButtonFillContainer>
						<Button fill>Update</Button>
					</ButtonFillContainer>
				</Form>
			</ProfileContainer>
		</Page>
	);
};

export default ProfileManage;
