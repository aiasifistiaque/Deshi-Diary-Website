import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRegisterMutation } from '../../store/services/apiService';
import { loginAction } from '../../store/slices/authSlice';
import AuthContainer from '../auth/auth/AuthContainer';
import LoginContainer from '../auth/login/LoginContainer';
import Page from '../nav/page/Page';
import Button from '../util/button/Button';
import Error from '../util/error/Error';
import Input from '../util/input/Input';
import { Mt } from '../util/margins/Margins';

const Signup = () => {
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');

	const [register, result] = useRegisterMutation();

	const onSubmit = e => {
		e.preventDefault();
		const body = { name, email, password, confirm };
		register(body);
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
					type='signup'
					title='Sign Up'
					subtitle='Login to discover nearby places and Rate Businesses'>
					<Error isError={result.isError}>{result.error && result.error}</Error>
					<Input
						placeholder='Name'
						value={name}
						onChange={e => setName(e)}
						required
					/>
					<Input
						placeholder='Email address'
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
					<Input
						placeholder='Confirm Password'
						value={confirm}
						onChange={e => setConfirm(e)}
						password
						required
					/>
					<Mt size={24} />
					<Button fill rouned submit loading={result.isLoading}>
						Sign Up
					</Button>
				</LoginContainer>
			</AuthContainer>
		</Page>
	);
};

export default Signup;
