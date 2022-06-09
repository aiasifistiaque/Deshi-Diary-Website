import React, { useState } from 'react';
import AuthContainer from '../auth/auth/AuthContainer';
import LoginContainer from '../auth/login/LoginContainer';
import Page from '../nav/page/Page';
import Button from '../util/button/Button';
import Input from '../util/input/Input';

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<Page auth>
			<AuthContainer>
				<LoginContainer
					title='login'
					subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet.'>
					<Input
						placeholder='E-mail'
						value={email}
						onChange={e => setEmail(e)}
					/>
					<Input
						placeholder='Password'
						value={password}
						onChange={e => setPassword(e)}
						password
					/>
					<Button fill>Login</Button>
				</LoginContainer>
			</AuthContainer>
		</Page>
	);
};

export default Login;
