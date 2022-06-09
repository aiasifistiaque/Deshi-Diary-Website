import React, { useState } from 'react';
import AuthContainer from '../auth/auth/AuthContainer';
import LoginContainer from '../auth/login/LoginContainer';
import Page from '../nav/page/Page';
import Button from '../util/button/Button';
import Input from '../util/input/Input';

const Signup = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirm, setConfirm] = useState();

	return (
		<Page auth>
			<AuthContainer>
				<LoginContainer
					type='signup'
					title='Sign Up'
					subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet.'>
					<Input
						placeholder='Email address'
						value={name}
						onChange={e => setName(e)}
					/>
					<Input
						placeholder='Email address'
						value={email}
						onChange={e => setEmail(e)}
					/>
					<Input
						placeholder='Password'
						value={password}
						onChange={e => setPassword(e)}
						password
					/>
					<Input
						placeholder='Confirm Password'
						value={confirm}
						onChange={e => setConfirm(e)}
						password
					/>
					<Button fill>Sign Up</Button>
				</LoginContainer>
			</AuthContainer>
		</Page>
	);
};

export default Signup;
