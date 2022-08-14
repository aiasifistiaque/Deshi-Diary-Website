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
	tagTypes: ['Categories', 'Badges', 'Assign', 'Kpi', 'Listing'],
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
		getUserSearch: builder.query({
			query: id => `/users/search/${id}`,
			providesTags: id => [{ type: 'User', id: id ? id : '' }],
		}),
		getUserByIdAsAdmin: builder.query({
			query: id => `/users/${id}`,
		}),
		getListingsAsAdmin: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10 } = {}) =>
				`/listings?sort=${sort}&page=${page}`,
		}),
		editListing: builder.mutation({
			query(body) {
				return {
					url: `/listings`,
					method: 'PUT',
					body,
				};
			},
			invalidatesTags: ['Listing'],
		}),
		getListingsByIdAsAdmin: builder.query({
			query: id => `/listings/${id}`,
			providesTags: id => [{ type: 'Listing', id: id ? id : '' }],
		}),
		searchListing: builder.query({
			query: id => `/listings/search/${id}`,
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
			invalidatesTags: ['Categories', 'Kpi'],
		}),
		editCategoryAsAdmin: builder.mutation({
			query(body) {
				return {
					url: `/categories`,
					method: 'PUT',
					body,
				};
			},
			invalidatesTags: ['Categories', 'Kpi'],
		}),
		getAllBadgesAsAdmin: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10 } = {}) =>
				`/badges?sort=${sort}&page=${page}&perpage=${perpage}`,
			providesTags: ['Badges'],
		}),
		getCommentsAsAdmin: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10, id } = {}) =>
				`/comments/${id}?sort=${sort}&page=${page}`,
		}),

		addBadgesAsAdmin: builder.mutation({
			query(body) {
				return {
					url: `/badges`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Badges'],
		}),
		getAssignedBadgesAsAdmin: builder.query({
			query: id => `/assign/${id}`,
			providesTags: id => [{ type: 'Assign', id: id ? id : '' }],
		}),
		getKpi: builder.query({
			query: () => `/kpi`,
			providesTags: () => ['Kpi'],
		}),
		assignBadgeAsAdmin: builder.mutation({
			query(body) {
				return {
					url: `/assign`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Assign'],
		}),
	}),
});

export const {
	useGetListingsByIdAsAdminQuery,
	useEditListingMutation,
	useSearchListingQuery,
	useGetUserSearchQuery,
	useEditCategoryAsAdminMutation,
	useGetKpiQuery,
	useGetUsersAsAdminQuery,
	useGetListingsAsAdminQuery,
	useGetAllRatingsAsAdminQuery,
	useGetAllCategoriesAsAdminQuery,
	useAddCategoryAsAdminMutation,
	useGetAllBadgesAsAdminQuery,
	useAddBadgesAsAdminMutation,
	useGetUserByIdAsAdminQuery,
	useGetCommentsAsAdminQuery,
	useGetAssignedBadgesAsAdminQuery,
	useAssignBadgeAsAdminMutation,
} = adminApi;
