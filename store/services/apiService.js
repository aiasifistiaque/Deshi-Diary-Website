import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as lib from '../../lib/constants';

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${lib.api.backend}/api`,
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.token;
			if (token) {
				headers.set('authorization', token);
			}
			return headers;
		},
	}),
	tagTypes: [],
	endpoints: builder => ({
		getSelf: builder.query({
			query: () => `/auth/self`,
			providesTags: ['Self'],
		}),

		login: builder.mutation({
			query(body) {
				return {
					url: `/auth/login`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: [],
		}),
		register: builder.mutation({
			query(body) {
				return {
					url: `/auth/register`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: [],
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation, useGetSelfQuery } =
	userApi;
