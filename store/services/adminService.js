import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as lib from '../../lib/constants';

export const adminApi = createApi({
	reducerPath: 'adminApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${lib.api.backend}/admin`,
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.token;
			if (token) {
				headers.set('authorization', token);
			}
			return headers;
		},
	}),
	tagTypes: ['Categories'],
	endpoints: builder => ({
		// register: builder.mutation({
		// 	query(body) {
		// 		return {
		// 			url: `/auth/register`,
		// 			method: 'POST',
		// 			body,
		// 		};
		// 	},
		// 	invalidatesTags: [],
		// }),

		getUsersAsAdmin: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10 } = {}) =>
				`/users?sort=${sort}&page=${page}`,
		}),
		getListingsAsAdmin: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10 } = {}) =>
				`/listings?sort=${sort}&page=${page}`,
		}),
		getAllRatingsAsAdmin: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10 } = {}) =>
				`/ratings?sort=${sort}&page=${page}`,
		}),
		getAllCategoriesAsAdmin: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10 } = {}) =>
				`/categories?sort=${sort}&page=${page}`,
			providesTags: ['Categories'],
		}),
		addCategoryAsAdmin: builder.mutation({
			query(body) {
				return {
					url: `/categories`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Categories'],
		}),
	}),
});

export const {
	useGetUsersAsAdminQuery,
	useGetListingsAsAdminQuery,
	useGetAllRatingsAsAdminQuery,
	useGetAllCategoriesAsAdminQuery,
	useAddCategoryAsAdminMutation,
} = adminApi;