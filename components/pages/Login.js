import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../store/services/apiService';
import { loginAction } from '../../store/slices/authSlice';
import AuthContainer from '../auth/auth/AuthContainer';
import LoginContainer from '../auth/login/LoginContainer';
import Page from '../nav/page/Page';
import Button from '../util/button/Button';
import Error from '../util/error/Error';
import Input from '../util/input/Input';
import { Mt } from '../util/margins/Margins';

const Login = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const [login, result] = useLoginMutation();

	const onSubmit = e => {
		e.preventDefault();
		login({ email, password });
	};

	useEffect(() => {
		if (!result.isUninitialized && result.isSuccess) {
			result?.data?.token && dispatch(loginAction(result.data.token));
		}
	}, [result.isSuccess]);

	return (
		<Page auth>
			<AuthContainer>
				<LoginContainer
					onSubmit={onSubmit}
					title='login'
					subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet.'>
					<Error isError={result.isError}>{result.error && result.error}</Error>

					<Input
						placeholder='E-mail'
						value={email}
						onChange={e => setEmail(e)}
						required
					/>
					<Input
						placeholder='Password'
						value={password}
						onChange={e => setPassword(e)}
						password
						required
					/>
					<Mt size={24} />

					<Button fill submit loading={result.isLoading}>
						Login
					</Button>
				</LoginContainer>
			</AuthContainer>
		</Page>
	);
};

export default Login;
