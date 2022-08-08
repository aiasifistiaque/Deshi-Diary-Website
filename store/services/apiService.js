import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as lib from '../../lib/constants';

const tagTypes = [
	'Self',
	'Listings',
	'Listing',
	'Ratings',
	'Activities',
	'Search',
	'Categories',
	'Category',
	'Comments',
	'User',
	'UserRatings',
	'Notifications',
	'Badges',
];

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
	tagTypes: tagTypes,
	endpoints: builder => ({
		/**Auth Routes authRoutes
		 *
		 *
		 *
		 */

		getSelf: builder.query({
			query: () => `/auth/self`,
			providesTags: ['Self'],
		}),

		updateUser: builder.mutation({
			query(body) {
				return {
					url: `/auth/update`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Self'],
		}),

		login: builder.mutation({
			query(body) {
				return {
					url: `/auth/login`,
					method: 'POST',
					body,
				};
			},
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
		/**End of Auth Routes
		 *
		 *
		 *
		 */

		/**Listing Routes listingRoutes
		 *
		 *
		 *
		 */
		getCategories: builder.query({
			query: () => `/categories`,
			providesTags: ['Categories'],
		}),
		getCategoryByName: builder.query({
			query: name => `/categories/${name}`,
			providesTags: name => [{ type: 'Cagetory', id: name ? name : '' }],
		}),
		getListings: builder.query({
			query: () => `/listings`,
			providesTags: ['Listings'],
		}),
		getListingsById: builder.query({
			query: id => `/listings/${id}`,
			providesTags: id => [{ type: 'Listing', id: id ? id : '' }],
		}),
		addListing: builder.mutation({
			query(body) {
				return {
					url: `/listings`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Listings', 'Activities'],
		}),
		/**End of Listing Routes
		 *
		 *
		 *
		 */
		/**Search Routes searchRoutes
		 *
		 *
		 *
		 */

		getSearch: builder.query({
			query: ({ str, location }) => `/search/${str}?location=${location}`,
			providesTags: ({ str, location }) => [
				{ type: 'Search', id: str ? str : '' },
			],
		}),

		getTopSearch: builder.query({
			query: location => `/search?location=${location}`,
			providesTags: location => [
				{ type: 'Search', id: location ? location : 'Dhaka' },
			],
		}),

		getFilteredSearch: builder.query({
			query: ({
				search,
				sort = '-createdAt',
				page = 1,
				perpage = 10,
				location = 'All',
				category = 'All',
				rating,
			} = {}) =>
				`/filter?search=${search}&location=${location}&category=${category}&sort=${sort}&page=${page}&rating=${rating}&perpage=${perpage}`,
		}),

		/**End of Listing Routes
		 *
		 *
		 *
		 */
		/**Rating Routes ratingsRoute
		 *
		 *
		 *
		 */
		addRating: builder.mutation({
			query(body) {
				return {
					url: `/ratings`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Ratings', 'Listing', 'Activities'],
		}),
		addPhoto: builder.mutation({
			query(body) {
				return {
					url: `/ratings/photo`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Ratings', 'Listing', 'Activities'],
		}),
		getRatings: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10, id } = {}) =>
				`/ratings/${id}?sort=${sort}&page=${page}`,
			providesTags: id => [{ type: 'Ratings', id: id ? id : '' }],
		}),
		getPhotos: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10, id } = {}) =>
				`/ratings/photo/get/${id}?sort=${sort}&page=${page}`,
			providesTags: id => [{ type: 'Ratings', id: id ? id : '' }],
		}),
		getRatingById: builder.query({
			query: id => `/ratings/review/${id}`,
		}),
		getUserRatings: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10, id } = {}) =>
				`/ratings/user/${id}?sort=${sort}&page=${page}`,
			providesTags: id => [{ type: 'UserRatings', id: id ? id : '' }],
		}),

		getComments: builder.query({
			query: id => `/comments/${id}`,
			providesTags: id => [{ type: 'Comments', id: id ? id : '' }],
		}),
		addComment: builder.mutation({
			query(body) {
				return {
					url: `/comments`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Comments'],
		}),
		/**End of Rating Routes
		 *
		 *
		 *
		 */
		/**User Notifications notificationsRoute
		 *
		 *
		 *
		 */
		getActivities: builder.query({
			query: (page = 1) => `/activities?page=${page}&perpage=12`,
			providesTags: ['Activities'],
		}),
		getNotifications: builder.query({
			query: () => `/notifications`,
			providesTags: ['Notificatins'],
		}),
		/**End of Notifications Routes
		 *
		 *
		 *
		 */
		/**User Routes userRoute
		 *
		 *
		 *
		 */
		getUserData: builder.query({
			query: id => `/users/${id}`,
			providesTags: id => [{ type: 'User', id: id ? id : '' }],
		}),
		getUserBadges: builder.query({
			query: id => `/badges/${id}`,
			providesTags: id => [{ type: 'Badge', id: id ? id : '' }],
		}),
		getAdminComments: builder.query({
			query: ({ sort = '-createdAt', page = 1, perpage = 10, id } = {}) =>
				`/comments/${id}?sort=${sort}&page=${page}`,
		}),
	}),
});

export const {
	useUpdateUserMutation,
	useGetPhotosQuery,
	useAddPhotoMutation,
	useLoginMutation,
	useRegisterMutation,
	useGetSelfQuery,
	useGetCategoriesQuery,
	useGetCategoryByNameQuery,
	useAddListingMutation,
	useGetListingsQuery,
	useGetListingsByIdQuery,
	useAddRatingMutation,
	useGetRatingsQuery,
	useGetActivitiesQuery,
	useGetSearchQuery,
	useGetTopSearchQuery,
	useGetFilteredSearchQuery,
	useLazyGetFilteredSearchQuery,
	useGetCommentsQuery,
	useAddCommentMutation,
	useGetUserDataQuery,
	useGetUserRatingsQuery,
	useGetNotificationsQuery,
	useGetRatingByIdQuery,
	useGetAdminCommentsQuery,
	useGetUserBadgesQuery,
} = userApi;
