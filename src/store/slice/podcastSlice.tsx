import { createSlice } from '@reduxjs/toolkit';
import { fetchPodcasts } from '../actions/podcastsActions';

interface PodcastState {
	podcasts: any;
	lastFetchTimestamp: number;
}

const INITIAL_STATE = {
	podcasts: [],
	lastFetchTimestamp: 0,
};

// Retrieves the initial state of the localStorage or uses an empty state if no state is saved
const savedState = localStorage.getItem('reduxState');
const initialState: PodcastState =
	savedState != null ? JSON.parse(savedState) : INITIAL_STATE;

// This slice manages the status of podcasts and updates the podcast list.
const podcastsSlice = createSlice({
	name: 'podcasts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPodcasts.fulfilled, (state, action) => {
			state.podcasts = action.payload;
			state.lastFetchTimestamp = Date.now();
			console.log('lastFetchTimestamp:', state.lastFetchTimestamp);
		});
	},
});

export default podcastsSlice.reducer;
