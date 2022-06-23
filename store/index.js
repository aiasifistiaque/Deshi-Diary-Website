import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from './services/apiService';
import authSlice from './slices/authSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(userApi.middleware),
	devTools: true,
});

setupListeners(store.dispatch);
