import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TOKEN_NAME } from '../../lib/constants';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token:
			typeof window !== 'undefined' && localStorage.getItem(TOKEN_NAME) != null
				? JSON.parse(localStorage.getItem(TOKEN_NAME))
				: null,
		loggedIn:
			typeof window !== 'undefined' && localStorage.getItem(TOKEN_NAME) !== null
				? true
				: false,
	},
	reducers: {
		logout: (state, action) => {
			localStorage.setItem(TOKEN_NAME, null);
			state.token = null;
			state.loggedIn = false;
			document.location.href = '/login';
		},
		login: (state, action) => {
			state.token = action.payload;
			state.loggedIn = true;
			//document.location.href = '/';
		},
	},
});

export const loginAction = token => async dispatch => {
	localStorage.setItem(TOKEN_NAME, JSON.stringify(token));
	dispatch({ type: login, payload: token });
	document.location.href = '/';
};

export const logoutAction = async dispatch => {
	localStorage.setItem(TOKEN_NAME, null);
	dispatch({ type: logout });
	document.location.href = '/';
};

// const loginActionn = () => async dispatch => {
// 	dispatch(usersLoading());
// 	const response = await usersAPI.fetchAll();
// 	dispatch(usersReceived(response.data));
// };

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
