import React, { useState } from 'react';
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
	const [name, setName] = useState(data.name);
	const [email, setEmail] = useState(data.email);
	const [phone, setPhone] = useState(data.phone);

	return (
		<Page>
			<ProfileContainer select='manage profile' title='Manage Profile'>
				<Form>
					<Input label='Name' value={name} onChange={e => setName(e)} />
					<Input label='Email' value={email} onChange={e => setEmail(e)} />
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
