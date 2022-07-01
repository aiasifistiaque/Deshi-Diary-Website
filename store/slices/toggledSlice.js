import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
	name: 'toggle',
	initialState: {
		toggled: false,
	},
	reducers: {
		shrink: state => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.toggled = true;
		},
		expand: state => {
			state.toggled = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { shrink, expand } = toggleSlice.actions;

export default toggleSlice.reducer;
