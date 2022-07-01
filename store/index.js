import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { adminApi } from './services/adminService';
import { userApi } from './services/apiService';
import authSlice from './slices/authSlice';
import toggleSlice from './slices/toggledSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		toggle: toggleSlice,
		[userApi.reducerPath]: userApi.reducer,
		[adminApi.reducerPath]: adminApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(userApi.middleware)
			.concat(adminApi.middleware),
	devTools: true,
});

setupListeners(store.dispatch);
